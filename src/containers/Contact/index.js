import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

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
    color: rgb(59,59,59);
  }
`

const Contact = props => (
  <Content>
    <Fade clear delay={0}>
      <Title>Contact Me</Title>
    </Fade>
    <Links>

      <Fade clear delay={0}>
        <StyledLink>
          <StyledAnchor href={'mailto:zpf14@my.fsu.edu'} target={'_top'}>
            <i className={'fas fa-envelope-square'} />
          </StyledAnchor>
        </StyledLink>
      </Fade>

      <Fade clear delay={300}>
        <StyledLink>
          <StyledAnchor
            href={'https://www.linkedin.com/in/zac-freeman'}
            target={'_blank'}
          >
            <i className={'fab fa-linkedin'} />
          </StyledAnchor>
        </StyledLink>
      </Fade>

      <Fade clear delay={600}>
        <StyledLink>
          <StyledAnchor
            href={'https://github.com/zac-freeman'}
            target={'_blank'}
          >
            <i className={'fab fa-github-square'} />
          </StyledAnchor>
        </StyledLink>
      </Fade>
    </Links>
  </Content>
)

export default Contact
