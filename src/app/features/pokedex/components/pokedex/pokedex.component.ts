import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Species } from "src/app/shared/interfaces/schema";
import { GetPokemonListService } from "src/app/shared/services/get-pokemon-list.service";
import { PokemonDescService } from "src/app/shared/services/pokemon-desc.service";
import { PokemonAZService } from "src/app/shared/services/pokemon-az.service";
import { PokemonZAService } from "src/app/shared/services/pokemon-za.service";

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
  pokemon$!: Observable<Species[]>;
  orderBy!: unknown;

  constructor(
    private getPokemonList: GetPokemonListService,
    private pokemonDescendent: PokemonDescService,
    private pokemonA2Z: PokemonAZService,
    private pokemonZ2A: PokemonZAService
  ) {}

  ngOnInit() {
    // this.select();
    // this.callSelector();
    this.pokedexAsc();
    // this.pokedexDesc();
    // this.pokedexHighest();
    // this.pokedexLowest();
  }

  select(select: string) {
    this.orderBy = this.callSelector(select);
  }

  callSelector(value: string) {
    if (value === "asc") {
      return this.pokedexAsc();
    } else if (value === "desc") {
      return this.pokedexDesc();
    } else if (value === "az") {
      return this.pokedexAZ();
    } else if (value === "za") {
      return this.pokedexZA();
    }
  }

  pokedexAsc() {
    this.pokemon$ = this.getPokemonList
      .watch({ limit: 1008, offset: 0 })
      .valueChanges.pipe(map((result) => result.data.species));
  }

  pokedexDesc() {
    this.pokemon$ = this.pokemonDescendent
      .watch({ limit: 1008, offset: 0 })
      .valueChanges.pipe(map((result) => result.data.species));
  }

  pokedexAZ() {
    this.pokemon$ = this.pokemonA2Z
      .watch({ limit: 1008, offset: 0 })
      .valueChanges.pipe(map((result) => result.data.species));
  }

  pokedexZA() {
    this.pokemon$ = this.pokemonZ2A
      .watch({ limit: 1008, offset: 0 })
      .valueChanges.pipe(map((result) => result.data.species));
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.pokemon$.filter = filterValue.trim().toLowerCase();
  //   if (this.pokemon$.paginator) {
  //     this.pokemon$.paginator.firstPage();
  //   }
  // }
}
