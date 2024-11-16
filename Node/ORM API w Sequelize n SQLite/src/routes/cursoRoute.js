const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();

const router = Router();

router.get('/cursos', (req, res) => cursoController.listarTodos(req, res));
router.get('/cursos/:id', (req, res) => cursoController.listarUmPorId(req, res));
router.post('/cursos', (req, res) => cursoController.criaUm(req, res));
router.put('/cursos/:id', (req, res) => cursoController.atualizaUm(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.deletaUm(req, res));


module.exports = router;