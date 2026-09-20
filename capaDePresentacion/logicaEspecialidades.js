function mostrarDescripcion(especialidad) {
  document.getElementById("desc-terapia").style.display = "none";
  document.getElementById("desc-quiropractica").style.display = "none";
  document.getElementById("desc-fisioterapia").style.display = "none";
  document.getElementById("desc-nutricion").style.display = "none";

  document.getElementById("desc-" + especialidad).style.display = "block";
}
