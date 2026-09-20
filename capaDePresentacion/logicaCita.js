const formCitas = document.getElementById("formCitas");
const tablaCitasBody = document.getElementById("tablaCitas");
const btnAgregarCita = document.getElementById("btnAgregarCita");

formCitas.addEventListener("input", () => {
    btnAgregarCita.disabled = !formCitas.checkValidity();
});

function mostrarCitasJSON() {
    const lista = citaRepo.obtenerTodos();
    document.getElementById("listaCitas").textContent = JSON.stringify(lista, null, 2);
}

function mostrarCitasTabla() {
    const citas = citaRepo.obtenerTodos();
    tablaCitasBody.innerHTML = "";

    if (citas.length === 0) {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td colspan="6" class="text-center text-muted">No hay citas registradas</td>`;
        tablaCitasBody.appendChild(fila);
        return;
    }

    citas.forEach(c => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
      <td>${c.id}</td>
      <td>${c.fecha}</td>
      <td>${c.horaInicio}</td>
      <td>${c.horaFin}</td>
      <td>${c.paciente.nombres} ${c.paciente.apellidos}</td>
      <td>${c.medico.nombres} ${c.medico.apellidos}</td>
    `;
        tablaCitasBody.appendChild(fila);
    });
}


// Al registrar cita
formCitas.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!formCitas.checkValidity()) {
        mostrarNotificacion("Por favor, completa correctamente el formulario", "error");
        return;
    }

    const fecha = document.getElementById("fecha").value;
    const horaInicio = document.getElementById("horaInicio").value;
    const horaFin = document.getElementById("horaFin").value;
    const pacienteId = parseInt(document.getElementById("pacienteSelect").value);
    const medicoId = parseInt(document.getElementById("medicoSelect").value);

    const paciente = pacienteRepo.buscarPorId(pacienteId);
    const medico = medicoRepo.buscarPorId(medicoId);

    if (!paciente || !medico) {
        mostrarNotificacion("Paciente o médico no encontrado", "error");
        return;
    }

    if (horaFin <= horaInicio) {
        mostrarNotificacion("La hora de fin debe ser mayor que la hora de inicio", "error");
        return;
    }


    const cita = new Cita(
        citaRepo.siguienteId(),
        fecha,
        horaInicio,
        horaFin,
        paciente,
        medico
    );

    citaRepo.agregar(cita);



    // Refrescar vistas
    mostrarCitasJSON();
    mostrarCitasTabla();

    formCitas.reset();
    btnAgregarCita.disabled = true;
});

// Crear paciente y médico de prueba
const pacientePrueba = { id: 1, nombres: "a", apellidos: "c" };
const medicoPrueba = { id: 1, nombres: "b", apellidos: "d", especialidad: "e", horario: "f" };

// Crear cita de prueba
const citaPrueba = new Cita(
    citaRepo.siguienteId(),
    "2026-09-20",
    "09:00",
    "10:00",
    pacientePrueba,
    medicoPrueba
);

// Guardar en el repositorio
citaRepo.agregar(citaPrueba);
function cargarPacientes() {
    const select = document.getElementById("pacienteSelect");
    pacienteRepo.obtenerTodos().forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = `${p.nombres} ${p.apellidos}`;
        select.appendChild(opt);
    });
}

function cargarMedicos() {
    const select = document.getElementById("medicoSelect");
    medicoRepo.obtenerTodos().forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.id;
        opt.textContent = `${m.nombres} ${m.apellidos}`;
        select.appendChild(opt);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarPacientes();
    cargarMedicos();
    mostrarCitasJSON();
    mostrarCitasTabla();
});




