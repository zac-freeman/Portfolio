import React from 'react'
import PropTypes from 'prop-types'

import './Background.css'

const Background = props => (
  <div>
    <img className='bg' src={'https://placekitten.com/g/1920/1080'} />
  </div>
)

Background.propTypes = {}

export default Background
