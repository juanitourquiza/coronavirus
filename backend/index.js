"use strict";

//Conexion a la base de datos
var mongoose = require("mongoose");
var app = require("./app");
var port = 3700;
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/coronavirus", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conexion a la base de datos");
    //Creacion del servidor
    app.listen(port, () => {
      console.log("servidor levantado correctamente");
    });
  })
  .catch(err => console.log(err));
