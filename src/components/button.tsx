import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const genericButton = css`
  border: 2px solid var(--grey);
  border-radius: 6px;
  background-color: var(--grey);
  color: var(--white) !important;

  font-family: 'Work Sans', sans-serif;
  font-size: 1.125rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;

  user-select: none;
`

const DisabledButton = styled.div`
  ${genericButton}
`

const enabledButton = css`
  ${genericButton}

  background-color: var(--purple);
  border-color: var(--purple);

  transition: 0.1s ease-in;

  @media only screen and (min-width: 700px) {
    &:hover {
      background-color: var(--white);
      color: var(--purple) !important;
      cursor: pointer;
    }
  }
`

const StyledButton = styled.button`
  ${enabledButton}
`

const StyledLink = styled(Link)`
  ${enabledButton}
`

const StyledAnchor = styled.a`
  ${enabledButton}
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  margin-top: -2px;
  margin-right: -5px;
`

interface ButtonProps {
  children?: React.ReactNode
  className?: string
  external?: boolean
  disabled?: boolean
  link?: string
}

const Button = (props: ButtonProps) => {
  if (props.disabled) {
    return <DisabledButton {...props}>{props.children}</DisabledButton>
  } else if (!props.link) {
    return <StyledButton {...props}>{props.children}</StyledButton>
  } else if (props.external) {
    return (
      <StyledAnchor
        target='_blank'
        rel='noopener noreferrer external'
        href={props.link}
        {...props}
      >
        {props.children}
        <StyledIcon icon={faExternalLinkAlt} size='1x' />
      </StyledAnchor>
    )
  } else {
    return (
      <StyledLink to={props.link} {...props}>
        {props.children}
      </StyledLink>
    )
  }
}

export default Button
