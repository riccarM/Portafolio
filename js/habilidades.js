export default function Habilidades($section) {
  $section.innerHTML = `
  <div class="habilidades">
    <h3>Front-end</h3>
    <ul>
      <li>
        <img src="./assets/html-svgrepo-com.svg">
        <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" >HTML</a>
      </li>
      <li>
        <img src="./assets/css3-svgrepo-com.svg">
        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" >CSS</a>
      </li>
      <li>
        <img src="./assets/javascript-svgrepo-com.svg">
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" >JavaScript</a>
      </li>
      <li>
       <img src="./assets/react-1-logo-svgrepo-com.svg">
       <a href="https://es.react.dev/" target="_blank" >React</a>
      </li>
    </ul>
  </div>

  <div class="habilidades habback">
    <h3>Back-end</h3>
    <ul>
      <li>
        <img src="./assets/nodejs-svgrepo-com.svg">
        <a href="https://nodejs.org/en" target="_blank">Node.js</a>
      </li>
      <li>
        <img src="./assets/express-svgrepo-com.svg">
        <a href="https://expressjs.com/" target="_blank">Express.js</a>
      </li>
      <li>
        <img src="./assets/db-copy-svgrepo-com.svg">
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/Database" target="_blank">Bases de datos</a>
      </li>
    </ul>
  </div>
  <div class="habilidades">
    <h3>Habilidades Blandas</h3>
    <ul>
      <li>
        Responsable
      </li>
      <li>
        Autodidacta
      </li>
      <li>
        Resilencia
      </li>
      <li>
        Pensamiento critico
      </li>
    </ul>
  </div>

  <div class="habilidades"> 
    <h3>Herramientas</h3>
    <ul>
     <li>
        <img src="./assets/git-svgrepo-com.svg">
        <a href="https://git-scm.com/" target="_blank">Git</a>
     </li>
     <li>
        <img src="./assets/github-svgrepo-com.svg">
        <a href="https://github.com/" target="_blank">GitHub</a>
     </li>
    </ul>
  </div>
  `;
}
