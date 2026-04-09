/**
 * Handles the page loader animation and layout visibility.
 * @param {string} loaderSelector - CSS selector for the loader.
 * @param {string} layoutSelector - CSS selector for the main layout.
 */
export function initLoader(loaderSelector = ".loader", layoutSelector = ".layout") {
  const loader = document.querySelector(loaderSelector);
  const layout = document.querySelector(layoutSelector);

  if (loader && layout) {
    setTimeout(() => {
      loader.style.display = "none";
      layout.style.display = "flex";
    }, 3000);
  }
}

/**
 * Manages the responsive navigation menu.
 * @param {string} navSelector - CSS selector for the navigation bar.
 * @param {string} sliderSelector - CSS selector for the sidebar slider.
 */
export function initNavigation(navSelector, sliderSelector, currentPage = "index") {
  const nav = document.querySelector(navSelector);
  const slider = document.querySelector(sliderSelector);

  if (!nav || !slider) return;

  const renderNav = () => {
    const isMobile = window.innerWidth < 1001;

    if (isMobile) {
      nav.innerHTML = '<i class="fa-solid fa-bars nav__slider"></i>';
      slider.style.display = "flex";
      
      // Re-attach event listener to the newly created icon
      const menuIcon = nav.querySelector(".nav__slider");
      menuIcon.addEventListener("click", () => toggleSlider(sliderSelector));
    } else {
      nav.innerHTML = `
        <div class="nav__logo">
          <a href="/">
            <img src="/assets/icons/liera-icon.jpg" alt="logo" />
          </a>
        </div>
        <div class="nav__items">
          <ul class="items__list">
            <li><a href="/assets/pages/information.html" class="${currentPage === "information" ? "active" : ""}">Informacion</a></li>
            <li><a href="/assets/pages/proyects.html" class="${currentPage === "proyects" ? "active" : ""}">Proyectos</a></li>
            <li><a href="/assets/pages/colaborations.html" class="${currentPage === "colaborations" ? "active" : ""}">Colaboraciones</a></li>
          </ul>
        </div>
      `;
      slider.style.display = "none";
    }
  };

  renderNav();
  window.addEventListener("resize", renderNav);
}

/**
 * Toggles the sidebar slider visibility.
 * @param {string} sliderSelector - CSS selector for the sidebar slider.
 */
export function toggleSlider(sliderSelector) {
  const slider = document.querySelector(sliderSelector);
  if (slider) {
    if (slider.style.transform === "" || slider.style.transform === "translateX(0px)") {
      slider.style.transform = "translateX(80rem)";
    } else {
      slider.style.transform = "translateX(0px)";
    }
  }
}
