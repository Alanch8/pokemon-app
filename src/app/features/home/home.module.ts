import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CoreModule } from "src/app/core/core.module";

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent
  ],
  imports: [CommonModule, HomeRoutingModule, CoreModule],
})
export class HomeModule {}
