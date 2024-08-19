// Función para cargar y mostrar usuarios en el modal de selección
async function cargarUsuarios() {
    try {
        const response = await fetch('http://localhost:3000/usuarios');
        const usuarios = await response.json();

        const listaUsuarios = document.getElementById('listaUsuarios');
        listaUsuarios.innerHTML = '';

        const mediador1 = document.getElementById('mediador1').getAttribute('data-id');
        const mediador2 = document.getElementById('mediador2').getAttribute('data-id');

        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `${usuario.UserName} - ${usuario.Nombre} ${usuario.Apellidos}`;
            li.setAttribute('data-id', usuario.ID);

            if (usuario.ID == mediador1 || usuario.ID == mediador2) {
                li.classList.add('disabled');
                li.style.color = '#ccc'; 
                li.style.pointerEvents = 'none'; 
            } else {
                li.addEventListener('click', () => {
                    const selected = document.querySelector('.selected');
                    if (selected) selected.classList.remove('selected');
                    li.classList.add('selected');
                });
            }

            listaUsuarios.appendChild(li);
        });

        buscarUsuario();

    } catch (error) {
        console.error('Error al cargar usuarios:', error);
    }
}

function establecerFechaActual() {
    const fechaAperturaInput = document.getElementById('fechaApertura');
    const fechaActual = new Date().toISOString().split('T')[0];
    fechaAperturaInput.value = fechaActual;
}


// Función para abrir el modal de selección de usuarios
function abrirModalSeleccionarUsuarios(mediador) {
    cargarUsuarios();
    document.getElementById('modalSeleccionarUsuarios').style.display = 'block';

    // Guardar el mediador actual en un atributo de datos del modal para usarlo posteriormente
    document.getElementById('modalSeleccionarUsuarios').setAttribute('data-mediador', mediador);

}

// Función para cerrar el modal de selección de usuarios
function cerrarModalSeleccionarUsuarios() {
    document.getElementById('modalSeleccionarUsuarios').style.display = 'none';
}

// Función para confirmar la selección de usuarios y mostrarlo en el formulario
function confirmarSeleccionUsuarios() {

    const selectedUser = document.querySelector('.selected');
    const mediador = document.getElementById('modalSeleccionarUsuarios').getAttribute('data-mediador');

    if (selectedUser) {
        const userID = selectedUser.getAttribute('data-id');
        const userName = selectedUser.textContent.split(' - ')[1];

        // Mostrar el usuario seleccionado en el campo correspondiente del formulario
        document.getElementById(mediador).textContent = userName;
        document.getElementById(mediador).setAttribute('data-id', userID);
        console.log(userName, userID)

        // Cerrar el modal de selección de usuarios
        cerrarModalSeleccionarUsuarios();
    } else {
        alert('Selecciona un usuario antes de confirmar.');
    }
}

function crearCaso() {

    // Verificar si el formulario es válido antes de enviar la solicitud
    const form = document.getElementById('crearCasoForm');

    if (!form.checkValidity()) {
        alert('Por favor completa todos los campos requeridos.');
        return;
    }

    file = document.getElementById('formularioOficial').files[0];
    console.log(file);
    // Llamar a la función para enviar la solicitud de creación del caso
    solicitudCrearCaso();

}

async function solicitudCrearCaso() {
    const datosCaso = new FormData();

    datosCaso.append('AlumnosInvolucrados', document.getElementById('alumnosInvolucrados').value);
    datosCaso.append('Curso', document.getElementById('curso').value);
    datosCaso.append('FechaApertura', document.getElementById('fechaApertura').value);
    datosCaso.append('Mediador1', document.getElementById('mediador1').textContent);
    datosCaso.append('Mediador2', document.getElementById('mediador2').textContent);
    datosCaso.append('Estado', document.getElementById('estado').value);
    datosCaso.append('FormularioOficial', document.getElementById('formularioOficial').files[0]);
    datosCaso.append('IDUsuario1', document.getElementById('mediador1').getAttribute('data-id'));
    datosCaso.append('IDUsuario2', document.getElementById('mediador2').getAttribute('data-id'));


    try {
        const response = await fetch('http://localhost:3000/casos-mediacion', {
            method: 'POST',
            body: datosCaso
        });

        if (response.ok) {
            console.log('Caso creado exitosamente.');

            // Obtener el ID del caso desde la respuesta
            const responseData = await response.json();
            const casoID = responseData.casoID;

            // Guardar el ID del caso en una variable
            console.log('ID del caso:', casoID);

        } else {
            console.error('Error al crear el caso:', response.statusText);
        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
}

function buscarUsuario() {
    const input = document.getElementById('busquedaUsuario');
    const filter = input.value.toLowerCase();
    const listaUsuarios = document.getElementById('listaUsuarios');
    const items = listaUsuarios.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent || items[i].innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
}

async function descargarFormularioBlanco() {
    console.log('Descargando formulario en blanco...');
    try {
        const response = await fetch('http://localhost:3000/formulario-blanco');
        if (response.ok) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'formulario_blanco.docx';
            a.click();
            URL.revokeObjectURL(url);
        } else {
            console.error('Error al descargar el formulario en blanco:', response.statusText);
        }
    } catch (error) {
        console.error('Error al descargar el formulario en blanco:', error);
    }
}

function actualizarCursos() {
    const nivelSelect = document.getElementById("nivel");
    const cursoSelect = document.getElementById("curso");

    cursoSelect.innerHTML = "";

    if (nivelSelect.value === "ESO") {
        const opcionesESO = ["1º ESO", "2º ESO", "3º ESO", "4º ESO"];
        opcionesESO.forEach(opcion => {
            const nuevaOpcion = document.createElement("option");
            nuevaOpcion.value = opcion;
            nuevaOpcion.text = opcion;
            cursoSelect.add(nuevaOpcion);
        });
    } else if (nivelSelect.value === "Bachiller") {
        const opcionesBachiller = ["1º Bachiller", "2º Bachiller"];
        opcionesBachiller.forEach(opcion => {
            const nuevaOpcion = document.createElement("option");
            nuevaOpcion.value = opcion;
            nuevaOpcion.text = opcion;
            cursoSelect.add(nuevaOpcion);
        });
    }
}
