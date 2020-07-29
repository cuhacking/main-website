import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import WordLogoDark from './wordLogoDark'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 65px;
  justify-content: center;
  align-items: center;

  background-color: var(--black);
  color: var(--white);
`

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: var(--mobile-width);

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const StyledLogo = styled(WordLogoDark)`
  width: 140px;
`

const ButtonDiv = styled.div``

const NavButton = styled(Link)`
  font-size: 1.125rem;
  margin-left: 40px;

  @media only screen and (min-width: 700px) {
    transition: 0.1s ease-in;

    &:hover {
      color: var(--light-purple) !important;
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <NavBar>
        <Link to='/'>
          <StyledLogo />
        </Link>
        <ButtonDiv>
          <NavButton
            to='/'
            activeStyle={{
              color: 'var(--purple)'
            }}
          >
            Home
          </NavButton>
          <NavButton
            to='/about'
            activeStyle={{
              color: 'var(--purple)'
            }}
          >
            About
          </NavButton>
          <NavButton
            to='/events'
            activeStyle={{
              color: 'var(--purple)'
            }}
          >
            Events
          </NavButton>
          <NavButton
            to='/blog'
            activeStyle={{
              color: 'var(--purple)'
            }}
          >
            Blog
          </NavButton>
        </ButtonDiv>
      </NavBar>
    </StyledHeader>
  )
}

export default Header
