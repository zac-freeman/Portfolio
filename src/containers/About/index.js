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

const AnchorText = styled.p`
  font-size: 16;
  font-weight: bold;
  margin: auto 4px;
`

const AnchorImage = styled.i`
    font-size: 24pt;
    margin: auto 4px;
`

const StyledAnchor = styled.a`
  display: flex;
  justify-content: center;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  color: white;
  text-decoration-line: none;
  margin: auto auto;
  border: 1px solid white;
  border-radius: 5px;
  width: 160px;
  height: 40px;

&:hover {
    color: grey;
    border-color: grey;
    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2);
}
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
      In my own time, I developed neural networks that taught a cart how to balance a pole and
      {' '}
      <Highlight>trained a fighter to beat bots</Highlight>
      {' '}
      in Street Fighter II: Hyper Fighting. I explored the similarties between a ball rolling down a hill and a learning algorithm moving to the lowest error.
    </Text>
    <Text>
      As a student, I discovered my interest in algorithms, data structures, math, and the relationships between them. I used
      {' '}
      <Highlight>C++</Highlight>
      {' '}
      to construct my first tree and destroy it. I lead and developed a group project to
      {' '}
      <Highlight>simulate the orbits of photons</Highlight>
      {' '}
      around a black hole in
      {' '}
      <Highlight>Python</Highlight>
      .
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
      <Highlight>Java, JavaScript, PostgreSQL, and React</Highlight>
      {' '}
      to design applications that build repositories and deliver content to the end user.
    </Text>

    <StyledAnchor
      href={
        'https://docs.google.com/document/d/1KzVq-698WoVYoYsXYXDbq9wMLryn6DTc9G-5Y8mAsiw/edit?usp=sharing'
      }
      target={'_blank'}
    >
      <AnchorText>My Resume</AnchorText>
      {' '}
      <AnchorImage className={'far fa-file-pdf'} />
    </StyledAnchor>

  </Content>
)

export default About
