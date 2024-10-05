const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la conexión a la base de datos

const CategoriaModel = sequelize.define('Categoria', {
  categoria_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  descripcion: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'categoria', // Nombre de la tabla en la base de datos
  timestamps: false // No agregar automáticamente campos createdAt y updatedAt
});

// Relaciones con otras tablas
CategoriaModel.associate = (models) => {
  // Relación con Vehiculo
  CategoriaModel.hasMany(models.VehiculoModel, {
    foreignKey: 'categoria_id',
    as: 'vehiculos'
  });
};

module.exports = CategoriaModel;
