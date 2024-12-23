import { LinkedinSvg } from "../assets/svg/NavSvg"
import { GithubSvg, WspSvg } from "../assets/svg/SocialIcons"
import { useLang } from "../context/LangContext"
import LangButton from "./ui/LangButton"

export default function NavLinks() {
    const { spanish } = useLang()
    const contact = spanish ? "Contactame" : "Contact me"
    return (
        <>
            <nav className='pt-10  gap-4 flex '>
                <LangButton />
                <NavLink textOnHover='WhatsApp' href='https://wa.me/1126336459' ><WspSvg className='size-8 ' /></NavLink>
                <NavLink textOnHover='Github' href='https://github.com/pa-ku?tab=repositories' ><GithubSvg className='size-8 ' /></NavLink>
                <NavLink textOnHover='Linkedin' href='https://www.linkedin.com/in/pablokuhn/' ><LinkedinSvg className='size-8 ' /></NavLink>
                <a href="#contacto" className='flex items-center justify-center bg-primary-700 z-10 text-white px-4 py-1 text-lg rounded-lg shadow-lg'>{contact}</a>
            </nav>

        </>
    )
}

function NavLink({ children, href, textOnHover }) {
    return (
        <span className='relative group animate-icons'>
            <a href={href} target='blank' className='nav-icon text-zinc-500'> {children}</a>
            {textOnHover && <p className='absolute  group-hover:opacity-100 opacity-0 pointer-events-none duration-300 px-2 rounded-lg -bottom-8 shadow-md '>{textOnHover}</p>}
        </span>
    )
}