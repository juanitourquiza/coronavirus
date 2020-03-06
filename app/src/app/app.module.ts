import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app.routes";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { IngredientesComponent } from "./components/ingredientes/ingredientes.component";
import { MedicamentosComponent } from "./components/medicamentos/medicamentos.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientesComponent,
    MedicamentosComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
