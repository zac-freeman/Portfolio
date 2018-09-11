import React, { Component } from 'react'

import NavBar from './components/NavBar'
import Background from './components/Background'

class App extends Component {
  state = { navLinks: {} }

  render () {
    return (
      <div>
        <Background />
        <NavBar />
      </div>
    )
  }
}

export default App
