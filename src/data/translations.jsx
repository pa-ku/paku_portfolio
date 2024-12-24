import {
    NextjsSVg,
    TailwindSvg,
    TypescriptSvg,
    MongodbSVg,
    NodejsSvg,
} from '../assets/svg/SocialIcons'

import mapuImage from '../assets/images/proyect_images/mapu.webp'



export const docs = {
    mapukimun: {
        es: {
            title: 'Mapukimun',
            image: mapuImage,
            description:
                'Mapukimun recopila la flora y fauna de Neuquén con una interfaz intuitiva que incluye filtros avanzados, juegos educativos y favoritos personalizados. Surge de explorar la región y querer centralizar esta información.',
            stack: [
                { img: <NextjsSVg />, name: 'NextJs' },
                { img: <TypescriptSvg />, name: 'TypeScript' },
                { img: <NodejsSvg />, name: 'Node' },
                { img: <MongodbSVg />, name: 'MongoDB' },
                { img: <TailwindSvg />, name: 'Tailwind' },
            ],
            caracteristicas: [
                {
                    title: 'Filtros avanzados',
                    txt: 'Búsqueda por nombre, tipo, hábitat o estado de conservación.',
                },
                {
                    title: 'Juegos educativos',
                    txt: 'Trivias y desafíos para aprender sobre fauna.',
                },
                {
                    title: 'Favoritos personalizados',
                    txt: 'Guarda y accede rápidamente a animales favoritos.',
                },
            ],
            implementacion: [
                {
                    title: 'Optimización de recursos',
                    txt: 'Imágenes en formato WebP y lazy loading para tiempos de carga rápidos.',
                },
                {
                    title: 'Validaciones robustas',
                    txt: 'Mongoose y Zod para datos confiables y reutilizables entre cliente y servidor.',
                },
                {
                    title: 'Arquitectura modular',
                    txt: 'Componentes reutilizables en React y controladores definidos en Node.js.',
                },
            ],
            desafios: [
                {
                    title: 'Estructura de datos compleja',
                    txt: 'Diseñar una base de datos expansible para flora y fauna.',
                },
                {
                    title: 'Rendimiento',
                    txt: 'Scroll infinito, loaders y SSR para mejorar la experiencia del usuario.',
                },
            ],
            futuro: [
                {
                    title: 'App Mobile',
                    txt: 'Desarrollo con React Native.',
                },
                {
                    title: 'Funcionalidad offline',
                    txt: 'Caché para acceso sin conexión.',
                },
                {
                    title: 'Testing',
                    txt: 'Integrar Vitest para garantizar calidad.',
                },
            ],
        },
        eng: {
            title: 'Mapukimun',
            description:
                'Mapukimun o "El conocimiento de la tierra" recopila la flora y fauna de Neuquen, ofreciendo una interface intuitiva, que implementa filtros, datos curiosos, juegos, animales favoritos y mucho mas!. El proyecto surge al recorrer senderos de bosque y montaña en neuquen, encontrando especies desconocidas para mi, al ver que no hay un lugar donde se recopile de una forma me decidi por desarrollarla ',
            caracteristicas: [
                {
                    title: 'Filters',
                    txt: 'Permiten al usuario buscar por nombre, tipo (ave, mamífero, etc.), y otras características como hábitat o estado de conservación.',
                },
                {
                    title: ' Juegos educativos.',
                    txt: 'Una sección interactiva donde los usuarios pueden aprender sobre la fauna a través de trivias y desafíos.',
                },
                {
                    title: 'Favoritos personalizados.',
                    txt: 'Los usuarios pueden marcar animales como favoritos y acceder rápidamente a ellos en su perfil.',
                },
            ],
        },
    },
    eride: {},
}
