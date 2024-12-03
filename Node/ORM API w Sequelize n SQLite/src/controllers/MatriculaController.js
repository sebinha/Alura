const Sequelize = require('sequelize');
const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }

  async listaMatriculasEConta(req, res) {
    const { estudante_id } = req.params;
    try {
      const matriculas = await matriculaServices.listaEContaRegistros({
        where: { estudante_id: Number(estudante_id), status: 'matriculado' },
        limit: 2,
        order: [['id', 'DESC']],
      });
      return res.status(200).json(matriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async listaCursosLotados(req, res) {
    const lotacaoAlunos = 2;
    try {
      const matriculas = await matriculaServices.listaEContaRegistros({
        where: { status: 'matriculado' },
        attibutes: ['curso_id'],
        group: ['curso_id'],
        having: Sequelize.literal(`count(curso_id) >= ${lotacaoAlunos}`),
      });
      return res.status(200).json(matriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = MatriculaController;
