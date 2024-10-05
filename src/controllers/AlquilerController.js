const AlquilerModel = require('../models/AlquilerModel');

// Controlador para la tabla Alquiler
const AlquilerController = {
  // Obtener todos los alquileres
  getAllAlquileres: async (req, res) => {
    try {
      const alquileres = await AlquilerModel.findAll();
      res.status(200).json(alquileres);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los alquileres', error });
    }
  },

  // Obtener un alquiler por ID
  getAlquilerById: async (req, res) => {
    try {
      const { id } = req.params;
      const alquiler = await AlquilerModel.findByPk(id);

      if (!alquiler) {
        return res.status(404).json({ message: 'Alquiler no encontrado' });
      }

      res.status(200).json(alquiler);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el alquiler', error });
    }
  },

  // Crear un nuevo alquiler
  createAlquiler: async (req, res) => {
    try {
      const { fecha_inicio, fecha_fin, precio, costo_extra, comentario, solicitud_id, estado_id, fecha_entrega } = req.body;
      const nuevoAlquiler = await AlquilerModel.create({
        fecha_inicio,
        fecha_fin,
        precio,
        costo_extra,
        comentario,
        solicitud_id,
        estado_id,
        fecha_entrega
      });
      res.status(201).json({ message: 'Alquiler creado exitosamente', alquiler: nuevoAlquiler });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el alquiler', error });
    }
  },

  // Actualizar un alquiler existente
  updateAlquiler: async (req, res) => {
    try {
      const { id } = req.params;
      const { fecha_inicio, fecha_fin, precio, costo_extra, comentario, solicitud_id, estado_id, fecha_entrega } = req.body;

      const alquilerExistente = await AlquilerModel.findByPk(id);

      if (!alquilerExistente) {
        return res.status(404).json({ message: 'Alquiler no encontrado' });
      }

      alquilerExistente.fecha_inicio = fecha_inicio;
      alquilerExistente.fecha_fin = fecha_fin;
      alquilerExistente.precio = precio;
      alquilerExistente.costo_extra = costo_extra;
      alquilerExistente.comentario = comentario;
      alquilerExistente.solicitud_id = solicitud_id;
      alquilerExistente.estado_id = estado_id;
      alquilerExistente.fecha_entrega = fecha_entrega;

      await alquilerExistente.save();

      res.status(200).json({ message: 'Alquiler actualizado exitosamente', alquiler: alquilerExistente });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el alquiler', error });
    }
  },

  // Eliminar un alquiler
  deleteAlquiler: async (req, res) => {
    try {
      const { id } = req.params;

      const alquiler = await AlquilerModel.findByPk(id);

      if (!alquiler) {
        return res.status(404).json({ message: 'Alquiler no encontrado' });
      }

      await alquiler.destroy();

      res.status(200).json({ message: 'Alquiler eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el alquiler', error });
    }
  }
};

module.exports = AlquilerController;
