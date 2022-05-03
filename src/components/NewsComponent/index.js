import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import NewsView from './../../views/NewsView'
import Modal from './../ModalComponent'

const News = () => {
  const [filterNews, setFilterNews] = useState('')
  const [isModalNews, setModalNews] = useState(false)

  const openModal = () => setModalNews(true)
  const onClose = () => setModalNews(false)

  const auth = useSelector((state) => state.auth)
  const news = useSelector((state) => state.news.news)

  const handleChangeFilter = (e) => {
    setFilterNews(e.target.value)
  }
  return (
    <>
      {isModalNews && <Modal onClose={onClose} auth={auth} type='news' />}
      <NewsView
        auth={auth}
        news={news}
        filterNews={filterNews}
        handleChangeFilter={handleChangeFilter}
        openModal={openModal}
      />
    </>
  )
}

export default memo(News)
