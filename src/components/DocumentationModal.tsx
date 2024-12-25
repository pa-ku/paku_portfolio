import React from 'react'

import { useModal } from '../context/ModalContext'
import { docs } from '../data/translations'

function DocsSection({ object, children }) {
  return (
    <section>
      <h2 className=''>
        <b> {children}</b>
      </h2>
      <div className='ml-4 space-y-3'>
        {object.map(({ txt, title }) => (
          <div>
            <h3 className='font-bold dark:text-slate-200'>{title}</h3>
            <p className='dark:text-slate-300'>{txt}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function DocumentationModal() {
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

  const {
    title,
    description,
    image,
    caracteristicas,
    implementacion,
    desafios,
    futuro,
  } = docs.mapukimun.es

  return (
    <Modal className='m-auto rounded-xl p-5 will-change-scroll overscroll-contain z-50 bg-white/90 dark:bg-background-700/90 backdrop-blur-md dark:text-white '>
      <div className='flex flex-col w-full items-center justify-center '>
        {/* <aside className='h-full  flex items-center justify-self-center '>
          <img
            className='object-cover h-96 obje- size-full '
            src={image}
            alt=''
          />
        </aside> */}
        <article className='max-w-[60em]   relative flex items-start justify-center flex-col  p-3 md:p-10'>
          <button
            className='absolute bg-rose-400 text-white  rounded-lg  px-3 py-1 flex items-center justify-center gap-1 right-5 top-5 '
            onClick={closeModal}
          >
            {quit_svg} CERRAR
          </button>

          <div className='space-y-5 '>
            <h1 className='text-5xl'>
              <b>{title}</b>
            </h1>
            <p className='text-xl'>{description}</p>
            <p></p>
          </div>

          <div className='  space-y-10 text-lg'>
            <DocsSection object={caracteristicas}>Caracteristicas</DocsSection>
            <DocsSection object={implementacion}>Implementacion</DocsSection>
            <DocsSection object={desafios}>Desafios</DocsSection>
            <DocsSection object={futuro}>Futuro</DocsSection>
          </div>
        </article>
      </div>
    </Modal>
  )
}
