import { proyectsData } from "./data/data.js";
import { initLoader, initNavigation } from "./utils/utils.js";

/**
 * Initializes the Projects page.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize common UI components
  initLoader(".loader", ".layout--proyects");
  initNavigation(".layout__nav--proyects", ".slider__proyects", "proyects");

  // Render projects
  renderProjects(proyectsData);
});

/**
 * Renders the project list into the DOM.
 * @param {Array} data - The array of project objects.
 */
function renderProjects(data) {
  const articlesContainer = document.querySelector(".content__articles--proyects");
  if (!articlesContainer) return;

  const content = data.map(proyect => `
    <article class="articles__proyect ${proyect.extraClass}">
      <div class="proyect__img">
        <a href="${proyect.url}" target="_blank">
          <img src="${proyect.img}" alt="Imagen de ${proyect.title}">
        </a>
      </div>
      <div class="proyect__content">
        <h2>${proyect.title}</h2>
        <p>${proyect.description}</p>
      </div>
    </article>
  `).join('');

  articlesContainer.innerHTML = content;
}
