import React, { memo } from 'react'
import NewsView from './../../views/NewsView/index'
import { news } from './../../utils/index'

const News = () => <NewsView news={news} />

export default memo(News)
