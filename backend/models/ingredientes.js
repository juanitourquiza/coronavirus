"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IngredientesSchema = Schema({
  name: String
});

module.exports = mongoose.model("Ingrediente", IngredientesSchema);
