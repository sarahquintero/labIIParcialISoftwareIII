class CitaRepository {
  constructor() {
    this.citas = [];
  }
  obtenerTodos() {
    return this.citas;
  }
  agregar(cita) {
    this.citas.push(cita);
  }
  siguienteId() {
    return this.citas.length > 0 ? this.citas[this.citas.length - 1].id + 1 : 1;
  }
  buscarPorId(id) {
    return this.citas.find(c => c.id === id);
  }
}
const citaRepo = new CitaRepository();
