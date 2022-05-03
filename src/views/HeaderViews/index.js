import React from 'react'
import { Link } from 'react-router-dom'
import logotype from '../../assets/icons/logo.svg'
import style from './styles/index.module.scss'

const HeaderViews = ({ handleOpenModal, auth, handleLoginOut }) => {
  return (
    <>
      <header className={style['header-app']}>
        <div className={style['header-app__logo']}>
          <Link to='/'>
            <img src={logotype} alt='profilance logo' />
          </Link>
        </div>
        <nav className={style['header-app__nav']}>
          <ul className={style['header-app__nav_links']}>
            <li className={style['header-app__nav_link']}>
              <Link to='/news'>Новости</Link>
            </li>
            {auth.is_auth ? (
              <li
                className={style['header-app__nav_link']}
                onClick={handleLoginOut}
              >
                Выход
              </li>
            ) : (
              <li
                className={style['header-app__nav_link']}
                onClick={handleOpenModal}
              >
                Вход
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default HeaderViews
