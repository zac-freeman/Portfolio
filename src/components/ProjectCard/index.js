import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

import GitHubLink from './GitHubLink'

const ProjectTitle = styled.p`
  color: rgb(59,59,59);
  font-weight: bold;
  margin: auto auto;
`

const ProjectText = styled.p`
  color: rgb(59,59,59);
  margin: 8px 4px;
`

const FontImage = styled.i`
  color: rgb(59,59,59);
  font-size: 120px;
  margin: auto auto;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 250px;
  height: 400px;
  padding: 4px 4px;
  border: 1px solid rgb(59,59,59);
  border-radius: 5px;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 10px 18px 0 rgba(0,0,0,0.2);
    transform: scale(1.03)
}
`

const FadeContainer = styled.div`
  margin: 16px auto;
`

const ProjectCard = props => (
  <FadeContainer>
    <Fade clear delay={props.delay}>
      <Card>
        <FontImage className={props.imageSrc} />
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectText>
          {props.desc}
        </ProjectText>
        <GitHubLink href={props.link} target={'_blank'} />
      </Card>
    </Fade>
  </FadeContainer>
)

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired
}

export default ProjectCard
