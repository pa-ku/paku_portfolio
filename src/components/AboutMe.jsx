import { useLang } from "../context/LangContext"

export default function AboutMe() {
    const { spanish } = useLang()
    const aboutMe = {
        es: 'Doy forma a las ideas en el Frontend y continúo creciendo con cada proyecto. Ubicado en Buenos Aires Argentina, con 2 años de experiencia en React Native, React, Next y Express.',
        eng: 'I shape ideas in the Frontend and continue growing with every project. Based in Buenos Aires, Argentina, with 2 years of experience in React Native, React, and Express.',
    }
    return (
        <>
            <article className=''>
                <h2> {spanish ? 'Sobre mi' : 'About Me'}</h2>
                <p className='text-lg'>{spanish ? aboutMe.es : aboutMe.eng} </p>
                <button className="text-blue-500 font-bold mt-5">{spanish ? 'Más sobre mi' : 'More about me'} </button>
            </article>
        </>
    )
}