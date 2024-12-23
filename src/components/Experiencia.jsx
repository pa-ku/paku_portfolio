import { useLang } from "../context/LangContext"

export default function Experiencia() {
    const { spanish } = useLang()
    const title = spanish ? 'Experiencia' : 'Experiencie'
    const text = spanish ? 'Me especializo el desarrollo con React Native Nextjs Nodejs' : 'I specialize in development with React, Native, Next.js, and Node.js'


    return (
        <>
            <section className='pt-36'>
                <h2 className='font-bold text-2xl'>{title} </h2>
                <p className='text-lg'>{text}</p>
            </section>
        </>
    )
}