import { Component, OnInit } from "@angular/core";
import { ReqresService } from "../../services/reqres.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detalleingrediente",
  templateUrl: "./detalleingrediente.component.html",
  styleUrls: ["./detalleingrediente.component.css"]
})
export class DetalleingredienteComponent implements OnInit {
  ingrediente: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private reqresService: ReqresService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.ingrediente = reqresService
        .getIngrediente(params["id"])
        .subscribe((res: any) => (this.ingrediente = res.ingrediente));
    });
  }

  ngOnInit() {}
}
