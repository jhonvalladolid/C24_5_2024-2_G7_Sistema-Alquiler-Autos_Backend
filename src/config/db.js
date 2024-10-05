const mysql = require('mysql2');
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

// Crear conexión a MySQL utilizando variables de entorno
const connection = mysql.createConnection({
  host: process.env.DB_HOST,       // Toma el valor de DB_HOST del archivo .env
  user: process.env.DB_USER,       // Toma el valor de DB_USER del archivo .env
  password: process.env.DB_PASS,   // Toma el valor de DB_PASS del archivo .env
  database: process.env.DB_NAME,   // Toma el valor de DB_NAME del archivo .env
  port: process.env.DB_PORT || 3306  // Usa el puerto definido o 3306 por defecto
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL.');
});

module.exports = connection;
