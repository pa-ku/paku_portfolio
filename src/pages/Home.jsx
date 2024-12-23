
import AboutMe from '../components/AboutMe'
import Conocimientos from '../components/Conocimientos'
import Experiencia from '../components/Experiencia'
import MyProfile from '../components/MyProfile'
import Proyectos from '../components/Proyectos'
export default function Home() {
    return (
        <>
            <header className="h-40 bg-gradient-to-br flex items-start justify-center relative px-20 from-primary-400 to-primary-600">
            </header>
            <main className=' pb-40 flex items-center  flex-col w-full'>
                <div className='max-w-[80em] relative space-y-7'>
                    <MyProfile />
                    <Experiencia />
                    <hr />
                    <section className='flex gap-20  justify-between'>
                        <AboutMe />
                        <Conocimientos></Conocimientos>
                    </section>

                    <Proyectos />

                </div>
            </main >


        </>
    )
}