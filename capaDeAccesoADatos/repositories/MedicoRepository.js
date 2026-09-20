class MedicoRepository {
  constructor() {
    this.medicos = [];
  }

  agregar(medico) {
    this.medicos.push(medico);
  }

  obtenerTodos() {
    return this.medicos;
  }

  buscarPorId(id) {
    return this.medicos.find(m => m.id === id);
  }

  siguienteId() {
    if (this.medicos.length === 0) return 1;
    return Math.max(...this.medicos.map(m => m.id)) + 1;
  }
}

const medicoRepo = new MedicoRepository();