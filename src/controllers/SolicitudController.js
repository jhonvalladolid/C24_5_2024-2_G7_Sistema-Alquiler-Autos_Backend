const SolicitudModel = require('../models/SolicitudModel');

// Controlador para la tabla Solicitud
const SolicitudController = {
  // Obtener todas las solicitudes
  getAllSolicitudes: async (req, res) => {
    try {
      const solicitudes = await SolicitudModel.findAll();
      res.status(200).json(solicitudes);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las solicitudes', error });
    }
  },

  // Obtener una solicitud por ID
  getSolicitudById: async (req, res) => {
    try {
      const { id } = req.params;
      const solicitud = await SolicitudModel.findByPk(id);

      if (!solicitud) {
        return res.status(404).json({ message: 'Solicitud no encontrada' });
      }

      res.status(200).json(solicitud);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la solicitud', error });
    }
  },

  // Crear una nueva solicitud
  createSolicitud: async (req, res) => {
    try {
      const { licencia_pdf, dias_alquiler, pasajeros, comentario, vehiculo_id, estado_id, usuario_id } = req.body;
      const nuevaSolicitud = await SolicitudModel.create({
        licencia_pdf,
        dias_alquiler,
        pasajeros,
        comentario,
        vehiculo_id,
        estado_id,
        usuario_id
      });
      res.status(201).json({ message: 'Solicitud creada exitosamente', solicitud: nuevaSolicitud });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la solicitud', error });
    }
  },

  // Actualizar una solicitud existente
  updateSolicitud: async (req, res) => {
    try {
      const { id } = req.params;
      const { licencia_pdf, dias_alquiler, pasajeros, comentario, vehiculo_id, estado_id, usuario_id } = req.body;

      const solicitudExistente = await SolicitudModel.findByPk(id);

      if (!solicitudExistente) {
        return res.status(404).json({ message: 'Solicitud no encontrada' });
      }

      solicitudExistente.licencia_pdf = licencia_pdf;
      solicitudExistente.dias_alquiler = dias_alquiler;
      solicitudExistente.pasajeros = pasajeros;
      solicitudExistente.comentario = comentario;
      solicitudExistente.vehiculo_id = vehiculo_id;
      solicitudExistente.estado_id = estado_id;
      solicitudExistente.usuario_id = usuario_id;

      await solicitudExistente.save();

      res.status(200).json({ message: 'Solicitud actualizada exitosamente', solicitud: solicitudExistente });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la solicitud', error });
    }
  },

  // Eliminar una solicitud
  deleteSolicitud: async (req, res) => {
    try {
      const { id } = req.params;

      const solicitud = await SolicitudModel.findByPk(id);

      if (!solicitud) {
        return res.status(404).json({ message: 'Solicitud no encontrada' });
      }

      await solicitud.destroy();

      res.status(200).json({ message: 'Solicitud eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la solicitud', error });
    }
  }
};

module.exports = SolicitudController;
