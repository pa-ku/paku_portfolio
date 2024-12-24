import { useLang } from "../context/LangContext"

export default function Experiencia() {
    const { spanish } = useLang()
    const title = spanish ? 'Experiencia' : 'Experiencie'
    const rawText = spanish ? '' : 'I specialize in development with React, Native, Next.js, and Node.js'

    return (
        <>
            <section className='pt-48 md:pt-36'>
                <h2 className='font-bold text-2xl'>{title} </h2>
                {spanish && <p className='text-lg'>Me especializo en el  desarrollo de apps móviles con <b>React Native</b> y de apps de escritorio <br /> con <b>Next.js</b> ,  <b>React</b>,  <b>Node.js</b> y <b>Tailwind</b>.</p>}

                {!spanish && (
                    <p className='text-lg'>
                        I specialize in the development of mobile apps with <b>React Native</b> and desktop apps <br /> with <b>Next.js</b>, <b>React</b>, <b>Node.js</b>, and <b>Tailwind</b>.
                    </p>
                )}
            </section>
        </>
    )
}