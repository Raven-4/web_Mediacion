// Función para cargar y mostrar los perfiles de usuario
async function cargarPerfiles() {
    const response = await fetch('http://localhost:3000/usuarios');
    const usuarios = await response.json();

    const tabla = document.getElementById('userTableBody');
    tabla.innerHTML = '';

    usuarios.forEach(usuario => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${usuario.ID}</td>
            <td>${usuario.UserName}</td>
            <td>${usuario.Nombre}</td>
            <td>${usuario.Apellidos}</td>
            <td>${usuario.CorreoElectronico}</td>
            <td>${usuario.Contraseña}</td>
            <td>${usuario.Rol}</td>
            <td>
            <button onclick="abrirModalEditarPerfil(${usuario.ID}, '${usuario.UserName}', '${usuario.Nombre}', '${usuario.Apellidos}', '${usuario.CorreoElectronico}', '${usuario.Contraseña}', '${usuario.Rol}')">Editar</button>
            </td>
        `;
        tabla.appendChild(row);
    });
}


// Función para abrir el modal de edición de perfil
function abrirModalEditarPerfil(ID, userName, nombre, apellidos, correoElectronico, contraseña, rol) {
    document.getElementById('edit_id').value = ID;
    document.getElementById('edit_userName').value = userName;
    document.getElementById('edit_nombre').value = nombre;
    document.getElementById('edit_apellidos').value = apellidos;
    document.getElementById('edit_correoElectronico').value = correoElectronico;
    document.getElementById('edit_contrasena').value = contraseña;
    document.getElementById('edit_rol').value = rol;

    // Mostrar el modal
    document.getElementById('modalEditarPerfil').style.display = 'block';
}

// Función para cerrar el modal de edición de perfil
function cerrarModalEditarPerfil() {
    // Ocultar el modal
    document.getElementById('modalEditarPerfil').style.display = 'none';
}

async function guardarPerfil(event) {

    event.preventDefault(); 

    // Obtener los valores del formulario
    const userID = document.getElementById('edit_id').value;
    const userName = document.getElementById('edit_userName').value;
    const nombre = document.getElementById('edit_nombre').value;
    const apellidos = document.getElementById('edit_apellidos').value;
    const correoElectronico = document.getElementById('edit_correoElectronico').value;
    const contraseña = document.getElementById('edit_contrasena').value;
    const rol = document.getElementById('edit_rol').value;

    // Crear el objeto con los datos del perfil a actualizar
    const perfilActualizado = {
        UserName: userName,
        Nombre: nombre,
        Apellidos: apellidos,
        CorreoElectronico: correoElectronico,
        Contraseña: contraseña,
        Rol: rol
    };

    // Enviar la petición PUT al backend para actualizar el perfil
    try {
        const response = await fetch(`http://localhost:3000/usuarios/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(perfilActualizado)
        });

        if (response.ok) {
            console.log('Perfil actualizado exitosamente.');
            cerrarModalEditarPerfil(); 
            // Aquí puedes agregar cualquier otra acción que desees realizar después de actualizar el perfil
        } else {
            console.error('Error al actualizar el perfil.');
            // Aquí puedes manejar el caso de error, como mostrar un mensaje al usuario
        }
    } catch (error) {
        console.error('Error al enviar la petición:', error);
        // Aquí puedes manejar el caso de error, como mostrar un mensaje al usuario
    }
}