function cargarMenu() {
    const rolUsuario = getRol();
    console.log('Rol del usuario:', rolUsuario);

    const menu = document.getElementById('menu');

    // Limpiar el contenido actual del menú
    menu.innerHTML = '';

    // Agregar enlaces comunes para todos los usuarios
    const casosMediacionLink = document.createElement('li');
    casosMediacionLink.innerHTML = '<a href="casosMediacion.html">Casos de Mediación</a>';
    menu.appendChild(casosMediacionLink);

    const estadisticasLink = document.createElement('li');
    estadisticasLink.innerHTML = '<a href="estadisticas.html">Estadísticas</a>';
    menu.appendChild(estadisticasLink);

    // Agregar enlaces adicionales para el rol de administrador
    if (rolUsuario === 'admin') {
        const crearCasoLink = document.createElement('li');
        crearCasoLink.innerHTML = '<a href="crearCaso.html">Crear Caso</a>';
        menu.appendChild(crearCasoLink);

        const crearPerfilLink = document.createElement('li');
        crearPerfilLink.innerHTML = '<a href="crearPerfil.html">Crear Perfil</a>';
        menu.appendChild(crearPerfilLink);

        const modificarPerfilLink = document.createElement('li');
        modificarPerfilLink.innerHTML = '<a href="modificarPerfil.html">Modificar Perfil</a>';
        menu.appendChild(modificarPerfilLink);
    }
}
