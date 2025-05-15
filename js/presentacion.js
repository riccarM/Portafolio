const d = document,
  $section = d.querySelector(".content"),
  $hab = d.querySelector(".habilidades"),
  $proy = d.querySelector(".proyectos"),
  $cont = d.querySelector(".contacto"),
  $pres = d.querySelector(".presentacion");

export default function Presentacion() {
  $cont.classList.remove("cinit");
  $hab.classList.remove("hinit");
  $proy.classList.remove("prinit");
  $pres.classList.add("pinit");
  $section.innerHTML = `
  <div class="flex">
   <img  class="me" src="./assets/me.jpg" alt="Loro">
   <h3><i>Desarrollador Web full-Stack</i></h3>
   <h3><i>Ingeniero electronico</i></h3>
  </div>
  <article>
  <h2>Sobre mi</h2>
  <p>Soy <b>Jose mendoza<b> </b>Ingeniero Electronico</b> y <b>Desarrollador web full-stack</b>. Me apasiona crear soluciones digitales simples y funcionales. Siempre aprendiendo.</p>
   <button class="btn">
   <a href="./assets/curriculum-vitae-Jose-Mendoza.docx" download="curriculum-vitae-Jose-Mendoza.docx">descargar Cv</a>
   </button>
  </article>
 
  `;
}
