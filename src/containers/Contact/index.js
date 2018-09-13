import React from 'react'
import styled from 'styled-components'

import Title from '../../components/Title'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  font-size: 100pt;
  margin: 16px 16px;
`

const StyledAnchor = styled.a`
  color: white;
  transition: 0.3s;

  &:hover {
    color: grey;
  }
`

const Contact = props => (
  <Content>
    <Title>Contact Me</Title>
    <Links>
      <StyledLink>
        <StyledAnchor href={'mailto:zpf14@my.fsu.edu'} target={'_top'}>
          <i className={'fas fa-envelope-square'} />
        </StyledAnchor>
      </StyledLink>

      <StyledLink>
        <StyledAnchor
          href={'https://www.linkedin.com/in/zac-freeman'}
          target={'_blank'}
        >
          <i className={'fab fa-linkedin'} />
        </StyledAnchor>
      </StyledLink>

      <StyledLink>
        <StyledAnchor href={'https://github.com/zac-freeman'} target={'_blank'}>
          <i className={'fab fa-github-square'} />
        </StyledAnchor>
      </StyledLink>
    </Links>
  </Content>
)

export default Contact
