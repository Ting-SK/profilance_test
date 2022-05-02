import React, { memo } from 'react'
import NewsItemViews from './../../views/NewsItemViews'

const NewsItem = (props) => <NewsItemViews {...props} />

export default memo(NewsItem)
