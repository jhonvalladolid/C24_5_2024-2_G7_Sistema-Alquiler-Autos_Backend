const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la conexión a la base de datos

const SolicitudModel = sequelize.define('Solicitud', {
  solicitud_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  licencia_pdf: {
    type: DataTypes.BLOB('medium'), // Almacena archivos PDF de hasta 16 MB
    allowNull: false
  },
  dias_alquiler: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pasajeros: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comentario: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  vehiculo_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estado_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'solicitud', // Nombre de la tabla en la base de datos
  timestamps: false // No agregar automáticamente campos createdAt y updatedAt
});

// Relaciones con otras tablas
SolicitudModel.associate = (models) => {
  // Relación con Vehiculo
  SolicitudModel.belongsTo(models.VehiculoModel, {
    foreignKey: 'vehiculo_id',
    as: 'vehiculo'
  });
  // Relación con Estado
  SolicitudModel.belongsTo(models.EstadoModel, {
    foreignKey: 'estado_id',
    as: 'estado'
  });
  // Relación con Usuario
  SolicitudModel.belongsTo(models.UsuarioModel, {
    foreignKey: 'usuario_id',
    as: 'usuario'
  });
  // Relación con Alquiler (una solicitud puede estar relacionada con un alquiler)
  SolicitudModel.hasOne(models.AlquilerModel, {
    foreignKey: 'solicitud_id',
    as: 'alquiler'
  });
};

module.exports = SolicitudModel;
