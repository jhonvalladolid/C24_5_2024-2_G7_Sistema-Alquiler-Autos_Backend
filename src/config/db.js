const { Sequelize } = require('sequelize'); // Importa Sequelize
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

// Crear instancia de Sequelize utilizando variables de entorno
const sequelize = new Sequelize(
  process.env.DB_NAME,    // Nombre de la base de datos
  process.env.DB_USER,    // Usuario de la base de datos
  process.env.DB_PASS,    // Contraseña de la base de datos
  {
    host: process.env.DB_HOST,   // Host de la base de datos
    dialect: 'mysql',            // Dialecto que estamos utilizando (MySQL)
    port: process.env.DB_PORT || 3306, // Puerto de conexión
    logging: false  // Desactiva el registro de SQL en consola
  }
);

// Probar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos MySQL con Sequelize.');
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos MySQL:', err);
  });

module.exports = sequelize;
