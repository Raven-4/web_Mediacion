function mostrarCasosMediacion() {
    const rolUsuario = getRol(); // Obtener el rol del usuario
    const usuario = getCookie('usuarioSistema');
    let url = `http://localhost:3000/casos-mediacion`;

    if (rolUsuario != 'admin') {
        url = `http://localhost:3000/casos-mediacion/${usuario}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(casos => {
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
                const fechaAperturaDate = new Date(FechaApertura);
                const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                fechaCell.textContent = fechaAperturaDate.toLocaleDateString('es-ES', options);
                row.appendChild(fechaCell);

                const mediador1Cell = document.createElement('td');
                mediador1Cell.textContent = Mediador1;
                row.appendChild(mediador1Cell);

                const mediador2Cell = document.createElement('td');
                mediador2Cell.textContent = Mediador2;
                row.appendChild(mediador2Cell);

                // Celda para el formulario oficial
                const formularioOficialCell = document.createElement('td');
                const pdfIcon = document.createElement('i');
                pdfIcon.classList.add('fa', 'fa-file-pdf-o'); // Clases de Font Awesome para el icono PDF
                pdfIcon.setAttribute('aria-hidden', 'true');
                formularioOficialCell.appendChild(pdfIcon);

                // Input tipo file para seleccionar nuevo archivo PDF
                const nuevoPDFInput = document.createElement('input');
                nuevoPDFInput.setAttribute('type', 'file');
                formularioOficialCell.appendChild(nuevoPDFInput);

                // Agregar evento de clic para descargar el PDF
                pdfIcon.addEventListener('click', () => {
                    descargarPDF(FormularioOficial);
                    console.log('Descargando PDF:', FormularioOficial);
                });

                // Agregar el nombre del archivo PDF
                const pdfFileName = document.createElement('span');
                pdfFileName.textContent = FormularioOficial;

                // Agregar el campo al row
                row.appendChild(formularioOficialCell);

                const estadoCell = document.createElement('td');
                const valoracionCell = document.createElement('td');

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
                    guardarCambios(ID, nuevoEstado, nuevaValoracion, nuevoPDFInput.files[0]);
                };
                guardarCell.appendChild(guardarButton);
                row.appendChild(guardarCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener casos de mediación:', error));
}

function guardarCambios(idCaso, nuevoEstado, nuevaValoracion, nuevoArchivoPDF) {
    const formData = new FormData();
    formData.append('id', idCaso);
    formData.append('Estado', nuevoEstado);
    formData.append('ValoracionFinal', nuevaValoracion);
    formData.append('FormularioOficial', nuevoArchivoPDF);

    console.log('Guardando cambios:', formData);

    fetch(`http://localhost:3000/casos-mediacion/${idCaso}`, {
        method: 'PUT',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                console.log('Cambios guardados exitosamente.');
            } else {
                console.error('Error al guardar los cambios:', response.statusText);
            }
        })
        .catch(error => console.error('Error al enviar la solicitud:', error));
}

async function descargarPDF(nombreArchivo) {
    console.log('Descargando PDF:', nombreArchivo);
    try {
        const response = await fetch(`http://localhost:3000/casos-mediacion/pdf/${nombreArchivo}`);
        if (response.ok) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = nombreArchivo;
            a.click();
            URL.revokeObjectURL(url);
        } else {
            console.error('Error al descargar el PDF:', response.statusText);
        }
    } catch (error) {
        console.error('Error al descargar el PDF:', error);
    }
}

function filtrarCasos() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filterEstado = document.getElementById('filterEstado').value;
    const filterValoracion = document.getElementById('filterValoracion').value;


    const tableBody = document.getElementById('casos-mediacion-body');
    const rows = tableBody.getElementsByTagName('tr');

    Array.from(rows).forEach(row => {
        const alumnosInvolucrados = row.cells[0].textContent.toLowerCase();
        const curso = row.cells[1].textContent.toLowerCase();
        const mediador1 = row.cells[3].textContent.toLowerCase();
        const mediador2 = row.cells[4].textContent.toLowerCase();
        const estado = row.cells[6].querySelector('select').value;
        const valoracionFinal = row.cells[7].querySelector('select').value;

        const matchesSearch = alumnosInvolucrados.includes(searchInput) || curso.includes(searchInput) || mediador1.includes(searchInput) || mediador2.includes(searchInput);
        const matchesEstado = filterEstado === "" || estado === filterEstado;
        const matchesValoracion = filterValoracion === "" || valoracionFinal === filterValoracion;

        if (matchesSearch && matchesEstado && matchesValoracion) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function buscarConEnter(event) {
    if (event.key === "Enter") {
        filtrarCasos();
    }
}
