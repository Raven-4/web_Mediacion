const express = require('express');
const cors = require('cors');
const mariadb = require('mariadb');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos MySQL
const pool = mariadb.createPool({
    host: 'localhost', 
    port: 3306,
    user: 'root', 
    password: 'root', 
    database: 'sys',
    connectionLimit: 10,
  });
  
// Compueba la conexión a la base de datos
pool.getConnection()
  .then(conn => {
    console.log('Conexión exitosa');
    conn.end();
  })
  .catch(err => {
    console.error('Error al conectar:', err);
  });

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

// GET obtiene todas las transacciones
app.get('/transactions', (req, res) => {
    res.send(`me hicieron un get`);
})

// POST guarda los datos de una transacción
app.post('/transactions', (req, res) => {
    res.send(`me hicieron un post`);
})

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
})