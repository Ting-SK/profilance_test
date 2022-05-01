import React from 'react'
import { createPortal } from 'react-dom'
import style from './styles/index.module.scss'

const ModalViews = ({ title = '', content = '', footer = '', onClose }) => {
  const modalPortal = document.getElementById('modals')

  return createPortal(
    <div className={style['modal']} onClick={onClose}>
      <div
        className={style['modal__dialog']}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style['modal__header']}>
          <h3 className={style['modal__title']}>{title}</h3>
          <span className={style['modal__close']} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={style['modal__body']}>
          <div className={style['modal__content']}>{content}</div>
        </div>
        {footer && <div className={style['modal__footer']}>{footer}</div>}
      </div>
    </div>,
    modalPortal
  )
}

export default ModalViews
