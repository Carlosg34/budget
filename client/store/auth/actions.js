import constants from './constants'
import jwtDecode from 'jwt-decode'

export function createAccount(account) {
  return {
    type: constants.CREATE_ACCOUNT,
    payload: {
      account: account
    }
  }
}

export function createAccountSuccess(response) {
  return {
    type: constants.CREATE_ACCOUNT_SUCCESS,
    payload: {
      token: response.token
    }
  }
}

export function createAccountError(error) {
  return {
    type: constants.CREATE_ACCOUNT_ERROR,
    error: error
  }
}

export function deleteAccount() {
  return {
    type: constants.DELETE_ACCOUNT
  }
}

export function deleteAccountSuccess(response) {
  return {
    type: constants.DELETE_ACCOUNT_SUCCESS,
    payload: {
      token: response.token
    }
  }
}

export function deleteAccountError(error) {
  return {
    type: constants.DELETE_ACCOUNT_ERROR,
    error: error
  }
}

export function editAccount() {
  return {
    type: constants.EDIT_ACCOUNT
  }
}

export function editAccountSuccess(response) {
  return {
    type: constants.EDIT_ACCOUNT_SUCCESS,
    payload: { response: response }
  }
}

export function editAccountError(error) {
  return {
    type: constants.EDIT_ACCOUNT_ERROR,
    error: error
  }
}

export function login(values, resolve, reject) {
  return {
    type: constants.LOGIN,
    payload: {
      values,
      resolve,
      reject
    }
  }
}

export function loginSuccess(response) {
  return {
    type: constants.LOGIN_SUCCESS,
    payload: response
  }
}

export function loginError(error) {
  return {
    type: constants.LOGIN_ERROR,
    error: error
  }
}


export function logout() {
  return {
    type: constants.LOGOUT
  }
}
