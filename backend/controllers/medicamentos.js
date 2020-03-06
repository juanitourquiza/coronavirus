"use strict";

var Medicamento = require("../models/medicamentos");

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
  saveMedicamentos: function(req, res) {
    var medicamentos = new Medicamento();
    var params = req.body;
    medicamentos.name = params.name;
    medicamentos.posologia = params.posologia;
    medicamentos.ingredientes = params.ingredientes;
    medicamentos.fecha = params.fecha;

    medicamentos.save((err, medicamentosStored) => {
      if (err) return res.status(500).send({ message: "Error al guardar" });
      if (!medicamentosStored)
        return res.status(404).send({ message: "No se pudo guardar" });
      return res.status(200).send({ medicamentos: medicamentosStored });
    });
  },

  getMedicamento: function(req, res) {
    var medicamentosId = req.params.id;
    Medicamento.findById(medicamentosId, (err, medicamento) => {
      if (err) return res.status(500).send({ message: "Error al devolver" });
      if (!medicamento)
        return res.status(404).send({ message: "Medicamento no existe" });
      return res.status(200).send({ medicamento });
    });
  },

  getMedicamentos: function(req, res) {
    Medicamento.find({}).exec((err, medicamento) => {
      if (err) return res.status(500).send({ message: "Error al devolver" });
      if (!medicamento)
        return res.status(404).send({ message: "Medicamentos no existen" });
      return res.status(200).send({ medicamento });
    });
  },

  updateMedicamento: function(req, res) {
    var medicamentosId = req.params.id;
    var update = req.body;
    Medicamento.findByIdAndUpdate(
      medicamentosId,
      update,
      { new: true },
      (err, medicamento) => {
        if (err)
          return res.status(500).send({ message: "Error al actualizar" });
        if (!medicamento)
          return res.status(404).send({ message: "Medicamento no existe" });
        return res.status(200).send({ medicamento: medicamento });
      }
    );
  },

  deleteMedicamento: function(req, res) {
    var medicamentosId = req.params.id;

    Medicamento.findByIdAndDelete(medicamentosId, (err, medicamento) => {
      if (err) return res.status(500).send({ message: "Error al borrar" });
      if (!medicamento)
        return res.status(404).send({ message: "Medicamento no existe" });
      return res.status(200).send({ medicamento: medicamento });
    });
  }
};

module.exports = controller;
