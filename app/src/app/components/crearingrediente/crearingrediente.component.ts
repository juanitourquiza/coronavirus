import { Component, OnInit } from "@angular/core";
import { Ingrediente } from "../../models/ingrediente";
import { ReqresService } from "../../services/reqres.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-crearingrediente",
  templateUrl: "./crearingrediente.component.html",
  styleUrls: ["./crearingrediente.component.css"]
})
export class CrearingredienteComponent implements OnInit {
  public ingrediente: Ingrediente;
  public status: string;

  constructor(private _ReqresService: ReqresService, private router: Router) {
    let start = new Date(Date.now());
    this.ingrediente = new Ingrediente("", "");
  }

  ngOnInit() {}

  onSubmit(form) {
    //console.log(this.ingrediente);
    this._ReqresService.saveIngredientes(this.ingrediente).subscribe(
      response => {
        //console.log(response);
        this.router.navigate(["home"]);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
