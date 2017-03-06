import constants from './constants'
import authConstants from 'store/auth/constants'

const handlers = {
  [constants.FETCH_TRANSACTIONS]: (state, action) => ({
    ...state,
    status: 'PENDING',
    byId: {}
  }),
  [constants.FETCH_TRANSACTIONS_SUCCESS]: (state, action) => {
    return {
      ...state,
      status: 'SUCCESS',
      byId: action.payload.transactions.reduce((hash, transaction) => {
        transaction.date = new Date(transaction.date)
        hash[transaction.id] = transaction
        return hash
      }, {})
    }
  },
  [constants.FETCH_TRANSACTIONS_ERROR]: (state, action) => ({
    ...state,
    status: 'ERROR',
    error: action.error
  }),

  [constants.UPDATE_TRANSACTION]: (state, action) => {
    return {
      ...state,
      byId: {
        ...state.byId,
        [action.payload.values.id.toString()]: action.payload.values
      }
    }
  },
  [constants.UPDATE_TRANSACTION_SUCCESS]: (state, action) => {
    return state
  },
  [constants.UPDATE_TRANSACTION_ERROR]: (state, action) => {
    return state
  },
  [authConstants.LOGOUT]: (state, action) => defaultState
}

const defaultState = {
  status: 'INIT',
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
