import { Component, OnInit } from "@angular/core";
import { Medicamento } from "../../models/medicamento";
import { ReqresService } from "../../services/reqres.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-crearmedicamento",
  templateUrl: "./crearmedicamento.component.html",
  styleUrls: ["./crearmedicamento.component.css"],
  providers: [ReqresService]
})
export class CrearmedicamentoComponent implements OnInit {
  public medicamento: Medicamento;
  public status: string;

  constructor(private _ReqresService: ReqresService, private router: Router) {
    let start = new Date(Date.now());
    this.medicamento = new Medicamento("", "", "", "", start);
  }

  ngOnInit() {}

  onSubmit(form) {
    //console.log(this.medicamento);
    this._ReqresService.saveMedicamentos(this.medicamento).subscribe(
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
