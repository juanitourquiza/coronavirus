import { Component, OnInit } from "@angular/core";
import { ReqresService } from "../../services/reqres.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-editarmedicamento",
  templateUrl: "./editarmedicamento.component.html",
  styleUrls: ["./editarmedicamento.component.css"]
})
export class EditarmedicamentoComponent implements OnInit {
  medicamento: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private reqresService: ReqresService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.medicamento = reqresService
        .getMedicamento(params["id"])
        .subscribe((res: any) => (this.medicamento = res.medicamento));
    });
  }

  onSubmit(form) {
    //console.log(this.medicamento);
    this.reqresService.updateMedicamentos(this.medicamento).subscribe(
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
