import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { IngredientesComponent } from "./components/ingredientes/ingredientes.component";
import { MedicamentosComponent } from "./components/medicamentos/medicamentos.component";

const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "ingredientes", component: IngredientesComponent },
  { path: "medicamentos", component: MedicamentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
