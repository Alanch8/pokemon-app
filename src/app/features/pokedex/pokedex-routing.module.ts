import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";

const routes: Routes = [
  {
    path: "",
    component: PokedexComponent, 
  },
  { path: ":id",
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexRoutingModule {}
