import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [CommonModule, CoreRoutingModule],
  exports: [FooterComponent]
})
export class CoreModule {}
