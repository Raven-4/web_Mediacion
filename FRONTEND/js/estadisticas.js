function cargarEstadisticas() {
    const rolUsuario = getRol();
    console.log('Rol del usuario:', rolUsuario);

    const estadisticasDiv = document.getElementById('estadisticas');

    if (rolUsuario === 'admin') {
        cargarEstadisticasAdmin(estadisticasDiv);
    } else {
        cargarEstadisticasUsuario(estadisticasDiv);
    }

}

function cargarEstadisticasUsuario(estadisticasDiv) {
    // Aquí debes hacer una petición al backend para obtener las estadísticas del usuario actual
    // Luego, puedes mostrarlas en estadisticasDiv
    // Ejemplo de cómo podrías hacerlo:
    const estadisticasUsuario = {
        totalCasosMediados: 10,
        casosConAcuerdo: 5,
        casosSinAcuerdo: 3,
        casosDerivadosJefatura: 2
    };

    mostrarEstadisticasUsuario(estadisticasDiv, estadisticasUsuario);
}

// Función para mostrar las estadísticas de un usuario
function mostrarEstadisticasUsuario(estadisticasDiv, estadisticas) {
    const usuarioDiv = document.createElement('div');
    usuarioDiv.innerHTML = `
            <h2>Estadísticas de ${estadisticas.nombreUsuario}</h2>
            <ul>
                <li>Número total de casos mediados: ${estadisticas.totalCasosMediados}</li>
                <li>Casos con acuerdo: ${estadisticas.casosConAcuerdo} (${((estadisticas.casosConAcuerdo / estadisticas.totalCasosMediados) * 100).toFixed(2)}%)</li>
                <li>Casos sin acuerdo: ${estadisticas.casosSinAcuerdo} (${((estadisticas.casosSinAcuerdo / estadisticas.totalCasosMediados) * 100).toFixed(2)}%)</li>
                <li>Casos derivados a Jefatura de Estudios: ${estadisticas.casosDerivadosJefatura} (${((estadisticas.casosDerivadosJefatura / estadisticas.totalCasosMediados) * 100).toFixed(2)}%)</li>
            </ul>
        `;
    estadisticasDiv.appendChild(usuarioDiv);
}
