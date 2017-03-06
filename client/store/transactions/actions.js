import constants from './constants'

export function fetchTransactions(fromDate, toDate) {
  return {
    type: constants.FETCH_TRANSACTIONS,
    payload: {
      fromDate,
      toDate
    }
  }
}

export function fetchTransactionsSuccess(response) {
  return {
    type: constants.FETCH_TRANSACTIONS_SUCCESS,
    payload: {
      transactions: response
    }
  }
}

export function fetchTransactionsError(error) {
  return {
    type: constants.FETCH_TRANSACTIONS_ERROR,
    error: error
  }
}


export function updateTransaction(values, resolve, reject) {
  return {
    type: constants.UPDATE_TRANSACTION,
    payload: {values, resolve, reject}
  }
}

export function updateTransactionSuccess(response) {
  return {
    type: constants.UPDATE_TRANSACTION_SUCCESS,
    payload: {
      transaction: response
    }
  }
}

export function updateTransactionError(error) {
  return {
    type: constants.UPDATE_TRANSACTION_ERROR,
    error: error
  }
}
