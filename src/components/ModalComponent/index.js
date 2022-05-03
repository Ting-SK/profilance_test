import React, { useEffect } from 'react'
import { Formik } from 'formik'
import ModalViews from '../../views/ModalView'
import { useDispatch } from 'react-redux'
import { authReducer } from './../../store/reducers/authReducer'
import { loginData } from '../../utils'

const Modal = ({ onClose, auth }) => {
  const dispatch = useDispatch()
  const setLoginUser = (user) => dispatch(authReducer.setLoginUser(user))
  const setLoginAdmin = (user) => dispatch(authReducer.setLoginAdmin(user))
  const setError = () => dispatch(authReducer.setError())

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
      onSubmit={({ username, password }) => {
        const dataObj = loginData.find(
          (data) => data.username === username && data.password === password
        )
        if (dataObj) {
          if (dataObj.isAdmin) {
            setLoginAdmin(username)
            onClose()
          } else {
            setLoginUser(username)
            onClose()
          }
        } else {
          setError()
        }
      }}
    >
      {(tools) => <ModalViews onClose={onClose} tools={tools} auth={auth} />}
    </Formik>
  )
}

export default Modal
