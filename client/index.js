// import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { createHistory } from 'history'
import { useRouterHistory } from 'react-router'

import rootSaga from './store/saga'
import rootReducer from './store/reducer'

import { AppContainer } from 'react-hot-loader'
import App from './App'

const browserHistory = useRouterHistory(createHistory)({ basename: '/' })
const reduxRouterMiddleware = routerMiddleware(browserHistory)
const sagaMiddleware = createSagaMiddleware()

const middleware = [reduxRouterMiddleware, sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(...middleware)))
const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(rootSaga)

import { FocusStyleManager } from '@blueprintjs/core'
FocusStyleManager.onlyShowFocusOnTabs()

const mountPoint = document.getElementById('root')

render((
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>
), mountPoint)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    render((
      <AppContainer>
        <NextApp store={store} history={history} />
      </AppContainer>
    ), mountPoint)
  })
}
