const express = require('express');
const router = express.Router();
const AlquilerController = require('../controllers/AlquilerController'); // Importa el controlador de alquiler

// Ruta para obtener todos los alquileres
router.get('/', AlquilerController.getAllAlquileres);

// Ruta para obtener un alquiler por su ID
router.get('/:id', AlquilerController.getAlquilerById);

// Ruta para crear un nuevo alquiler
router.post('/', AlquilerController.createAlquiler);

// Ruta para actualizar un alquiler existente por su ID
router.put('/:id', AlquilerController.updateAlquiler);

// Ruta para eliminar un alquiler por su ID
router.delete('/:id', AlquilerController.deleteAlquiler);

module.exports = router;
