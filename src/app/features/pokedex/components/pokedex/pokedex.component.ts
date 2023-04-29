import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Species } from "src/app/shared/interfaces/schema";
import { GetPokemonListService } from "src/app/shared/services/get-pokemon-list.service";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent implements OnInit {
  pokemon$!: Observable<Species[]>;

  constructor(private getPokemonList: GetPokemonListService) {}

  ngOnInit(): void {
    this.pokemon$ = this.getPokemonList
      .watch({ limit: 1008, offset: 0 })
      .valueChanges.pipe(map((result) => result.data.species));
  }
}
