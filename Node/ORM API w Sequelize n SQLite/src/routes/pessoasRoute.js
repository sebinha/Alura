const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.listarTodos(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.listarUmPorId(req, res));
router.post('/pessoas', (req, res) => pessoaController.criaUm(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizaUm(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.deletaUm(req, res));
router.get('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.listarMatriculas(req, res));
router.post('/pessoas/:estudanteId/matriculas', (req, res) => matriculaController.criaUm(req, res));


module.exports = router;