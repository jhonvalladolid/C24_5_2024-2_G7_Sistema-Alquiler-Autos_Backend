const express = require('express');
const router = express.Router();
const EstadoController = require('../controllers/EstadoController'); // Importa el controlador de estado

// Ruta para obtener todos los estados
router.get('/', EstadoController.getAllEstados);

// Ruta para obtener un estado por su ID
router.get('/:id', EstadoController.getEstadoById);

// Ruta para crear un nuevo estado
router.post('/', EstadoController.createEstado);

// Ruta para actualizar un estado existente por su ID
router.put('/:id', EstadoController.updateEstado);

// Ruta para eliminar un estado por su ID
router.delete('/:id', EstadoController.deleteEstado);

module.exports = router;
