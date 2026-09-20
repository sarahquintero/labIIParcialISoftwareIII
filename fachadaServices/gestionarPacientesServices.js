class GestionarPacientes {
  constructor(repoPaciente) {
    this.repoPaciente = repoPaciente;
  }

  registrarPaciente(identificacion, nombre, apellido) {
    const id = this.repoPaciente.siguienteId();
    const paciente = new Paciente(identificacion, nombre, apellido);
    this.repoPaciente.agregar(paciente);
    return paciente;
  }

  listarPacientes() {
    return this.repoPaciente.obtenerTodos();
  }

  buscarPaciente(id) {
    return this.repoPaciente.buscarPorId(id);
  }
}

const gestionarPacientes = new GestionarPacientes(pacienteRepo);

