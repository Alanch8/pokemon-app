import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { SpinnerComponent } from "./components/spinner/spinner/spinner.component";

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SpinnerComponent],
  imports: [CommonModule, CoreRoutingModule],
  exports: [FooterComponent, HeaderComponent, SpinnerComponent],
})
export class CoreModule {}
