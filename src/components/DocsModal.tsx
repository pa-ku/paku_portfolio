import React from 'react'
import { useModal } from '../context/ModalContext'

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

export default function DocsModal({ data }) {
  const { Modal, closeModal } = useModal()

  const {
    title,
    description,
    caracteristicas,
    implementacion,
    desafios,
    futuro,
  } = data

  return (
    <>
      {data && (
        <Modal className='m-auto rounded-xl p-5 will-change-scroll overscroll-contain z-40 bg-white/[95%] dark:bg-background-700/90 backdrop-blur-md dark:text-white '>
          <div className='flex flex-col w-full relative items-center justify-center '>
            <div className='sticky flex z-50 items-center justify-end w-full top-0 right-0'>
              <button
                className='  font-bold bg-rose-400 text-white  rounded-lg  size-8 flex items-center justify-center gap-1   '
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <article className='max-w-[60em]   relative flex items-start justify-center flex-col  p-3 md:p-10'>
              <div className='space-y-5 '>
                <h1 className='text-5xl'>
                  <b>{title}</b>
                </h1>
                <p className='text-xl'>{description}</p>
                <p></p>
              </div>

              <div className='  space-y-10 text-lg'>
                <DocsSection object={caracteristicas}>
                  Caracteristicas
                </DocsSection>
                <DocsSection object={implementacion}>
                  Implementacion
                </DocsSection>
                <DocsSection object={desafios}>Desafios</DocsSection>
                <DocsSection object={futuro}>Futuro</DocsSection>
              </div>
            </article>
          </div>
        </Modal>
      )}
    </>
  )
}
