"use strict";

var express = require("express");

var MedicamentosController = require("../controllers/medicamentos");

var router = express.Router();

router.get("/home", MedicamentosController.home);
router.get("/test", MedicamentosController.test);
router.get("/save-medicamentos", MedicamentosController.saveMedicamentos);
router.get("/medicamento/:id", MedicamentosController.getMedicamento);
router.get("/medicamentos", MedicamentosController.getMedicamentos);
router.put("/medicamento/:id", MedicamentosController.updateMedicamento);
router.delete("/medicamento/:id", MedicamentosController.deleteMedicamento);

module.exports = router;
