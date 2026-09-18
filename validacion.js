
function validarCampoObligatorio(campo, errorElement, mensaje) {
    if (campo.value.trim() === '') {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarLongitud(campo, errorElement, min, max, mensaje) {
    if (campo.value.length < min || campo.value.length > max) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarCorreo(campo, errorElement, mensaje) {
    const correoRegex = /^[a-zA-Z0-9._%+-]+@unicauca\.edu\.co$/;
    if (!correoRegex.test(campo.value)) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarGenero(genero, errorElement, mensaje) {
    let seleccionado = false;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function mostrarMensajeExito() {
    Toastify({
        text: "✅ ¡Registro exitoso!",
        duration: 3000,            // Duración: 3 segundos
        gravity: "top",             // Posición: arriba
        position: "right",          // Alineación: derecha
        style: {
            background: "rgba(0, 128, 0, 0.8)",  // Verde con transparencia
            color: "#fff",                      // Texto blanco
            borderRadius: "12px",               // Esquinas redondeadas
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Sombra ligera
            padding: "12px 20px"               // Más relleno
        },
        stopOnFocus: true, // No desaparecer al pasar el mouse
    }).showToast();
}

// Función principal que valida todo el formulario
function validarFormulario() {

    const inputTipoIdentificacion = document.getElementById('identificacion');
    const inputIdentificacion = document.getElementById('numero-identificacion');
    const inputNombres = document.getElementById('nombres');
    const inputApellidos = document.getElementById('apellidos');
    const inputCorreoElectronico = document.getElementById('correo-electronico');
    const inputGenero = document.getElementsByName('genero');
    const inputMedico = document.getElementById('medico');
    const inputFechaNacimiento = document.getElementById('fecha-nacimiento');

    const labelErrorTipoIdentificacion = document.getElementById('errorTipoIdentificacion');
    const labelErrorNumeroIdentificacion = document.getElementById('errorNumeroIdentificacion');
    const labelErrorNombres = document.getElementById('errorNombres');
    const labelErrorApellidos = document.getElementById('errorApellidos');
    const labelErrorCorreo = document.getElementById('errorCorreo');
    const labelErrorGenero = document.getElementById('errorGenero');
    const labelErrorMedico = document.getElementById('errorMedico');
    const labelErrorFechaNacimiento = document.getElementById('errorFechaNacimiento');

    const tipoIdentificacionValida = validarCampoObligatorio(inputTipoIdentificacion, labelErrorTipoIdentificacion, "El tipo de identificación es obligatorio");
    const identificacionValida = validarLongitud(inputIdentificacion, labelErrorNumeroIdentificacion, 6, 15, 'La identificación debe tener entre 6 y 15 caracteres');
    const nombresValidos = validarLongitud(inputNombres, labelErrorNombres, 3, 20, 'El nombre debe tener entre 3 y 20 caracteres');
    const apellidosValidos = validarLongitud(inputApellidos, labelErrorApellidos, 3, 20, 'El apellido debe tener entre 3 y 20 caracteres');
    const correoValido = validarCorreo(inputCorreoElectronico, labelErrorCorreo, 'El correo debe tener el dominio @unicauca.edu.co');
    const generoValido = validarGenero(inputGenero, labelErrorGenero, 'El género es obligatorio');
    const medicoValido = validarCampoObligatorio(inputMedico, labelErrorMedico, 'El médico es obligatorio');
    const fechaNacimientoValida = validarCampoObligatorio(inputFechaNacimiento, labelErrorFechaNacimiento, 'La fecha de nacimiento es obligatoria');

    // Si todas las validaciones son correctas, se devuelve true y se puede enviar el formulario al servidor
    if (tipoIdentificacionValida && identificacionValida && nombresValidos && apellidosValidos && correoValido && generoValido && medicoValido && fechaNacimientoValida) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formularioContacto');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        formulario.classList.add("was-validated");
        setTimeout(() => {
            formulario.reset();
        }, 2000);
        return false;
    } else {
        alert('Por favor, complete correctamente el formulario.');
        return false;
    }
}

function validarCamposAlCambiarFoco() {
    const inputTipoIdentificacion = document.getElementById('identificacion');
    const inputIdentificacion = document.getElementById('numero-identificacion');
    const inputNombres = document.getElementById('nombres');
    const inputApellidos = document.getElementById('apellidos');
    const inputCorreoElectronico = document.getElementById('correo-electronico');
    const inputGenero = document.getElementsByName('genero');
    const inputMedico = document.getElementById('medico');
    const inputFechaNacimiento = document.getElementById('fecha-nacimiento');

    const labelErrorTipoIdentificacion = document.getElementById('errorTipoIdentificacion');
    const labelErrorNumeroIdentificacion = document.getElementById('errorNumeroIdentificacion');
    const labelErrorNombres = document.getElementById('errorNombres');
    const labelErrorApellidos = document.getElementById('errorApellidos');
    const labelErrorCorreo = document.getElementById('errorCorreo');
    const labelErrorGenero = document.getElementById('errorGenero');
    const labelErrorMedico = document.getElementById('errorMedico');
    const labelErrorFechaNacimiento = document.getElementById('errorFechaNacimiento');

    inputTipoIdentificacion.addEventListener('blur', () => validarCampoObligatorio(inputTipoIdentificacion, labelErrorTipoIdentificacion, "El tipo de identificación es obligatorio"));
    inputIdentificacion.addEventListener('blur', () => validarCampoObligatorio(inputIdentificacion, labelErrorNumeroIdentificacion, 'El número de id es obligatorio.'));
    inputIdentificacion.addEventListener('blur', () => validarLongitud( inputIdentificacion, labelErrorNumeroIdentificacion, 6, 15, 'La identificación debe tener entre 6 y 15 caracteres'));
    inputNombres.addEventListener('blur', () => validarLongitud(inputNombres, labelErrorNombres, 3, 20, 'El nombre debe tener entre 3 y 20 caracteres.'));
    inputApellidos.addEventListener('blur', () => validarLongitud(inputApellidos, labelErrorApellidos, 3, 20, 'El apellido debe tener entre 3 y 20 caracteres.'));
    inputCorreoElectronico.addEventListener('blur', () => validarCorreo(inputCorreoElectronico, labelErrorCorreo, 'El correo debe tener el dominio @unicauca.edu.co'));
    inputFechaNacimiento.addEventListener('blur', () => validarCampoObligatorio(inputFechaNacimiento, labelErrorFechaNacimiento, 'La fecha de nacimiento es obligatoria'));
    inputMedico.addEventListener('blur', () => validarCampoObligatorio(inputMedico, labelErrorMedico, 'El médico es obligatorio'));
    Array.from(inputGenero).forEach(input => input.addEventListener('blur', () => validarGenero(inputGenero, labelErrorGenero, 'El género es obligatorio')));
}

document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFoco);

