import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokedexRoutingModule } from "./pokedex-routing.module";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";

@NgModule({
  declarations: [PokemonComponent, PokedexComponent],
  imports: [CommonModule, PokedexRoutingModule],
})
export class PokedexModule {}
