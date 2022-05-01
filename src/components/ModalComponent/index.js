import React, { useEffect } from 'react'
import { Formik } from 'formik'
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

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {(tools) => <ModalViews onClose={onClose} tools={tools} />}
    </Formik>
  )
}

export default Modal
