import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Medicamento } from "../models/medicamento";

@Injectable({
  providedIn: "root"
})
export class ReqresService {
  constructor(private http: HttpClient) {}

  makeGetRequest(request: string) {
    const PATH = "http://localhost:3700/api/";
    return this.http.get(`${PATH}${request}`);
  }

  getMedicamentos() {
    return this.makeGetRequest(`medicamentos`);
  }

  getIngredientes() {
    return this.makeGetRequest(`ingredientes`);
  }

  getMedicamento(id: number) {
    return this.makeGetRequest(`medicamento/${id}`);
  }

  getIngrediente(id: number) {
    return this.makeGetRequest(`ingrediente/${id}`);
  }

  saveMedicamentos(medicamento: Medicamento) {
    let params = JSON.stringify(medicamento);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(
      "http://localhost:3700/api/save-medicamentos",
      params,
      { headers: headers }
    );
  }

  updateMedicamentos(medicamento: Medicamento) {
    let params = JSON.stringify(medicamento);
    //console.log(medicamento._id);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(
      `http://localhost:3700/api/medicamento/${medicamento._id}`,
      params,
      {
        headers: headers
      }
    );
  }

  deleteMedicamentos(id: number) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.delete(`http://localhost:3700/api/medicamento/${id}`, {
      headers: headers
    });
  }
}
