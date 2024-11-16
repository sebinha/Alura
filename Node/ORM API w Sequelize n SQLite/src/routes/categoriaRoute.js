const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();

router.get('/categorias', (req, res) => categoriaController.listarTodos(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.listarUmPorId(req, res));
router.post('/categorias', (req, res) => categoriaController.criaUm(req, res));
router.put('/categorias/:id', (req, res) => categoriaController.atualizaUm(req, res));
router.delete('/categorias/:id', (req, res) => categoriaController.deletaUm(req, res));


module.exports = router;