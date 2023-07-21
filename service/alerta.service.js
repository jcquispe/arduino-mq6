const alertaRepository = require("../repository/alerta.repository");

class AlertaService {
  constructor() {}

  async obtenerAlertas() {
    return await alertaRepository.obtenerAlertas();
  }

  async guardarAlerta(alerta) {
    return await alertaRepository.guardarAlerta(alerta);
  }
}

module.exports = new AlertaService();
