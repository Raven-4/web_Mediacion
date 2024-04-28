-- SQLITE
-- Tabla de Usuarios/as
CREATE TABLE Usuarios (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Nombre TEXT,
    Apellidos TEXT,
    CorreoElectronico TEXT,
    Contraseña TEXT
);

-- Tabla de Casos de Mediación
CREATE TABLE CasosMediacion (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    AlumnosInvolucrados TEXT,
    Curso TEXT,
    FechaApertura DATE,
    Mediador1 INTEGER,
    Mediador2 INTEGER,
    Estado TEXT CHECK (Estado IN ('En curso', 'En seguimiento', 'Finalizado')),
    FormularioOficial BLOB,
    ValoracionFinal TEXT CHECK (ValoracionFinal IN ('Acuerdo', 'Sin Acuerdo', 'Derivado a Jefatura de Estudios'))
);

-- Tabla de Asignación de Casos a Usuarios/as
CREATE TABLE AsignacionCasos (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    IDUsuario INTEGER,
    IDCasoMediacion INTEGER,
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID),
    FOREIGN KEY (IDCasoMediacion) REFERENCES CasosMediacion(ID)
);

-- Tabla de Estadísticas
CREATE TABLE Estadisticas (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    IDUsuario INTEGER,
    NumeroTotalCasosMediados INTEGER,
    CasosConAcuerdo INTEGER,
    PorcentajeCasosConAcuerdo DECIMAL(5,2),
    CasosSinAcuerdo INTEGER,
    PorcentajeCasosSinAcuerdo DECIMAL(5,2),
    CasosDerivadosJefatura INTEGER,
    PorcentajeCasosDerivadosJefatura DECIMAL(5,2),
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID)
);

-- MySQL
-- Tabla de Usuarios/as
CREATE TABLE Usuarios (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Apellidos VARCHAR(50),
    CorreoElectronico VARCHAR(100),
    Contraseña VARCHAR(100)
);

-- Tabla de Casos de Mediación
CREATE TABLE CasosMediacion (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    AlumnosInvolucrados VARCHAR(100),
    Curso VARCHAR(20),
    FechaApertura DATE,
    Mediador1 INT,
    Mediador2 INT,
    Estado ENUM('En curso', 'En seguimiento', 'Finalizado'),
    FormularioOficial BLOB,
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
    PorcentajeCasosConAcuerdo DECIMAL(5,2),
    CasosSinAcuerdo INT,
    PorcentajeCasosSinAcuerdo DECIMAL(5,2),
    CasosDerivadosJefatura INT,
    PorcentajeCasosDerivadosJefatura DECIMAL(5,2),
    FOREIGN KEY (IDUsuario) REFERENCES Usuarios(ID)
);

-- Insertar datos de prueba
INSERT INTO Usuarios (Nombre, Apellidos, CorreoElectronico, Contraseña) VALUES
('Juan', 'Pérez', 'juan@example.com', '123456'),
('María', 'García', 'maria@example.com', 'password'),
('Luis', 'Martínez', 'luis@example.com', 'secreto'),
('Ana', 'Rodríguez', 'ana@example.com', 'contraseña'),
('Pedro', 'Sánchez', 'pedro@example.com', 'clave');
