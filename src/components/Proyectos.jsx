
import { useLang } from "../context/LangContext"
import { PROYECT_CARDS } from "../data/proyects"
import Card from "./ui/Card"

export default function Proyectos() {
    const { spanish } = useLang()

    return (
        <>
            <article className="w-full flex items-center justify-center flex-col">
                <h2 className="w-full text-center md:text-start">{spanish ? 'Proyectos' : 'Proyects'}</h2>
                <div className="flex gap-10 flex-wrap justify-center pt-5">
                    {PROYECT_CARDS.map((proyect) => (
                        <Card key={proyect.name} proyect={proyect} />
                    ))}
                </div>
            </article>
        </>
    )
}