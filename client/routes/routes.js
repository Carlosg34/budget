import React from 'react'

import AppLayout from './Home/redux/container'

// import settingsRoutes from './Settings/routes'
// import routersRoutes from './Routers/routes'

// function errorLoading (err) {
//   console.error('Dynamic page loading failed', err)
// }
//
// function loadRoute (cb) {
//   return (module) => cb(null, module.default)
// }

export default {
  path: '/',
  component: AppLayout,
  // indexRoute: { onEnter: (nextState, replace) => replace('/routers') },
  // childRoutes: [
  //   // settingsRoutes,
  //   // routersRoutes,
  //   {
  //     path: '*',
  //     getComponent (location, cb) {
  //       System.import('./NotFound')
  //         .then(loadRoute(cb))
  //         .catch(errorLoading)
  //     }
  //   }
  // ]
}
