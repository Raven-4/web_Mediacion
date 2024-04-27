function redirigir(){
    
    if ((getCookie('usuarioSistema') === null) || (getCookie('usuarioSistema') === '')) {
        window.location.href = "login.html";
    }
  else{
      window.location.href = "menu.html";
  }
}
