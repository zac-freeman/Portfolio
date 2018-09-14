import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 12px 2px;
  overflow: hidden;
  background-color: rgb(59,59,59);
`

const StyledLink = styled(Link)`
  display: block;
  color: white;
  transition: 0.3s;
  text-align: center;
  text-decoration: none;
  margin-right: 2%;

  &:hover {
      color: cornflowerblue;
  }
`

const HomeLink = styled(Link)`
  float: left;
  display: block;
  color: white;
  transition: 0.3s;
  text-align: center;
  text-decoration: none;
  margin-left: 2%;
  margin-right: auto;

  &:hover {
      color: cornflowerblue;
  }
`

const Nav = props => (
  <StyledNav>
    <HomeLink to='/'>Zac Freeman</HomeLink>
    <StyledLink to='/about'>About</StyledLink>
    <StyledLink to='/portfolio'>Portfolio</StyledLink>
    <StyledLink to='/contact'>Contact</StyledLink>
  </StyledNav>
)

export default Nav
