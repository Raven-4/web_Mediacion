<?php
$servername = "dirección_ip_del_contenedor_mysql";
$username = "tu_usuario";
$password = "tu_contraseña";
$database = "tu_basededatos";

// Establecer conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
} else {
    echo "Conexión exitosa";
}

// Cerrar conexión
$conn->close();
?>