import { useLang } from "../context/LangContext"
import { PROYECT_CARDS } from "../data/Proyects"
import Card from "./ui/Card"

export default function Proyectos() {
    const { spanish } = useLang()


    return (
        <>
            <article className="w-full">
                <h2 className="text-center md:text-start">{spanish ? 'Proyectos' : 'Proyects'}</h2>
                <div className="flex gap-5 flex-wrap justify-around pt-5">
                    {PROYECT_CARDS.map((proyect) => (
                        <Card key={proyect.name} proyect={proyect} />
                    ))}
                </div>
            </article>
        </>
    )
}