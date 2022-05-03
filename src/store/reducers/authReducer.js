const initialState = {
  username: '',
  is_auth: false,
  admin: false,
  error: '',
}

const USER = 'USER'
const ADMIN = 'ADMIN'
const ERROR = 'ERROR'
const LOGIN_OUT = 'LOGIN_OUT'

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return {
        is_auth: true,
        admin: false,
        error: '',
        username: action.payload,
      }
    case ADMIN:
      return { is_auth: true, admin: true, error: '', username: action.payload }
    case ERROR:
      return {
        is_auth: false,
        admin: false,
        error: 'Вход невозможен',
        username: '',
      }
    case LOGIN_OUT:
      return {
        is_auth: false,
        admin: false,
        error: '',
        username: '',
      }
    default:
      return state
  }
}

authReducer.setLoginUser = (payload) => ({ type: USER }, payload)
authReducer.setLoginAdmin = (payload) => ({
  type: ADMIN,
  payload,
})
authReducer.setError = (payload) => ({ type: ERROR, payload })
authReducer.setLoginOut = (payload) => ({ type: LOGIN_OUT, payload })
