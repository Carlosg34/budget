import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'


import auth from './auth/reducer'
import accounts from './accounts/reducer'
import transactions from './transactions/reducer'

import main from './main/reducer'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,

  auth: auth,
  accounts: accounts,
  transactions: transactions,

  main: main
})
