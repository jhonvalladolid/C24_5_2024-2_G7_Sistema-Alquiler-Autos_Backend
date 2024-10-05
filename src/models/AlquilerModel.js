const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la conexión a la base de datos

const AlquilerModel = sequelize.define('Alquiler', {
  alquiler_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL(19, 0),
    allowNull: false
  },
  costo_extra: {
    type: DataTypes.DECIMAL(19, 0),
    allowNull: false
  },
  comentario: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  solicitud_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estado_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_entrega: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'alquiler', // Nombre de la tabla en la base de datos
  timestamps: false // No agregar automáticamente campos createdAt y updatedAt
});

// Relaciones con otras tablas
AlquilerModel.associate = (models) => {
  // Relación con Solicitud
  AlquilerModel.belongsTo(models.SolicitudModel, {
    foreignKey: 'solicitud_id',
    as: 'solicitud'
  });
  // Relación con Estado
  AlquilerModel.belongsTo(models.EstadoModel, {
    foreignKey: 'estado_id',
    as: 'estado'
  });
};

module.exports = AlquilerModel;
