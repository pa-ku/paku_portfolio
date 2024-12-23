import { ReactSvg, NodejsSvg, MongodbSVg, NextjsSVg, JestSvg, SqlSvg, PuppeteerSvg, ElectronSvg, ScrumSvg, AwsSvg, GithubSvg, TailwindSvg, FigmaSvg, CloudinarySvg, PhotoshopSvg } from "../assets/svg/SocialIcons"
import { useLang } from "../context/LangContext"


/* const design = new Map([
    ['Figma', <FigmaSvg />],
    ['Photoshop', <PhotoshopSvg />],
    ['AWS S3', <AwsSvg />],
    ['Accesibilidad', <AccesibleSvg />],
    ['Cloudinary', <CloudinarySvg />],
    ['Scrum', <ScrumSvg />],
    ['Vitest', <VitestSvg />],
    ['Jest', <JestSvg />],
])
const frontend = new Map([
    ['NextJs', <NextjsSVg />],
    ['React', <ReactSvg />],
    ['ReactNative', <ReactSvg />],
    ['TypeScript', <TypescriptSvg />],
    ['JavaScript', <JavascriptSvg />],
    ['Electron', <ElectronSvg />],
    ['Html', <HtmlSvg />],
    ['Tailwind', <TailwindSvg />],
    ['Css', <CssSvg />],
])
const backend = new Map([
    ['Express', <ExpressSvg />],
    ['Prisma', <PrismaSvg />],
    ['NodeJs', <NodejsSvg></NodejsSvg>],
    ['MongoDb', <MongodbSVg></MongodbSVg>],
    ['SQL', <SqlSvg />],
    ['Git/Github', <GithubSvg />],
    ['Puppeteer', <PuppeteerSvg />],
]) */


export default function Conocimientos() {
    const mystack = [
        { icon: <NextjsSVg />, text: 'Nextjs' },
        { icon: <ReactSvg />, text: 'React' },
        { icon: <ReactSvg />, text: 'Native' },
        { icon: <TailwindSvg />, text: 'Tailwind' },
        { icon: <NodejsSvg />, text: 'NodeJs' },
        { icon: <GithubSvg />, text: 'Github' },
        { icon: <MongodbSVg />, text: 'MongoDb' },
        { icon: <SqlSvg />, text: 'Sql' },
        { icon: <PuppeteerSvg />, text: 'Puppeteer' },
        { icon: <ElectronSvg />, text: 'Electron' },
        { icon: <AwsSvg />, text: 'Aws' },
        { icon: <ScrumSvg />, text: 'Scrum' },
        { icon: <JestSvg />, text: 'Jest' },
        { icon: <FigmaSvg />, text: 'Figma' },
        { icon: <CloudinarySvg />, text: 'Cloudinary' },
        { icon: <PhotoshopSvg />, text: 'Photoshop' },
    ]
    const { spanish } = useLang()

    return (
        <aside className='flex flex-col gap-5 '>
            <h2>{spanish ? 'Conocimientos' : 'Knowledge'}</h2>
            <div className="flex flex-wrap gap-7">
                {mystack.map(({ icon, text }, index) => (
                    <div key={index} className=" group flex items-center justify-center size-16  flex-col">
                        <span className="scale-90 group-hover:animate-balance duration-300 text-black stroke-black">
                            {icon}
                        </span>
                        <p >{text}</p>
                    </div>
                ))}
            </div>
        </aside>
    )
}