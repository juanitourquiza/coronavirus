"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//cargar archivos rutas
var ingredientesRoutes = require("./routes/ingredientes");
var medicamentosRoutes = require("./routes/medicamentos");

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS

//rutas
app.use("/api", ingredientesRoutes);
app.use("/api", medicamentosRoutes);

// app.get("/test", (req, res) => {
//   res.status(200).send({
//     message: "Llega ruta NodeJS"
//   });
// });

//exportar
module.exports = app;
