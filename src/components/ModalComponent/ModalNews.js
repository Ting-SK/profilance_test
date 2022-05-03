import React from 'react'
import { Formik } from 'formik'
import ModalViews from './../../views/ModalView/index'
import { useSelector, useDispatch } from 'react-redux'
import { newsReducer } from './../../store/reducers/newsReducer'

const ModalNews = ({ onClose, auth, type }) => {
  const dispatch = useDispatch()
  const news = useSelector((state) => state.news.news)
  const handleAddNews = (news) => dispatch(newsReducer.setAddNews(news))
  return (
    <Formik
      initialValues={{
        name: '',
        content: '',
        date: new Date().toLocaleDateString(),
        confirm: false,
      }}
      onSubmit={({ name, content, date, confirm }) => {
        const objNews = { name, content, date, confirm, id: news.length + 1 }
        handleAddNews(objNews)
        onClose()
      }}
    >
      {(tools) => (
        <ModalViews onClose={onClose} tools={tools} auth={auth} type={type} />
      )}
    </Formik>
  )
}

export default ModalNews
