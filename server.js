const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const alertaController = require("./controller/alerta.controller");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/api/alerta", (req, res) => {
  alertaController.obtenerAlertas().then((data) => res.json(data));
});

app.post("/api/alerta", (req, res) => {
  console.log(req.body);
  alertaController.guardarAlerta(req.body).then((data) => res.json(data));
});

app.get("/", (req, res) => {
  res.send(`<h1>El API funciona correctamente!</h1>`);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
