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


export function updateTransaction(values, resolve, reject) {
  return {
    type: constants.UPDATE_TRANSACTION,
    payload: {values, resolve, reject}
  }
}

export function updateTransactionSuccess(accountId, response) {
  return {
    type: constants.UPDATE_TRANSACTION_SUCCESS,
    payload: {
      transactions: response,
      accountId: accountId
    }
  }
}

export function updateTransactionError(accountId, response) {
  return {
    type: constants.UPDATE_TRANSACTION_ERROR,
    error: response,
    payload: {accountId}
  }
}
