import { Pipe, PipeTransform } from "@angular/core";
import { medicamento } from "../models/medicamento";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg == "" || arg.length < 2) return value;
    const resultMedicamentos = [];
    for (const medicamento of value) {
      if (medicamento.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultMedicamentos.push(medicamento);
      }
    }
    return resultMedicamentos;
  }
}
