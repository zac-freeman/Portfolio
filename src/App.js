import React, { Component } from 'react'

import NavBar from './components/NavBar'
import Background from './components/Background'
import Content from './components/Content'

class App extends Component {
  state = { navLinks: {} }

  render () {
    return (
      <div>
        <Background />
        <NavBar />
        <Content />
      </div>
    )
  }
}

export default App
