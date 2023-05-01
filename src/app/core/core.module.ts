import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [CommonModule, CoreRoutingModule],
  exports: [FooterComponent, HeaderComponent]
})
export class CoreModule {}
