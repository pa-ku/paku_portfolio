import one_logo from "../assets/images/proyect_logos/onecode.webp";
import mapu_logo from "../assets/images/proyect_logos/mapukimun_logo.webp";
import quantum_logo from "../assets/images/proyect_logos/quantum_logo.webp";
import eride_logo from "../assets/images/proyect_logos/eride-logo.webp";
import tailPalette from "../assets/images/proyect_logos/paleteLogo.webp";

import mapuImg from "../assets/images/proyect_images/mapu.webp";
import tailwindImg from "../assets/images/proyect_images/pallete.webp";
import oneCodeImg from "../assets/images/proyect_images/oncecode.webp";
import quantumImg from "../assets/images/proyect_images/quantum.webp";
import erideImg from "../assets/images/proyect_images/eride_image.webp";

import {
  NextjsSVg,
  TailwindSvg,
  MongodbSVg,
  ReactSvg,
  TypescriptSvg,
  NodejsSvg,
  JestSvg,
  TauriSvg,
} from "../assets/svg/SocialIcons";

export const PROYECT_CARDS = [
  {
    title: "Mapu Kimun",
    subtitle: {
      es: "Colección de especies de Neuquén",
      eng: "Neuquen species collection",
    },
    description: {
      es: "¡Descubrí Neuquén como nunca antes! Una recopilación única de flora y fauna con filtros, juegos interactivos y datos diarios sobre especies fascinantes.",
      eng: "Discover Neuquen like never before! A unique collection of flora and fauna with filters, interactive games, and daily insights on fascinating species.",
    },
    href: "/mapukimun",
    website: "https://mapukimun.vercel.app/",
    image: mapuImg,
    date: "10/2024",
    logo: mapu_logo,
    video: undefined,
    github: undefined,
    stack: [
      { image: <NextjsSVg />, name: "NextJs" },
      { image: <TailwindSvg />, name: "Tailwind" },
      { image: <MongodbSVg />, name: "MongoDb" },
      { image: <TypescriptSvg />, name: "Typescript" },
      { image: <NodejsSvg />, name: "NodeJs" },
    ],
    docs: {
      es: {
        title: "Mapukimun",
        description:
          "Mapukimun recopila la flora y fauna de Neuquen, ofreciendo una interface intuitiva, que implementa filtros, datos curiosos, juegos, animales favoritos y mucho mas!. El proyecto surge al recorrer senderos de bosque y montaña en neuquen, encontrando especies desconocidas para mi, al ver que no hay un lugar donde se recopile de una forma me decidi por desarrollarla ",
        stack: [
          { img: <NextjsSVg></NextjsSVg>, name: "NextJs" },
          { img: <TypescriptSvg></TypescriptSvg>, name: "typescript" },
          { img: <NodejsSvg></NodejsSvg>, name: "Node" },
          { img: <MongodbSVg></MongodbSVg>, name: "Mongo" },
          { img: <TailwindSvg></TailwindSvg>, name: "Tailwind" },
        ],
        caracteristicas: [
          {
            title: "Filtros avanzados.",
            txt: "Permiten al usuario buscar por nombre, tipo (ave, mamífero, etc.), y otras características como hábitat o estado de conservación.",
          },
          {
            title: " Juegos educativos.",
            txt: "Una sección interactiva donde los usuarios pueden aprender sobre la fauna a través de trivias y desafíos.",
          },
          {
            title: "Favoritos personalizados.",
            txt: "Los usuarios pueden marcar animales como favoritos y acceder rápidamente a ellos en su perfil.",
          },
        ],
        implementacion: [
          {
            title: "Subida y optimizacion de imagenes",
            txt: "para subir imagenes se utiliza cloudinary, previamente convertidas a webp en un formato mas liviano y escalar utilizando FormData para empaquetar los datos, de imagenes y sonidos",
          },
          {
            title: "Validaciones",
            txt: "Mongoose Para validar los datos antes de guardarlos en la base de datos.",
          },
          {
            title: "Optimización de recursos.",
            txt: "El uso de lazy loading y conversión de imágenes a formato WebP garantizan tiempos de carga más rápidos.",
          },
          {
            title: "Sistema modular.",
            txt: " La aplicación sigue una arquitectura modular, separando responsabilidades en componentes reutilizables en React y controladores bien definidos en Node.js.",
          },
          {
            title: "Zod",
            txt: "Se utiliza para comprobar la correcta estructura de los datos que ingresan, usando el mismo modelo para el cliente y el backend, permitiendo reutilizar el codigo",
          },
          {
            title: "Manejo de errores",
            txt: "",
          },
        ],
        desafios: [
          {
            title: "Creación de la base de datos.",
            txt: "Tener en cuenta las caracteristicas que puede abarcar la flora y fauna fue un reto al estructurar los datos, utilizando graficos logre sintetizar y agrupar las caracteristicas escenciales, permitiendo en el futuro expandir la información.",
          },
          {
            title: "Rendimiento.",
            txt: "Fue uno de los pilares en donde hice foco, al tener una gran cantidad de elementos con imagenes la UX del usuario ",
          },
          {
            list: [
              "Loaders para mejorar la UX que indiquen cuando se esta renderizando elementos.",
              "El uso de SSR y de los Server components me ofrecieron un renderizado rapido y sencillo",
              "useCallback y useMemo para evitar re - renderizado en la sección de filtros",
              "Scroll infinito para una carga progresiva",
            ],
          },
        ],
        conclusion: [
          {
            title: "Aprendizajes y logros.",
            txt: "Este proyecto me permitió combinar conocimiento técnico con creatividad para desarrollar una herramienta educativa accesible, robusta y escalable.",
          },
          {
            list: [
              "En el proceso aprendi a subir archivos como imagenes y audio con cloudinary.",
              "A Estructurar bases de datos más complejas.",
              "Optimizar las cargas con Nextjs.",
              "NextAuth y el login con Google",
            ],
          },
        ],
        futuro: [
          {
            title: "App Mobile",
            txt: "Utilizar React Native para ofrecer una experiencia completa, llevando el conocimiento a todos los dispositivos",
          },
          {
            title: "Funcionalidad offline.",
            txt: "Almacenamiento en caché para ofrecer contenido incluso sin conexión.",
          },
          {
            title: "Expansión de datos.",
            txt: "Ampliar la base de datos para incluir más información sobre la flora y fauna patagónica.",
          },
          { title: "Testing", txt: "Implementar testing con Vitest" },
        ],
      },
      eng: {
        title: "Mapukimun",
        description:
          "Mapukimun collects the flora and fauna of Neuquen, offering an intuitive interface that implements filters, fun facts, games, favorite animals, and much more! The project originated from walking through forest and mountain trails in Neuquen, discovering species I hadn’t seen before, and realizing there wasn’t a place to gather them in one place, so I decided to develop it.",
        stack: [
          { img: <NextjsSVg></NextjsSVg>, name: "NextJs" },
          { img: <TypescriptSvg></TypescriptSvg>, name: "typescript" },
          { img: <NodejsSvg></NodejsSvg>, name: "Node" },
          { img: <MongodbSVg></MongodbSVg>, name: "Mongo" },
          { img: <TailwindSvg></TailwindSvg>, name: "Tailwind" },
        ],
        caracteristicas: [
          {
            title: "Advanced filters.",
            txt: "Allows users to search by name, type (bird, mammal, etc.), and other characteristics such as habitat or conservation status.",
          },
          {
            title: "Educational games.",
            txt: "An interactive section where users can learn about fauna through trivia and challenges.",
          },
          {
            title: "Personalized favorites.",
            txt: "Users can mark animals as favorites and quickly access them from their profile.",
          },
        ],
        implementacion: [
          {
            title: "Image upload and optimization",
            txt: "To upload images, Cloudinary is used, with images converted to the lightweight WebP format and scaled using FormData to package image and sound data.",
          },
          {
            title: "Validations",
            txt: "Mongoose is used to validate data before saving it to the database.",
          },
          {
            title: "Resource optimization.",
            txt: "The use of lazy loading and image conversion to WebP format ensures faster load times.",
          },
          {
            title: "Modular system.",
            txt: "The app follows a modular architecture, separating responsibilities into reusable React components and well-defined Node.js controllers.",
          },
          {
            title: "Zod",
            txt: "Zod is used to check the correct structure of incoming data, using the same model for both the client and the backend, allowing code reuse.",
          },
          {
            title: "Error handling",
            txt: "",
          },
        ],
        desafios: [
          {
            title: "Database creation.",
            txt: "Considering the characteristics of flora and fauna was a challenge when structuring the data. Using graphs, I was able to synthesize and group the essential characteristics, allowing future expansion of information.",
          },
          {
            title: "Performance.",
            txt: "It was one of the key areas I focused on, as having a large number of elements with images affects the user experience.",
          },
          {
            list: [
              "Loaders to improve UX by indicating when elements are being rendered.",
              "The use of SSR and Server components offered me fast and simple rendering.",
              "useCallback and useMemo to prevent unnecessary re-renders in the filter section.",
              "Infinite scroll for progressive loading.",
            ],
          },
        ],
        conclusion: [
          {
            title: "Learnings and achievements.",
            txt: "This project allowed me to combine technical knowledge with creativity to develop an accessible, robust, and scalable educational tool.",
          },
          {
            list: [
              "I learned how to upload files like images and audio with Cloudinary.",
              "How to structure more complex databases.",
              "How to optimize loads with Nextjs.",
              "NextAuth and login with Google.",
            ],
          },
        ],
        futuro: [
          {
            title: "Mobile App",
            txt: "Use React Native to provide a complete experience, bringing the knowledge to all devices.",
          },
          {
            title: "Offline functionality.",
            txt: "Cache storage to offer content even without a connection.",
          },
          {
            title: "Data expansion.",
            txt: "Expand the database to include more information about Patagonian flora and fauna.",
          },
          { title: "Testing", txt: "Implement testing with Vitest" },
        ],
      },
    },
  },
  {
    title: "OneCode",
    subtitle: { es: "Javascript Sandbox", eng: "Javascript Playground" },
    description: {
      es: "Este playground de JavaScript, desarrollado con Monaco, te permite realizar fetching de datos y guardar localmente de manera sencilla el codigo. Además, está disponible para escritorio a través de una aplicación creada con Tauri.",
      eng: "This JavaScript playground, built with Monaco, allows you to fetch data, add code snippets, and save your work locally in a simple and user-focused way. Additionally, it is available as a desktop app built with Tauri.",
    },
    image: oneCodeImg,
    date: "12/2024",
    logo: one_logo,
    video: undefined,
    github: "https://github.com/pa-ku/one_code",
    documentation: "eride",
    href: undefined,
    website: "https://1code.vercel.app/",
    stack: [
      { image: <ReactSvg />, name: "React" },
      { image: <TailwindSvg />, name: "Tailwind" },
      { image: <MongodbSVg />, name: "MongoDb" },
      { image: <JestSvg />, name: "Jest" },
      { image: <TauriSvg />, name: "Tauri" },
    ],
  },
  {
    title: "E-ride",
    subtitle: {
      es: "Tienda de monopatines eléctricos",
      eng: "Electric scooter store",
    },
    description: {
      es: "Ecommerce de monopatines eléctricos con compras online a través de Mercado Pago, validación de usuarios, gestión de favoritos y una interfaz administrativa con funcionalidad CRUD para productos. ",
      eng: "Electric scooter e-commerce with online purchases through Mercado Pago, user validation, favorites management, and an admin interface with CRUD functionality for products.",
    },
    image: erideImg,
    date: "01/2024",
    logo: eride_logo,
    video: undefined,
    github: "https://github.com/pa-ku/eride_client",
    documentation: "eride",
    href: undefined,
    website: "https://eridestore.vercel.app/",
    stack: [
      { image: <ReactSvg />, name: "React" },
      { image: <TailwindSvg />, name: "Tailwind" },
      { image: <NodejsSvg />, name: "NodeJS" },
      { image: <MongodbSVg />, name: "MongoDb" },
    ],
  },
  {
    title: "Quantum Ui",
    subtitle: { es: "Sistema de diseño ", eng: "Design system" },
    description: {
      es: "Design system enfocado en facilitar el uso de componentes con Tailwind y React. Ofrece elementos diseñados con accesibilidad en mente, priorizando etiquetas HTML nativas y logrando alta configurabilidad con el menor código posible.",
      eng: "Design system focused on facilitating the use of components with Tailwind and React. It offers elements designed with accessibility in mind, prioritizing native HTML tags and achieving high configurability with minimal code.",
    },
    date: "06/2024",
    image: quantumImg,
    logo: quantum_logo,
    video: undefined,
    github: "https://github.com/pa-ku/quantum_design",
    href: undefined,
    website: "https://quantumui.netlify.app",
    stack: [
      { image: <ReactSvg />, name: "React" },
      { image: <TailwindSvg />, name: "Tailwind" },
    ],
  },
  {
    title: "Tail Palette",
    subtitle: {
      es: "Creador de paletas de colores",
      eng: "Color palette creator",
    },
    description: {
      es: "¡Crea tu paleta en un solo lugar! Ingresa un color y obtén toda la estructura lista para usar con variables CSS o Tailwind. Además, puedes extraer colores directamente de una imagen.",
      eng: "Create your palette in one place! Enter a color and get the entire structure ready to use with CSS or Tailwind variables. Additionally, you can extract colors directly from an image.",
    },
    image: tailwindImg,
    date: "07/2024",
    logo: tailPalette,
    video: undefined,
    github: "https://github.com/pa-ku/tailwind_palete",
    href: undefined,
    website: "https://tailpalette.vercel.app/",
    stack: [
      { image: <ReactSvg />, name: "React" },
      { image: <TailwindSvg />, name: "Tailwind" },
    ],
  },
];
