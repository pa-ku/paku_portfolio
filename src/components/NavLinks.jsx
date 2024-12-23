import { LinkedinSvg } from "../assets/svg/NavSvg"
import { GithubSvg } from "../assets/svg/SocialIcons"
import { useLang } from "../context/LangContext"
import LangButton from "./ui/LangButton"

export default function NavLinks() {
    const { spanish } = useLang()
    const contact = spanish ? "Contactame" : "Contact me"
    return (
        <>
            <nav className='pt-10  gap-4 flex'>
                <LangButton />
                <NavLink textOnHover='Linkedin' href='https://github.com/pa-ku?tab=repositories' ><GithubSvg className='size-8 ' /></NavLink>
                <NavLink textOnHover='Github' href='https://www.linkedin.com/in/pablokuhn/' ><LinkedinSvg className='size-8' /></NavLink>
                <button className='bg-black z-10 text-white px-4 py-1 text-lg rounded-lg shadow-lg'>{contact}</button>
            </nav>

        </>
    )
}

function NavLink({ children, href, textOnHover }) {
    return (
        <span className='relative group animate-icons'>
            <a href={href} target='blank' className='nav-icon'> {children}</a>
            {textOnHover && <p className='absolute  group-hover:opacity-100 opacity-0 pointer-events-none duration-300 px-2 rounded-lg -bottom-8 shadow-md '>{textOnHover}</p>}
        </span>
    )
}