import portrait from '../assets/images/portrait.webp'
import { useLang } from '../context/LangContext'
import NavLinks from './NavLinks'

export default function MyProfile() {
  const { spanish } = useLang()

  const subtitle = spanish ? '' : ''
  return (
    <>
      <section className='flex absolute  w-full flex-col md:flex-row -top-20 items-center justify-between'>
        <span className='flex items-center gap-5'>
          <div className='size-48  bg-white z-20 flex dark:border-background border-4 dark:shadow-background-700 shadow-lg rounded-full items-center justify-center border-white  overflow-hidden'>
            <img
              className='bg-white hover:scale-125   scale-[1.2] duration-500  object-cover  size-full'
              src={portrait}
              alt='Mi imagen'
            />
          </div>
          <div className='pt-20 animate-profilename'>
            <h1 className='text-4xl dark:text-white font-bold'>Pablo Kuhn</h1>
            {spanish && (
              <p className='text-lg dark:text-slate-400 '>
                Soy un desarrollador <b> Front End</b> ubicado en Buenos Aires
              </p>
            )}

            {!spanish && (
              <p className='text-lg dark:text-slate-400 '>
                I'm <b>FullStack</b> developer ubicado en Buenos Aires
              </p>
            )}
          </div>
        </span>

        <NavLinks />
      </section>
    </>
  )
}
