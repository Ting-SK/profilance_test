import React from 'react'
import style from './styles/index.module.scss'

const NewsView = ({ news }) => {
  return (
    <main className={style['news']}>
      <div className={style['news__filter']}>
        <input />
      </div>
      <div className={style['news__items']}>
        {news.map(({ name, content, date }) => {
          return (
            <div className={style['news__item']}>
              <p>{name}</p>
              <p>{content}</p>
              <p>{date}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default NewsView
