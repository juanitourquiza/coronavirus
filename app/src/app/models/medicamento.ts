export class Medicamento {
  constructor(
    public _id: string,
    public name: string,
    public posologia: string,
    public ingredientes: string,
    public fecha: Date
  ) {}
}
