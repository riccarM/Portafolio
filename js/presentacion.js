export default function Presentacion($section) {
  $section.innerHTML = `
  <div class="perfil flexcc">
    <img src="./assets/me.jpg" alt="Loro">
    <h3>Desarrollador Web full-Stack</h3>
    <h3>Ingeniero Electronico</h3>
  </div>

  <div class="sobre-mi flexcc">
    <h2>Sobre mi</h2>
    <hr/>
    <p>Soy <b>Jose Mendoza Plata<b> </b>Ingeniero Electronico</b> y <b>Desarrollador web Full-stack</b>. Me apasiona crear soluciones digitales simples y funcionales. Siempre aprendiendo.</p>
    <a  href="./assets/curriculum-vitae-Jose-Mendoza.pdf" download="curriculum-vitae-Jose-Mendoza.pdf">descargar Cv</a>
  </div>

  `;
}
