import { Component, OnInit } from "@angular/core";
import { ReqresService } from "../../services/reqres.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-ingredientes",
  templateUrl: "./ingredientes.component.html",
  styleUrls: ["./ingredientes.component.css"]
})
export class IngredientesComponent implements OnInit {
  constructor(private reqresService: ReqresService, private router: Router) {
    this.getMedicamentos();
  }

  ingredientes: any[] = [];
  getMedicamentos() {
    this.reqresService.getIngredientes().subscribe(
      (res: any) => {
        this.ingredientes = res.ingrediente;
        //console.log(this.medicamentos);
      },
      err => {
        console.log(err);
      }
    );
  }

  ingredienteDetails(id: number) {
    //console.log("User id: ", id);
    this.router.navigate(["detalle-ingrediente", id]);
  }

  ingredienteDelete(id: number) {
    this.reqresService.deleteIngredientes(id).subscribe(
      response => {
        //console.log(response);
        this.router.navigate(["home"]);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ingredienteUpdate(id: number) {
    //console.log("User id: ", id);
    this.router.navigate(["actualizar-ingrediente", id]);
  }

  ngOnInit() {}
}
