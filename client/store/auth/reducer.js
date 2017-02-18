import constants from './constants'
import jwtDecode from 'jwt-decode'


const handlers = {
  [constants.LOGIN]: (state, action) => ({
    ...state,
    status: 'PENDING'
  }),
  [constants.LOGIN_SUCCESS]: (state, action) => {
    const { token } = action.payload
    const decodedToken = jwtDecode(token)

    return {
      ...state,
      status: 'SUCCESS',
      token: token,
      id: decodedToken.id,
      username: decodedToken.username,
      role: decodedToken.role,
      exp: decodedToken.exp,
      error: undefined
    }
  },
  [constants.LOGIN_ERROR]: (state, action) => {
    return {
      ...state,
      status: 'ERROR',
      token: undefined,
      id: undefined,
      username: undefined,
      role: undefined,
      exp: undefined,
      error: action.error
    }
  },
  [constants.LOGOUT]: (state, action) => {
    return defaultState
  },
  [constants.CREATE_ACCOUNT]: (state, action) => ({
    ...state,
    state: 'PENDING'
  }),
  [constants.CREATE_ACCOUNT_SUCCESS]: (state, action) => {
    const { token } = action.payload
    const decodedToken = jwtDecode(token)

    return {
      ...state,
      status: 'SUCCESS',
      token: token,
      id: decodedToken.id,
      username: decodedToken.username,
      role: decodedToken.role,
      exp: decodedToken.exp,
      error: undefined
    }
  }
}

const defaultState = {
  status: 'INIT',
  token: undefined,
  id: undefined,
  username: undefined,
  role: undefined,
  exp: undefined,
  error: undefined
}

export default function (state = defaultState, action) {
  const handler = handlers[action.type]
  if (handler) {
    return handler(state, action)
  } else {
    return state
  }
}
