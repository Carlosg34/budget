import constants from './constants'

export function fetchAccounts() {
  return {
    type: constants.FETCH_ACCOUNTS
  }
}

export function fetchAccountsSuccess(response) {
  return {
    type: constants.FETCH_ACCOUNTS_SUCCESS,
    payload: {accounts: response}
  }
}

export function fetchAccountsError(response) {
  return {
    type: constants.FETCH_ACCOUNTS_ERROR,
    error: response
  }
}
