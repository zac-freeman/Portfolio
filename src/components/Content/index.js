import React from 'react'
import PropTypes from 'prop-types'

import './Content.css'

const Content = props => (
  <p>
    {props.children}
  </p>
)

Content.propTypes = {}

export default Content
