// Función para cargar y mostrar usuarios en el modal de selección
async function cargarUsuarios() {
    try {
        const response = await fetch('http://localhost:3000/usuarios');
        const usuarios = await response.json();

        const listaUsuarios = document.getElementById('listaUsuarios');
        listaUsuarios.innerHTML = '';

        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `${usuario.UserName} - ${usuario.Nombre} ${usuario.Apellidos}`;
            li.setAttribute('data-id', usuario.ID);
            li.addEventListener('click', () => {
                // Cuando se hace clic en un usuario, se guarda su ID y se resalta
                const selected = document.querySelector('.selected');
                if (selected) selected.classList.remove('selected');
                li.classList.add('selected');
            });
            listaUsuarios.appendChild(li);
        });
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
    }
}

function establecerFechaActual() {
    // Obtener el elemento de entrada de fecha
    const fechaAperturaInput = document.getElementById('fechaApertura');
    // Obtener la fecha actual en formato YYYY-MM-DD
    const fechaActual = new Date().toISOString().split('T')[0];
    // Establecer la fecha actual como valor por defecto en el campo de fecha
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

    // const datosCaso = {
    //     AlumnosInvolucrados: document.getElementById('alumnosInvolucrados').value,
    //     Curso: document.getElementById('curso').value,
    //     FechaApertura: document.getElementById('fechaApertura').value,
    //     Mediador1: document.getElementById('mediador1').textContent,
    //     Mediador2: document.getElementById('mediador2').textContent,
    //     Estado: document.getElementById('estado').value,
    //     FormularioOficial: document.getElementById('formularioOficial').files[0],
    //     IDUsuario1: document.getElementById('mediador1').getAttribute('data-id'),
    //     IDUsuario2: document.getElementById('mediador2').getAttribute('data-id'),
    // }

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
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(datosCaso)
        });

        if (response.ok) {
            console.log('Caso creado exitosamente.');

            // Obtener el ID del caso desde la respuesta
            const responseData = await response.json();
            const casoID = responseData.casoID;

            // Guardar el ID del caso en una variable
            console.log('ID del caso:', casoID);
            // Aquí puedes realizar cualquier otra acción con el ID del caso

        } else {
            setTimeout(() => {
                console.error('Error al crear el caso:', response.statusText);
            }, 100000); // Mostrar el mensaje durante 1 segundo (1000 milisegundos)
        }
    } catch (error) {
        setTimeout(() => {
            console.error('Error al enviar la solicitud:', error);
        }, 100000); // Mostrar el mensaje durante 1 segundo (1000 milisegundos)
    }
}