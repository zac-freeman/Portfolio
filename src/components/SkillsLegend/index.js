import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
    margin: 0 0;
    padding: 2pt 2pt;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    padding: 4px 4px;
    border: 2px solid #333;
    border-radius: 10px;
    margin: auto auto;
    background-color: #333;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

  &:hover {
    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2);
`

const SkillsLegend = props => (
  <Card>
    <h4>Skills Gained</h4>
    <Text>Java</Text>
    <Text>C++</Text>
    <Text>Python</Text>
  </Card>
)

export default SkillsLegend
