import { useLang } from "../context/LangContext"

export default function Experiencia() {
    const { spanish } = useLang()

    return (
        <>
            <section className='pt-48 md:pt-36 '>
                <h2 className='font-bold text-2xl'>{spanish ? 'Experiencia' : 'Experiencie'} </h2>
                {spanish && <p className='text-lg dark:text-slate-400'>Me especializo en el  desarrollo de apps móviles con <b>React Native</b> y de apps de escritorio <br /> con <b>Next.js</b> ,  <b>React</b>,  <b>Node.js</b> y <b>Tailwind</b>.</p>}

                {!spanish && (
                    <p className='text-lg dark:text-slate-400'>
                        I specialize in the development of mobile apps with <b>React Native</b> and desktop apps <br /> with <b>Next.js</b>, <b>React</b>, <b>Node.js</b>, and <b>Tailwind</b>.
                    </p>
                )}
            </section>
        </>
    )
}