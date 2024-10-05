const express = require('express');
const router = express.Router();
const VehiculoController = require('../controllers/VehiculoController'); // Importa el controlador de vehículo

// Ruta para obtener todos los vehículos
router.get('/', VehiculoController.getAllVehiculos);

// Ruta para obtener un vehículo por su ID
router.get('/:id', VehiculoController.getVehiculoById);

// Ruta para crear un nuevo vehículo
router.post('/', VehiculoController.createVehiculo);

// Ruta para actualizar un vehículo existente por su ID
router.put('/:id', VehiculoController.updateVehiculo);

// Ruta para eliminar un vehículo por su ID
router.delete('/:id', VehiculoController.deleteVehiculo);

module.exports = router;
