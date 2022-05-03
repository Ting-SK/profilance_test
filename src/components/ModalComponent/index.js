import { useEffect } from 'react'
import ModalAuth from './ModalAuth'
import ModalNews from './ModalNews';

const modalTypes = {
  auth: ModalAuth,
  news: ModalNews
}

const Modal = ({ onClose, auth, type }) => {
  const onKeydown = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose()
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })

  return modalTypes[type]({ onClose, auth, type })
}

export default Modal
