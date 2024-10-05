const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la conexión a la base de datos

const VehiculoModel = sequelize.define('Vehiculo', {
  vehiculo_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  modelo: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  foto: {
    type: DataTypes.BLOB,
    allowNull: false
  },
  año: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cilindrada: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  asientos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  placa: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estado_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'vehiculo', // Nombre de la tabla en la base de datos
  timestamps: false // No agregar automáticamente campos createdAt y updatedAt
});

// Relaciones con otras tablas
VehiculoModel.associate = (models) => {
  // Relación con Categoria
  VehiculoModel.belongsTo(models.CategoriaModel, {
    foreignKey: 'categoria_id',
    as: 'categoria'
  });
  // Relación con Estado
  VehiculoModel.belongsTo(models.EstadoModel, {
    foreignKey: 'estado_id',
    as: 'estado'
  });
  // Relación con Solicitud
  VehiculoModel.hasMany(models.SolicitudModel, {
    foreignKey: 'vehiculo_id',
    as: 'solicitudes'
  });
};

module.exports = VehiculoModel;
