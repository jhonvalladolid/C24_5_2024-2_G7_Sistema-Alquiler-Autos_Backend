const RolModel = require('../models/RolModel');

// Controlador para la tabla Rol
const RolController = {
  // Obtener todos los roles
  getAllRoles: async (req, res) => {
    try {
      const roles = await RolModel.findAll();
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los roles', error });
    }
  },

  // Obtener un rol por ID
  getRolById: async (req, res) => {
    try {
      const { id } = req.params;
      const rol = await RolModel.findByPk(id);

      if (!rol) {
        return res.status(404).json({ message: 'Rol no encontrado' });
      }

      res.status(200).json(rol);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el rol', error });
    }
  },

  // Crear un nuevo rol
  createRol: async (req, res) => {
    try {
      const { descripcion } = req.body;
      const nuevoRol = await RolModel.create({ descripcion });
      res.status(201).json({ message: 'Rol creado exitosamente', rol: nuevoRol });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el rol', error });
    }
  },

  // Actualizar un rol existente
  updateRol: async (req, res) => {
    try {
      const { id } = req.params;
      const { descripcion } = req.body;

      const rol = await RolModel.findByPk(id);

      if (!rol) {
        return res.status(404).json({ message: 'Rol no encontrado' });
      }

      rol.descripcion = descripcion;
      await rol.save();

      res.status(200).json({ message: 'Rol actualizado exitosamente', rol });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el rol', error });
    }
  },

  // Eliminar un rol
  deleteRol: async (req, res) => {
    try {
      const { id } = req.params;

      const rol = await RolModel.findByPk(id);

      if (!rol) {
        return res.status(404).json({ message: 'Rol no encontrado' });
      }

      await rol.destroy();

      res.status(200).json({ message: 'Rol eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el rol', error });
    }
  }
};

module.exports = RolController;
