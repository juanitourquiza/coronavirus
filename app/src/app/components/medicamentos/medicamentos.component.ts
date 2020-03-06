import { Component, OnInit } from "@angular/core";
import { ReqresService } from "../../services/reqres.service";
import { Router } from "@angular/router";
import { Medicamento } from "../../models/medicamento";

@Component({
  selector: "app-medicamentos",
  templateUrl: "./medicamentos.component.html",
  styleUrls: ["./medicamentos.component.css"]
})
export class MedicamentosComponent implements OnInit {
  filterMedicamentos = "";
  constructor(private reqresService: ReqresService, private router: Router) {
    this.getMedicamentos();
  }

  medicamentos: any[] = [];
  getMedicamentos() {
    this.reqresService.getMedicamentos().subscribe(
      (res: any) => {
        this.medicamentos = res.medicamento;
        //console.log(this.medicamentos);
      },
      err => {
        console.log(err);
      }
    );
  }

  medicamentoDetails(id: number) {
    //console.log("User id: ", id);
    this.router.navigate(["detalle-medicamento", id]);
  }

  medicamentoUpdate(id: number) {
    //console.log("User id: ", id);
    this.router.navigate(["actualizar-medicamento", id]);
  }

  medicamentoDelete(id: number) {
    this.reqresService.deleteMedicamentos(id).subscribe(
      response => {
        //console.log(response);
        this.router.navigate(["home"]);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {}
}
