import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers/authReducer'
import { newsReducer } from './reducers/newsReducer'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
})
