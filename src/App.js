import React from 'react'
import Header from './components/HeaderComponent'
import Home from './pages/Home'
import NewsPage from './pages/News'
import './styles/index.scss'

const App = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <NewsPage />
    </>
  )
}

export default App
