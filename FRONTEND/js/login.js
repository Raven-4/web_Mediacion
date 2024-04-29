function login() {
	const usuario = document.getElementById('id_usuario').value;
	const contrasena = document.getElementById('id_contrasena').value;

	const datosUsuario = {
		usuario: usuario,
		contrasena: contrasena
	};

	// Realizar la solicitud POST al servidor
	fetch('http://localhost:3000/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datosUsuario)
	})
		.then(response => {
			// Verificar el estado de la respuesta
			if (response.ok) {
				window.location.href = 'menu.html';
			} else {
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
