import React from 'react'
import styled from 'styled-components'

import Image from '../../components/Image'
import Title from '../../components/Title'

const Subtitle = styled.p`
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
    <Subtitle>Full Stack Developer</Subtitle>
  </Content>
)

export default Landing
