const express = require('express');
const router = express.Router();
const SolicitudController = require('../controllers/SolicitudController'); // Importa el controlador de solicitud

// Ruta para obtener todas las solicitudes
router.get('/', SolicitudController.getAllSolicitudes);

// Ruta para obtener una solicitud por su ID
router.get('/:id', SolicitudController.getSolicitudById);

// Ruta para crear una nueva solicitud
router.post('/', SolicitudController.createSolicitud);

// Ruta para actualizar una solicitud existente por su ID
router.put('/:id', SolicitudController.updateSolicitud);

// Ruta para eliminar una solicitud por su ID
router.delete('/:id', SolicitudController.deleteSolicitud);

module.exports = router;
