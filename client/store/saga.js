import { takeEvery, call, put } from 'redux-saga/effects'

import request from 'utils/request'

import accountConstants from 'store/accounts/constants'
import * as accountActions from 'store/accounts/actions'

import transactionConstants from 'store/transactions/constants'
import * as transactionActions from 'store/transactions/actions'

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
    const response = yield call(request, `/api/accounts/${action.payload.accountId}/transactions`)
    yield put(transactionActions.fetchTransactionsSuccess(action.payload.accountId, response))
  } catch (error) {
    yield put(transactionActions.fetchTransactionsError(action.payload.accountId, error))
  }
}

export function* watchFetchAccounts() {
  yield takeEvery(accountConstants.FETCH_ACCOUNTS, fetchAccounts)
}

export function* watchFetchTransactions() {
  yield takeEvery(transactionConstants.FETCH_TRANSACTIONS, fetchTransactions)
}

export default function* rootSaga () {
  yield [
    watchFetchAccounts(),
    watchFetchTransactions()
  ]
}
