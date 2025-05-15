const d = document,
  $section = d.querySelector(".content"),
  $hab = d.querySelector(".habilidades"),
  $proy = d.querySelector(".proyectos"),
  $cont = d.querySelector(".contacto"),
  $pres = d.querySelector(".presentacion");

export default function Contacto() {
  $cont.classList.add("cinit");
  $pres.classList.remove("pinit");
  $hab.classList.remove("hinit");
  $proy.classList.remove("prinit");
  $section.innerHTML = `
  <div>
  <h2>Informacion</h2>
  <ul>
  <li><img src="./assets/linkedin-rounded-svgrepo-com.svg"><a href="https://www.linkedin.com/in/jose-medoza"
 target="_blank">LinkedIn</a></li>
  <li>
  <img src="./assets/email-8-svgrepo-com.svg">
  <h4>Email-<i>ricardomendozapj@gmail.com</i></h4>
  </li>

  <li><img src="./assets/github-svgrepo-com.svg"><a href="https://github.com/riccarM" target="_blank">Github</a></li>
  </ul>
  <div>
  `;
}
