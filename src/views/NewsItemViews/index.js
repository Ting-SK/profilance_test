import React, { memo } from 'react'
import style from './styles/index.module.scss'

const NewsItemViews = ({ name, content, date }) => (
  <article className={style['news__item']}>
    <div className={style['news__item_title']}>
      <h5>{name}</h5>
    </div>
    <div className={style['news__item_content']}>
      <p>{content}</p>
    </div>
    <div className={style['news__item_date']}>
      <p>{date}</p>
    </div>
  </article>
)

export default memo(NewsItemViews)
