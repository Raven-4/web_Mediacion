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
        let temp = "Usuario: " + getCookie('usuarioSistema');
        temp += "<a href='javascript:desconectar();'><i id='logout-icon' class='fa fa-sign-out' aria-hidden='true'></i></a>";
        $("#id_caja_superior").append(temp);
    }
}

function getRol(){
    return getCookie('rol');
}