const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config(); // Cargar variables de entorno

// Importar la conexión a la base de datos y las rutas
const db = require('./src/config/db');
const categoriaRoutes = require('./src/routes/categoriaRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba para la raíz
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Usar las rutas de categoría
app.use('/categorias', categoriaRoutes);

// Sincronizar la base de datos y arrancar el servidor
db.sync()
  .then(() => {
    console.log('Conexión a la base de datos exitosa y tablas sincronizadas');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
