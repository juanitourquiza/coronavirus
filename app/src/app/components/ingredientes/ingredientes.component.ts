import { Component, OnInit } from "@angular/core";
import { ReqresService } from "../../services/reqres.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
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

  //userDetails(id: number) {
  //this.router.navigate(["user", id]);
  //}

  ngOnInit() {}
}
