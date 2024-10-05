const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController'); // Importa el controlador de usuario

// Ruta para obtener todos los usuarios
router.get('/', UsuarioController.getAllUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/:id', UsuarioController.getUsuarioById);

// Ruta para crear un nuevo usuario
router.post('/', UsuarioController.createUsuario);

// Ruta para actualizar un usuario existente por su ID
router.put('/:id', UsuarioController.updateUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/:id', UsuarioController.deleteUsuario);

module.exports = router;
