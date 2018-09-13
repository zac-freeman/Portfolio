import React from 'react'
import styled from 'styled-components'

import Title from '../../components/Title'
import ProjectCard from '../../components/ProjectCard'

const ProjectList = styled.ul`
    display: flex;
    justify-content: space-between;
`

const Portfolio = props => (
  <div>
    <Title>Projects</Title>
    <ProjectList>
      <ProjectCard
        imageSrc={'https://placekitten.com/g/200/200'}
        title={'Test Project'}
        desc={
          'This is a sample project description. Ideally, it fills up enough space to wrap over more than one line.'
        }
        link={
          'https://github.com/zac-freeman/js-assessment-dev-duel-zac-freeman'
        }
      />
      <ProjectCard
        imageSrc={'https://placekitten.com/g/200/200'}
        title={'Test Project'}
        desc={
          'This is a sample project description. Ideally, it fills up enough space to wrap over more than one line.'
        }
        link={
          'https://github.com/zac-freeman/js-assessment-dev-duel-zac-freeman'
        }
      />
      <ProjectCard
        imageSrc={'https://placekitten.com/g/200/200'}
        title={'Test Project'}
        desc={
          'This is a sample project description. Ideally, it fills up enough space to wrap over more than one line.'
        }
        link={
          'https://github.com/zac-freeman/js-assessment-dev-duel-zac-freeman'
        }
      />
      <ProjectCard
        imageSrc={'https://placekitten.com/g/200/200'}
        title={'Test Project'}
        desc={
          'This is a sample project description. Ideally, it fills up enough space to wrap over more than one line.'
        }
        link={
          'https://github.com/zac-freeman/js-assessment-dev-duel-zac-freeman'
        }
      />
    </ProjectList>
  </div>
)

export default Portfolio
