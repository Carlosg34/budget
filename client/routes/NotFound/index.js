import React from 'react'
import { NonIdealState } from '@blueprintjs/core'

import './NotFound.scss'

const NotFound = () =>
  <div className='not-found__container'>
    <NonIdealState
      visual='warning-sign'
      title='404 - Path Not Found'
      description='This URL has moved or does not exist.'
    />
  </div>

export default NotFound
