const UsuarioModel = require('../models/UsuarioModel');

// Controlador para la tabla Usuario
const UsuarioController = {
  // Obtener todos los usuarios
  getAllUsuarios: async (req, res) => {
    try {
      const usuarios = await UsuarioModel.findAll();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
  },

  // Obtener un usuario por ID
  getUsuarioById: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await UsuarioModel.findByPk(id);

      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
  },

  // Crear un nuevo usuario
  createUsuario: async (req, res) => {
    try {
      const { usuario, correo, contraseña, telefono, direccion, rol_id, estado_id } = req.body;
      const nuevoUsuario = await UsuarioModel.create({ 
        usuario, 
        correo, 
        contraseña, 
        telefono, 
        direccion, 
        rol_id, 
        estado_id 
      });
      res.status(201).json({ message: 'Usuario creado exitosamente', usuario: nuevoUsuario });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el usuario', error });
    }
  },

  // Actualizar un usuario existente
  updateUsuario: async (req, res) => {
    try {
      const { id } = req.params;
      const { usuario, correo, contraseña, telefono, direccion, rol_id, estado_id } = req.body;

      const usuarioExistente = await UsuarioModel.findByPk(id);

      if (!usuarioExistente) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      usuarioExistente.usuario = usuario;
      usuarioExistente.correo = correo;
      usuarioExistente.contraseña = contraseña;
      usuarioExistente.telefono = telefono;
      usuarioExistente.direccion = direccion;
      usuarioExistente.rol_id = rol_id;
      usuarioExistente.estado_id = estado_id;

      await usuarioExistente.save();

      res.status(200).json({ message: 'Usuario actualizado exitosamente', usuario: usuarioExistente });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
  },

  // Eliminar un usuario
  deleteUsuario: async (req, res) => {
    try {
      const { id } = req.params;

      const usuario = await UsuarioModel.findByPk(id);

      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      await usuario.destroy();

      res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
  }
};

module.exports = UsuarioController;
