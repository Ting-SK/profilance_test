import React from 'react'
import { createPortal } from 'react-dom'
import style from './styles/index.module.scss'

const ModalAuthViews = ({ tools, onClose, auth }) => {
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
          <h4>Вход в систему</h4>
        </div>
        <form onSubmit={handleSubmit} className={style['modal__form']}>
          <div className={style['modal__form_input']}>
            <label>Логин</label>
            <input
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              name='username'
            />
            {errors.username && (
              <div className={style['modal__form_input-error']}>
                {errors.username}
              </div>
            )}
          </div>
          <div className={style['modal__form_input']}>
            <label>Пароль</label>
            <input
              type='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name='password'
            />
            {errors.password && (
              <div className={style['modal__form_input-error']}>
                {errors.password}
              </div>
            )}
          </div>

          <div className={style['modal__form_btn']}>
            {auth.error && (
              <div className={style['modal__form_btn-error']}>{auth.error}</div>
            )}
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>,
    modalPortal
  )
}

export default ModalAuthViews
