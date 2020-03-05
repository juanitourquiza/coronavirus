"use strict";

var Ingrediente = require("../models/ingredientes");

var controller = {
  home: function(req, res) {
    return res.status(200).send({
      message: "Soy el home"
    });
  },

  test: function(req, res) {
    return res.status(200).send({
      message: "test"
    });
  },
  saveIngredientes: function(req, res) {
    var ingredientes = new Ingrediente();
    var params = req.body;
    ingredientes.name = params.name;

    ingredientes.save((err, ingredientesStored) => {
      if (err) return res.status(500).send({ message: "Error al guardar" });
      if (!ingredientesStored)
        return res.status(404).send({ message: "No se pudo guardar" });
      return res.status(200).send({ ingredientes: ingredientesStored });
    });
  }
};

module.exports = controller;
