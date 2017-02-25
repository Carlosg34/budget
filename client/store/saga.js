import { takeEvery, call, put } from 'redux-saga/effects'
import { SubmissionError } from 'redux-form'


import request from 'utils/request'

import accountConstants from 'store/accounts/constants'
import * as accountActions from 'store/accounts/actions'

import transactionConstants from 'store/transactions/constants'
import * as transactionActions from 'store/transactions/actions'

import authConstants from 'store/auth/constants'
import * as authActions from 'store/auth/actions'

export function* fetchAccounts() {
  try {
    const response = yield call(request, '/api/accounts')
    yield put(accountActions.fetchAccountsSuccess(response))
  } catch (error) {
    yield put(accountActions.fetchAccountsError(error))
  }
}

export function* fetchTransactions(action) {
  try {
    const response = yield call(request, `/api/transactions/${action.payload.accountId}`)
    yield put(transactionActions.fetchTransactionsSuccess(action.payload.accountId, response))
  } catch (error) {
    yield put(transactionActions.fetchTransactionsError(action.payload.accountId, error))
  }
}

export function* updateTransaction(action) {
  try {
    const response = yield call(request, `/api/transactions/${action.payload.values.id}`, 'PUT', action.payload.values)
    yield put(transactionActions.updateTransactionSuccess(action.payload.values.id, response))
    action.payload.resolve()
  } catch (error) {
    yield put(transactionActions.updateTransactionError(action.payload.values.id, error))
    yield call(action.payload.reject, new SubmissionError({_error: error.text || 'Request failed'}))
  }
}

export function* login(action) {
  try {
    const response = yield call(request, '/api/users/login', 'POST', action.payload.values)
    yield put(authActions.loginSuccess(response))
    action.payload.resolve()
  } catch (error) {
    yield put(authActions.loginError(error))
    yield call(action.payload.reject, new SubmissionError({_error: error.text || 'Request failed'}))
  }
}

export function* createAccount(action) {
  try {
    const response = yield call(request, '/api/users', 'POST', action.payload.values)
    yield put(authActions.createAccountSuccess(response))
    action.payload.resolve()
  } catch (error) {


    const errors = {}
    if (error.code === 'usernameRegistered') {
      errors.username = error.text
    } else if (error.code === 'emailRegistered') {
      errors.email = error.text
    }

    yield put(authActions.createAccountError(error))
    yield call(action.payload.reject, new SubmissionError(errors))
  }
}

export function* watchFetchAccounts() {
  yield takeEvery(accountConstants.FETCH_ACCOUNTS, fetchAccounts)
}

export function* watchFetchTransactions() {
  yield takeEvery(transactionConstants.FETCH_TRANSACTIONS, fetchTransactions)
}

export function* watchUpdateTransaction() {
  yield takeEvery(transactionConstants.UPDATE_TRANSACTION, updateTransaction)
}

export function* watchLogin() {
  yield takeEvery(authConstants.LOGIN, login)
}

export function* watchCreateAccount() {
  yield takeEvery(authConstants.CREATE_ACCOUNT, createAccount)
}

export default function* rootSaga () {
  yield [
    watchFetchAccounts(),

    watchFetchTransactions(),
    watchUpdateTransaction(),

    watchLogin(),
    watchCreateAccount()
  ]
}
