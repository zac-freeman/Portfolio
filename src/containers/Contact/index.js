import React from 'react'
import styled from 'styled-components'

import Title from '../../components/Title'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

const StyledLink = styled.div`
    display: flex;
    justify-content: center;
    font-size: 100pt;
`

const StyledAnchor = styled.a`
    color: white;

    &:hover {
        color: grey;
    }
`

const Contact = props => (
  <Content>
    <Title>Contact Me</Title>
    <StyledLink>
      <StyledAnchor href={'mailto:zpf14@my.fsu.edu'} target={'_top'}>
        <i className={'fas fa-at'} />
      </StyledAnchor>
    </StyledLink>
  </Content>
)

export default Contact
