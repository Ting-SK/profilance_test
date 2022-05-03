import React, { memo } from 'react'
import NewsItem from './../../components/NewsItem'
import style from './styles/index.module.scss'

const NewsView = ({
  news,
  filterNews,
  handleChangeFilter,
  auth,
  openModal,
}) => {
  return (
    <main className={style['news']}>
      <div className={style['news__header-block']}>
        <input value={filterNews} onChange={handleChangeFilter} />
      </div>
      <div className={style['news__header-block']}>
        <button disabled={!auth.is_auth} onClick={openModal}>
          Добавить новость
        </button>
      </div>
      <section className={style['news__items']}>
        {news
          .filter((news) =>
            filterNews ? news.name.includes(filterNews) : news
          )
          .map(({ id, name, content, date, confirm }) => (
            <NewsItem
              key={id}
              id={id}
              name={name}
              content={content}
              date={date}
              confirm={confirm}
              auth={auth}
            />
          ))}
      </section>
    </main>
  )
}

export default memo(NewsView)
