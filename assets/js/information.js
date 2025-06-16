window.addEventListener("DOMContentLoaded", () => {
  let loader = document.querySelector(".loader");
  let layout = document.querySelector(".layout");
  let boxesContent = "";
  let dataBoxes = [
    {
      title: "Habilidades:",
      description:
        "<p>Actualmente cuento con habilidades avanzadas y básicas de programación, la mayoria enfocadas en el desarrollo web pero próximamente añadiré más.</p>",
      list: "<li>JavaScript - Intermedio</li> <li>Java - Básico</li> <li>SQL - Básico</li> <li>HTML - Avanzado</li> <li>CSS - Intermedio</li> <li>Angular - Básico</li> <li>React - Intermedio</li> <li>NextJs - Intermedio</li> <li>Tailwind - Intermedio</li>",
      footer: "Pd. Esta página es 100% mi creación.",
    },
    {
      title: "Trayectoria educacional:",
      description: "",
      list: "<li>Carrera Tecnica en Contabilidad en el Centro de Bachillerato Tecnologico y Agropecuario 7.</li> <li>Carrera Trunca en la Facultad de Ciencias Fisico Matematicas en la Universidad Michoacana de San Nicolas de Hidalgo.</li> <li>Licenciatura en Sistemas Computacionales en la Universidad Tecnologica Latinoamericana.</li>",
      footer:
        "Actualmente continuo mis estudios en UTEL cursando el 5to cuatrimestre.",
    },
    {
      title: "Trayectoria Laboral:",
      description: "",
      list: "<li>Detallador automotriz en Pintura y Hojalateria Automotriz Liera.</li> <li>Auditor de campo en Encuesta MX.</li> <li>Gerente de sucursal en Soleman.</li>  <li>Supervisor de Mesas en Caliente Casino.</li> <li>Piloto de Robots en Remotics.</li> <li>Freelancer en Desarrollo de aplicaciones web con <span><a href='https://diarol.com.mx' target='_blank' >Diarol MX</a></span>.</li>",
      footer:
        "La mayoría de mis empleos no han sido relacionados a mi área profesional pero cada uno me ha dado habilidades y caracter para poder seguir mis sueños.",
    },
  ];
  let boxesContainer = document.querySelector(".content__boxes");
  let articlesContent = "";
  let dataArticles = [
    {
      title: '<h3 class="articles__title">Mi historia:</h3>',
      text: "Me gustaria hablar sobre mi, nacido en Uruapan, Michoacán he vivido en dos ciudades diferentes a lo largo de mi vida, en Morelia, Michoacán y actualmente cerca de la Ciudad de México, he tenido cambios muy drásticos en mi forma de vida pero todo ello me ha llevado a disfrutar las cosas que me gustan más seriamente, somos viajeros y los momentos son muy fugaces si no disfrutamos del momento, puede que no volvamos a disfrutar algo similar nunca en la vida, eso me ha llevado a estudiar mi pasión aún con los inconvenientes que tengo actualmente, como lo que es trabajar, estudiar para mi licenciatura y estudiar por mi cuenta el diseño y desarrollo de aplicaciones web.",
    },
    {
      title: "",
      text: "Mi meta es el desarrollo de aplicaciones y videojuegos integrados con Inteligencia Artificial, pero es complicado estudiar, pagar mis gastos para sobrevivir y perseguir mis sueños al mismo tiempo por lo que trato de imaginar que estoy subiendo las escaleras hacia mi éxito personal y profesional, un escalon a la vez y en este momento el escalon en el que estoy es el desarrollo web, quiero obtener un trabajo relacionado a mi área, que me otorgue el tiempo y los recursos para poder seguir mejorando mis habilidades, aprendiendo nuevos lenguajes de programación, algoritmos, aritmética, cálculo y todo lo necesario para elevar mis recursos y ascender al siguiente escalon.",
    },
    {
      title: "",
      text: "Soy un hombre felizmente casado intento realizar colaboraciones con mi esposa ya que ella tiene como meta el desarrollo gráfico de videojuegos, es una mujer que admiro y me impulsa a seguir mis sueños así como mis ambiciones, tengo una hija maravillosa a la cual me gustaria dar un futuro prometedor todos los dias la tengo en mis pensamientos, me hace más fuerte por lo que no sedo ni me rindo en ningún momento.",
    },
  ];
  let articlesContainer = document.querySelector(".content__articles");

  setTimeout(() => {
    loader.style.display = "none";
    layout.style.display = "flex";
  }, 3000);

  boxesContainer.innerHTML += onBoxesContent(boxesContent, dataBoxes);
  articlesContainer.innerHTML += onArticlesContent(
    articlesContent,
    dataArticles
  );
  media();
  window.addEventListener("resize", () => {
    media();
  });
});

function onBoxesContent(content, data) {
  data.forEach((el) => {
    content += `
    <div class="boxes__box">
            <div class="box__head">
              <h3>${el.title}</h3>
                ${el.description}
            </div>

            <div class="box__abilities">
              <ul>
                ${el.list}
              </ul>
            </div>

            <div class="box__footer">
              <p>${el.footer}</p>
            </div>
          </div>
    `;
  });
  return content;
}

function onArticlesContent(content, data) {
  data.forEach((el) => {
    content += `
    <div class="articles__box">
              ${el.title}
              <p class="articles__text">
                ${el.text}
              </p>
            </div>
    `;
  });
  return content;
}

function media() {
  let nav = document.querySelector(".layout__nav");
  let slider = document.querySelector(".slider");

  let sc = window.innerWidth;
  if (sc < 700) {
    nav.innerHTML =
      '<i class="fa-solid fa-bars nav__slider" onClick = "showSlideBar()"></i>';
    slider.style.display = "flex";
  } else {
    nav.innerHTML = `
      <div class="nav__logo">
          <a href="/">
            <img src="/assets/icons/liera-icon.jpg" alt="logo" />
          </a>
        </div>
          <div class="nav__items">
            <ul class="items__list">
              <li><a href="#">Informacion</a></li>
              <li><a href="/assets/pages/proyects.html">Proyectos</a></li>
              <li>
                <a href="/assets/pages/colaborations.html">Colaboraciones</a>
              </li>
            </ul>
      </div>
    `;
    slider.style.display = "none";
  }
}

function showSlideBar() {
  let slider = document.querySelector(".slider");

  if (slider.style.transform == "") {
    slider.style.transform = "translateX(80rem)";
  }
  else{
    slider.style.transform = "";
  }
}
