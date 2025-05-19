export default function Proyectos($section) {
  $section.innerHTML = `
  <article >
    <h2>Portafolio</h2>
    <a href="https://riccarm.github.io/Portafolio/"> <img src="./assets/portafolio.png" alt=""></a>
    <p>Este  proyecto consiste en una <b>SPA</b> (<i>single-page-application</i>), un sitio <b>estatico</b> completamente vanilla <b> HTML,CSS y javascript(JS)</b> con <b>hosting</b>
  en github-gh-pages.</p>
  </article>
  
  <article >
    <h2>React</h2>
    <a><img src="assets/gears-spinner.svg" alt=""></a>
    <p>en Construccion ...</p>
  </article>

  <article >
    <h2>Node.js</h2>
    <a><img src="assets/gears-spinner.svg" alt=""></a>
    <p> en Construccion ...</p>
  </article>
  `;
}
