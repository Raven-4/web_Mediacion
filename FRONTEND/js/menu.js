function cargarMenu() {
    const rolUsuario = getRol();
    console.log('Rol del usuario:', rolUsuario);

    // const menu = document.getElementById('menu');

    // // Limpiar el contenido actual del menú
    // menu.innerHTML = '';

    // //Menu sin css
    // // Agregar enlaces comunes para todos los usuarios
    // const casosMediacionLink = document.createElement('li');
    // casosMediacionLink.innerHTML = '<a href="casosMediacion.html">Casos de Mediación</a>';
    // menu.appendChild(casosMediacionLink);

    // const estadisticasLink = document.createElement('li');
    // estadisticasLink.innerHTML = '<a href="estadisticas.html">Estadísticas</a>';
    // menu.appendChild(estadisticasLink);

    // // Agregar enlaces adicionales para el rol de administrador
    // if (rolUsuario === 'admin') {
    //     const crearCasoLink = document.createElement('li');
    //     crearCasoLink.innerHTML = '<a href="crearCaso.html">Crear Caso</a>';
    //     menu.appendChild(crearCasoLink);

    //     const crearPerfilLink = document.createElement('li');
    //     crearPerfilLink.innerHTML = '<a href="crearPerfil.html">Crear Perfil</a>';
    //     menu.appendChild(crearPerfilLink);

    //     const modificarPerfilLink = document.createElement('li');
    //     modificarPerfilLink.innerHTML = '<a href="modificarPerfil.html">Modificar Perfil</a>';
    //     menu.appendChild(modificarPerfilLink);
    // }

    const menuRow1 = document.getElementById('menu-row-1');
    const menuRow2 = document.getElementById('menu-row-2');

    // Limpiar el contenido actual del menú
    menuRow1.innerHTML = '';
    menuRow2.innerHTML = '';

    // Agregar enlaces comunes para todos los usuarios
    const casosMediacionLink = document.createElement('li');
    casosMediacionLink.classList.add('menu-item');
    casosMediacionLink.innerHTML = '<a href="casosMediacion.html"><i class="fa fa-briefcase"></i> Casos de Mediación</a>';
    menuRow1.appendChild(casosMediacionLink);

    const estadisticasLink = document.createElement('li');
    estadisticasLink.classList.add('menu-item');
    estadisticasLink.innerHTML = '<a href="estadisticas.html"><i class="fa fa-bar-chart"></i> Estadísticas</a>';
    menuRow1.appendChild(estadisticasLink);

    // Agregar enlaces adicionales para el rol de administrador
    if (rolUsuario === 'admin') {
        const crearCasoLink = document.createElement('li');
        crearCasoLink.classList.add('menu-item');
        crearCasoLink.innerHTML = '<a href="crearCaso.html"><i class="fa fa-plus"></i> Crear Caso</a>';
        menuRow2.appendChild(crearCasoLink);

        const crearPerfilLink = document.createElement('li');
        crearPerfilLink.classList.add('menu-item');
        crearPerfilLink.innerHTML = '<a href="crearPerfil.html"><i class="fa fa-user-plus"></i> Crear Perfil</a>';
        menuRow2.appendChild(crearPerfilLink);

        const modificarPerfilLink = document.createElement('li');
        modificarPerfilLink.classList.add('menu-item');
        modificarPerfilLink.innerHTML = '<a href="modificarPerfil.html"><i class="fa fa-pencil"></i> Modificar Perfil</a>';
        menuRow2.appendChild(modificarPerfilLink);
    }
}
