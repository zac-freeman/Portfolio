import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import Title from '../../components/Title'
import ProjectCard from '../../components/ProjectCard'

const ProjectList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 0;
`

const Portfolio = props => (
  <div>
    <Fade clear delay={0}>
      <Title>Projects</Title>
    </Fade>
    <ProjectList>
      <ProjectCard
        imageSrc={'fas fa-khanda'}
        title={'Dev-Duel'}
        desc={
          'A NodeJS server with endpoints to transform user data from the GitHub API and a website that uses these endpoints to display and compare GitHub profiles.'
        }
        link={
          'https://github.com/zac-freeman/js-assessment-dev-duel-zac-freeman'
        }
        delay={0}
      />
      <ProjectCard
        imageSrc={'fas fa-dove'}
        title={'Social Media API'}
        desc={
          'A collection of endpoints that create users, tweets, likes, mentions, and hashtags in a PostgreSQL database after the style of Twitter.'
        }
        link={
          'https://github.com/zac-freeman/social-media-assessment-zac-freeman'
        }
        delay={300}
      />
      <ProjectCard
        imageSrc={'fas fa-crown'}
        title={'Java Collections'}
        desc={
          'A practice exercise with Java Collections. Focused on creating a HashMap themed as a Hierarchy (or tree) of FatCats and WageSlaves (parent and child nodes)'
        }
        link={'https://github.com/zac-freeman/java-collections-zac-freeman'}
        delay={600}
      />
      <ProjectCard
        imageSrc={'fas fa-dumbbell'}
        title={'PoleCart'}
        desc={
          'A neural network with one hidden layer and two potential outputs: move left and move right. Uses supervised learning implemented through linear regression to train a cart to balance a pole.'
        }
        link={'https://github.com/zac-freeman/polecart'}
        delay={900}
      />
    </ProjectList>
  </div>
)

export default Portfolio
