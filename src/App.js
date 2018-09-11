import React, { Component } from 'react'

import NavBar from './components/NavBar'

class App extends Component {
  state = { navLinks: {} }

  render () {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

export default App
