import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImg = styled.div`
  display: flex;
  justify-content: center;
`

const Image = props => (
  <StyledImg>
    <img src={props.src} alt={props.alt} />
  </StyledImg>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image
