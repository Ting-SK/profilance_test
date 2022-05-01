import React, { useEffect } from 'react'
import ModalViews from '../../views/ModalView'

const Modal = ({ onClose }) => {
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


  
  return <ModalViews onClose={onClose} />
}

export default Modal
