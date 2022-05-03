import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { newsReducer } from './../../store/reducers/newsReducer'
import NewsItemViews from './../../views/NewsItemViews'

const NewsItem = (props) => {
  const { confirm, auth } = props

  const dispatch = useDispatch()
  const handleDeleteNews = (a) => dispatch(newsReducer.setDeleteNews(a))
  const handleConfirmNews = (id, confirm) =>
    dispatch(newsReducer.setConfirmNews(id, confirm))

  if (!confirm && !auth.is_auth) return
  return (
    <NewsItemViews
      {...props}
      handleDeleteNews={handleDeleteNews}
      handleConfirmNews={handleConfirmNews}
    />
  )
}

export default memo(NewsItem)
