"use strict";

var express = require("express");

var IngredientesController = require("../controllers/ingredientes");

var router = express.Router();

router.get("/home", IngredientesController.home);
router.get("/test", IngredientesController.test);
router.get("/save-ingredientes", IngredientesController.saveIngredientes);
router.get("/ingrediente/:id", IngredientesController.getIngrediente);
router.get("/ingredientes", IngredientesController.getIngredientes);
router.put("/ingrediente/:id", IngredientesController.updateIngrediente);
router.delete("/ingrediente/:id", IngredientesController.deleteIngrediente);

module.exports = router;
