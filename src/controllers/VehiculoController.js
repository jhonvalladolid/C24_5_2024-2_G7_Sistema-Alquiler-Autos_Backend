const VehiculoModel = require('../models/VehiculoModel');

// Controlador para la tabla Vehículo
const VehiculoController = {
  // Obtener todos los vehículos
  getAllVehiculos: async (req, res) => {
    try {
      const vehiculos = await VehiculoModel.findAll();
      res.status(200).json(vehiculos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los vehículos', error });
    }
  },

  // Obtener un vehículo por ID
  getVehiculoById: async (req, res) => {
    try {
      const { id } = req.params;
      const vehiculo = await VehiculoModel.findByPk(id);

      if (!vehiculo) {
        return res.status(404).json({ message: 'Vehículo no encontrado' });
      }

      res.status(200).json(vehiculo);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el vehículo', error });
    }
  },

  // Crear un nuevo vehículo
  createVehiculo: async (req, res) => {
    try {
      const { modelo, foto, año, cilindrada, asientos, color, placa, categoria_id, estado_id } = req.body;
      const nuevoVehiculo = await VehiculoModel.create({
        modelo,
        foto,
        año,
        cilindrada,
        asientos,
        color,
        placa,
        categoria_id,
        estado_id
      });
      res.status(201).json({ message: 'Vehículo creado exitosamente', vehiculo: nuevoVehiculo });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el vehículo', error });
    }
  },

  // Actualizar un vehículo existente
  updateVehiculo: async (req, res) => {
    try {
      const { id } = req.params;
      const { modelo, foto, año, cilindrada, asientos, color, placa, categoria_id, estado_id } = req.body;

      const vehiculoExistente = await VehiculoModel.findByPk(id);

      if (!vehiculoExistente) {
        return res.status(404).json({ message: 'Vehículo no encontrado' });
      }

      vehiculoExistente.modelo = modelo;
      vehiculoExistente.foto = foto;
      vehiculoExistente.año = año;
      vehiculoExistente.cilindrada = cilindrada;
      vehiculoExistente.asientos = asientos;
      vehiculoExistente.color = color;
      vehiculoExistente.placa = placa;
      vehiculoExistente.categoria_id = categoria_id;
      vehiculoExistente.estado_id = estado_id;

      await vehiculoExistente.save();

      res.status(200).json({ message: 'Vehículo actualizado exitosamente', vehiculo: vehiculoExistente });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el vehículo', error });
    }
  },

  // Eliminar un vehículo
  deleteVehiculo: async (req, res) => {
    try {
      const { id } = req.params;

      const vehiculo = await VehiculoModel.findByPk(id);

      if (!vehiculo) {
        return res.status(404).json({ message: 'Vehículo no encontrado' });
      }

      await vehiculo.destroy();

      res.status(200).json({ message: 'Vehículo eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el vehículo', error });
    }
  }
};

module.exports = VehiculoController;
