import React, { memo, useState } from 'react'
import NewsView from './../../views/NewsView'
import { news } from './../../utils'

const News = () => {
  const [newsContent, setNewsContent] = useState(news)
  const [filterNews, setFilterNews] = useState('')

  const handleChangeFilter = (e) => {
    setFilterNews(e.target.value)
  }
  console.log(news)
  console.log(filterNews)
  return (
    <NewsView
      news={newsContent}
      filterNews={filterNews}
      handleChangeFilter={handleChangeFilter}
    />
  )
}

export default memo(News)
