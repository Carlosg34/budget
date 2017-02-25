import React from 'react'

import AppLayout from './AppLayout'
import Home from './Home'

import loginRoute from './Login/route'
import createAccountRoute from './CreateAccount/route'
import accountsRoute from './Accounts/route'

function errorLoading (err) {
  console.error('Dynamic page loading failed', err)
}

function loadRoute (cb) {
  return (module) => cb(null, module.default)
}

export default {
  path: '/',
  component: AppLayout,
  indexRoute: {component: Home},
  childRoutes: [
    loginRoute,
    createAccountRoute,
    accountsRoute,
    {
      path: '*',
      getComponent (location, cb) {
        System.import('./NotFound')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    }
  ]
}
