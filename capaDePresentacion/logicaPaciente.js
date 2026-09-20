const formPaciente = document.getElementById("formPaciente");
const pacienteSelect = document.getElementById("pacienteSelect");
const btnAgregarPaciente = document.getElementById("btnAgregarPaciente");

formPaciente.addEventListener("input", () => {
  btnAgregarPaciente.disabled = !formPaciente.checkValidity();
});

function mostrarPacientes() {
  const lista = pacienteRepo.obtenerTodos();
  document.getElementById("listaPacientes").textContent = JSON.stringify(lista, null, 2);
}

formPaciente.addEventListener("submit", (e) => {
  e.preventDefault();

  // Capturar datos del formulario
  const identificacion = document.getElementById("identificacion").value;
  const nombres = document.getElementById("nombres").value;
  const apellidos = document.getElementById("apellidos").value;

  // Crear objeto paciente con todos los datos
  const paciente = {
    id: pacienteRepo.siguienteId(),
    identificacion,
    nombres,
    apellidos
  };

  // Guardar en el repositorio
  pacienteRepo.agregar(paciente);

  // Mostrar en la lista de debug
  mostrarPacientes();

  // Actualizar select de citas
  const option = document.createElement("option");
  option.value = paciente.id;
  option.textContent = `${paciente.nombres} ${paciente.apellidos} - ${paciente.identificacion}`;
  pacienteSelect.appendChild(option);

  // Resetear formulario
  mostrarNotificacion(`Paciente ${paciente.nombres} ${paciente.apellidos} registrado con éxito`);
  formPaciente.reset();
  btnAgregarPaciente.disabled = true;
});
