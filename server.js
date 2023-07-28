const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const alertaController = require("./controller/alerta.controller");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/api/alerta", (req, res) => {
  alertaController.obtenerAlertas().then((data) => res.json(data));
});

app.post("/api/alerta", (req, res) => {
  console.log(req.body);
  alertaController.guardarAlerta(req.body).then((data) => res.json(data));
});

app.get("/api", (req, res) => {
  res.send(`<h2>El API esta funcionando correctamente!</h2>`);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
