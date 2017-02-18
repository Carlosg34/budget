import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import route from './routes/route'

import './style/style.scss'

class App extends Component {
  render() {
    const { store, history } = this.props
    if (!this.route) {
      this.route = route
    }

    return (
      <Provider store={store}>
        <Router history={history} routes={this.route} />
      </Provider>
    )
  }
}

export default App
