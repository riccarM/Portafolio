const d = document,
  $section = d.querySelector(".content"),
  $hab = d.querySelector(".habilidades"),
  $proy = d.querySelector(".proyectos"),
  $cont = d.querySelector(".contacto"),
  $pres = d.querySelector(".presentacion");

export default function Proyectos() {
  $cont.classList.remove("cinit");
  $pres.classList.remove("pinit");
  $hab.classList.remove("hinit");
  $proy.classList.add("prinit");
  $section.innerHTML = `
  <article >
  <h2>this proyect</h2>
 <a> <img src="./assets/build-svgrepo-com.svg" alt=""></a>
  <p>Este proyecto en si es mi hoja de vida esta hecho con:</p>
  </article>
  
  <article>
  <h2>Api</h2>
  <a><img src="./assets/build-svgrepo-com.svg" alt=""></a>
  <p>esta es una api rest esta  con:</p>
  </article>

  <article>
  <h2>react history</h2>
  <a><img src="./assets/build-svgrepo-com.svg" alt=""></a>
  <p> este proyecto es una base con:</p>
  </article>
  `;
}
