import React, { memo } from 'react'
import classNames from 'classnames'
import style from './styles/index.module.scss'

const NewsItemViews = ({
  name,
  content,
  date,
  confirm,
  auth,
  id,
  handleDeleteNews,
  handleConfirmNews,
}) => {
  return (
    <article
      className={classNames(style['news__item'], {
        [style['news__item-unconfirm']]: !confirm,
      })}
    >
      <div className={style['news__header']}>
        {!auth.admin && !confirm && (
          <span className={style['news__header_subtitle']}>
            Неодобренная новость
          </span>
        )}
        {auth.admin && !confirm && (
          <button
            className={style['news__header_subtitle']}
            onClick={() => handleConfirmNews(id, !confirm)}
          >
            Одобрить новость
          </button>
        )}
        <button
          className={style['news__header_close-icon']}
          disabled={!auth.admin}
          onClick={() => handleDeleteNews(id)}
        >
          &times;
        </button>
      </div>
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
}

export default memo(NewsItemViews)
