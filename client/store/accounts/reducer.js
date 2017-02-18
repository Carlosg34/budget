import constants from './constants'
import authConstants from 'store/auth/constants'

const handlers = {
  [constants.FETCH_ACCOUNTS]: (state, action) => ({
    ...state,
    status: 'PENDING'
  }),
  [constants.FETCH_ACCOUNTS_SUCCESS]: (state, action) => ({
    ...state,
    status: 'SUCCESS',
    byId: action.payload.accounts.reduce((hash, account) => {
      hash[account.id] = account
      return hash
    }, {})
  }),
  [constants.FETCH_ACCOUNTS_ERROR]: (state, action) => ({
    ...state,
    status: 'ERROR'
  }),
  [authConstants.LOGOUT]: (state, action) => defaultState
}

const defaultState = {
  status: 'INIT',
  error: undefined,
  byId: {}

}

export default function (state = defaultState, action) {
  const handler = handlers[action.type]
  if (handler) {
    return handler(state, action)
  } else {
    return state
  }
}
