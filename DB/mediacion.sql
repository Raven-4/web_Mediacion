-- Tabla de Usuarios/as
CREATE TABLE Usuarios (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    UserName VARCHAR(50),
    Nombre VARCHAR(50),
    Apellidos VARCHAR(50),
    CorreoElectronico VARCHAR(100),
    Contraseña VARCHAR(100),
    Rol ENUM('admin', 'usuario') DEFAULT 'usuario'
);

-- Tabla de Casos de Mediación
CREATE TABLE CasosMediacion (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    AlumnosInvolucrados VARCHAR(100),
    Curso VARCHAR(20),
    FechaApertura DATE,
    Mediador1 VARCHAR(100),
    Mediador2 VARCHAR(100),
    FormularioOficial BLOB,
    Estado ENUM('En curso', 'En seguimiento', 'Finalizado'),
    ValoracionFinal ENUM('Acuerdo', 'Sin Acuerdo', 'Derivado a Jefatura de Estudios')
);

-- Tabla de Asignación de Casos a Usuarios/as
CREATE TABLE AsignacionCasos (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    IDUsuario INT,
    IDCasoMediacion INT,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID),
    FOREIGN KEY (IDCasoMediacion) REFERENCES CasosMediacion(ID)
);

-- Tabla de Estadísticas
CREATE TABLE Estadisticas (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    IDUsuario INT,
    NumeroTotalCasosMediados INT,
    CasosConAcuerdo INT,
    -- PorcentajeCasosConAcuerdo DECIMAL(5,2),
    CasosSinAcuerdo INT,
    -- PorcentajeCasosSinAcuerdo DECIMAL(5,2),
    CasosDerivadosJefatura INT,
    -- PorcentajeCasosDerivadosJefatura DECIMAL(5,2),
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID)
);

-- Insertar datos de prueba
INSERT INTO Usuarios (UserName, Nombre, Apellidos, CorreoElectronico, Contraseña, Rol) VALUES
('admin', 'Administrador', 'Admin', 'admin@example.com', 'admin', 'admin'),
('user1', 'Juan', 'Pérez', 'juan@example.com', '123456', 'usuario'),
('user2', 'María', 'García', 'maria@example.com', 'password', 'usuario'),
('user3', 'Luis', 'Martínez', 'luis@example.com', 'secreto', 'usuario'),
('user4', 'Ana', 'Rodríguez', 'ana@example.com', 'contraseña', 'usuario'),
('user5', 'Pedro', 'Sánchez', 'pedro@example.com', 'clave', 'usuario');

-- Insertar casos de mediación
INSERT INTO CasosMediacion (AlumnosInvolucrados, Curso, FechaApertura, Mediador1, Mediador2, FormularioOficial, Estado, ValoracionFinal)
VALUES
('Primer malo, Segundo Malo', '3º ESO', '2024-04-28', 'Juan Pérez', 'María García', NULL, 'En curso', NULL),
('Tercer malo, Cuarto malo', '4º ESO', '2024-04-29', 'Luis Martínez', 'Ana Rodríguez', NULL, 'En seguimiento', NULL);

-- Insertar asignaciones de casos con nombres de mediadores
INSERT INTO AsignacionCasos (IDUsuario, IDCasoMediacion)
VALUES
(2, 1),
(3, 1),
(4, 2),
(5, 2);

