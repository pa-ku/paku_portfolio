import { useRef } from 'react'
import { createContext, useContext } from 'react'
export const ModalContext = createContext()

export function useModal() {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error('useModalContext debe estar dentro de un provider')
    }
    return context
}

export function ModalProvider({ children }) {
    const refModal = useRef(null)

    const openModal = () => refModal.current?.show()
    const closeModal = () => refModal.current?.close()

    function Modal({ children, className }) {
        return (
            <dialog ref={refModal} className={className}>
                {children}
            </dialog>
        )
    }

    return <ModalContext.Provider value={{ Modal, refModal, openModal, closeModal }}>{children}</ModalContext.Provider>
}