import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import HomePage from '../routes/Home/redux/reducer'

export default combineReducers({
  routing: routerReducer,
  home: HomePage
})
