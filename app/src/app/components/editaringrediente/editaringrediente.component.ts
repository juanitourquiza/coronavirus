import { Component, OnInit } from "@angular/core";
import { ReqresService } from "../../services/reqres.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-editaringrediente",
  templateUrl: "./editaringrediente.component.html",
  styleUrls: ["./editaringrediente.component.css"]
})
export class EditaringredienteComponent implements OnInit {
  ingrediente: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private reqresService: ReqresService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.ingrediente = reqresService
        .getIngrediente(params["id"])
        .subscribe((res: any) => (this.ingrediente = res.ingrediente));
    });
  }

  onSubmit(form) {
    //console.log(this.ingrediente);
    this.reqresService.updateIngredientes(this.ingrediente).subscribe(
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
