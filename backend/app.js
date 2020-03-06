"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//cargar archivos rutas
var ingredientesRoutes = require("./routes/ingredientes");
var medicamentosRoutes = require("./routes/medicamentos");

//middlewares
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
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
