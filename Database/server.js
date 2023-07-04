const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000; // Puedes utilizar el puerto que desees

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: '',
  database: 'ECommerce'
});

// Ruta para manejar la solicitud de inserción
app.post('/ruta-de-insercion', (req, res) => {
  const data = req.body; // Datos enviados desde el cliente

  // Realizar la inserción en la tabla "usuarios"
  connection.query('INSERT INTO usuarios SET ?', data, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al realizar la inserción' });
      return;
    }

    res.json({ insertId: results.insertId });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
