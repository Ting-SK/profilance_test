import React, { memo } from 'react'
import NewsView from './../../views/NewsView'
import { news } from './../../utils'

const News = () => <NewsView news={news} />

export default memo(News)
