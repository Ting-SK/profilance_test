import React from 'react'
import Modal from '../../components/ModalComponent'
import HeaderViews from '../../views/HeaderViews'
import { useSelector, useDispatch } from 'react-redux'
import { authReducer } from './../../store/reducers/authReducer'

const Header = () => {
  const [isModal, setModal] = React.useState(false)
  const auth = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const setLoginOut = () => dispatch(authReducer.setLoginOut())

  const openModal = () => setModal(true)
  const onClose = () => setModal(false)

  return (
    <>
      {isModal && <Modal onClose={onClose} auth={auth} />}
      <HeaderViews
        auth={auth}
        openModal={openModal}
        setLoginOut={setLoginOut}
      />
    </>
  )
}

export default Header
