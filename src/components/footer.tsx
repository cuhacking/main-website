import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faFacebookF,
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

import WordLogoDark from './wordLogoDark'

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 20px;
  padding-bottom: 20px;
  width: 100vw;

  background-color: var(--black);
  color: var(--white);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: var(--mobile-width);

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const BackToTopButton = styled.button`
  align-self: flex-end;
  padding: 0;
  color: var(--white);
  background: none;
  border: none;

  font-family: 'Work Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: normal;

  margin: 0 0 20px;

  @media only screen and (min-width: 700px) {
    font-size: 1.125rem;
    margin: 0;

    transition: 0.1s ease-in;

    &:hover {
      cursor: pointer;
      color: var(--light-purple);
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--mobile-width);

  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 25px;

  @media only screen and (min-width: 700px) {
    text-align: left;
    align-items: flex-start;
    width: 45%;
    margin-bottom: 0;
    margin-right: 5%;
  }
`

const StyledLogo = styled(WordLogoDark)`
  width: 200px;
  height: 55px;
`

const ContactPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 25px;

  h3 {
    font-size: 1.5rem;
    font-weight: normal;

    margin: 0;
  }

  a {
    text-decoration: underline;
  }

  @media only screen and (min-width: 700px) {
    text-align: left;
    align-items: flex-start;
    width: 35%;
    margin-bottom: 0;
    margin: 25px 5% 0 0;
  }
`

const SocialDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 15em;

  margin-top: 10px;
`

const StyledIcon = styled.a`
  font-size: 1.5rem;
  transition: 0.1s ease-in;

  @media only screen and (min-width: 1200px) {
    transition: 0.1s ease-in;

    &:hover {
      color: var(--light-purple);
    }
  }
`

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NavButton = styled(Link)`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;

  @media only screen and (min-width: 700px) {
    font-size: 1.125rem;
    text-align: left;
    transition: 0.1s ease-in;

    &:hover {
      color: var(--light-purple) !important;
    }
  }
`

const SendOff = styled.p`
  margin: 20px 0;

  @media only screen and (min-width: 700px) {
    align-self: flex-start;
  }
`

const Footer = () => (
  <StyledFooter>
    <Container>
      <BackToTopButton
        type='button'
        onClick={() =>
          window ? window.scrollTo({ top: 0, behavior: 'smooth' }) : {}
        }
      >
        <FontAwesomeIcon icon={faArrowUp} size='sm' /> Back to Top
      </BackToTopButton>
      <Content>
        <Description>
          <StyledLogo />
          <p>
            We strive to give students the means to enhance their technical
            skills, make new friends, and create genuine connections with
            industry professionals so they can propel themselves to new heights.
          </p>
        </Description>
        <ContactPrompt>
          <h3>Connect with us</h3>
          <p>
            Have questions? Let's talk!
            <br />
            Catch us on our socials, or email us at{' '}
            <a href='mailto:info@cuhacking.com'>info@cuHacking.com</a>.
          </p>
          <SocialDiv>
            <StyledIcon
              target='_blank'
              rel='noopener noreferrer external'
              href='https://discord.gg/TGvYPnD'
            >
              <FontAwesomeIcon icon={faDiscord} size='1x' />
            </StyledIcon>
            <StyledIcon
              target='_blank'
              rel='noopener noreferrer external'
              href='https://www.facebook.com/cuhacking/'
            >
              <FontAwesomeIcon icon={faFacebookF} size='1x' />
            </StyledIcon>
            <StyledIcon
              target='_blank'
              rel='noopener noreferrer external'
              href='https://www.linkedin.com/company/cuhacking/'
            >
              <FontAwesomeIcon icon={faLinkedin} size='1x' />
            </StyledIcon>
            <StyledIcon
              target='_blank'
              rel='noopener noreferrer external'
              href='https://www.instagram.com/cuHacking/'
            >
              <FontAwesomeIcon icon={faInstagram} size='1x' />
            </StyledIcon>
            <StyledIcon
              target='_blank'
              rel='noopener noreferrer external'
              href='https://twitter.com/cuhacking'
            >
              <FontAwesomeIcon icon={faTwitter} size='1x' />
            </StyledIcon>
            <StyledIcon
              target='_blank'
              rel='noopener noreferrer external'
              href='https://github.com/cuhacking'
            >
              <FontAwesomeIcon icon={faGithub} size='1x' />
            </StyledIcon>
          </SocialDiv>
        </ContactPrompt>
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
      </Content>
      <SendOff>
        Made with <FontAwesomeIcon icon={faHeart} size='sm' /> by the cuHacking
        team.
      </SendOff>
    </Container>
  </StyledFooter>
)

export default Footer
