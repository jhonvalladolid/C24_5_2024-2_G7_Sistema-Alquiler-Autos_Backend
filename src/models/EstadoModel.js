const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la conexión a la base de datos

const EstadoModel = sequelize.define('Estado', {
  estado_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  descripcion: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'estado', // Nombre de la tabla en la base de datos
  timestamps: false // No agregar automáticamente campos createdAt y updatedAt
});

// Relaciones con otras tablas
EstadoModel.associate = (models) => {
  // Relación con Usuario
  EstadoModel.hasMany(models.UsuarioModel, {
    foreignKey: 'estado_id',
    as: 'usuarios'
  });
  // Relación con Vehiculo
  EstadoModel.hasMany(models.VehiculoModel, {
    foreignKey: 'estado_id',
    as: 'vehiculos'
  });
  // Relación con Solicitud
  EstadoModel.hasMany(models.SolicitudModel, {
    foreignKey: 'estado_id',
    as: 'solicitudes'
  });
  // Relación con Alquiler
  EstadoModel.hasMany(models.AlquilerModel, {
    foreignKey: 'estado_id',
    as: 'alquileres'
  });
};

module.exports = EstadoModel;
