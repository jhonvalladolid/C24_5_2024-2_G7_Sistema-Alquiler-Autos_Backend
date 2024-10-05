const EstadoModel = require('../models/EstadoModel');

// Controlador para la tabla Estado
const EstadoController = {
  // Obtener todos los estados
  getAllEstados: async (req, res) => {
    try {
      const estados = await EstadoModel.findAll();
      res.status(200).json(estados);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los estados', error });
    }
  },

  // Obtener un estado por ID
  getEstadoById: async (req, res) => {
    try {
      const { id } = req.params;
      const estado = await EstadoModel.findByPk(id);

      if (!estado) {
        return res.status(404).json({ message: 'Estado no encontrado' });
      }

      res.status(200).json(estado);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el estado', error });
    }
  },

  // Crear un nuevo estado
  createEstado: async (req, res) => {
    try {
      const { descripcion } = req.body;
      const nuevoEstado = await EstadoModel.create({ descripcion });
      res.status(201).json({ message: 'Estado creado exitosamente', estado: nuevoEstado });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el estado', error });
    }
  },

  // Actualizar un estado existente
  updateEstado: async (req, res) => {
    try {
      const { id } = req.params;
      const { descripcion } = req.body;

      const estado = await EstadoModel.findByPk(id);

      if (!estado) {
        return res.status(404).json({ message: 'Estado no encontrado' });
      }

      estado.descripcion = descripcion;
      await estado.save();

      res.status(200).json({ message: 'Estado actualizado exitosamente', estado });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el estado', error });
    }
  },

  // Eliminar un estado
  deleteEstado: async (req, res) => {
    try {
      const { id } = req.params;

      const estado = await EstadoModel.findByPk(id);

      if (!estado) {
        return res.status(404).json({ message: 'Estado no encontrado' });
      }

      await estado.destroy();

      res.status(200).json({ message: 'Estado eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el estado', error });
    }
  }
};

module.exports = EstadoController;
