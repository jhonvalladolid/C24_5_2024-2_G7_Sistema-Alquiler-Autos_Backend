const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la conexión a la base de datos

const UsuarioModel = sequelize.define('Usuario', {
  usuario_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: true
  },
  correo: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  contraseña: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  direccion: {
    type: DataTypes.STRING(80),
    allowNull: true
  },
  rol_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estado_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'usuario', // Nombre de la tabla en la base de datos
  timestamps: false // No agregar automáticamente campos createdAt y updatedAt
});

// Relaciones con otras tablas
UsuarioModel.associate = (models) => {
  // Relación con Rol
  UsuarioModel.belongsTo(models.RolModel, {
    foreignKey: 'rol_id',
    as: 'rol'
  });

  // Relación con Estado
  UsuarioModel.belongsTo(models.EstadoModel, {
    foreignKey: 'estado_id',
    as: 'estado'
  });
};

module.exports = UsuarioModel;
