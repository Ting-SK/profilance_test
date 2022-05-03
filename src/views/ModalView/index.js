import ModalAuthViews from './ModalAuthView'
import ModalNewsViews from './ModalNewsViews'

const modalTypeViews = {
  auth: ModalAuthViews,
  news: ModalNewsViews,
}

const ModalViews = ({ tools, onClose, auth, type }) =>
  modalTypeViews[type]({ tools, onClose, auth })

export default ModalViews
