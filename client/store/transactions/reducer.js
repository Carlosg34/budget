import constants from './constants'
import authConstants from 'store/auth/constants'

const handlers = {
  [constants.FETCH_TRANSACTIONS]: (state, action) => ({
    byAccountId: {
      ...state.byAccoundId,
      [action.payload.accountId]: {
        ...state.byAccountId[action.payload.accountId],
        status: 'PENDING',
        byId: {}
      }
    }
  }),
  [constants.FETCH_TRANSACTIONS_SUCCESS]: (state, action) => {
    return {
      byAccountId: {
        ...state.byAccountId,
        [action.payload.accountId]: {
          ...state.byAccountId[action.payload.accountId],
          status: 'SUCCESS',
          byId: action.payload.transactions.reduce((hash, transaction) => {
            transaction.date = new Date(transaction.date)
            hash[transaction.id] = transaction
            return hash
          }, {})
        }
      }
    }
  },
  [constants.FETCH_TRANSACTIONS_ERROR]: (state, action) => ({
    byAccountId: {
      ...state.byAccountId,
      [action.payload.accountId]: {
        ...state.byAccountId[action.payload.accountId],
        status: 'ERROR',
        error: action.error
      }
    }
  }),

  [constants.UPDATE_TRANSACTION]: (state, action) => {
    return state
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
  byAccountId: {}
}

export default function (state = defaultState, action) {
  const handler = handlers[action.type]
  if (handler) {
    return handler(state, action)
  } else {
    return state
  }
}
