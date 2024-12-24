import AboutMe from '../components/AboutMe'
import Conocimientos from '../components/Conocimientos'
import Contacto from '../components/Contacto'
import Experiencia from '../components/Experiencia'
import MyProfile from '../components/MyProfile'
import Proyectos from '../components/Proyectos'
import { useModal } from '../context/ModalContext'
import { docs } from '../data/translations'

export default function Home() {
    const { Modal, closeModal } = useModal()

    const quit_svg = (
        <svg
            className='size-5 '
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
        >

            <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2'></path>{' '}
            <path d='M9 12h12l-3 -3'></path> <path d='M18 15l3 -3'></path>{' '}
        </svg>
    )

    const { title, description } = docs.mapukimun.es

    return (
        <>
            <Modal className='w-full h-screen fixed  z-50  bg-black/90 text-white '>
                <div className='flex justify-between '>
                    <article className='relative w-1/2'>
                        <button className='absolute flex items-center justify-center gap-1 right-0 p-3' onClick={closeModal}>
                            {quit_svg}  CERRAR
                        </button>

                        <div className='space-y-5 p-5'>
                            <h1 className='text-5xl'>
                                <b>{title}</b>
                            </h1>
                            <p>{description}</p>
                            <p></p>
                        </div>


                    </article>
                    <aside className='h-full p-10 w-1/2 flex items-center justify-self-center '>
                        <img className='object-cover size-full ' src="https://cdn.dribbble.com/users/716789/screenshots/2380435/media/379bd85f15028d533a597a9abb80136a.png" alt="" />
                    </aside>
                </div>
            </Modal>
            <header className='h-40 bg-gradient-to-br flex items-start justify-center relative px-20 duration-500 dark:to-primary-700 dark:from-primary-500  from-primary-400 to-primary-600 z-20'></header>
            <main className='dark:text-slate-200 duration-300 dark:bg-background px-3 pb-40 flex items-center flex-col w-full'>
                <div className='max-w-[80em] relative space-y-7'>
                    <MyProfile />
                    <div className='h-10 md:h-0'></div>
                    <Experiencia />
                    <hr />
                    <section className='flex gap-20 md:flex-row flex-col justify-between'>
                        <AboutMe />
                        <Conocimientos></Conocimientos>
                    </section>
                    <Proyectos />

                    <Contacto />
                </div>
            </main>
        </>
    )
}
