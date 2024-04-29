function mostrarCasosMediacion() {
    const rolUsuario = getRol(); // Obtener el rol del usuario
    const usuario = getCookie('usuarioSistema');
    let url = `http://localhost:3000/casos-mediacion`;

    if (rolUsuario != 'admin') {
        url = `http://localhost:3000/casos-mediacion/${usuario}`;
    }


    console.log('Obteniendo casos de mediación desde:', url);
    fetch(url)
        .then(response => response.json())
        .then(casos => {
            console.log('Casos de mediación:', casos);
            const tableBody = document.getElementById('casos-mediacion-body');

            casos.forEach(caso => {
                const { AlumnosInvolucrados, Curso, FechaApertura, Mediador1, Mediador2, Estado, ValoracionFinal } = caso;

                const row = document.createElement('tr');

                const alumnosCell = document.createElement('td');
                alumnosCell.textContent = AlumnosInvolucrados;
                row.appendChild(alumnosCell);

                const cursoCell = document.createElement('td');
                cursoCell.textContent = Curso;
                row.appendChild(cursoCell);

                const fechaCell = document.createElement('td');
                fechaCell.textContent = FechaApertura;
                row.appendChild(fechaCell);

                const mediador1Cell = document.createElement('td');
                mediador1Cell.textContent = Mediador1;
                row.appendChild(mediador1Cell);

                const mediador2Cell = document.createElement('td');
                mediador2Cell.textContent = Mediador2;
                row.appendChild(mediador2Cell);

                const estadoCell = document.createElement('td');
                estadoCell.textContent = Estado;
                row.appendChild(estadoCell);

                const valoracionCell = document.createElement('td');
                valoracionCell.textContent = ValoracionFinal;
                row.appendChild(valoracionCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener casos de mediación:', error));
}
