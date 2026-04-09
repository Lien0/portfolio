import { initLoader } from "./utils/utils.js";

/**
 * Initializes the Home page.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Home page only needs the basic loader for now
  // In the future, custom animations or effects could be added here
  initLoader(".loader", ".layout");
});
