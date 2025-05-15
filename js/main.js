import Contacto from "./contacto.js";
import Habilidades from "./habilidades.js";
import Presentacion from "./presentacion.js";
import Proyectos from "./proyectos.js";
const d = document,
  $section = d.querySelector(".content");
const loader = d.createElement("div");
loader.classList.add("loader");

d.addEventListener("DOMContentLoaded", (e) => {
  $section.appendChild(loader);
  setTimeout(() => {
    Presentacion();
  }, 1500);
  // $section.removeChild(loader);
});
d.addEventListener("click", (e) => {
  if (e.target.matches(".presentacion")) {
    setTimeout(() => {
      Presentacion();
    }, 1500);
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
