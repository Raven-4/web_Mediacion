// Realizar solicitud HTTP GET para obtener los datos de los usuarios
fetch('http://localhost:3000/datos/Usuarios')
    .then(response => response.json())
    .then(data => {
        const listaUsuarios = document.getElementById('lista-usuarios');
        data.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `ID: ${usuario.ID}, Nombre: ${usuario.Nombre}, Apellidos: ${usuario.Apellidos}, Correo Electrónico: ${usuario.CorreoElectronico}, Contraseña: ${usuario.Contraseña}`;
            listaUsuarios.appendChild(li);
        });
    })
    .catch(error => console.error('Error:', error));
