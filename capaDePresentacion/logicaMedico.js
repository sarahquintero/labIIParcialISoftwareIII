const formMedico = document.getElementById("formMedico");
const medicoSelect = document.getElementById("medicoSelect");
const btnAgregarMedico = document.getElementById("btnAgregarMedico");

formMedico.addEventListener("input", () => {
    btnAgregarMedico.disabled = !formMedico.checkValidity();
});

function mostrarMedicos() {
    const lista = medicoRepo.obtenerTodos();
    document.getElementById("listaMedicos").textContent = JSON.stringify(lista, null, 2);
}

formMedico.addEventListener("submit", (e) => {
    e.preventDefault();

    // Capturar datos del formulario
    const nombres = document.getElementById("nombresMedico").value;
    const apellidos = document.getElementById("apellidosMedico").value;
    const especialidad = document.getElementById("especialidad").value;
    const horario = document.getElementById("horario").value;

    // Crear objeto médico con todos los datos
    const medico = {
        id: medicoRepo.siguienteId(),
        nombres,
        apellidos,
        especialidad,
        horario
    };

    // Guardar en el repositorio
    medicoRepo.agregar(medico);

    // Mostrar en la lista de debug
    mostrarMedicos();

    // Actualizar select de citas
    const option = document.createElement("option");
    option.value = medico.id;
    option.textContent = `${medico.nombres} ${medico.apellidos} - ${medico.especialidad}`;
    medicoSelect.appendChild(option);

    

// Resetear formulario
    mostrarNotificacion(`Médico ${medico.nombres} ${medico.apellidos} registrado con éxito`);
    formMedico.reset();
    btnAgregarMedico.disabled = true;
});
