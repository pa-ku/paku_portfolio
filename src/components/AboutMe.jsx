import { useState } from "react"
import { useLang } from "../context/LangContext"
import { aboutMeTranslation } from "../data/translations"

export default function AboutMe() {
    const { spanish } = useLang()
    const aboutMe = {
        es: 'Doy forma a las ideas en el Frontend y continúo creciendo con cada proyecto. Ubicado en Buenos Aires Argentina, con 2 años de experiencia en React Native, React, Next y Express.',
        eng: 'I shape ideas in the Frontend and continue growing with every project. Based in Buenos Aires, Argentina, with 2 years of experience in React Native, React, and Express.',
    }
    const [moreAboutMe, setMoreAboutMe] = useState(false)
    return (
        <>
            <article className='space-y-3'>
                <h2> {spanish ? 'Sobre mi' : 'About Me'}</h2>
                <p className='text-lg'>{spanish ? aboutMe.es : aboutMe.eng} </p>

                {moreAboutMe ? aboutMeTranslation.es.map(({ title, text, li }) => (
                    <div className="">
                        <p className="font-bold">{title} </p>
                        <p>{text && text} </p>
                        <ol className="list-disc ml-5">
                            {li && li.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ol>
                    </div>
                )) : <button onClick={() => setMoreAboutMe(!moreAboutMe)} className="text-blue-500 font-bold mt-5">{spanish ? 'Más sobre mi' : 'More about me'} </button>}
            </article>
        </>
    )
}