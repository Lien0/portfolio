window.addEventListener("DOMContentLoaded", () => {
  let loader = document.querySelector(".loader");
  let layout = document.querySelector(".layout--proyects");
  let articles = document.querySelector(".content__articles--proyects");
  let proyectsData = [
    {
      title: "Proyecto 1, JS, CSS y HTML puros",
      description:
        "Este fue mi primer proyecto realizado con HTML, CSS y JS puros. Es un proyecto sencillo que solo muestra una pagina con algunos media queries.",
      img: "../img/proyecto1.jpg",
      url: "https://btq-car-and-more-liera.netlify.app/",
      extraClass: "",
    },
    {
      title: "Proyecto 2, JS,CSS y HTML puros",
      description:
        "El segundo proyecto fue un formulario el cual toma patrones con JS para verificar los datos con el manejo del DOM, se colocan pequeñas animaciones con focus y blur, se muestra al usuario en que se está equivocando al llenar el formulario.",
      img: "../img/proyecto2.jpg",
      url: "https://techsolutions-solicitud-empleo.netlify.app/",
      extraClass: "articles__proyect--reverse",
    },
    {
      title: "Proyecto 3, React",
      description:
        "El proyecto fue realizado con React, es un carrito de articulos, se me ocurrio ya que en ocasiones es bueno para saber cuanto gastamos en cada compra de super, hay ocasiones en las que los precios estan mal pero no llegamos a darnos cuenta del error en el cobro, por lo que con el uso de estado, se agregan nuevos articulos, se le colocan algunos parametros para la visualizacion del producto y al presupuesto inicial se le descuentan los productos con el precio del producto por unidad.",
      img: "../img/proyecto3.jpg",
      url: "https://car-listsupermarket.netlify.app/",
      extraClass: "",
    },
    {
      title: "Proyecto 4, Angular",
      description:
        "Este proyecto realizado con Angular, como una SPA es un proyecto realizado para publicar articulos informativos, se adjunta alguna informacion acerca de deportes pero realmente puede funcionar para cualquier tipo de noticias, se agrega una seccion de noticias, de galeria para subir imagenes y videos, se utiliza Firebase como base de datos, asi como autenticador para poder entrar al pequeño backend donde se sube la informacion que aparece en la aplicacion web.",
      img: "../img/proyecto4.jpg",
      url: "https://lanostalgiadelfutbol.web.app/",
      extraClass: "articles__proyect--reverse",
    },
  ];
  let proyectsContent = "";

  setTimeout(() => {
    loader.style.display = "none";
    layout.style.display = "flex";
  }, 3000);

  proyectsData.forEach((proyect) => {
    proyectsContent += `
            <div class="articles__proyect ${proyect.extraClass}">
              <div class="proyect__img">
                <a href="${proyect.url}" target="_blank"><img src="${proyect.img}" alt="Imagen del articulo"></a>
              </div>
              <div class="proyect__content">
                <h2>${proyect.title}</h2>
                <p>${proyect.description}</p>
              </div>
            </div>
    `;
  });
  articles.innerHTML = proyectsContent;
});
