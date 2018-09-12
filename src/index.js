import React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Landing from './containers/Landing'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Contact from './containers/Contact'

import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Landing} />
      <Route exact path='/about' component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/contact' component={Contact} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)
