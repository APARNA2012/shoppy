import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BadgeModule } from "./badge.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BadgeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
