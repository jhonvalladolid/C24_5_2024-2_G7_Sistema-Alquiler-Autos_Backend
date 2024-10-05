const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la conexión a la base de datos

const RolModel = sequelize.define('Rol', {
  rol_id: {
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
  tableName: 'rol', // Nombre de la tabla en la base de datos
  timestamps: false // No agregar automáticamente campos createdAt y updatedAt
});

// Relaciones con otras tablas
RolModel.associate = (models) => {
  // Relación con Usuario
  RolModel.hasMany(models.UsuarioModel, {
    foreignKey: 'rol_id',
    as: 'usuarios'
  });
};

module.exports = RolModel;
