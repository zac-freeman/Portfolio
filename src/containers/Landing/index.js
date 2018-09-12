import React from 'react'
import styled from 'styled-components'

import Image from '../../components/Image'
import Title from '../../components/Title'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
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
  </Content>
)

export default Landing
