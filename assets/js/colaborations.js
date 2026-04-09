import { colaborationsData } from "./data/data.js";
import { initLoader, initNavigation } from "./utils/utils.js";

/**
 * Initializes the Colaborations page.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize common UI components
  initLoader(".loader", ".layout--colaborations");
  initNavigation(".layout__nav--colaborations", ".slider__colaborations", "colaborations");

  // Placeholder for rendering collaborations (if needed)
  if (colaborationsData.length > 0) {
    renderColaborations(colaborationsData);
  } else {
    console.log("No colaborations available yet.");
  }
});

/**
 * Renders the collaborations list into the DOM.
 * @param {Array} data - The array of collaboration objects.
 */
function renderColaborations(data) {
  const container = document.querySelector(".main__content--colaborations");
  if (!container) return;

  const content = data.map(colab => `
    <article class="colaborations__box">
      <h2>${colab.title}</h2>
      <p>${colab.description}</p>
    </article>
  `).join('');

  container.innerHTML = content;
}
