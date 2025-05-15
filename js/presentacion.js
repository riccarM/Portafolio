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
  <div>
   <img src="./assets/imagen-vectorial.webp" alt="Loro">
   <h2><i>Desarrollador Web full-Stack</i></h2>
   <h3><i>Ingeniero electronico</i></h3>
  </div>
  <article>
  <h2>Sobre mi</h2>
  <p>soy Jose mendoza ingeniero electronico dedicado a aprender a programar</p>
   <button class="btn">
   <a  href="./assets/calculo de horas de nuevo.txt" download="calculo de horasde nuevo.txt">descargar Cv</a>
   </button>
  </article>
 
  `;
}
