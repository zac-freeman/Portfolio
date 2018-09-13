import React from 'react'
import styled from 'styled-components'

import Title from '../../components/Title'
import ProjectCard from '../../components/ProjectCard'

const ProjectList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Portfolio = props => (
  <div>
    <Title>Projects</Title>
    <ProjectList>
      <ProjectCard
        imageSrc={'./src/assets/devduel.png'}
        title={'Dev-Duel'}
        desc={
          'A NodeJS server with endpoints to transform user data from the GitHub API and a website that uses these endpoints to display and compare GitHub profiles.'
        }
        link={
          'https://github.com/zac-freeman/js-assessment-dev-duel-zac-freeman'
        }
      />
      <ProjectCard
        imageSrc={'./src/assets/socialmedia.png'}
        title={'Social Media API'}
        desc={
          'A collection of endpoints that create users, tweets, likes, mentions, and hashtags in a PostgreSQL database after the style of Twitter.'
        }
        link={
          'https://github.com/zac-freeman/social-media-assessment-zac-freeman'
        }
      />
      <ProjectCard
        imageSrc={'./src/assets/crown.png'}
        title={'Java Collections'}
        desc={
          'An practice exercise with Java Collections. Focused on creating a HashMap themed as a Hierarchy (or tree) of FatCats and WageSlaves (parent and child nodes)'
        }
        link={'https://github.com/zac-freeman/java-collections-zac-freeman'}
      />
      <ProjectCard
        imageSrc={'./src/assets/polecart.png'}
        title={'PoleCart'}
        desc={
          'A neural network with one hidden layer and two potential outputs: move left and move right. Uses supervised learning implemented through linear regression to teach a cart to balance a pole.'
        }
        link={'https://github.com/zac-freeman/polecart'}
      />
    </ProjectList>
  </div>
)

export default Portfolio
