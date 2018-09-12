import React from 'react'

import Image from '../../components/Image'
import Title from '../../components/Title'

const Landing = props => (
  <div>
    <Image
      src={
        'https://media.licdn.com/dms/image/C4E03AQHaEBEvwCUl5w/profile-displayphoto-shrink_200_200/0?e=1541635200&v=beta&t=zSonBGppz1xxVv49GYjbuc2WvxGzQsHlGDKp6FfRnPQ'
      }
      alt={'An image of Zac Freeman'}
    />
    <Title>Zac Freeman</Title>
  </div>
)

export default Landing
