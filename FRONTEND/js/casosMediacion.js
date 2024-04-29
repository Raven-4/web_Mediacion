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
                const { ID, AlumnosInvolucrados, Curso, FechaApertura, Mediador1, Mediador2, FormularioOficial, Estado, ValoracionFinal } = caso;

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

                const formularioOficialCell = document.createElement('td');
                formularioOficialCell.textContent = FormularioOficial;
                row.appendChild(formularioOficialCell);

                const estadoCell = document.createElement('td');
                const valoracionCell = document.createElement('td');

                if (rolUsuario === 'admin') {
                    const estadoSelect = document.createElement('select');
                    const estadoOptions = ['En curso', 'En seguimiento', 'Finalizado'];
                    estadoOptions.forEach(option => {
                        const estadoOption = document.createElement('option');
                        estadoOption.value = option;
                        estadoOption.textContent = option;
                        estadoSelect.appendChild(estadoOption);
                    });
                    estadoSelect.value = Estado;
                    estadoCell.appendChild(estadoSelect);
                    row.appendChild(estadoCell);

                    const valoracionSelect = document.createElement('select');
                    const valoracionOptions = ['Acuerdo', 'Sin Acuerdo', 'Derivado a Jefatura de Estudios'];
                    valoracionOptions.forEach(option => {
                        const valoracionOption = document.createElement('option');
                        valoracionOption.value = option;
                        valoracionOption.textContent = option;
                        valoracionSelect.appendChild(valoracionOption);
                    });
                    valoracionSelect.value = ValoracionFinal;
                    valoracionCell.appendChild(valoracionSelect);
                    row.appendChild(valoracionCell);

                    const guardarCell = document.createElement('td');
                    const guardarButton = document.createElement('button');
                    guardarButton.textContent = 'Guardar Cambios';
                    guardarButton.onclick = function () {
                        const nuevoEstado = estadoSelect.value;
                        const nuevaValoracion = valoracionSelect.value;
                        guardarCambios(ID, nuevoEstado, nuevaValoracion);
                    };
                    guardarCell.appendChild(guardarButton);
                    row.appendChild(guardarCell);


                } else {
                    estadoCell.textContent = Estado;
                    row.appendChild(estadoCell);

                    valoracionCell.textContent = ValoracionFinal;
                    row.appendChild(valoracionCell);

                }

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener casos de mediación:', error));
}

function guardarCambios(idCaso, nuevoEstado, nuevaValoracion) {
    const casoModificado = {
        id: idCaso,
        Estado: nuevoEstado,
        ValoracionFinal: nuevaValoracion
    };
    console.log('Guardando cambios:', casoModificado);

    fetch(`http://localhost:3000/casos-mediacion/${idCaso}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(casoModificado)
    })
            .then(response => {
            if (response.ok) {
                console.log('Cambios guardados exitosamente.');
                // Actualizar la vista si es necesario
            } else {
                console.error('Error al guardar los cambios:', response.statusText);
            }
        })
        .catch(error => console.error('Error al enviar la solicitud:', error));
}
