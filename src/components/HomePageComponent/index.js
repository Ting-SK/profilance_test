import React, { memo } from 'react'
import HomePageView from '../../views/HomePageViews'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const auth = useSelector((state) => state.auth)

  return <HomePageView auth={auth} />
}

export default memo(HomePage)
