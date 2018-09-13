import React from 'react'
import styled from 'styled-components'
import Typing from 'react-typing-animation'

import Image from '../../components/Image'

const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 0 0;
  color: white;
  font-size: 22pt;
`

const Divider = styled.i`
  font-size: 22pt;
  color: white;
  transform: scale(8,1);
  margin: 0 auto;
`

const LandingTitle = styled.p`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 0 0;
  color: white;
  font-size: 44pt;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
`

const Landing = props => (
  <Content>
    <Image src={'./src/assets/me.jpeg'} alt={'An image of Zac Freeman'} />
    <LandingTitle>Zac Freeman</LandingTitle>
    <Divider className={'fas fa-minus'} />
    <Subtitle>
      &nbsp;
      <Typing speed={75} loop>
        Full Stack Developer
        <Typing.Backspace count={20} delay={1750} />
        Physicist
        <Typing.Backspace count={9} delay={1750} />
        Problem Solver
        <Typing.Backspace count={14} delay={1750} />
      </Typing>
      &nbsp;
    </Subtitle>
  </Content>
)

export default Landing
