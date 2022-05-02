import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/HeaderComponent'
import Home from './pages/Home'
import NewsPage from './pages/News'
import './styles/index.scss'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<NewsPage />} />
      </Routes>
    </>
  )
}

export default App
