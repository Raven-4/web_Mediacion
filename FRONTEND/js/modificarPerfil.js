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
            <button onclick="confirmarEliminarPerfil(${usuario.ID})">Eliminar</button>
            </td>
        `;
        tabla.appendChild(row);
    });
}


function abrirModalEditarPerfil(ID, userName, nombre, apellidos, correoElectronico, contraseña, rol) {
    document.getElementById('edit_id').value = ID;
    document.getElementById('edit_userName').value = userName;
    document.getElementById('edit_nombre').value = nombre;
    document.getElementById('edit_apellidos').value = apellidos;
    document.getElementById('edit_correoElectronico').value = correoElectronico;
    document.getElementById('edit_contrasena').value = contraseña;
    document.getElementById('edit_rol').value = rol;

    document.getElementById('modalEditarPerfil').style.display = 'block';
}

function cerrarModalEditarPerfil() {
    document.getElementById('modalEditarPerfil').style.display = 'none';
}

async function guardarPerfil(event) {

    event.preventDefault(); 

    const userID = document.getElementById('edit_id').value;
    const userName = document.getElementById('edit_userName').value;
    const nombre = document.getElementById('edit_nombre').value;
    const apellidos = document.getElementById('edit_apellidos').value;
    const correoElectronico = document.getElementById('edit_correoElectronico').value;
    const contraseña = document.getElementById('edit_contrasena').value;
    const rol = document.getElementById('edit_rol').value;

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
        } else {
            console.error('Error al actualizar el perfil.');
        }
    } catch (error) {
        console.error('Error al enviar la petición:', error);
    }
}

function confirmarEliminarPerfil(userID) {
    if (confirm('¿Estás seguro de que deseas eliminar este perfil?')) {
        eliminarPerfil(userID);
    }
}

async function eliminarPerfil(userID) {
    try {
        const response = await fetch(`http://localhost:3000/usuarios/${userID}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Perfil eliminado exitosamente.');
            cargarPerfiles();
        } else {
            console.error('Error al eliminar el perfil.');
        }
    } catch (error) {
        console.error('Error al enviar la petición:', error);
    }
}
