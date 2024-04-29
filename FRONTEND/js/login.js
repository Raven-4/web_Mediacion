function login() {
	const usuario = document.getElementById('id_usuario').value;
	const contrasena = document.getElementById('id_contrasena').value;

	// Objeto con los datos del usuario
	const datosUsuario = {
		usuario: usuario,
		contrasena: contrasena
	};

	// Realizar la solicitud POST al servidor
	fetch('http://localhost:3000/usuarios', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datosUsuario)
	})
		.then(response => {
			// Verificar el estado de la respuesta
			if (response.ok) {
				// Si la respuesta es exitosa, redirigir al usuario a la página principal
				window.location.href = 'menu.html';
			} else {
				// Si hay un error, mostrar un mensaje de error al usuario
				alert('Error al iniciar sesión. Por favor, verifique sus credenciales.');
			}
		})
		.catch(error => {
			console.error('Error al enviar la solicitud:', error);
			alert('Error al iniciar sesión. Por favor, intente nuevamente más tarde.');
		});
}


function comprobar_form_login() {
	return true;
	if (comprobar_usuario() && comprobar_password()) {
		encriptarpassword();
		encriptar = true;
		return true;
	}
	else {
		return false;
	}

}
