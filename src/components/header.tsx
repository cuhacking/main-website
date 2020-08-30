import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useMatch } from '@reach/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import WordLogoDark from './wordLogoDark'
import MenuButton from './menuButton'

const StyledHeader = styled.header<{
  isOpen: boolean
  isDark: boolean
  fixed: boolean
}>`
  position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
  box-shadow: ${({ isDark }) =>
    isDark ? '0px 0px 5px rgba(0, 0, 0, 0.1)' : 'unset'};
  top: ${({ isOpen, isDark, fixed }) =>
    !fixed || isDark || isOpen ? 0 : '-65px'};
  left: 0;
  z-index: 1;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  width: 100vw;
  /* change 10rem to 20rem when adding the nav options back*/
  height: ${(props) => (props.isOpen ? '10rem' : '65px')};
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ isOpen, fixed }) =>
    fixed || isOpen ? 'var(--black)' : 'transparent'};

  transition: 0.2s cubic-bezier(0.17, 0.84, 0.44, 1);

  @media only screen and (min-width: 700px) {
    height: 65px;
    transition: 0.3s cubic-bezier(0.17, 0.84, 0.44, 1);
    background-color: ${({ fixed }) =>
      fixed ? 'var(--black)' : 'transparent'};
  }
`

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
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

  @media only screen and (min-width: 700px) {
    display: none;
  }
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

const Header = (props: { fixed: boolean }) => {
  const [isOpen, setOpen] = useState(false)
  const [isDark, setDark] = useState(false)
  const isHome = useMatch('/')

  useScrollPosition(
    ({ currPos }) => {
      const shouldBeDark = currPos.y < (isHome ? -800 : -350)
      if (shouldBeDark !== isDark) setDark(shouldBeDark)
    },
    [isDark]
  )

  return (
    <StyledHeader isOpen={isOpen} isDark={isDark} fixed={props.fixed}>
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
          {/* <NavButton
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
          </NavButton> */}
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
        {/* <NavButton
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
        </NavButton> */}
      </NavMenu>
    </StyledHeader>
  )
}
export default Header
