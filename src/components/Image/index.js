import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px auto;
  min-width: 200px;
  min-height: 200px;
  max-width: 200px;
  max-height: 200px;

`

const StyledImg = styled.img`
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  max-width: 100%;
  max-height: 100%;

  &:hover {
    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2);
  }
`

const Image = props => (
  <StyledDiv>
    <StyledImg src={props.src} alt={props.alt} />
  </StyledDiv>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image
