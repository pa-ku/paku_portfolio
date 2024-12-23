import portrait from '../assets/images/portrait.webp'
import { useLang } from '../context/LangContext'
import NavLinks from './NavLinks'


export default function MyProfile() {
    const { spanish } = useLang()

    const subtitle = spanish ? "Soy un desarrollador FullStack ubicado en Buenos Aires" : "I'm FullStack developer ubicado en Buenos Aires"
    return (
        <>
            <section className='flex absolute  w-full -top-20 items-center justify-between'>
                <span className='flex items-center gap-5'>
                    <div className='size-48  flex border-4 shadow-lg rounded-full items-center justify-center border-white  overflow-hidden' >
                        <img className="hover:scale-125 z-10 scale-110 duration-500  object-cover  size-full" src={portrait} alt="Mi imagen" />
                    </div>
                    <div className='pt-20 animate-profilename'>
                        <h1 className="text-4xl font-bold">Pablo Kuhn</h1>
                        <p className="text-lg ">{subtitle}</p>
                    </div>
                </span>

                <NavLinks />
            </section>
        </>
    )
}

