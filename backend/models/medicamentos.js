"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MedicamentosSchema = Schema({
  name: String,
  posologia: String,
  ingredientes: String,
  fecha: Date
});

module.exports = mongoose.model("Medicamento", MedicamentosSchema);
