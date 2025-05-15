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
  <aside>
  <h3>Portafolio</h3>
  <br/>
  <a><img  src="./assets/portafolio.png" alt="portafolio"></a>
  <p> Este  proyecto consiste en una <b>SPA</b> (<i>single-page-application</i>), un sitio <b>estatico</b> completamente vanilla <b> HTML,CSS y javascript(JS)</b> con <b>hosting</b>
  en github-gh-pages.
  </p>
  </aside>
  <aside>
  <h3>Default</h3>
  <br/>
  <a><img src="./assets/circles.svg" alt="circles" width="50px" height="50px"></a>
  <p>En construccion</p>
  </aside>
  <aside>
  <h3>Default</h3>
  <br/>
  <a><img src="./assets/circles.svg" alt="circles" width="50px" height="50px"></a>
  <p>En construccion</p>
  </aside>
  `;
}
