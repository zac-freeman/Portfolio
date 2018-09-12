import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Image from '../Image'
import GitHubLink from './GitHubLink'

const ProjectTitle = styled.p`
    color: white;
    font-weight: bold;
    margin: 4px auto;
`

const ProjectText = styled.p`
    color: white;
    margin: 8px auto;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    height: 350px;
    padding: 4px 4px;
    border: 2px solid #333;
    border-radius: 10px;
    margin: auto auto;
    background-color: #333;
`

const ProjectCard = props => (
  <Card>
    <Image src={props.imageSrc} alt={`Depiction of ${props.title}`} />
    <ProjectTitle>{props.title}</ProjectTitle>
    <ProjectText>
      {props.desc}
    </ProjectText>
    <GitHubLink href={props.link} target={'_blank'} />
  </Card>
)

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default ProjectCard
