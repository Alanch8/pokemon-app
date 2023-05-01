import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Pokedex } from "src/app/shared/interfaces/pokedex/pokedex.interface";
import { PokedexConst } from "src/app/core/constants/pokedexConst";
import { Image } from "src/app/core/constants/images";
import { GetPokedex } from "src/app/shared/services/pokedex.service";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent implements OnInit {
  public myform!: FormGroup;
  pokemon$!: Observable<Pokedex[]>;
  filteredPokemon$!: Observable<Pokedex[]>;
  id = PokedexConst.ID_ORDERBY;
  name = PokedexConst.NAME_ORDERBY;
  api_image = Image.API_IMAGES;
  api_format_image = Image.API_FORMAT_IMAGES;

  constructor(private pokedexList: GetPokedex) {}

  ngOnInit() {
    this.pokedexAsc();
    this.myform = new FormGroup({
      search: new FormControl("", [Validators.required]),
    });
  }

  applyFilter() {
    this.pokemon$
      .pipe(
        map((pokemons) =>
          pokemons.filter((pokemon) => {
            return (
              pokemon.name ===
                this.myform.controls["search"].value
                  ?.trim()
                  .toLocaleLowerCase() ||
              pokemon.id == Number(this.myform.controls["search"].value)
            );
          })
        )
      )
      .subscribe((pokemon$) => (this.filteredPokemon$ = of(pokemon$)));
  }

  pokedexAsc() {
    this.pokemon$ = this.pokedexList
      .watch({ limit: 1008, offset: 0, order_by: { [this.id]: "asc" } })
      .valueChanges.pipe(map((pokemon) => pokemon.data.pokedex));
  }

  pokedexDesc() {
    this.pokemon$ = this.pokedexList
      .watch({ limit: 1008, offset: 0, order_by: { [this.id]: "desc" } })
      .valueChanges.pipe(map((result) => result.data.pokedex));
  }

  pokedexAZ() {
    this.pokemon$ = this.pokedexList
      .watch({ limit: 1008, offset: 0, order_by: { [this.name]: "asc" } })
      .valueChanges.pipe(map((result) => result.data.pokedex));
  }

  pokedexZA() {
    this.pokemon$ = this.pokedexList
      .watch({ limit: 1008, offset: 0, order_by: { [this.name]: "desc" } })
      .valueChanges.pipe(map((result) => result.data.pokedex));
  }
}
