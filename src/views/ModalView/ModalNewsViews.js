import React from 'react'
import { createPortal } from 'react-dom'
import style from './styles/index.module.scss'

const ModalNewsViews = ({ tools, onClose }) => {
  const { handleSubmit, handleChange, handleBlur, values, errors } = tools

  const modalPortal = document.getElementById('modals')

  return createPortal(
    <div className={style['modal']} onClick={onClose}>
      <div
        className={style['modal__dialog']}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style['modal__header']}>
          <span className={style['modal__close']} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={style['modal__form-title']}>
          <h4>Создание новости</h4>
        </div>
        <form onSubmit={handleSubmit} className={style['modal__form']}>
          <div className={style['modal__form_input']}>
            <label>Заголовок</label>
            <input
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name='name'
            />
            {errors.name && (
              <div className={style['modal__form_input-error']}>
                {errors.name}
              </div>
            )}
          </div>
          <div className={style['modal__form_input']}>
            <label>Текст новости</label>
            <textarea
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
              name='content'
            />
            {errors.content && (
              <div className={style['modal__form_input-error']}>
                {errors.content}
              </div>
            )}
          </div>
          <div className={style['modal__form_btn']}>
            <button type='submit'>Создать</button>
          </div>
        </form>
      </div>
    </div>,
    modalPortal
  )
}

export default ModalNewsViews
