import {
    NextjsSVg,
    TailwindSvg,
    TypescriptSvg,
    MongodbSVg,
    NodejsSvg,
} from '../assets/svg/SocialIcons'

export const aboutMeTranslation = {
    es: [
        {
            title: '¿Como empezo todo?',
            text:
                'Inicié mi aventura en 2022 con el curso de Codo a Codo sobre PHP . Desde entonces, mi entusiasmo por la programación despegó 🚀, motivándome a aprender de forma autodidacta.',
        },
        {
            title: '¿Quién soy como desarrollador?',
            text:
                'Me defino como una persona empática, flexible y resolutiva. Con capacidad de adaptación a diferentes entornos. Valoro el optimismo y la colaboración en equipo.',

        },
        {
            title: 'Que retos estoy buscando',
            li: [
                'Colaborar en equipo para ganar experiencia en flujos de trabajo colaborativos.',
                'Resolver problemas técnicos y explorar nuevas herramientas.',
                'Aportar mis conocimientos mientras aprendo de otros desarrolladores.',
            ],
        },
        {
            title: 'De donde aprendo?',
            text:
                'Me baso en la documentación oficial, recursos educativos como YouTube. Siempre aplicando en proyectos prácticos lo aprendido.',

        },
        {
            title: 'Hobbies',
            text: 'Codear 💻 | Diseñar 🎨 | Acampar 🏕 | Pádel 🥎 | Guitarra 🎸| Cicloturismo 🚲 | Escalada 🧗‍♂️ | Fisica ⚛ | Biologia 🐟 ',
        },
    ],
    eng: [
        {
            title: 'How did it all start?',
            text:
                'I started my journey in 2022 with the Codo a Codo course on PHP. Since then, my passion for programming took off 🚀, motivating me to learn independently.',

        },
        {
            title: 'Who am I as a developer?',
            text:
                'I define myself as an empathetic, flexible, and solution-oriented person. I have the ability to adapt to different environments. I value optimism and teamwork.',

        },
        {
            title: 'What challenges am I looking for?',
            li: [
                'Collaborating in teams to gain experience in collaborative workflows.',
                'Solving technical problems and exploring new tools.',
                'Contributing my knowledge while learning from other developers.',
            ],
        },
        {
            title: 'Where do I learn from?',
            text:
                'I rely on official documentation, educational resources like YouTube. Always applying what I learn in practical projects.',

        },
        {
            title: 'Hobbies',
            text:
                'Coding 💻 | Designing 🎨 | Camping 🏕 | Padel 🥎 | Guitar 🎸 | Cycle touring 🚲 | Climbing 🧗‍♂️ | Physics ⚛ | Biology 🐟',
        },
    ],
}

export const headerSubtitle = {
    es: 'Doy forma a las ideas en el Frontend y continúo creciendo con cada proyecto. Ubicado en Buenos Aires Argentina, con 2 años de experiencia en React Native, React, Next y Express.',
    eng: 'I shape ideas in the Frontend and continue growing with every project. Based in Buenos Aires, Argentina, with 2 years of experience in React Native, React, and Express.',
}

export const docs = {
    mapukimun: {
        es: {
            title: 'Mapukimun',
            description:
                'Mapukimun recopila la flora y fauna de Neuquen, ofreciendo una interface intuitiva, que implementa filtros, datos curiosos, juegos, animales favoritos y mucho mas!. El proyecto surge al recorrer senderos de bosque y montaña en neuquen, encontrando especies desconocidas para mi, al ver que no hay un lugar donde se recopile de una forma me decidi por desarrollarla ',
            stack: [
                { img: <NextjsSVg></NextjsSVg>, name: 'NextJs' },
                { img: <TypescriptSvg></TypescriptSvg>, name: 'typescript' },
                { img: <NodejsSvg></NodejsSvg>, name: 'Node' },
                { img: <MongodbSVg></MongodbSVg>, name: 'Mongo' },
                { img: <TailwindSvg></TailwindSvg>, name: 'Tailwind' },
            ],
            caracteristicas: [
                {
                    title: 'Filtros avanzados.',
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
            implementacion: [
                {
                    title: 'Subida y optimizacion de imagenes',
                    txt: 'para subir imagenes se utiliza cloudinary, previamente convertidas a webp en un formato mas liviano y escalar utilizando FormData para empaquetar los datos, de imagenes y sonidos',
                },
                {
                    title: 'Validaciones',
                    txt: 'Mongoose Para validar los datos antes de guardarlos en la base de datos.',
                },
                {
                    title: 'Optimización de recursos.',
                    txt: 'El uso de lazy loading y conversión de imágenes a formato WebP garantizan tiempos de carga más rápidos.',
                },
                {
                    title: 'Sistema modular.',
                    txt: ' La aplicación sigue una arquitectura modular, separando responsabilidades en componentes reutilizables en React y controladores bien definidos en Node.js.',
                },
                {
                    title: 'Zod',
                    txt: 'Se utiliza para comprobar la correcta estructura de los datos que ingresan, usando el mismo modelo para el cliente y el backend, permitiendo reutilizar el codigo',
                },
                {
                    title: 'Manejo de errores',
                    txt: '',
                },
            ],
            desafios: [
                {
                    title: 'Creación de la base de datos.',
                    txt: 'Tener en cuenta las caracteristicas que puede abarcar la flora y fauna fue un reto al estructurar los datos, utilizando graficos logre sintetizar y agrupar las caracteristicas escenciales, permitiendo en el futuro expandir la información.',
                },
                {
                    title: 'Rendimiento.',
                    txt: 'Fue uno de los pilares en donde hice foco, al tener una gran cantidad de elementos con imagenes la UX del usuario ',
                },
                {
                    list: [
                        'Loaders para mejorar la UX que indiquen cuando se esta renderizando elementos.',
                        'El uso de SSR y de los Server components me ofrecieron un renderizado rapido y sencillo',
                        'useCallback y useMemo para evitar re - renderizado en la sección de filtros',
                        'Scroll infinito para una carga progresiva',
                    ],
                },
            ],
            conclusion: [
                {
                    title: 'Aprendizajes y logros.',
                    txt: 'Este proyecto me permitió combinar conocimiento técnico con creatividad para desarrollar una herramienta educativa accesible, robusta y escalable.',
                },
                {
                    list: [
                        'En el proceso aprendi a subir archivos como imagenes y audio con cloudinary.',
                        'A Estructurar bases de datos más complejas.',
                        'Optimizar las cargas con Nextjs.',
                        'NextAuth y el login con Google',
                    ],
                },
            ],
            futuro: [
                {
                    title: 'App Mobile',
                    txt: 'Utilizar React Native para ofrecer una experiencia completa, llevando el conocimiento a todos los dispositivos',
                },
                {
                    title: 'Funcionalidad offline.',
                    txt: 'Almacenamiento en caché para ofrecer contenido incluso sin conexión.',
                },
                {
                    title: 'Expansión de datos.',
                    txt: 'Ampliar la base de datos para incluir más información sobre la flora y fauna patagónica.',
                },
                { title: 'Testing', txt: 'Implementar testing con Vitest' },
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
