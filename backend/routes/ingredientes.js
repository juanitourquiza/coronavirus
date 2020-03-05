"use strict";

var express = require("express");

var IngredientesController = require("../controllers/ingredientes");

var router = express.Router();

router.get("/home", IngredientesController.home);
router.get("/test", IngredientesController.test);
router.get("/save-ingredientes", IngredientesController.saveIngredientes);

module.exports = router;
