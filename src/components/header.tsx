import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import WordLogoDark from './wordLogoDark'
import MenuButton from './menuButton'

const StyledHeader = styled.header<{ isOpen: boolean }>`
  position: fixed;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${(props) => (props.isOpen ? '20rem' : '65px')};
  justify-content: flex-start;
  align-items: center;

  background-color: var(--black);
  color: var(--white);

  transition: height 0.2s ease-out;

  @media only screen and (min-width: 700px) {
    height: 65px;
  }
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
  height: 65px;
`

const ButtonDiv = styled.div`
  display: none;

  @media only screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: var(--mobile-width);
`

const NavButton = styled(Link)`
  text-align: right;
  font-size: 2rem;
  margin: 0.5rem 0;

  @media only screen and (min-width: 700px) {
    font-size: 1.125rem;
    margin: 0 0 0 40px;

    transition: color 0.1s ease-in;

    &:hover {
      color: var(--light-purple) !important;
    }
  }
`

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <StyledHeader isOpen={isOpen}>
      <NavBar>
        <Link to='/'>
          <StyledLogo />
        </Link>
        <MenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
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
            partiallyActive={true}
            activeStyle={{
              color: 'var(--purple)'
            }}
          >
            Blog
          </NavButton>
        </ButtonDiv>
      </NavBar>
      <NavMenu>
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
      </NavMenu>
    </StyledHeader>
  )
}
export default Header
