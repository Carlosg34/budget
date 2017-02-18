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
