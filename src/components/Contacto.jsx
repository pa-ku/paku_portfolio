import { useState } from "react"
import { useLang } from "../context/LangContext"
import { useInView } from "react-intersection-observer"

export default function Contacto() {
    const [copy, setCopy] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const { spanish } = useLang()
    const [emailSend, setEmailSend] = useState(false)

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
                        setEmailSend(true)
                    } else {
                        console.error('Hubo un error al enviar el correo' + response.status)
                    }
                })
                .catch((error) => {
                    console.error('Hubo un error de red:', error)
                })
        }
    }

    const { ref: contactoRef, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    })

    return (
        <section ref={contactoRef} className={`${inView && 'opacity-100'}  opacity-0 duration-300 pt-20 w-full flex items-center justify-center`} >

            {
                emailSend ? <h2 className='gap-4 text-center text-primary text-xl flex flex-col justify-center items-center'>
                    {!spanish && <p> ¡Gracias por escribirme!  <br /> Te responderé lo antes posible.</p>}
                    {spanish && <p> Thank you for writing to meI’ll <br /> get back to you as soon as possible.</p>}
                    <svg
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        fill='none'
                        className="size-16"
                    >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path
                            d='M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z'
                            strokeWidth='0'
                            fill='currentColor'
                        />
                    </svg>
                </h2> : <div id="contacto" className="text-lg flex flex-col gap-5 w-96 ">
                    <h2>{spanish ? 'Contactame' : 'Contact me'}</h2>
                    <input onChange={(e) => setEmail(e.target.value)} className="dark:bg-background-600 shadow-lg px-4 py-2 rounded-lg" type="text" placeholder="Email" />
                    <textarea onChange={(e) => setMessage(e.target.value)} className="min-h-20 max-h-40 shadow-lg dark:bg-background-600 px-4 py-2 rounded-lg" placeholder="Hola pablo!" name="" id=""></textarea>
                    <button onClick={sendForm} className="bg-primary py-2 text-white rounded-lg ">{spanish ? 'Enviar' : 'Send'}</button>
                    <span className=' dark:text-primary-100 text-gray-700 flex flex-col items-center justify-center w-full'>
                        <button
                            className='flex dark:hover:text-primary-300 hover:text-primary-700'
                            title={` ${spanish ? 'Copiar email' : 'Copy email'}`}
                            onClick={copyEmail}
                        >
                            p4blo.kuhn@gmail.com
                            {copy ? (
                                <>
                                    <span className=''>
                                        <svg
                                            className='text-primary-700  dark:text-primary-100 '
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
                                    className='text-primary-700  dark:text-primary-100 '
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
            }
        </section >
    )
}