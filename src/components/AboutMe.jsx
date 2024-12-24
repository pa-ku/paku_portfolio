import { useState } from "react"
import { useLang } from "../context/LangContext"
import { aboutMeTranslation } from "../data/translations"

export default function AboutMe() {
    const { spanish } = useLang()
    const aboutMe = {
        es: 'Doy forma a las ideas en el Frontend y continúo creciendo con cada proyecto. Amante de la tecnología y el diseño de interfaces. Me motiva enfrentar nuevos desafíos, aprender constantemente y colaborar en equipo. Mi objetivo es seguir creciendo mientras aporto valor a los proyectos en los que participo',
        eng: 'I bring ideas to life on the frontend and keep growing with every project. Passionate about technology and interface design, I’m motivated by tackling new challenges, constantly learning, and collaborating with teams. My goal is to keep evolving while adding value to the projects I’m part of.',
    }


    const [moreAboutMe, setMoreAboutMe] = useState(false)
    return (
        <>
            <article className='space-y-3'>
                <h2> {spanish ? 'Sobre mi' : 'About Me'}</h2>
                <p className='text-lg'>{spanish ? aboutMe.es : aboutMe.eng} </p>

                {!moreAboutMe && <button onClick={() => setMoreAboutMe(!moreAboutMe)} className="text-primary font-bold mt-5">{spanish ? 'Más sobre mi' : 'More about me'} </button>}

                {moreAboutMe &&
                    spanish && aboutMeTranslation.es.map(({ title, text, li }) => (
                        <div className="animate-opacity">
                            <p className="font-bold">{title} </p>
                            <p>{text && text} </p>
                            <ol className="list-disc ml-5">
                                {li && li.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ol>
                        </div>
                    ))}
                {moreAboutMe &&
                    !spanish && aboutMeTranslation.eng.map(({ title, text, li }) => (
                        <div className="animate-opacity">
                            <p className="font-bold">{title} </p>
                            <p>{text && text} </p>
                            <ol className="list-disc ml-5">
                                {li && li.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ol>
                        </div>
                    ))}


            </article>
        </>
    )
}