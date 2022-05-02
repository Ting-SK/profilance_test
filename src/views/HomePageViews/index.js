import React, { memo } from 'react'
import style from './styles/index.module.scss'

const HomePageView = () => {
  return (
    <main className={style['homepage']}>
      <h1 className={style['homepage__message']}>
        Привет гость/Пользователь/Админ
      </h1>
    </main>
  )
}

export default memo(HomePageView)
