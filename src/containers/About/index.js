import React from 'react'
import styled from 'styled-components'

import Title from '../../components/Title'

const Content = styled.div`
    width: 75%;
    margin: auto auto;
`

const About = props => (
  <Content>
    <Title>About Me</Title>
    <p>
      Although the phrase is nonsense, it does have a long history. The phrase has been used for several centuries by typographers to show the most distinctive features of their fonts. It is used because the letters involved and the letter spacing in those combinations reveal, at their best, the weight, design, and other important features of the typeface.
    </p>
    <p>
      A 1994 issue of "Before & After" magazine traces "Lorem ipsum ..." to a jumbled Latin version of a passage from de Finibus Bonorum et Malorum, a treatise on the theory of ethics written by Cicero in 45 B.C. The passage "Lorem ipsum ..." is taken from text that reads, "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...," which translates as, "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
    </p>
    <p>
      During the 1500s, a printer adapted Cicero's text to develop a page of type samples. Since then, the Latin-like text has been the printing industry's standard for fake, or dummy, text. Before electronic publishing, graphic designers had to mock up layouts by drawing in squiggled lines to indicate text. The advent of self-adhesive sheets preprinted with "Lorem ipsum" gave a more realistic way to indicate where text would go on a page.
    </p>
  </Content>
)

export default About
