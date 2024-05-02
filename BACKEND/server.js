const express = require('express');
const cors = require('cors');
const mariadb = require('mariadb');
const multer = require('multer');

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

// Configurar multer para almacenar los archivos adjuntos en el directorio 'uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:/Users/guija/Desktop/web_Mediacion/DB/archivos') // Ruta donde se guardarán los archivos
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Nombre del archivo adjunto
    }
});

const upload = multer({ storage: storage });

// Método POST para el inicio de sesión de un usuario
app.post('/login', async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;

        const conn = await pool.getConnection();
        const result = await conn.query('SELECT * FROM Usuarios WHERE UserName = ?', [usuario]);
        conn.release();

        if (result.length === 0) {
            // El usuario no existe en la base de datos
            res.status(404).send('Usuario no encontrado');
            return;
        }

        const user = result[0];

        if (user.Contraseña !== contrasena) {
            // La contraseña no coincide
            res.status(401).send('Contraseña incorrecta');
            return;
        }

        res.status(200).send('Inicio de sesión exitoso');
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).send('Error al iniciar sesión');
    }
});

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

// Método GET para obtener un usuario por su nombre de usuario
app.get('/usuarios/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const conn = await pool.getConnection();
        const usuario = await conn.query('SELECT * FROM Usuarios WHERE UserName = ?', [username]);
        conn.release();

        if (usuario.length === 0) {
            // Si no se encuentra ningún usuario con ese nombre de usuario, devolver un 404
            res.status(404).send('Usuario no encontrado');
        } else {
            // Si se encuentra el usuario, devolverlo en formato JSON
            res.status(200).json(usuario[0]);
        }
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).send('Error al obtener usuario');
    }
});

// Método PUT para modificar un usuario por su ID
app.put('/usuarios/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const { UserName, Nombre, Apellidos, CorreoElectronico, Contraseña, Rol } = req.body;
        const conn = await pool.getConnection();
        await conn.query('UPDATE Usuarios SET UserName = ?, Nombre = ?, Apellidos = ?, CorreoElectronico = ?, Contraseña = ?, Rol = ? WHERE ID = ?', [UserName, Nombre, Apellidos, CorreoElectronico, Contraseña, Rol, userId]);
        conn.release();
        res.status(200).send('Usuario modificado correctamente');
    } catch (error) {
        console.error('Error al modificar usuario:', error);
        res.status(500).send('Error al modificar usuario');
    }
});

// Método POST para agregar un nuevo usuario
app.post('/usuarios', async (req, res) => {
    try {
        const { UserName, Nombre, Apellidos, CorreoElectronico, Contraseña, Rol } = req.body;
        const conn = await pool.getConnection();
        await conn.query('INSERT INTO Usuarios (UserName, Nombre, Apellidos, CorreoElectronico, Contraseña, Rol) VALUES (?, ?, ?, ?, ?, ?)', [UserName, Nombre, Apellidos, CorreoElectronico, Contraseña, Rol]);
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

// Método GET para obtener los casos de mediación de un usuario específico
app.get('/casos-mediacion/:usuario', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        const conn = await pool.getConnection();
        console.log('Obteniendo casos de mediación para el usuario', usuario);

        const userId = await conn.query('SELECT ID FROM Usuarios WHERE UserName = ?', [usuario]);
        //const userId = userInfo[0];
        console.log('ID de usuario:', userId);

        const casosMediacion = await conn.query(`
        SELECT cm.*
        FROM CasosMediacion cm
        INNER JOIN AsignacionCasos ac ON cm.ID = ac.IDCasoMediacion
        INNER JOIN Usuarios u ON ac.IDUsuario = u.ID
        WHERE u.UserName = ?
    `, [usuario]);
        console.log('Casos de mediación:', casosMediacion);
        conn.release();
        res.status(200).json(casosMediacion);
    } catch (error) {
        const usuario = req.params.usuario;
        console.error('Error al obtener casos de mediación para el usuario', usuario, ':', error);
        res.status(500).send('Error al obtener casos de mediación');
    }
});

// Método PUT para modificar el estado y la valoración final de un caso de mediación
app.put('/casos-mediacion/:id', async (req, res) => {
    try {
        const casoId = req.params.id;
        const { Estado, ValoracionFinal } = req.body;
        console.log('Estado:', Estado);
        console.log('Valoración final:', ValoracionFinal);
        console.log('Modificando estado y valoración final del caso de mediación', casoId);
        const conn = await pool.getConnection();
        await conn.query('UPDATE CasosMediacion SET Estado = ?, ValoracionFinal = ? WHERE ID = ?', [Estado, ValoracionFinal, casoId]);
        conn.release();
        res.status(200).send('Estado y valoración final del caso de mediación modificados correctamente');
    } catch (error) {
        console.error('Error al modificar estado y valoración final del caso de mediación:', error);
        res.status(500).send('Error al modificar estado y valoración final del caso de mediación');
    }
});

// Método POST para agregar un nuevo caso de mediación
app.post('/casos-mediacion', upload.single('FormularioOficial'), async (req, res) => {
    try {
        const { AlumnosInvolucrados, Curso, FechaApertura, Mediador1, Mediador2, Estado, IDUsuario1, IDUsuario2 } = req.body;
        const FormularioOficial = req.file.filename; // Nombre del archivo adjunto

        const conn = await pool.getConnection();
        await conn.query('INSERT INTO CasosMediacion (AlumnosInvolucrados, Curso, FechaApertura, Mediador1, Mediador2, Estado, FormularioOficial) VALUES (?, ?, ?, ?, ?, ?, ?)', [AlumnosInvolucrados, Curso, FechaApertura, Mediador1, Mediador2, Estado, FormularioOficial]);
        const queryID = await conn.query('SELECT ID FROM CasosMediacion ORDER BY ID DESC LIMIT 1');
        const casoID = queryID[0].ID;
        await conn.query('INSERT INTO AsignacionCasos (IDUsuario, IDCasoMediacion) VALUES (?, ?)', [IDUsuario1, casoID]);
        await conn.query('INSERT INTO AsignacionCasos (IDUsuario, IDCasoMediacion) VALUES (?, ?)', [IDUsuario2, casoID]);
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
// app.post('/asignacion-casos', async (req, res) => {
//     try {
//         const { IDUsuario, IDCasoMediacion } = req.body;
//         const conn = await pool.getConnection();
//         await conn.query('INSERT INTO AsignacionCasos (IDUsuario, IDCasoMediacion) VALUES (?, ?)', [IDUsuario, IDCasoMediacion]);
//         conn.release();
//         res.status(201).send('Asignación de caso agregada correctamente');
//     } catch (error) {
//         console.error('Error al agregar asignación de caso:', error);
//         res.status(500).send('Error al agregar asignación de caso');
//     }
// });

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