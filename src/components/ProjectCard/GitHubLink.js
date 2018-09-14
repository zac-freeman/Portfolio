import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLink = styled.div`
    display: flex;
    justify-content: center;
    font-size: 30pt;
`

const StyledAnchor = styled.a`
    color: rgb(59,59,59);
    transition: 0.3s;

    &:hover {
      color: cornflowerblue;
    }
`

const GitHubLink = props => (
  <StyledLink>
    <StyledAnchor href={props.href} target={props.target}>
      <i className={'fab fa-github'} />
    </StyledAnchor>
  </StyledLink>
)

GitHubLink.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired
}

export default GitHubLink
