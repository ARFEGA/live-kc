import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeadComponent } from "./head/head.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { MenuComponent } from "./menu/menu.component";
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeadComponent, FooterComponent, MainComponent, MenuComponent],
  exports: [HeadComponent, FooterComponent, MainComponent, MenuComponent]
})
export class CoreModule {}
