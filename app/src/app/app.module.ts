import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app.routes";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { IngredientesComponent } from "./components/ingredientes/ingredientes.component";
import { MedicamentosComponent } from "./components/medicamentos/medicamentos.component";
import { DetallemedicamentoComponent } from "./components/detallemedicamento/detallemedicamento.component";
import { DetalleingredienteComponent } from "./components/detalleingrediente/detalleingrediente.component";
import { CrearmedicamentoComponent } from './components/crearmedicamento/crearmedicamento.component';
import { EditarmedicamentoComponent } from './components/editarmedicamento/editarmedicamento.component';
import { CrearingredienteComponent } from './components/crearingrediente/crearingrediente.component';
import { EditaringredienteComponent } from './components/editaringrediente/editaringrediente.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientesComponent,
    MedicamentosComponent,
    DetallemedicamentoComponent,
    DetalleingredienteComponent,
    CrearmedicamentoComponent,
    EditarmedicamentoComponent,
    CrearingredienteComponent,
    EditaringredienteComponent,
    FilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
