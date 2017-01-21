import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import routes from './routes/routes'

import './style/style.scss'

class App extends Component {
  render() {
    const { store, history } = this.props
    if (!this.routes) this.routes = routes

    return (
      <Provider store={store}>
        <Router history={history} routes={this.routes} />
      </Provider>
    )
  }
}

export default App
