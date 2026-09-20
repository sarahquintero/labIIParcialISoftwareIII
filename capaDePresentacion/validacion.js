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
    const valor = campo.value.trim();
    if (valor === '') {
        return true;
    }
    if (valor.length < min || valor.length > max) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarCorreo(campo, errorElement, mensaje) {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(campo.value)) {
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
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "rgba(0, 128, 0, 0.8)",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            padding: "12px 20px"
        },
        stopOnFocus: true,
    }).showToast();
}

/* -------------------- MÉDICOS -------------------- */
function validarFormularioMedico() {
    const inputNombres = document.getElementById('nombresMedico');
    const inputApellidos = document.getElementById('apellidosMedico');
    const inputEspecialidad = document.getElementById('especialidad');
    const inputHorario = document.getElementById('horario');
    const inputExperiencia = document.getElementById('experiencia');

    const labelErrorNombres = document.getElementById('errorNombresMedico');
    const labelErrorApellidos = document.getElementById('errorApellidosMedico');
    const labelErrorEspecialidad = document.getElementById('errorEspecialidad');
    const labelErrorHorario = document.getElementById('errorHorario');
    const labelErrorExperiencia = document.getElementById('errorExperiencia');

    const nombresValidos = validarCampoObligatorio(inputNombres, labelErrorNombres, 'El nombre es obligatorio') &&
        validarLongitud(inputNombres, labelErrorNombres, 3, 20, 'El nombre debe tener entre 3 y 20 caracteres');

    const apellidosValidos = validarCampoObligatorio(inputApellidos, labelErrorApellidos, 'El apellido es obligatorio') &&
        validarLongitud(inputApellidos, labelErrorApellidos, 3, 20, 'El apellido debe tener entre 3 y 20 caracteres');

    const especialidadValida = validarCampoObligatorio(inputEspecialidad, labelErrorEspecialidad, 'La especialidad es obligatoria') &&
        validarLongitud(inputEspecialidad, labelErrorEspecialidad, 3, 40, 'La especialidad debe tener entre 3 y 40 caracteres');

    const horarioValido = validarCampoObligatorio(inputHorario, labelErrorHorario, 'El horario de atención es obligatorio') &&
        validarLongitud(inputHorario, labelErrorHorario, 3, 40, 'El horario debe tener entre 3 y 40 caracteres');

    const experienciaValida = validarCampoObligatorio(inputExperiencia, labelErrorExperiencia, 'Los años de experiencia son obligatorios');

    if (nombresValidos && apellidosValidos && especialidadValida && horarioValido && experienciaValida) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formMedico');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => formulario.reset(), 2000);
        return false;
    } else {
        alert('Por favor, complete correctamente el formulario.');
        return false;
    }
}
function validarCamposMedicoAlCambiarFoco() {
    const inputNombres = document.getElementById('nombresMedico');
    const inputApellidos = document.getElementById('apellidosMedico');
    const inputEspecialidad = document.getElementById('especialidadMedico');
    const inputHorario = document.getElementById('horarioMedico');
    const inputExperiencia = document.getElementById('experienciaMedico');

    const errorNombres = document.getElementById('errorNombresMedico');
    const errorApellidos = document.getElementById('errorApellidosMedico');
    const errorEspecialidad = document.getElementById('errorEspecialidad');
    const errorHorario = document.getElementById('errorHorario');
    const errorExperiencia = document.getElementById('errorExperiencia');

    inputNombres.addEventListener('blur', () => {
        if (!validarCampoObligatorio(inputNombres, errorNombres, 'El nombre es obligatorio')) return;
        validarLongitud(inputNombres, errorNombres, 3, 20, 'El nombre debe tener entre 3 y 20 caracteres');
    });

    inputApellidos.addEventListener('blur', () => {
        if (!validarCampoObligatorio(inputApellidos, errorApellidos, 'El apellido es obligatorio')) return;
        validarLongitud(inputApellidos, errorApellidos, 3, 20, 'El apellido debe tener entre 3 y 20 caracteres');
    });

    inputEspecialidad.addEventListener('blur', () => {
        if (!validarCampoObligatorio(inputEspecialidad, errorEspecialidad, 'La especialidad es obligatoria')) return;
        validarLongitud(inputEspecialidad, errorEspecialidad, 3, 40, 'La especialidad debe tener entre 3 y 40 caracteres');
    });

    inputHorario.addEventListener('blur', () => {
        if (!validarCampoObligatorio(inputHorario, errorHorario, 'El horario es obligatorio')) return;
        validarLongitud(inputHorario, errorHorario, 3, 40, 'El horario debe tener entre 3 y 40 caracteres');
    });

    inputExperiencia.addEventListener('blur', () => {
        validarCampoObligatorio(inputExperiencia, errorExperiencia, 'Los años de experiencia son obligatorios');
    });
}


