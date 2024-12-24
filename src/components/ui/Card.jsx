import { useLang } from '../../context/LangContext'

export default function Card({ proyect }) {
    const { spanish } = useLang()

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

    return (
        <>
            <section className='max-w-[25em] shadow-lg shadow-zinc-200 rounded-xl overflow-clip'>
                <div className='relative h-48 w-full border-b-2 overflow-clip group'>
                    <a title='Ver proyecto' href={proyect.website} target='blank'>
                        <img className=' z-10 absolute pointer-events-none invert duration-500 top-2 left-2 size-8 object-contain' src={proyect.logo} alt="" />
                        <img className='object-cover size-full group-hover:scale-105 duration-300' src={proyect.image} alt='' />
                    </a>
                </div>
                <div className='p-3 space-y-3'>
                    <div className='w-full flex justify-between'>
                        <span>
                            <span className='flex gap-3 items-center'>
                                <h2>{proyect.title}</h2>

                            </span>
                            <p className='text-zinc-400'>
                                {spanish ? proyect?.subtitle.es : proyect?.subtitle.eng}
                            </p>
                        </span>
                        <p className='text-zinc-300'>{proyect?.date}</p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {proyect.stack.map(({ image, name }) => (
                            <div className='bg-zinc-100 rounded-lg text-sm px-3 flex items-center justify-center' key={name}>
                                <span className='flex items-center justify-center size-6 scale-[0.7] '>
                                    {image}
                                </span>
                                <p className='text-zinc-600'>
                                    {name}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className=' h-full'>
                        {spanish ? proyect.description.es : proyect.description.eng}
                    </p>
                    <nav className='flex gap-2 font-bold'>
                        <ProyectButton
                            className='hover:bg-primary-600 text-primary-600'
                            href={proyect.github}
                        >

                            {git_svg} Codigo
                        </ProyectButton>
                        <ProyectButton
                            className='hover:bg-yellow-600 text-yellow-600'
                            href={proyect.website}
                        >
                            {domo_sg}
                            Demo
                        </ProyectButton>
                        <ProyectButton
                            className='hover:bg-red-500 text-red-500'
                            href={proyect.docs}
                        >
                            Docs
                        </ProyectButton>
                    </nav>
                </div>
            </section>
        </>
    )
}

function ProyectButton({ href, children, className }) {
    return (
        <>
            {href && (
                <a href={href} target='blank' className={`card-btn ${className}   `}>
                    {children}{' '}
                </a>
            )}
        </>
    )
}
