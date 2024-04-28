const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

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