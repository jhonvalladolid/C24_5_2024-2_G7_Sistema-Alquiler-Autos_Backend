const express = require('express');
const router = express.Router();
const RolController = require('../controllers/RolController'); // Importa el controlador de rol

// Ruta para obtener todos los roles
router.get('/', RolController.getAllRoles);

// Ruta para obtener un rol por su ID
router.get('/:id', RolController.getRolById);

// Ruta para crear un nuevo rol
router.post('/', RolController.createRol);

// Ruta para actualizar un rol existente por su ID
router.put('/:id', RolController.updateRol);

// Ruta para eliminar un rol por su ID
router.delete('/:id', RolController.deleteRol);

module.exports = router;
