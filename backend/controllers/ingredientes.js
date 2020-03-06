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
  },

  getIngrediente: function(req, res) {
    var ingredientesId = req.params.id;
    Ingrediente.findById(ingredientesId, (err, ingrediente) => {
      if (err) return res.status(500).send({ message: "Error al devolver" });
      if (!ingrediente)
        return res.status(404).send({ message: "Ingrediente no existe" });
      return res.status(200).send({ ingrediente });
    });
  },

  getIngredientes: function(req, res) {
    Ingrediente.find({}).exec((err, ingrediente) => {
      if (err) return res.status(500).send({ message: "Error al devolver" });
      if (!ingrediente)
        return res.status(404).send({ message: "Ingredientes no existen" });
      return res.status(200).send({ ingrediente });
    });
  },

  updateIngrediente: function(req, res) {
    var ingredientesId = req.params.id;
    var update = req.body;
    Ingrediente.findByIdAndUpdate(
      ingredientesId,
      update,
      { new: true },
      (err, ingrediente) => {
        if (err)
          return res.status(500).send({ message: "Error al actualizar" });
        if (!ingrediente)
          return res.status(404).send({ message: "Ingrediente no existe" });
        return res.status(200).send({ ingrediente: ingrediente });
      }
    );
  },

  deleteIngrediente: function(req, res) {
    var ingredientesId = req.params.id;

    Ingrediente.findByIdAndDelete(ingredientesId, (err, ingrediente) => {
      if (err) return res.status(500).send({ message: "Error al borrar" });
      if (!ingrediente)
        return res.status(404).send({ message: "Ingrediente no existe" });
      return res.status(200).send({ ingrediente: ingrediente });
    });
  }
};

module.exports = controller;
