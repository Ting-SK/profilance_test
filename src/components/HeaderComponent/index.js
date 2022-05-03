import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authReducer } from './../../store/reducers/authReducer'
import Modal from '../../components/ModalComponent'
import HeaderViews from '../../views/HeaderViews'

const Header = () => {
  const [isModal, setModal] = useState(false)

  const openModal = () => setModal(true)
  const onClose = () => setModal(false)

  const dispatch = useDispatch()
  const setLoginOut = () => dispatch(authReducer.setLoginOut())
  const auth = useSelector((state) => state.auth)

  return (
    <>
      {isModal && <Modal onClose={onClose} auth={auth} type='auth' />}
      <HeaderViews
        auth={auth}
        handleOpenModal={openModal}
        handleLoginOut={setLoginOut}
      />
    </>
  )
}

export default Header
