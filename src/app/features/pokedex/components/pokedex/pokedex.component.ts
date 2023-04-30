import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Species } from "src/app/shared/interfaces/schema";
import { GetPokemonListService } from "src/app/shared/services/get-pokemon-list.service";
import { PokemonDescService } from "src/app/shared/services/pokemon-desc.service";
import { PokemonAZService } from "src/app/shared/services/pokemon-az.service";
import { PokemonZAService } from "src/app/shared/services/pokemon-za.service";
import {
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

export interface SpeciesListResponse {
  species: Species[];
}

@Component({
  selector: "app-pokedex",
  template: `
    <select (change)="select($event.target.value)">
      <option value="asc" selected>Asc</option>
      <option value="desc">Desc</option>
      <option value="az">A-Z</option>
      <option value="za">Z-A</option>
    </select>
  `,
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent implements OnInit {
  public myform!: FormGroup;
  pokemon$!: Observable<Species[]>;
  filteredPokemon$!: Observable<Species[]>;
  id = "id";
  name = "name";
  searchValue!: string;
  // orderBy!: unknown;

  constructor(
    private getPokemonList: GetPokemonListService // private pokemonDescendent: PokemonDescService, // private pokemonA2Z: PokemonAZService, // private pokemonZ2A: PokemonZAService
  ) {}

  ngOnInit() {
    // this.select();
    // this.callSelector();
    this.pokedexAsc();
    this.myform = new FormGroup({
      search: new FormControl("", [Validators.required]),
    });
  }

  // select(select: string) {
  //   this.orderBy = this.callSelector(select);
  // }

  // callSelector(value: string) {
  //   if (value === "asc") {
  //     return this.pokedexAsc();
  //   } else if (value === "desc") {
  //     return this.pokedexDesc();
  //   } else if (value === "az") {
  //     return this.pokedexAZ();
  //   } else if (value === "za") {
  //     return this.pokedexZA();
  //   }
  // }

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
    this.pokemon$ = this.getPokemonList
      .watch({ limit: 1008, offset: 0 })
      .valueChanges
      .pipe(
        map((result) => result.data.species),
        tap((result) => console.log(result))
      );
  }

  // pokedexAsc() {
  //   this.pokemon$ = this.getPokemonList
  //     .watch({ limit: 1008, offset: 0, order_by: { [this.id]: "asc" } })
  //     .valueChanges.pipe(map((result) => result.data.species));
  // }

  pokedexDesc() {
    this.pokemon$ = this.getPokemonList
      .watch({ limit: 1008, offset: 0, order_by: { [this.id]: "desc" } })
      .valueChanges.pipe(map((result) => result.data.species));
  }

  pokedexAZ() {
    this.pokemon$ = this.getPokemonList
      .watch({ limit: 1008, offset: 0, order_by: { [this.name]: "asc" } })
      .valueChanges.pipe(map((result) => result.data.species));
  }

  pokedexZA() {
    this.pokemon$ = this.getPokemonList
      .watch({ limit: 1008, offset: 0, order_by: { [this.name]: "desc" } })
      .valueChanges.pipe(map((result) => result.data.species));
  }
}
