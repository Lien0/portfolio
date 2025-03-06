window.addEventListener("DOMContentLoaded", () => {
  let loader = document.querySelector(".loader");
  let layout = document.querySelector(".layout--colaborations");

  setTimeout(() => {
    loader.style.display = "none";
    layout.style.display = "flex";
  }, 3000);

  media();
  window.addEventListener("resize", () => {
    media();
  });
});

function media() {
  let nav = document.querySelector(".layout__nav--colaborations");
  let slider = document.querySelector(".slider__colaborations");

  let sc = screen.width;
  if (sc < 831) {
    nav.innerHTML =
      '<i class="fa-solid fa-bars nav__slider" onClick = "showSlideBar()"></i>';
    slider.style.display = "flex";
  } else {
    nav.innerHTML = `
      <div class="nav__logo">
            <img src="/assets/icons/liera-icon.jpg" alt="logo" />
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
  let slider = document.querySelector(".slider__colaborations");

  if (slider.style.transform == "") {
    slider.style.transform = "translateX(80rem)";
  } else {
    slider.style.transform = "";
  }
}
