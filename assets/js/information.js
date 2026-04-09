import { dataInformationArticles, dataInformationBoxes } from "./data/data.js";
import { initLoader, initNavigation } from "./utils/utils.js";

/**
 * Initializes the Information page.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize common UI components
  initLoader(".loader", ".layout");
  initNavigation(".layout__nav", ".slider", "information");

  // Render information content
  renderBoxes(dataInformationBoxes);
  renderArticles(dataInformationArticles);
});

/**
 * Renders the capability boxes into the DOM.
 * @param {Array} data - The array of information objects.
 */
function renderBoxes(data) {
  const container = document.querySelector(".content__boxes");
  if (!container) return;

  const content = data.map(el => `
    <div class="boxes__box">
      <div class="box__head">
        <h2>${el.title}</h2>
        <p>${el.description}</p> 
      </div>
      <div class="box__abilities">
        <ul>
          ${el.list}
        </ul>
      </div>
    </div>
  `).join('');

  container.innerHTML = content;
}

/**
 * Renders the story articles into the DOM.
 * @param {Array} data - The array of article objects.
 */
function renderArticles(data) {
  const container = document.querySelector(".content__articles");
  if (!container) return;

  const content = data.map(el => `
    <div class="articles__box">
      ${el.title}
      <p class="articles__text">
        ${el.text}
      </p>
    </div>
  `).join('');

  container.innerHTML = content;
}
