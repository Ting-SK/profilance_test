import { news } from './../../utils/index'

const initialState = {
  news: news,
}

const ADD_NEWS = 'ADD_NEWS'
const CONFIRM_NEWS = 'CONFIRM_NEWS'
const DELETE_NEWS = 'DELETE_NEWS'

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return { ...state, news: [...state.news, action.payload] }
    case CONFIRM_NEWS:
      return {
        ...state,
        news: state.news.map((e) =>
          e.id === action.id ? { ...e, confirm: action.confirm } : e
        ),
      }
    case DELETE_NEWS:
      return {
        ...state,
        news: [...state.news.filter((e) => e.id !== action.payload)],
      }
    default:
      return state
  }
}

newsReducer.setAddNews = (payload) => ({ type: ADD_NEWS, payload })
newsReducer.setConfirmNews = (id, confirm) => ({
  type: CONFIRM_NEWS,
  id,
  confirm,
})
newsReducer.setDeleteNews = (payload) => ({ type: DELETE_NEWS, payload })
