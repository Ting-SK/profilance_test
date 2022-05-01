import React from 'react'
import Modal from '../../components/ModalComponent'
import HeaderViews from '../../views/HeaderViews'

const Header = () => {
  const [isModal, setModal] = React.useState(false)
  
  const openModal = () => setModal(true)
  const onClose = () => setModal(false)

  return (
    <>
      {isModal && <Modal onClose={onClose} />}
      <HeaderViews openModal={openModal} />
    </>
  )
}

export default Header
