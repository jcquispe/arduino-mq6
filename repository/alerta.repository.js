const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class AlertaRepository {
  db = {};

  constructor() {
    this.db = connect();
    // Para pruebas
    this.db.sequelize.sync({ force: true }).then(() => {
      console.log("Sincronizando con la base de datos.");
    });
  }

  async obtenerAlertas() {
    try {
      const alertas = await this.db.alertas.findAll();
      console.log("alertas:::", alertas);
      return alertas;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async guardarAlerta(alerta) {
    let data = {};
    try {
      alerta.fecha = new Date().toLocaleDateString("es-US");
      alerta.hora = new Date().toLocaleTimeString("es-US", {
        timeZone: "America/La_Paz",
        hour12: false,
      });
      data = await this.db.alertas.create(alerta);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }
}

module.exports = new AlertaRepository();