/* -------------------- PACIENTES -------------------- */
function validarFormularioPaciente() {
    const tipoIdentificacion = document.getElementById('tipoIdentificacion');
    const identificacion = document.getElementById('identificacion');
    const nombres = document.getElementById('nombres');
    const apellidos = document.getElementById('apellidos');
    const correo = document.getElementById('correo');
    const genero = document.querySelector('input[name="genero"]:checked');
    const fechaNacimiento = document.getElementById('fechaNacimiento');

    const errorTipoIdentificacion = document.getElementById('errorTipoIdentificacion');
    const errorIdentificacion = document.getElementById('errorIdentificacion');
    const errorNombres = document.getElementById('errorNombres');
    const errorApellidos = document.getElementById('errorApellidos');
    const errorCorreo = document.getElementById('errorCorreo');
    const errorGenero = document.getElementById('errorGenero');
    const errorFechaNacimiento = document.getElementById('errorFechaNacimiento');
    tipoIdentificacion.addEventListener('change', () => {
        validarCampoObligatorio(tipoIdentificacion, errorTipoIdentificacion, 'Seleccione un tipo de identificación');
    });


    const tipoIdentificacionValido = validarCampoObligatorio(tipoIdentificacion, errorTipoIdentificacion, 'Seleccione un tipo de identificación');
    const identificacionValida = validarCampoObligatorio(identificacion, errorIdentificacion, 'El número de identificación es obligatorio');
    const nombresValidos = validarCampoObligatorio(nombres, errorNombres, 'El nombre es obligatorio') &&
        validarLongitud(nombres, errorNombres, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
    const apellidosValidos = validarCampoObligatorio(apellidos, errorApellidos, 'El apellido es obligatorio') &&
        validarLongitud(apellidos, errorApellidos, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
    const correoValido = validarCorreo(correo, errorCorreo, 'Ingrese un correo válido');
    const generoValido = genero ? (errorGenero.textContent = "", true) : (errorGenero.textContent = "Seleccione un género", false);
    const fechaNacimientoValida = validarCampoObligatorio(fechaNacimiento, errorFechaNacimiento, 'La fecha de nacimiento es obligatoria');

    // Resultado final
    if (tipoIdentificacionValido && identificacionValida && nombresValidos && apellidosValidos && correoValido && generoValido && fechaNacimientoValida) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formPaciente');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => formulario.reset(), 2000);
        return false;
    } else {
        alert('Por favor, complete correctamente el formulario de paciente.');
        return false;
    }
}

function validarCamposPacienteAlCambiarFoco() {
    const tipoIdentificacion = document.getElementById('tipoIdentificacion');
    const identificacion = document.getElementById('identificacion');
    const nombres = document.getElementById('nombres');
    const apellidos = document.getElementById('apellidos');
    const correo = document.getElementById('correo');
    const fechaNacimiento = document.getElementById('fechaNacimiento');

    const errorTipoIdentificacion = document.getElementById('errorTipoIdentificacion');
    const errorIdentificacion = document.getElementById('errorIdentificacion');
    const errorNombres = document.getElementById('errorNombres');
    const errorApellidos = document.getElementById('errorApellidos');
    const errorCorreo = document.getElementById('errorCorreo');
    const errorGenero = document.getElementById('errorGenero');
    const errorFechaNacimiento = document.getElementById('errorFechaNacimiento');

    // Tipo de identificación
    tipoIdentificacion.addEventListener('blur', () => {
        if (tipoIdentificacion.value === "") {
            errorTipoIdentificacion.textContent = "Seleccione un tipo de identificación";
        } else {
            errorTipoIdentificacion.textContent = "";
        }
    });


    // Número de identificación
    identificacion.addEventListener('blur', () => {
        validarCampoObligatorio(identificacion, errorIdentificacion, 'El número de identificación es obligatorio');
    });

    // Nombres
    nombres.addEventListener('blur', () => {
        if (!validarCampoObligatorio(nombres, errorNombres, 'El nombre es obligatorio')) return;
        validarLongitud(nombres, errorNombres, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
    });

    // Apellidos
    apellidos.addEventListener('blur', () => {
        if (!validarCampoObligatorio(apellidos, errorApellidos, 'El apellido es obligatorio')) return;
        validarLongitud(apellidos, errorApellidos, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
    });

    // Correo
    correo.addEventListener('blur', () => {
        validarCorreo(correo, errorCorreo, 'Ingrese un correo válido');
    });

    // Género (radio buttons)
    document.querySelectorAll('input[name="genero"]').forEach(radio => {
        radio.addEventListener('change', () => {
            if (document.querySelector('input[name="genero"]:checked')) {
                errorGenero.textContent = '';
            } else {
                errorGenero.textContent = 'Seleccione un género';
            }
        });
    });

    // Fecha de nacimiento
    fechaNacimiento.addEventListener('blur', () => {
        validarCampoObligatorio(fechaNacimiento, errorFechaNacimiento, 'La fecha de nacimiento es obligatoria');
    });
}




/* -------------------- CITAS -------------------- */
function validarFormularioCita() {
    const fecha = document.getElementById('fecha');
    const horaInicio = document.getElementById('horaInicio');
    const horaFin = document.getElementById('horaFin');
    const paciente = document.getElementById('pacienteSelect');
    const medico = document.getElementById('medicoSelect');

    const errorFecha = document.getElementById('errorFecha');
    const errorHoraInicio = document.getElementById('errorHoraInicio');
    const errorHoraFin = document.getElementById('errorHoraFin');
    const errorPaciente = document.getElementById('errorPaciente');
    const errorMedico = document.getElementById('errorMedico');

    // Validaciones individuales
    const fechaValida = validarCampoObligatorio(fecha, errorFecha, 'La fecha es obligatoria');
    const horaInicioValida = validarCampoObligatorio(horaInicio, errorHoraInicio, 'La hora de inicio es obligatoria');
    const horaFinValida = validarCampoObligatorio(horaFin, errorHoraFin, 'La hora de fin es obligatoria');

    const horasCorrectas = !(
        horaInicio.value &&
        horaFin.value &&
        horaFin.value <= horaInicio.value
    );

    if (!horasCorrectas) {
        errorHoraFin.textContent = 'La hora de fin debe ser mayor que la hora de inicio';
    } else {
        errorHoraFin.textContent = '';
    }


    const pacienteValido = validarCampoObligatorio(pacienteSelect, errorPaciente, 'Debe seleccionar un paciente');
    const medicoValido = validarCampoObligatorio(medicoSelect, errorMedico, 'Debe seleccionar un médico');

    // Resultado final
    if (fechaValida && horaInicioValida && horaFinValida && horasCorrectas && pacienteValido && medicoValido) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formCitas');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => formulario.reset(), 2000);
        return false;
    } else {
        alert('Por favor, complete correctamente el formulario de citas.');
        return false;
    }
}


function validarCamposCitaAlCambiarFoco() {
    const fecha = document.getElementById('fecha');
    const horaInicio = document.getElementById('horaInicio');
    const horaFin = document.getElementById('horaFin');
    const medicoSelect = document.getElementById('medicoSelect');
    const pacienteSelect = document.getElementById('pacienteSelect');

    const errorFecha = document.getElementById('errorFecha');
    const errorHoraInicio = document.getElementById('errorHoraInicio');
    const errorHoraFin = document.getElementById('errorHoraFin');
    const errorMedico = document.getElementById('errorMedico');
    const errorPaciente = document.getElementById('errorPaciente');

    fecha.addEventListener('blur', () => validarCampoObligatorio(fecha, errorFecha, 'La fecha es obligatoria'));

    horaInicio.addEventListener('blur', () => validarCampoObligatorio(horaInicio, errorHoraInicio, 'La hora de inicio es obligatoria'));

    horaFin.addEventListener('blur', () => {
        if (!validarCampoObligatorio(horaFin, errorHoraFin, 'La hora de fin es obligatoria')) return;
        if (horaInicio.value && horaFin.value && horaFin.value <= horaInicio.value) {
            errorHoraFin.textContent = 'La hora de fin debe ser mayor que la hora de inicio';
        }
    });

    medicoSelect.addEventListener('blur', () => {
        validarCampoObligatorio(medicoSelect, errorMedico, 'Debe seleccionar un médico');
    });

    pacienteSelect.addEventListener('blur', () => {
        validarCampoObligatorio(pacienteSelect, errorPaciente, 'Debe seleccionar un paciente');
    });
}


document.addEventListener('DOMContentLoaded', validarCamposCitaAlCambiarFoco);

document.addEventListener('DOMContentLoaded', validarCamposPacienteAlCambiarFoco);

document.addEventListener('DOMContentLoaded', validarCamposMedicoAlCambiarFoco);

document.addEventListener('DOMContentLoaded', () => {
    validarCamposPacienteAlCambiarFoco();
    validarCamposMedicoAlCambiarFoco();
    validarCamposCitaAlCambiarFoco();
});

/* -------------------- EVENTOS -------------------- */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formPaciente').addEventListener('submit', e => {
        e.preventDefault();
        validarFormularioPaciente();
    });

    document.getElementById('formMedico').addEventListener('submit', e => {
        e.preventDefault();
        validarFormularioMedico();
    });

    document.getElementById('formCitas').addEventListener('submit', e => {
        e.preventDefault();
        validarFormularioCita();
    });
});
