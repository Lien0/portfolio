export const dataInformationBoxes = [
  {
    title: "Habilidades:",
    description:
      "<p>Actualmente cuento con habilidades avanzadas y básicas de programación, la mayoria enfocadas en el desarrollo web front end y desarrollo fullstack con agentes de IA generativa.</p>",
    list: "<li>Core: JavaScript (ES6+), TypeScript, HTML5, CSS3, React, Next.js.</li> <li>Herramientas: Git (Control de versiones), Tailwind CSS, Node.js, SQL.</li> <li>Diseño & UX: Conocimientos de principios UX/UI, diseño responsivo, optimización de interfaces.</li> <li>HTML - Avanzado</li> <li>Calidad: Auditoría de código, refactorización, aplicación de estándares y buenas prácticas.</li> <li>Inglés: B2 (Conversacional y técnico).</li>",
    footer: "",
  },
  {
    title: "Trayectoria educacional:",
    description: "",
    list: "<li>Carrera Tecnica en Contabilidad en el Centro de Bachillerato Tecnologico y Agropecuario 7.</li> <li>Carrera Trunca en la Facultad de Ciencias Fisico Matematicas en la Universidad Michoacana de San Nicolas de Hidalgo.</li> <li>Licenciatura en curso en Sistemas Computacionales en la Universidad Tecnologica Latinoamericana.</li>",
    footer:
      "Actualmente continuo mis estudios en UTEL cursando el 6to cuatrimestre.",
  },
  {
    title: "Trayectoria Laboral:",
    description: "",
    list: `<li>Desarrollo y Auditoría de Software | "El Arconte" (Plataforma HR): Desarrollo Front End: Diseñé y mantuve componentes críticos en React, asegurando la modularidad y facilidad de mantenimiento de la interfaz. Integración de APIs: Realicé la conexión técnica para la visualización de métricas de capital humano, optimizando el consumo de datos para el usuario final. Garantía de Calidad: Actué como Auditor de Código, supervisando la lógica generada por agentes de IA para asegurar que cada entregable cumpliera con los estándares de limpieza y eficiencia requeridos. <span><a onClick='window.open("https://github.com/Lien0/arconte.git", "_blak")'>GitHub el Arconte</a></span> </li>  
      <li>Diseño y Maquetación Web | "Canis Gourmet" (E-commerce): Mejoras Visuales: Implementé mejoras estéticas y funcionales siguiendo lineamientos de experiencia de usuario, logrando una navegación fluida y responsiva. Corrección de Errores: Identifiqué y resolví incidencias visuales y de rendimiento, garantizando una interfaz libre de defectos en diversos dispositivos. <span><a onClick='window.open("https://canisgourmet.cloud/", "_blak")'>Canis Gourmet</a></span> </li>
      <li>Desarrollo y Maquetación de Aplicación Web | "Diarol": Maquetación en base a diseño de cliente, creé funciones como paginación, sliders, validación de formularios, páginas dinámicas con Router de NextJS, implementación de ciberseguridad con ayuda de agentes de IA con testing, creación de buzón para guardar las cotizaciones y manejo de estado cuando la cotización ha sido leída simulando un correo interno, subida y administración del servidor hosting. <span><a onClick='window.open("https://diarol.com.mx/", "_blak")'>Diarol</a></span>  </li>
      <li>Supervisor de Operaciones | Caliente Casino | 2022 – 2025Comunicación y Liderazgo: Coordiné equipos de trabajo en entornos de alta demanda, desarrollando una comunicación asertiva y capacidad de trabajo en equipo para resolver conflictos inmediatos. Atención al Detalle: Supervisé procesos operativos complejos, logrando una reducción del 15% en errores mediante un enfoque riguroso en la calidad. </li>`,
    footer: "",
  },
];

export const dataInformationArticles = [
  {
    title: '<h3 class="articles__title">Mi historia:</h3>',
    text: `Originario de Uruapan, Michoacán, mi camino me ha llevado a través de diversas ciudades y realidades, desde Morelia hasta las cercanías de la Ciudad de México. Estos cambios drásticos han forjado en mí una capacidad de adaptación excepcional y una visión clara: la vida es un viaje de momentos fugaces que merece ser vivido con intención. Esta filosofía es la que impulsa mi carrera actual. Comprendo que el tiempo es el recurso más valioso, lo que me motiva a equilibrar con disciplina mi labor profesional, mis estudios de licenciatura y mi formación constante en diseño y desarrollo web. Para mí, cada línea de código y cada interfaz es una oportunidad de crear algo que perdure y aporte valor real en un mundo que nunca se detiene.`,
  },
  {
    title: "",
    text: `Mi visión profesional está trazada con claridad: la convergencia entre el desarrollo de aplicaciones, videojuegos e Inteligencia Artificial. Entiendo el crecimiento como un proceso de ascenso constante, donde cada etapa es un escalón fundamental hacia la maestría técnica. Actualmente, mi enfoque total reside en el desarrollo web, consolidando bases sólidas en arquitectura de software y experiencia de usuario. Mi objetivo inmediato es integrarme en un entorno profesional desafiante que me permita aportar valor con mis habilidades actuales, mientras continúo mi formación rigurosa en algoritmia, matemáticas avanzadas y nuevas tecnologías. Estoy construyendo hoy los cimientos de las soluciones inteligentes del mañana.`,
  },
];

