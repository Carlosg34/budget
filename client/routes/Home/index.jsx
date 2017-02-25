import React from 'react'
import { Button } from '@blueprintjs/core'
import { Link } from 'react-router'

import './Home.scss'

const Home = () => (
  <div className='home__container'>
    <h1>Welcome to Budget</h1>
    <h2>Simplify your finances and plan for the future.</h2>
    <div>
      <Link to='/create-account'><Button text="Create Account" /></Link>
      <Link to='/login'><Button text="Sign In" /></Link>
    </div>
  </div>
)

export default Home
