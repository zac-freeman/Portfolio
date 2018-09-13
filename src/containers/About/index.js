import React from 'react'
import styled from 'styled-components'

import Title from '../../components/Title'

const Highlight = styled.span`
  color: rgb(59,59,59);
  font-size: 16.5pt;
  font-weight: bolder;
`

const Text = styled.p`
  font-size: 16pt;
`

const Content = styled.div`
    width: 50%;
    margin: auto auto;
`

const About = props => (
  <Content>
    <Title>About Me</Title>
    <Text>
      I am a
      {' '}
      <Highlight>Full Stack Developer</Highlight>
      {' '}
      with a passion for all things numbers.
    </Text>
    <Text>
      In my own time, I've developed neural networks that teach a cart how to balance a pole and
      {' '}
      <Highlight>show Blanka how to beat bots</Highlight>
      {' '}
      in Street Fighter II: Hyper Fighting. I've wondered about the similarties between a ball rolling down a hill and a learning algorithm moving to the lowest error.
    </Text>
    <Text>
      As a student, I discovered my interest in algorithms, data structures, math, and the relationships between them. I used
      {' '}
      <Highlight>C++</Highlight>
      {' '}
      to construct my first tree and destroy it.
    </Text>
    <Text>
      During the summer breaks, I participated in two internships. At FSU, I used
      {' '}
      <Highlight>Python</Highlight>
      {' '}
      and
      {' '}
      <Highlight>MATLAB</Highlight>
      {' '}
      to model the flow of liquids in a novel way. At UAH, I used
      {' '}
      <Highlight>C++</Highlight>
      {' '}
      and
      {' '}
      <Highlight>CUDA</Highlight>
      {' '}
      to discover new behaviors of cosmic rays outside our galaxy. I dedicated one Summer to
      {' '}
      <Highlight>fostering a litter of kittens</Highlight>
      {' '}
      and finding them suitable families.
    </Text>
    <Text>
      As a Full Stack Developer, I use
      {' '}
      <Highlight>Java, JavaScript, and React</Highlight>
      {' '}
      to build applications that build repositories and deliver content to the end user.
    </Text>
  </Content>
)

export default About
