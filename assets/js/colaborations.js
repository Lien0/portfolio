  window.addEventListener("DOMContentLoaded", () => {
    let loader = document.querySelector(".loader");
    let layout = document.querySelector(".layout--colaborations");

    setTimeout(() => {
      loader.style.display = "none";
      layout.style.display = "flex";
    }, 3000);


  });