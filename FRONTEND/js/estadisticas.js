function mostrarEstadisticas() {
    const rolUsuario = getRol(); // Obtener el rol del usuario
    const usuario = getCookie('usuarioSistema');
    const nombre = getCookie('nombreUsuario');
    console.log('usuario', nombre);
    let url = `http://localhost:3000/casos-mediacion`;

    // if (rolUsuario != 'admin') {
    //     url = `http://localhost:3000/casos-mediacion/${usuario}`;
    // }

    fetch(url)
        .then(response => response.json())
        .then(casos => {
            // Filtrar casos según el rol del usuario
            const casosFiltrados = rolUsuario === 'admin' ? casos.filter(caso => caso.Estado === 'Finalizado') : casos.filter(caso => (caso.Mediador1 === nombre || caso.Mediador2 === nombre) && caso.Estado === 'Finalizado');
            //const casosFiltrados = rolUsuario === 'admin' ? casos : casos.filter(caso => caso.Mediador1 === usuario || caso.Mediador2 === usuario);
            //const casosFiltrados = casos.filter(caso => caso.Estado === 'Finalizado' && (caso.Mediador1 === nombre || caso.Mediador2 === nombre));

            // Calcular estadísticas globales
            const totalCasos = casosFiltrados.length;
            const estadisticasGlobales = {
                'Acuerdo': 0,
                'Sin Acuerdo': 0,
                'Derivado a Jefatura de Estudios': 0
            };

            const estadisticasPersonales = {
                'Acuerdo': 0,
                'Sin Acuerdo': 0,
                'Derivado a Jefatura de Estudios': 0,
            };

            // Calcular estadísticas por usuario si el usuario es admin
            const estadisticasPorUsuario = {};

            if (rolUsuario === 'admin') {
                casosFiltrados.forEach(caso => {
                    if (caso.ValoracionFinal !== null) {
                        estadisticasGlobales[`${caso.ValoracionFinal}`]++;
                        if (!estadisticasPorUsuario[caso.Mediador1]) {
                            estadisticasPorUsuario[caso.Mediador1] = {
                                'Acuerdo': 0,
                                'Sin Acuerdo': 0,
                                'Derivado a Jefatura de Estudios': 0,
                                'TotalCasos': 0
                            };
                        }
                        if (!estadisticasPorUsuario[caso.Mediador2]) {
                            estadisticasPorUsuario[caso.Mediador2] = {
                                'Acuerdo': 0,
                                'Sin Acuerdo': 0,
                                'Derivado a Jefatura de Estudios': 0,
                                'TotalCasos': 0
                            };
                        }
                        estadisticasPorUsuario[caso.Mediador1][`${caso.ValoracionFinal}`]++;
                        estadisticasPorUsuario[caso.Mediador2][`${caso.ValoracionFinal}`]++;
                        estadisticasPorUsuario[caso.Mediador1]['TotalCasos']++;
                        estadisticasPorUsuario[caso.Mediador2]['TotalCasos']++;
                    }
                });
            } else {
                casosFiltrados.forEach(caso => {
                    if (caso.ValoracionFinal !== null) {
                        estadisticasPersonales[`${caso.ValoracionFinal}`]++;
                    }
                });

            }

            // Mostrar las estadísticas en el HTML
            const estadisticasDiv = document.getElementById('estadisticas');
            estadisticasDiv.innerHTML = `<h2>Estadísticas ${rolUsuario === 'admin' ? 'globales' : 'personales'}</h2>`;
            estadisticasDiv.innerHTML += `<p>Total de casos finalizados: ${totalCasos}</p>`;
            Object.entries(rolUsuario === 'admin' ? estadisticasGlobales : estadisticasPersonales).forEach(([valor, cantidad]) => {
                const porcentaje = (cantidad / totalCasos) * 100;
                estadisticasDiv.innerHTML += `<p>${valor}: ${cantidad} casos (${porcentaje.toFixed(2)}%)</p>`;
            });

            if (rolUsuario === 'admin') {
                estadisticasDiv.innerHTML += '<h3>Estadísticas por usuario:</h3>';
                Object.entries(estadisticasPorUsuario).forEach(([usuario, estadisticas]) => {
                    estadisticasDiv.innerHTML += `<h4>Usuario: ${usuario}</h4>`;
                    estadisticasDiv.innerHTML += `<p>Total de casos finalizados: ${estadisticas.TotalCasos}</p>`;
                    Object.entries(estadisticas).forEach(([valor, cantidad]) => {
                        if (valor !== 'TotalCasos') {
                            const porcentaje = (cantidad / estadisticas.TotalCasos) * 100;
                            estadisticasDiv.innerHTML += `<p>${valor}: ${cantidad} casos (${porcentaje.toFixed(2)}%)</p>`;
                        }
                    });
                });
            }
        })
        .catch(error => console.error('Error al obtener casos de mediación:', error));
}
