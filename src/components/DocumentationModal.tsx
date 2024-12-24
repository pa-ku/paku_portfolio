import React from 'react'

export default function DocumentationModal({ children }) {
  return (
    <dialog className='fixed inset-0 w-screen h-screen scroll bg-black/90 backdrop-blur-sm flex items-center justify-center overflow-hidden'>
      {children}
    </dialog>
  )
}
