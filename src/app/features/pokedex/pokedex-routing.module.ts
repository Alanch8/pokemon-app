import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { PokedexComponent } from "./pokedex/pokedex.component";

const routes: Routes = [
  {
    path: "",
    component: PokedexComponent,
    children: [
      { path: ":name", component: PokemonComponent }, //name: pokemon name
      { path: "**", redirectTo: "", pathMatch: "full" },
    ], 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexRoutingModule {}
