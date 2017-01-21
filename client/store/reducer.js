import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import HomePage from '../routes/Home/redux/reducer'
import main from './main/reducer'
import accounts from './accounts/reducer'
import transactions from './transactions/reducer'

export default combineReducers({
  routing: routerReducer,
  home: HomePage,
  main: main,
  accounts: accounts,
  transactions: transactions
})
