import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledText = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    font-size: 44pt;
`

const Title = props => (
  <StyledText>
    <p>{props.children}</p>
  </StyledText>
)

Title.propTypes = {
  children: PropTypes.string.isRequired
}

export default Title
