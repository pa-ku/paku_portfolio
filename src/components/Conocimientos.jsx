import { ReactSvg, NodejsSvg, MongodbSVg, NextjsSVg, JestSvg, SqlSvg, PuppeteerSvg, ElectronSvg, ScrumSvg, AwsSvg, GithubSvg, TailwindSvg, FigmaSvg, CloudinarySvg, PhotoshopSvg } from "../assets/svg/SocialIcons"
import { useLang } from "../context/LangContext"


const MY_STACK = [
    {
        icon: <NextjsSVg />, text: 'Nextjs', description: [
            "Server Actions y SSR",
            "Suspense",
            "Routing",
            "NextAuth: Autenticación con OAuth y JWT.",
            "ISR y SSG: Páginas estáticas y regeneración incremental."
        ]
    },
    { icon: <ReactSvg />, text: 'React', description: ['Context Api / Context Pattern', 'React Query', 'Infinite Scrolling', 'Custom Hooks', 'React router', 'ReactHookForm'] },
    { icon: <ReactSvg />, text: 'Native' },
    { icon: <TailwindSvg />, text: 'Tailwind', description: ['Themes', 'Animaciones personalizadas', 'Paletas de colores', 'Selectores avanzados group peer', 'Renderizados condicionales'] },
    { icon: <NodejsSvg />, text: 'NodeJs', description: ['Creación de Api REST', 'Patrón MVC', 'Uso de Monorepo', 'Crypto, Jwt y Oauth', 'Uso de Typescript en el backend', 'Express'] },
    { icon: <GithubSvg />, text: 'Github' },
    { icon: <MongodbSVg />, text: 'MongoDb' },
    { icon: <SqlSvg />, text: 'Sql' },
    { icon: <PuppeteerSvg />, text: 'Puppeteer', description: ['Web Scrapping', 'Automatización de procesos', 'Llenado  de  formularios', 'Uso de proxys', 'Uso con Next.Js'] },
    { icon: <ElectronSvg />, text: 'Electron', description: ['Tengo experiencia llevando webs realizadas en React hacia un escritorio de Windows y Linux'] },
    { icon: <AwsSvg />, text: 'Aws' },
    { icon: <ScrumSvg />, text: 'Scrum' },
    { icon: <JestSvg />, text: 'Jest' },
    { icon: <FigmaSvg />, text: 'Figma' },
    { icon: <CloudinarySvg />, text: 'Cloudinary', description: ['Subida de imagenes', 'Subida de audio', 'Optimización de Imagenes'] },
    { icon: <PhotoshopSvg />, text: 'Photoshop' },
]

export default function Conocimientos() {
    const { spanish } = useLang()
    return (
        <aside className='flex flex-col gap-5 '>
            <h2>{spanish ? 'Conocimientos' : 'Knowledge'}</h2>
            <div className="flex flex-wrap gap-7">
                {MY_STACK.map(({ icon, text, description }, index) => (
                    <div key={index} className="relative group flex items-center justify-center size-16  flex-col">
                        <span className="scale-90 group-hover:animate-balance duration-300 text-primary-600 stroke-black  dark:text-primary-300">
                            {icon}
                        </span>
                        <p className="text-zinc-500 dark:text-zinc-100">{text}</p>
                        {description && <ol className="text-xs flex-col gap-2 list-disc -bottom-max duration-300 flex border-background-200 border-2 rounded-lg  w-64 bg-white/80 dark:bg-background-900/60 backdrop-blur-sm z-50 p-3  group-hover:opacity-100 absolute opacity-0 pointer-events-none">{description.map(text => (
                            <li className="ml-4">{text}</li>
                        ))}</ol>}
                    </div>
                ))}
            </div>

        </aside>
    )
}