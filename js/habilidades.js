const d = document,
  $section = d.querySelector(".content"),
  $hab = d.querySelector(".habilidades"),
  $proy = d.querySelector(".proyectos"),
  $cont = d.querySelector(".contacto"),
  $pres = d.querySelector(".presentacion");

export default function Habilidades() {
  $cont.classList.remove("cinit");
  $proy.classList.remove("prinit");
  $pres.classList.remove("pinit");
  $hab.classList.add("hinit");
  $section.innerHTML = `
  <div class="hab">
  <h2>frontend</h2>
  <ul>
  <li> <img src="./assets/html-svgrepo-com.svg"><a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" >HTML</a></li>
  <li> <img src="./assets/css3-svgrepo-com.svg"><a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" >CSS</a></li>
  <li> <img src="./assets/javascript-svgrepo-com.svg"><a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" >JavaScript</a></li>
  <li><img src="./assets/react-1-logo-svgrepo-com.svg"><a href="https://es.react.dev/" target="_blank" >React</a></li>
  </ul>
  </div>

  <div class="hab">
  <h2>Backend</h2>
  <ul>
  <li><img src="./assets/nodejs-svgrepo-com.svg"><a href="https://nodejs.org/en" target="_blank">Node.js</a></li>
 <li><img src="./assets/express-svgrepo-com.svg"><a href="https://expressjs.com/" target="_blank">Express.js</a></li>
  <li><img src="./assets/db-copy-svgrepo-com.svg"><a href="https://developer.mozilla.org/en-US/docs/Glossary/Database" target="_blank">Base de datos</a></li>
  </ul>
  </div>

  <div class="hab">
  <h2>habilidades Blandas</h2>
  <ul>
  <li><b>Responsable</b></li>
  <li><b>autodidacta</b></li>
  <li><b>resilencia </b></li>
  <li><b>pensamiento critico</b></li>
  </ul>
  </div>

  <div class="hab">
  <h2>herramientas</h2>
  <ul>
  <li><img src="./assets/git-svgrepo-com.svg"><a href="https://git-scm.com/" target="_blank">Git</a></li>
  <li><img src="./assets/github-svgrepo-com.svg"><a href="https://github.com/" target="_blank">Github</a></li>
  </ul>
  </div>
  `;
}
