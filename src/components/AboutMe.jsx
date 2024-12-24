import { useState } from "react"
import { useLang } from "../context/LangContext"


const ABOUT_ME = {
    es: 'Doy forma a las ideas en el Frontend y continúo creciendo con cada proyecto. Amante de la tecnología y el diseño de interfaces. Me motiva enfrentar nuevos desafíos, aprender constantemente y colaborar en equipo. Mi objetivo es seguir creciendo mientras aporto valor a los proyectos en los que participo',
    eng: 'I bring ideas to life on the frontend and keep growing with every project. Passionate about technology and interface design, I’m motivated by tackling new challenges, constantly learning, and collaborating with teams. My goal is to keep evolving while adding value to the projects I’m part of.',
}

const MORE_ABOUT_ME = {
    es: [
        {
            title: '¿Como empezo todo?',
            text:
                'Inicié mi aventura en 2022 con el curso de Codo a Codo sobre PHP . Desde entonces, mi entusiasmo por la programación despegó 🚀, motivándome a aprender de forma autodidacta.',
        },
        {
            title: '¿Quién soy como desarrollador?',
            text:
                'Me defino como una persona empática, flexible y resolutiva. Con capacidad de adaptación a diferentes entornos. Valoro el optimismo y la colaboración en equipo.',

        },
        {
            title: 'Que retos estoy buscando',
            li: [
                'Colaborar en equipo para ganar experiencia en flujos de trabajo colaborativos.',
                'Resolver problemas técnicos y explorar nuevas herramientas.',
                'Aportar mis conocimientos mientras aprendo de otros desarrolladores.',
            ],
        },
        {
            title: 'De donde aprendo?',
            text:
                'Me baso en la documentación oficial, recursos educativos como YouTube. Siempre aplicando en proyectos prácticos lo aprendido.',

        },
        {
            title: 'Hobbies',
            text: 'Codear 💻 | Diseñar 🎨 | Acampar 🏕 | Pádel 🥎 | Guitarra 🎸| Cicloturismo 🚲 | Escalada 🧗‍♂️',
        },
    ],
    eng: [
        {
            title: 'How did it all start?',
            text:
                'I started my journey in 2022 with the Codo a Codo course on PHP. Since then, my passion for programming took off 🚀, motivating me to learn independently.',

        },
        {
            title: 'Who am I as a developer?',
            text:
                'I define myself as an empathetic, flexible, and solution-oriented person. I have the ability to adapt to different environments. I value optimism and teamwork.',

        },
        {
            title: 'What challenges am I looking for?',
            li: [
                'Collaborating in teams to gain experience in collaborative workflows.',
                'Solving technical problems and exploring new tools.',
                'Contributing my knowledge while learning from other developers.',
            ],
        },
        {
            title: 'Where do I learn from?',
            text:
                'I rely on official documentation, educational resources like YouTube. Always applying what I learn in practical projects.',

        },
        {
            title: 'Hobbies',
            text:
                'Coding 💻 | Designing 🎨 | Camping 🏕 | Padel 🥎 | Guitar 🎸 | Cycle touring 🚲 | Climbing 🧗‍♂️',
        },
    ],
}


export default function AboutMe() {
    const { spanish } = useLang()
    const [moreAboutMe, setMoreAboutMe] = useState(false)

    return (
        <>
            <article className='space-y-3'>
                <h2 className=""> {spanish ? 'Sobre mi' : 'About Me'}</h2>
                <p className='text-lg dark:text-slate-400'>{spanish ? ABOUT_ME.es : ABOUT_ME.eng} </p>

                {!moreAboutMe && <button onClick={() => setMoreAboutMe(!moreAboutMe)} className="text-primary font-bold mt-5">{spanish ? 'Más sobre mi' : 'More about me'} </button>}

                {moreAboutMe &&
                    spanish && MORE_ABOUT_ME.es.map(({ title, text, li }) => (
                        <div className="animate-opacity">
                            <p className="font-bold">{title} </p>
                            <p className="dark:text-slate-400">{text && text} </p>
                            <ol className="list-disc ml-5">
                                {li && li.map((item) => (
                                    <li className="dark:text-slate-400">{item}</li>
                                ))}
                            </ol>
                        </div>
                    ))}
                {moreAboutMe &&
                    !spanish && MORE_ABOUT_ME.eng.map(({ title, text, li }) => (
                        <div className="animate-opacity">
                            <p className="font-bold">{title} </p>
                            <p className="dark:text-slate-400">{text && text} </p>
                            <ol className="list-disc ml-5">
                                {li && li.map((item) => (
                                    <li className="dark:text-slate-400">{item}</li>
                                ))}
                            </ol>
                        </div>
                    ))}


            </article>
        </>
    )
}