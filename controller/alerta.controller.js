const alertaService = require("../service/alerta.service");
const logger = require("../logger/api.logger");

class AlertaController {
  async obtenerAlertas() {
    logger.info("Controlador: obtener alertas");
    return await alertaService.obtenerAlertas();
  }

  async guardarAlerta(alerta) {
    logger.info("Controlador: guardar alerta", alerta);
    return await alertaService.guardarAlerta(alerta);
  }
}
module.exports = new AlertaController();
