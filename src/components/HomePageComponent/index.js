import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import HomePageView from '../../views/HomePageViews'

const HomePage = () => {
  const auth = useSelector((state) => state.auth)
  return <HomePageView auth={auth} />
}

export default memo(HomePage)
