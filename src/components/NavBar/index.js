import React from 'react'
import PropTypes from 'prop-types'

import './NavBar.css'

const NavBar = props => (
  <ul>
    <li><a href='default.asp'>Home</a></li>
    <li><a href='news.asp'>News</a></li>
    <li><a href='contact.asp'>Contact</a></li>
    <li><a href='about.asp'>About</a></li>
  </ul>
)

NavBar.propTypes = {}

export default NavBar
