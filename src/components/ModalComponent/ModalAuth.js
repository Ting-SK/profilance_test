import React from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { authReducer } from './../../store/reducers/authReducer'
import ModalViews from './../../views/ModalView'
import { loginData } from '../../utils'

const ModalAuth = ({ onClose, auth, type }) => {
  const dispatch = useDispatch()
  const setLoginUser = (user) => dispatch(authReducer.setLoginUser(user))
  const setLoginAdmin = (user) => dispatch(authReducer.setLoginAdmin(user))
  const setError = () => dispatch(authReducer.setError())
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
      {(tools) => (
        <ModalViews onClose={onClose} tools={tools} auth={auth} type={type} />
      )}
    </Formik>
  )
}

export default ModalAuth
