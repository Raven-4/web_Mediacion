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
    database: 'web_mediacion',
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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
 
// Método GET para obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const usuarios = await conn.query('SELECT * FROM Usuarios');
        conn.release();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).send('Error al obtener usuarios');
    }
});

// Método POST para agregar un nuevo usuario
app.post('/usuarios', async (req, res) => {
    try {
        const { Nombre, Apellidos, CorreoElectronico, Contraseña } = req.body;
        const conn = await pool.getConnection();
        await conn.query('INSERT INTO Usuarios (Nombre, Apellidos, CorreoElectronico, Contraseña) VALUES (?, ?, ?, ?)', [Nombre, Apellidos, CorreoElectronico, Contraseña]);
        conn.release();
        res.status(201).send('Usuario agregado correctamente');
    } catch (error) {
        console.error('Error al agregar usuario:', error);
        res.status(500).send('Error al agregar usuario');
    }
});
    
// Método DELETE para eliminar un usuario por su ID
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const conn = await pool.getConnection();
        await conn.query('DELETE FROM Usuarios WHERE ID = ?', [userId]);
        conn.release();
        res.status(200).send('Usuario eliminado correctamente');
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).send('Error al eliminar usuario');
    }
});

// Método GET para obtener todos los casos de mediación
app.get('/casos-mediacion', async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const casosMediacion = await conn.query('SELECT * FROM CasosMediacion');
        conn.release();
        res.status(200).json(casosMediacion);
    } catch (error) {
        console.error('Error al obtener casos de mediación:', error);
        res.status(500).send('Error al obtener casos de mediación');
    }
});

// Método POST para agregar un nuevo caso de mediación
app.post('/casos-mediacion', async (req, res) => {
    try {
        const { AlumnosInvolucrados, Curso, FechaApertura, Mediador1, Mediador2, Estado, FormularioOficial, ValoracionFinal } = req.body;
        const conn = await pool.getConnection();
        await conn.query('INSERT INTO CasosMediacion (AlumnosInvolucrados, Curso, FechaApertura, Mediador1, Mediador2, Estado, FormularioOficial, ValoracionFinal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [AlumnosInvolucrados, Curso, FechaApertura, Mediador1, Mediador2, Estado, FormularioOficial, ValoracionFinal]);
        conn.release();
        res.status(201).send('Caso de mediación agregado correctamente');
    } catch (error) {
        console.error('Error al agregar caso de mediación:', error);
        res.status(500).send('Error al agregar caso de mediación');
    }
});

// Método DELETE para eliminar un caso de mediación por su ID
app.delete('/casos-mediacion/:id', async (req, res) => {
    try {
        const casoId = req.params.id;
        const conn = await pool.getConnection();
        await conn.query('DELETE FROM CasosMediacion WHERE ID = ?', [casoId]);
        conn.release();
        res.status(200).send('Caso de mediación eliminado correctamente');
    } catch (error) {
        console.error('Error al eliminar caso de mediación:', error);
        res.status(500).send('Error al eliminar caso de mediación');
    }
});

// Método GET para obtener todas las asignaciones de casos
app.get('/asignacion-casos', async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const asignacionCasos = await conn.query('SELECT * FROM AsignacionCasos');
        conn.release();
        res.status(200).json(asignacionCasos);
    } catch (error) {
        console.error('Error al obtener asignaciones de casos:', error);
        res.status(500).send('Error al obtener asignaciones de casos');
    }
});

// Método POST para asignar un caso a un usuario
app.post('/asignacion-casos', async (req, res) => {
    try {
        const { IDUsuario, IDCasoMediacion } = req.body;
        const conn = await pool.getConnection();
        await conn.query('INSERT INTO AsignacionCasos (IDUsuario, IDCasoMediacion) VALUES (?, ?)', [IDUsuario, IDCasoMediacion]);
        conn.release();
        res.status(201).send('Asignación de caso agregada correctamente');
    } catch (error) {
        console.error('Error al agregar asignación de caso:', error);
        res.status(500).send('Error al agregar asignación de caso');
    }
});

// Método DELETE para eliminar una asignación de caso por su ID
app.delete('/asignacion-casos/:id', async (req, res) => {
    try {
        const asignacionId = req.params.id;
        const conn = await pool.getConnection();
        await conn.query('DELETE FROM AsignacionCasos WHERE ID = ?', [asignacionId]);
        conn.release();
        res.status(200).send('Asignación de caso eliminada correctamente');
    } catch (error) {
        console.error('Error al eliminar asignación de caso:', error);
        res.status(500).send('Error al eliminar asignación de caso');
    }
});

// Método GET para obtener todas las estadísticas
app.get('/estadisticas', async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const estadisticas = await conn.query('SELECT * FROM Estadisticas');
        conn.release();
        res.status(200).json(estadisticas);
    } catch (error) {
        console.error('Error al obtener estadísticas:', error);
        res.status(500).send('Error al obtener estadísticas');
    }
});

// Método POST para agregar estadísticas
app.post('/estadisticas', async (req, res) => {
    try {
        const { IDUsuario, NumeroTotalCasosMediados, CasosConAcuerdo, PorcentajeCasosConAcuerdo, CasosSinAcuerdo, PorcentajeCasosSinAcuerdo, CasosDerivadosJefatura, PorcentajeCasosDerivadosJefatura } = req.body;
        const conn = await pool.getConnection();
        await conn.query('INSERT INTO Estadisticas (IDUsuario, NumeroTotalCasosMediados, CasosConAcuerdo, PorcentajeCasosConAcuerdo, CasosSinAcuerdo, PorcentajeCasosSinAcuerdo, CasosDerivadosJefatura, PorcentajeCasosDerivadosJefatura) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [IDUsuario, NumeroTotalCasosMediados, CasosConAcuerdo, PorcentajeCasosConAcuerdo, CasosSinAcuerdo, PorcentajeCasosSinAcuerdo, CasosDerivadosJefatura, PorcentajeCasosDerivadosJefatura]);
        conn.release();
        res.status(201).send('Estadísticas agregadas correctamente');
    } catch (error) {
        console.error('Error al agregar estadísticas:', error);
        res.status(500).send('Error al agregar estadísticas');
    }
});

// Método DELETE para eliminar estadísticas por ID de usuario
app.delete('/estadisticas/:id', async (req, res) => {
    try {
        const usuarioId = req.params.id;
        const conn = await pool.getConnection();
        await conn.query('DELETE FROM Estadisticas WHERE IDUsuario = ?', [usuarioId]);
        conn.release();
        res.status(200).send('Estadísticas eliminadas correctamente');
    } catch (error) {
        console.error('Error al eliminar estadísticas:', error);
        res.status(500).send('Error al eliminar estadísticas');
    }
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
})