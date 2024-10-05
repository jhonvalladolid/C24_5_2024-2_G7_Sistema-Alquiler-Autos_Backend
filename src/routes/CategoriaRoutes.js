const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaController'); // Importa el controlador

// Ruta para obtener todas las categorías
router.get('/', CategoriaController.getAllCategorias);

// Ruta para obtener una categoría por su ID
router.get('/:id', CategoriaController.getCategoriaById);

// Ruta para crear una nueva categoría
router.post('/', CategoriaController.createCategoria);

// Ruta para actualizar una categoría existente por su ID
router.put('/:id', CategoriaController.updateCategoria);

// Ruta para eliminar una categoría por su ID
router.delete('/:id', CategoriaController.deleteCategoria);

module.exports = router;
