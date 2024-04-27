const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// Conexión a la base de datos SQLite
const dbPath = path.join(__dirname, '../DB/mediacion.db');
const db = new sqlite3.Database(dbPath);

// Ruta para obtener todos los datos de una tabla específica
app.get('/datos/:tabla', (req, res) => {
    const tabla = req.params.tabla;
    db.all(`SELECT * FROM ${tabla}`, (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(rows);
        }
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
