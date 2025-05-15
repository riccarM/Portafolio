//importacion de funciones
import Contacto from "./contacto.js";
import Habilidades from "./habilidades.js";
import Presentacion from "./presentacion.js";
import Proyectos from "./proyectos.js";
//variables y manipulacion del Dom
const d = document,
  $section = d.querySelector(".content"),
  $loader = d.querySelector(".loader");
// evento principal

d.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    $loader.style.display = "none";
    Presentacion();
  }, 1500);
});
// evento asignado para cla visualcion del contenido
d.addEventListener("click", (e) => {
  if (e.target.matches(".presentacion")) {
    Presentacion();
  }
  if (e.target.matches(".habilidades")) {
    Habilidades();
  }
  if (e.target.matches(".proyectos")) {
    Proyectos();
  }
  if (e.target.matches(".contacto")) {
    Contacto();
  }
});
