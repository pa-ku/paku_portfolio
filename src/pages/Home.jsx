import AboutMe from '../components/AboutMe'
import Conocimientos from '../components/Conocimientos'
import Contacto from '../components/Contacto'
import DocumentationModal from '../components/DocumentationModal'
import Experiencia from '../components/Experiencia'
import MyProfile from '../components/MyProfile'
import Proyectos from '../components/Proyectos'


export default function Home() {
    return (
        <>
            <DocumentationModal></DocumentationModal>
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
