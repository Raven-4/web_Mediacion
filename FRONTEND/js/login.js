encriptar = false;

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
				setCookie('token', response.resource);
				setCookie('usuarioSistema', document.getElementById("id_usuario").value);
				if (usuario === 'admin') {
					setCookie('rol', 'admin');
				} else {
					setCookie('rol', 'usuario');
				}
				console.log(getCookie(document.getElementById("id_usuario").value));
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

