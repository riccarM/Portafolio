import Contacto from "./contacto.js";
import Habilidades from "./habilidades.js";
import Presentacion from "./presentacion.js";
import Proyectos from "./proyectos.js";
const d = document,
  $loader = d.querySelector(".loader"),
  $section = d.querySelector(".contenido"),
  $pres = d.querySelector(".pres"),
  $hab = d.querySelector(".hab"),
  $proy = d.querySelector(".proy"),
  $cont = d.querySelector(".cont");
d.addEventListener("DOMContentLoaded", (e) => {
  $pres.classList.add("cambio-color");
  setTimeout(() => {
    $loader.style.display = "none";
    Presentacion($section);
  }, 1200);
});
d.addEventListener("click", (e) => {
  if (e.target.matches(".pres")) {
    $pres.classList.add("cambio-color");
    $hab.classList.remove("cambio-color");
    $proy.classList.remove("cambio-color");
    $cont.classList.remove("cambio-color");
    Presentacion($section);
  }
  if (e.target.matches(".hab")) {
    $hab.classList.add("cambio-color");
    $pres.classList.remove("cambio-color");
    $proy.classList.remove("cambio-color");
    $cont.classList.remove("cambio-color");
    Habilidades($section);
  }
  if (e.target.matches(".proy")) {
    $proy.classList.add("cambio-color");
    $hab.classList.remove("cambio-color");
    $pres.classList.remove("cambio-color");
    $cont.classList.remove("cambio-color");
    Proyectos($section);
  }
  if (e.target.matches(".cont")) {
    $cont.classList.add("cambio-color");
    $proy.classList.remove("cambio-color");
    $hab.classList.remove("cambio-color");
    $pres.classList.remove("cambio-color");
    Contacto($section);
  }
});
