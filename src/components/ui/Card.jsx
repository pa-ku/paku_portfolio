
import { useLang } from '../../context/LangContext'
import { useModal } from '../../context/ModalContext'



const domo_sg = <svg
    className='size-6'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeLlinecap='round'
    strokeLinejoin='round'
    strokeWidth='1.5'
>

    <path d='M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4'></path>
    <path d='M11.5 3a16.989 16.989 0 0 0 -1.826 4'></path>
    <path d='M12.5 3a16.989 16.989 0 0 1 1.828 4'></path>
    <path d='M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4'></path>
    <path d='M11.5 21a16.989 16.989 0 0 1 -1.826 -4'></path>
    <path d='M12.5 21a16.989 16.989 0 0 0 1.828 -4'></path>
    <path d='M2 10l1 4l1.5 -4l1.5 4l1 -4'></path>
    <path d='M17 10l1 4l1.5 -4l1.5 4l1 -4'></path>{' '}
    <path d='M9.5 10l1 4l1.5 -4l1.5 4l1 -4'></path>{' '}
</svg>

const git_svg = <svg
    className='size-5'
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
>
    <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>{' '}
</svg>




export default function Card({ proyect }) {
    const { spanish } = useLang()
    const { openModal } = useModal()
    return (
        <>
            <section className='max-w-[25em] dark:bg-background-400 shadow-lg dark:shadow-zinc-900 shadow-zinc-200 rounded-xl overflow-clip'>
                <div className='relative h-48 w-full border-b-2 dark:border-slate-900 overflow-clip group'>
                    <a title='Ver proyecto' href={proyect.website} target='blank'>
                        <img className=' z-10 absolute pointer-events-none invert duration-500 top-2 left-2 size-8 object-contain' src={proyect.logo} alt="" />
                        <img className='object-cover dark:hover:brightness-100 dark:brightness-90 size-full group-hover:scale-[1.02] duration-300' src={proyect.image} alt='' />
                    </a>
                </div>
                <div className='p-3 space-y-3'>
                    <div className='w-full flex justify-between'>
                        <span>
                            <span className='flex gap-3 items-center'>
                                <h2 className='filter-gradient-text'><b>{proyect.title}</b></h2>

                            </span>
                            <p className='dark:text-slate-400 text-zinc-400'>
                                {spanish ? proyect?.subtitle.es : proyect?.subtitle.eng}
                            </p>
                        </span>
                        <p className='text-zinc-300 dark:text-slate-500'>{proyect?.date}</p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {proyect.stack.map(({ image, name }) => (
                            <div className='bg-zinc-100 dark:bg-background-600 rounded-lg text-sm pl-1 pr-3 flex items-center justify-center' key={name}>
                                <span className='flex dark:text-slate-300 items-center justify-center size-6 scale-[0.7] '>
                                    {image}
                                </span>
                                <p className='text-zinc-600 dark:text-slate-300'>
                                    {name}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className=' h-full dark:text-slate-300'>
                        {spanish ? proyect.description.es : proyect.description.eng}
                    </p>
                    <nav className='flex gap-2 font-bold'>
                        <ProyectLink
                            className='hover:bg-primary-600 dark:hover:bg-primary-700  border-primary-600 dark:hover:text-white dark:text-primary dark:border-primary text-primary-600'
                            href={proyect.github}
                        >

                            {git_svg} {spanish ? 'Codigo' : 'Repo'}
                        </ProyectLink>
                        <ProyectLink
                            className='hover:bg-yellow-600 dark:hover:bg-yellow-700 border-yellow-600 text-yellow-600'
                            href={proyect.website}
                        >
                            {domo_sg}
                            {spanish ? 'Demo' : 'Webpage'}
                        </ProyectLink>
                        {proyect.docs && <ProyectButton
                            className='hover:bg-red-500 dark:hover:bg-red-700  border-red-500 text-red-500'
                            onClick={openModal}
                            name={proyect.title}
                        >
                            {spanish ? 'Documentación' : 'Documentation'}
                        </ProyectButton>}
                    </nav>
                </div>
            </section>
        </>
    )
}

function ProyectButton({ onClick, className, children }) {
    return (
        <button onClick={onClick} target='blank' className={`duration-300 dark:bg-background-600  hover:text-white   border-2 flex items-center justify-center gap-1 rounded-lg py-1 px-2 border-current;  ${className}   `}>
            {children}
        </button>
    )
}

function ProyectLink({ href, children, className, }) {
    return (
        <>
            {href && (
                <a href={href} target='blank' className={`duration-300 dark:bg-background-600  hover:text-white   border-2 flex items-center justify-center gap-1 rounded-lg py-1 px-2 border-current;  ${className}   `}>
                    {children}
                </a>
            )}
        </>
    )
}
