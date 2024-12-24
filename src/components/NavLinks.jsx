import { LinkedinSvg } from "../assets/svg/NavSvg"
import { GithubSvg, WspSvg } from "../assets/svg/SocialIcons"
import { useLang } from "../context/LangContext"
import LangButton from "./ui/LangButton"
import ThemeButton from "./ui/ThemeButton"

export default function NavLinks() {
    const { spanish } = useLang()
    const contact = spanish ? "Contactame" : "Contact me"
    return (
        <>
            <nav className='pt-10 z-10  gap-4 flex flex-wrap items-center justify-center'>
                <LangButton />
                <ThemeButton />
                <NavLink textOnHover='WhatsApp' href='https://wa.me/1126336459' ><WspSvg className='size-7 ' /></NavLink>
                <NavLink textOnHover='Github' href='https://github.com/pa-ku?tab=repositories' ><GithubSvg className='size-7 ' /></NavLink>
                <NavLink textOnHover='Linkedin' href='https://www.linkedin.com/in/pablokuhn/' ><LinkedinSvg className='size-7 ' /></NavLink>
                <a href="#contacto" className='flex items-center justify-center bg-primary-700 z-10 dark:bg-primary-500 text-white px-4 py-1 text-lg rounded-lg shadow-lg'>{contact}</a>
            </nav>

        </>
    )
}

function NavLink({ children, href, textOnHover }) {
    return (
        <span className='relative group animate-icons'>
            <a href={href} target='blank' className='dark:text-primary-300 dark:bg-background-600 bg-zinc-50 dark:border-primary-700/60  p-1.5 text-lg rounded-full border-2 border-zinc-200   flex items-start justify-start text-zinc-500'> {children}</a>
            {textOnHover && <p className='absolute  group-hover:opacity-100 opacity-0 pointer-events-none duration-300 px-2 rounded-lg -bottom-8 shadow-lg dark:shadow-background-600 '>{textOnHover}</p>}
        </span>
    )
}