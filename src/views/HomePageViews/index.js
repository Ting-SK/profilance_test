import React, { memo } from 'react'
import style from './styles/index.module.scss'

const HomePageView = ({ auth }) => {
  return (
    <main className={style['homepage']}>
      <h1 className={style['homepage__message']}>
        {auth.is_auth ? `Привет ${auth.username}` : 'Привет гость'}
      </h1>
    </main>
  )
}

export default memo(HomePageView)
