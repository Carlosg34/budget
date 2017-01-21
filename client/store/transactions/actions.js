import constants from './constants'

export function fetchTransactions(accountId) {
  return {
    type: constants.FETCH_TRANSACTIONS,
    payload: {accountId}
  }
}

export function fetchTransactionsSuccess(accountId, response) {
  return {
    type: constants.FETCH_TRANSACTIONS_SUCCESS,
    payload: {
      transactions: response,
      accountId: accountId
    }
  }
}

export function fetchTransactionsError(accountId, response) {
  return {
    type: constants.FETCH_TRANSACTIONS_ERROR,
    error: response,
    payload: {accountId}
  }
}
