import React, { memo } from 'react'
import NewsItem from './../../components/NewsItem'
import style from './styles/index.module.scss'

const NewsView = ({ news, filterNews, handleChangeFilter }) => (
  <main className={style['news']}>
    <div className={style['news__header-block']}>
      <input value={filterNews} onChange={handleChangeFilter} />
    </div>
    <div className={style['news__header-block']}>
      <button>Добавить новость</button>
    </div>
    <section className={style['news__items']}>
      {news
        .filter((news) => (filterNews ? news.name.includes(filterNews) : news))
        .map(({ id, name, content, date }) => (
          <NewsItem key={id} name={name} content={content} date={date} />
        ))}
    </section>
  </main>
)

export default memo(NewsView)
