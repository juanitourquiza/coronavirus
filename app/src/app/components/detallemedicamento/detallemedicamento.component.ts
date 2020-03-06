import { Component, OnInit } from "@angular/core";
import { ReqresService } from "../../services/reqres.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detallemedicamento",
  templateUrl: "./detallemedicamento.component.html",
  styleUrls: ["./detallemedicamento.component.css"]
})
export class DetallemedicamentoComponent implements OnInit {
  medicamento: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private reqresService: ReqresService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.medicamento = reqresService
        .getMedicamento(params["id"])
        .subscribe((res: any) => (this.medicamento = res.medicamento));
    });
  }

  ngOnInit() {}
}
