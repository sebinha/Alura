const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.listarTodos(req, res));
router.get('/pessoas/todos', (req, res) => pessoaController.listarPessoasEscopo(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.listarUmPorId(req, res));
router.post('/pessoas', (req, res) => pessoaController.criaUm(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizaUm(req, res));
router.put('/pessoas/:estudante_id/cancelado', (req, res) => pessoaController.desativarEstudante(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.deletaUm(req, res));
router.get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.listarMatriculas(req, res));
router.get('/pessoas/:estudante_id/matriculas/todos', (req, res) => pessoaController.listarTodasMatriculas(req, res));
router.get('/pessoas/:estudante_id/matriculas/confirmados', (req, res) => matriculaController.listaMatriculasEConta(req, res));
router.get('/pessoas/cursos/lotados', (req, res) => matriculaController.listaCursosLotados(req, res));
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.listarUm(req, res));
router.post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.criaUm(req, res));
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.atualizaUm(req, res));
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.deletaUm(req, res));



module.exports = router;