export const proyectsData = [
  {
    title: "Proyecto Canis Gourmet, NextJs",
    description: `Proyecto que integra herramientas como NextJs, TypeScript, React, 
    PWA y una base de datos para manejar los datos offline cuando se descarga como app,
    es una app web realizada para Canis Gourmet, está realizada con el objetivo de llegar 
    a más público, cuenta con secciones para la descripción de sus servicios, un cátalogo
    de sus productos.`,
    img: "../img/proyecto3.png",
    url: "https://canisgourmet.cloud/",
    extraClass: "",
  },
  {
    title: "Proyecto El Arconte, NextJs",
    description: `Simulador administrativo de alto nivel diseñado para la gestión de personal 
    en entornos de alta precisión (simuladores de vehículos autónomos). Este proyecto implementa 
    una arquitectura robusta basada en Next.js y Node.js, utilizando agentes de Inteligencia Artificial 
    para automatizar roles críticos como Recursos Humanos y Gerencias de Operación y Capacitación.
    
    Enfocado en la seguridad y escalabilidad, el sistema integra persistencia de datos con 
    Prisma ORM, validación estricta de esquemas mediante Zod, y autenticación segura con JWT. 
    El código garantiza fiabilidad a través de una cobertura integral de Unit Testing y E2E Testing, 
    asegurando la integridad del consumo de APIs y la lógica de negocio.`,
    img: "../img/proyecto4.png",
    url: "https://github.com/Lien0/arconte.git",
    extraClass: "articles__proyect--reverse",
  },
  {
    title: "Proyecto E-Commerce, React",
    description:
      `EE-commerce especializado en productos para mascotas desarrollado con Next.js y React. 
      Implementé un sistema de gestión de estado basado en LocalStorage para la persistencia 
      del carrito de compras, 
      optimizando la experiencia del usuario. Además, integré funcionalidades avanzadas de navegación 
      como paginado dinámico y un motor de búsqueda eficiente para el catálogo de artículos. `,
    img: "../img/proyecto5.jpg",
    url: "https://e-commerce-project-c8d29xb6t-enrique-lieras-projects.vercel.app/",
    extraClass: "",
  },
  {
    title: "Proyecto Diarol, NextJs",
    description: `Desarrollé una aplicación web robusta para Diarol utilizando Next.js y Tailwind CSS, 
    enfocada en la expansión de su presencia digital y la captación de clientes. La plataforma integra 
    un sistema de gestión de cotizaciones personalizado para el contratista, optimizado para un rendimiento 
    excepcional en cualquier dispositivo.

    Puse especial énfasis en la ciberseguridad, implementando protocolos de protección de datos y 
    acceso restringido para garantizar la integridad de la información sensible en la base de datos. 
    Es una solución que equilibra el marketing digital con herramientas administrativas seguras.`,
    img: "../img/proyecto6.jpg",
    url: "https://diarol.com.mx/",
    extraClass: "articles__proyect--reverse",
  },
  {
    title: "Landing Page Medical, Javascript, HTML y CSS",
    description: `"Demostración de capacidades técnicas en desarrollo web puro sin frameworks. 
    El proyecto utiliza una estructura modular mediante script type="module", permitiendo una 
    organización escalable de datos (mocks) y lógica.

    SEO & Performance: Optimización mediante etiquetas meta completas, 
    configuración de viewport y gestión eficiente de fuentes externas (Google Fonts).
    
    Responsive Design: Implementación estricta de Media Queries para adaptabilidad total 
    desde dispositivos móviles hasta escritorio.
    
    Interactividad: Consumo de datos dinámico para secciones de preguntas frecuentes (FAQ) 
    y catálogos de especialistas, enriquecido con animaciones nativas en JS y transiciones 
    CSS para un desplazamiento de alto impacto visual.
    
    LightHouse: Performance: 90/100 Accessibility: 95/100 Best Practices: 100/100 SEO: 100/100
    `,
    img: "../img/proyecto7.png",
    url: "https://github.com/Lien0/landingpage_medical.git/",
    extraClass: "",
  },
  {
    title: "Landing Page Libreria, Javascript, HTML y CSS",
    description: `"Proyecto diseñado para demostrar el dominio del ciclo de vida de los datos 
    en el frontend. Utilizo JavaScript Moderno (ES6+) con arquitectura de módulos para 
    integrar de forma limpia el consumo de datos externos y la interactividad del usuario.

    Consumo de Datos: Implementación de peticiones asíncronas con Fetch API para procesar 
    estructuras JSON, transformando datos planos en interfaces interactivas.

    Modularidad CSS: Organización jerárquica de hojas de estilo enfocada en la reutilización 
    de variables de marca y animaciones de UI.

    Plantillas Dinámicas: Creación de una estructura HTML base reutilizable para diversas 
    secciones de la librería, lo que reduce la redundancia de código y mejora la eficiencia 
    del desarrollo.
    `,
    img: "../img/proyecto8.png",
    url: "https://github.com/Lien0/landingpage_medical.git/",
    extraClass: "articles__proyect--reverse",
  },
];

export const colaborationsData = [
  /* Contenido disponible pronto */
];
