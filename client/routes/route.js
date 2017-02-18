import React from 'react'

import AppLayout from './AppLayout'

import loginRoute from './Login/route'

function errorLoading (err) {
  console.error('Dynamic page loading failed', err)
}

function loadRoute (cb) {
  return (module) => cb(null, module.default)
}

export default {
  path: '/',
  component: AppLayout,
  indexRoute: { onEnter: (nextState, replace) => replace('/login') },
  childRoutes: [
    loginRoute,
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
