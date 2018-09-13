import React from 'react'
import styled from 'styled-components'

import Image from '../../components/Image'
import Title from '../../components/Title'

const Subtitle = styled.p`
  display: flex;
  justify-content: center;
  margin: 0 0;
  padding: 0 0;
  color: white;
  font-size: 22pt;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
`

const Landing = props => (
  <Content>
    <Image
      src={
        'https://media.licdn.com/dms/image/C4E03AQHaEBEvwCUl5w/profile-displayphoto-shrink_200_200/0?e=1541635200&v=beta&t=zSonBGppz1xxVv49GYjbuc2WvxGzQsHlGDKp6FfRnPQ'
      }
      alt={'An image of Zac Freeman'}
    />
    <Title>Zac Freeman</Title>
    <Subtitle>Full Stack Developer</Subtitle>
  </Content>
)

export default Landing
