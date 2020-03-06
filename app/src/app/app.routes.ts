import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { IngredientesComponent } from "./components/ingredientes/ingredientes.component";
import { MedicamentosComponent } from "./components/medicamentos/medicamentos.component";
import { DetallemedicamentoComponent } from "./components/detallemedicamento/detallemedicamento.component";
import { DetalleingredienteComponent } from "./components/detalleingrediente/detalleingrediente.component";
import { CrearmedicamentoComponent } from "./components/crearmedicamento/crearmedicamento.component";
import { EditarmedicamentoComponent } from "./components/editarmedicamento/editarmedicamento.component";

const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "ingredientes", component: IngredientesComponent },
  { path: "medicamentos", component: MedicamentosComponent },
  { path: "detalle-medicamento/:id", component: DetallemedicamentoComponent },
  { path: "detalle-ingrediente/:id", component: DetallemedicamentoComponent },
  { path: "crear-medicamento", component: CrearmedicamentoComponent },
  { path: "actualizar-medicamento/:id", component: EditarmedicamentoComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
