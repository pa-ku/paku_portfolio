import { useState } from "react"
import { useLang } from "../context/LangContext"

export default function Contacto() {

    const [copy, setCopy] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const { spanish } = useLang()
    function copyEmail() {
        navigator.clipboard.writeText('p4blo.kuhn@gmail.com')
        if (!copy) {
            setCopy(true)
            setTimeout(() => {
                setCopy(false)
            }, 2000)
        }
    }

    let data = {
        service_id: 'service_yfhitjq',
        template_id: 'template_pesbs2k',
        user_id: 'gSf4MzUMv9qYbQjGG',
        template_params: {
            email: email,
            message: message,
        },
    }

    function isValidForm() {
        return (
            email && message && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)
        )
    }

    function sendForm() {
        if (isValidForm()) {
            fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (response.ok) {
                        console.log('El correo ha sido enviado exitosamente')

                    } else {
                        console.error('Hubo un error al enviar el correo' + response.status)
                    }
                })
                .catch((error) => {
                    console.error('Hubo un error de red:', error)
                })
        }
    }
    return (

        <section className="pt-20 w-full flex items-center justify-center">
            <div id="contacto" className="text-lg flex flex-col gap-5 w-96 ">
                <h2>{spanish ? 'Contactame' : 'Contact me'}</h2>
                <input className="shadow-lg px-4 py-2 rounded-lg" type="text" placeholder="Email" />
                <textarea className="min-h-20 max-h-40 shadow-lg px-4 py-2 rounded-lg" placeholder="Hola pablo!" name="" id=""></textarea>
                <button className="bg-primary py-2 text-white rounded-lg ">Enviar</button>
                <span className='text-gray-700 flex flex-col items-center justify-center w-full'>
                    <button
                        className='flex hover:text-primary-700'
                        title={` ${spanish ? 'Copiar email' : 'Copy email'}`}
                        onClick={copyEmail}
                    >
                        p4blo.kuhn@gmail.com
                        {copy ? (
                            <>
                                <span className=''>
                                    <svg
                                        className='text-primary-700 '
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        fill='none'
                                    >
                                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                        <path d='M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z' />
                                        <path d='M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' />
                                        <path d='M11 14l2 2l4 -4' />
                                    </svg>
                                </span>
                            </>
                        ) : (
                            <svg
                                className='text-primary-700 '
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                fill='none'
                            >
                                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                                <path d='M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z' />
                                <path d='M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' />
                            </svg>
                        )}
                    </button>
                </span>
            </div>
        </section>


    )
}