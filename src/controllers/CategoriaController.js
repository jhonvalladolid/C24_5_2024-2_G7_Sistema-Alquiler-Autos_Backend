const CategoriaModel = require('../models/CategoriaModel');

// Controlador para la tabla Categoria
const CategoriaController = {
  // Obtener todas las categorías
  getAllCategorias: async (req, res) => {
    try {
      const categorias = await CategoriaModel.findAll();
      res.status(200).json(categorias);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las categorías', error });
    }
  },

  // Obtener una categoría por ID
  getCategoriaById: async (req, res) => {
    try {
      const { id } = req.params;
      const categoria = await CategoriaModel.findByPk(id);

      if (!categoria) {
        return res.status(404).json({ message: 'Categoría no encontrada' });
      }

      res.status(200).json(categoria);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la categoría', error });
    }
  },

  // Crear una nueva categoría
  createCategoria: async (req, res) => {
    try {
      const { descripcion } = req.body;
      const nuevaCategoria = await CategoriaModel.create({ descripcion });
      res.status(201).json({ message: 'Categoría creada exitosamente', categoria: nuevaCategoria });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la categoría', error });
    }
  },

  // Actualizar una categoría existente
  updateCategoria: async (req, res) => {
    try {
      const { id } = req.params;
      const { descripcion } = req.body;

      const categoria = await CategoriaModel.findByPk(id);

      if (!categoria) {
        return res.status(404).json({ message: 'Categoría no encontrada' });
      }

      categoria.descripcion = descripcion;
      await categoria.save();

      res.status(200).json({ message: 'Categoría actualizada exitosamente', categoria });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la categoría', error });
    }
  },

  // Eliminar una categoría
  deleteCategoria: async (req, res) => {
    try {
      const { id } = req.params;

      const categoria = await CategoriaModel.findByPk(id);

      if (!categoria) {
        return res.status(404).json({ message: 'Categoría no encontrada' });
      }

      await categoria.destroy();

      res.status(200).json({ message: 'Categoría eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la categoría', error });
    }
  }
};

module.exports = CategoriaController;
