import React, { memo } from 'react'
import NewsItemViews from './../../views/NewsItemViews/index'

const NewsItem = (props) => <NewsItemViews {...props} />

export default memo(NewsItem)
