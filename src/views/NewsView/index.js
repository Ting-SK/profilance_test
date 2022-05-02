import React, { memo } from 'react'
import NewsItem from './../../components/NewsItem'
import style from './styles/index.module.scss'

const NewsView = ({ news }) => (
  <main className={style['news']}>
    <div className={style['news__filter']}>
      <input />
    </div>
    <section className={style['news__items']}>
      {news.map(({ name, content, date }) => (
        <NewsItem name={name} content={content} date={date} />
      ))}
    </section>
  </main>
)

export default memo(NewsView)
