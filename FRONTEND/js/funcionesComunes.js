function redirigir() {
    if ((getCookie('usuarioSistema') === null) || (getCookie('usuarioSistema') === '')) {
        window.location.href = "login.html";
    }
    else {
        window.location.href = "menu.html";
    }
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        setCookie(name, '');
    }
}

function desconectar() {
    deleteAllCookies();
    window.location.href = "login.html";
}

function esta_autenticado() {
    if ((getCookie('usuarioSistema') === null) || (getCookie('usuarioSistema') === '')) {
        window.location.href = "login.html";
    }
    else {
        let temp = "<button onclick='javascript:abrirModalCambiarContraseña();'>Cambiar Contraseña</button>";
        temp += " Usuario: " + getCookie('usuarioSistema');
        temp += " <a href='javascript:desconectar();'><i id='logout-icon' class='fa fa-sign-out' aria-hidden='true'></i></a>";
        $("#id_caja_superior").append(temp);

    }
}

function getRol() {
    return getCookie('rol');
}

function abrirModalCambiarContraseña() {
    document.getElementById('modalCambiarContraseña').style.display = 'block';
}

function cerrarModalCambiarContraseña() {
    document.getElementById('modalCambiarContraseña').style.display = 'none';
}

async function guardarContraseña(event) {
    event.preventDefault();

    const contraseñaActual = document.getElementById('contraseñaActual').value;
    const nuevaContraseña = document.getElementById('nuevaContraseña').value;
    const confirmarContraseña = document.getElementById('confirmarContraseña').value;

    if (nuevaContraseña !== confirmarContraseña) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/cambiar-contrasena', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: getCookie('usuarioSistema'),
                contraseñaActual: contraseñaActual,
                nuevaContraseña: nuevaContraseña
            })
        });

        if (response.ok) {
            alert('Contraseña cambiada exitosamente.');
            cerrarModalCambiarContraseña();
        } else {
            alert('Error al cambiar la contraseña.');
        }
    } catch (error) {
        console.error('Error al cambiar la contraseña:', error);
    }
}

// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const type = input.type === 'password' ? 'text' : 'password';
    input.type = type;

    // Cambiar el ícono basado en la visibilidad de la contraseña
    const icon = input.nextElementSibling;
    if (type === 'password') {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}
