import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokedexRoutingModule } from "./pokedex-routing.module";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [PokemonComponent, PokedexComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    InfiniteScrollModule,
  ],
})
export class PokedexModule {}
