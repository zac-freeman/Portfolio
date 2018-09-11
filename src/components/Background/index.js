import React from 'react'
import PropTypes from 'prop-types'

import './Background.css'

const Background = props => (
  <div>
    <img className='bg' src={props.children} />
  </div>
)

Background.propTypes = {}

export default Background
