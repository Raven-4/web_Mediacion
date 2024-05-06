function comprobarPerfil() {
    
    console.log('Comprobando perfil...');
    
    verificarNombreUsuarioUnico()
        .then(usuarioDisponible => {
            if (usuarioDisponible) {
                console.log('Perfil apto. Creando perfil...');
                crearPerfil();
            } else {
                console.log('Perfil no apto. No se puede crear.');
                alert('Error al crear perfil. El nombre de usuario ya está en uso o hay un problema en la verificación. Por favor, verifica los datos ingresados o intenta nuevamente más tarde.');
            }
        })
        .catch(error => {
            console.error('Error al comprobar perfil:', error);
            alert('Error al comprobar perfil. Por favor, intenta nuevamente más tarde.');
        });
}

function crearPerfil() {
    console.log('Creando perfil...');

    const datosPerfil = {
        UserName: document.getElementById('id_usuario').value,
        Nombre: document.getElementById('id_nombre').value,
        Apellidos: document.getElementById('id_apellidos').value,
        CorreoElectronico: document.getElementById('id_correoElectronico').value,
        Contraseña: document.getElementById('id_contrasena').value,
        Rol: document.getElementById('id_rol').value
    };

    console.log(datosPerfil);

    fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosPerfil)
    })
        .then(response => {
            if (response.ok) {
                console.log('Perfil creado exitosamente.');
            } else {
                alert('Error al crear perfil. Por favor, verifique los datos ingresados.');
            }
        })
}

function verificarNombreUsuarioUnico() {
    return new Promise((resolve, reject) => {
        const userName = document.getElementById('id_usuario').value;

        fetch(`http://localhost:3000/usuarios/${userName}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 404) {
                    // Si el usuario no existe, no hay problema, así que simplemente resolvemos la promesa con true
                    resolve(true);
                } else {
                    // Si hay algún otro problema, rechazamos la promesa con un mensaje de error
                    reject(new Error('Error al verificar nombre de usuario. Por favor, intenta nuevamente más tarde.'));
                }
            })
            .then(usuario => {
                if (usuario) {
                    document.getElementById('mensaje-error-usuario').textContent = 'El nombre de usuario ya está en uso. Por favor, elige otro nombre de usuario.';
                    resolve(false);
                } else {
                    document.getElementById('mensaje-error-usuario').textContent = '';
                    resolve(true);
                }
            })
            .catch(error => {
                console.error('Error al verificar nombre de usuario:', error);
                document.getElementById('mensaje-error-usuario').textContent = 'Error al verificar nombre de usuario. Por favor, intenta nuevamente más tarde.';
                reject(error); // Rechazamos la promesa con el error para que pueda ser manejado por la función llamadora
            });
    });
}
