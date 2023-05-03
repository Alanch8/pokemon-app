import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404PageComponent } from "./shared/pages/error404-page/error404-page.component";
import { LoginComponent } from "./core/components/login/login.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./features/home/home.module").then((m) => m.HomeModule),   
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "pokedex",
    loadChildren: () =>
      import("./features/pokedex/pokedex.module").then((m) => m.PokedexModule),
  },
  {
    path: "404",
    component: Error404PageComponent
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/404", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
