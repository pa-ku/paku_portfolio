import { useLang } from "../../context/LangContext"
import esSvg from '../../assets/svg/es_flag.svg'
import engSvg from '../../assets/svg/eng_flag.svg'

export default function LangButton() {
    const { spanish, setSpanish } = useLang()

    return (
        <div className="relative group flex  items-center overflow-x-clip justify-center">
            <button className={`${spanish ? 'translate-x-0' : ' translate-x-24'} gap-2 flex items-center justify-center  duration-300`} onClick={() => setSpanish(false)}>
                <img className="size-6 object-contain rounded-lg" src={esSvg} alt="Argentina flag" />
                Spanish
            </button>
            <button onClick={() => setSpanish(true)} className={` flex gap-2 items-center justify-center absolute duration-300 ${spanish ? 'translate-x-24' : 'translate-x-0'}`}> <img className="rounded-lg size-6 object-contain" src={engSvg} alt="Eeuu flag" /> English</button>
            <p className='absolute  group-hover:opacity-100 text-center opacity-0 pointer-events-none duration-300 px-2 rounded-lg -bottom-7 shadow-md '>{spanish ? 'Idioma' : 'Language'}</p>
        </div>
    )
}