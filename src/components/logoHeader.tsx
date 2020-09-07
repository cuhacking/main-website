import React from 'react'

import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;

  justify-content: center;

  color: var(--white);
  width: var(--mobile-width);
  @media only screen and (min-width: 1200px) {
    width: var(--desktop-width);
    flex-direction: row;
    justify-content: left;
    align-content: center;
  }

`

const CuHackingText = styled.h1`
  font-family: var(--monsterrat);
  font-weight: semi-bold;

  font-size: 3rem;
  @media only screen and (min-width: 1200px) {
    font-size: 6rem;
  }
  
  margin: 0 16px 0 0;
`

const RegularText = styled.h1`
  font-weight: normal;

  font-size: 3rem;
  @media only screen and (min-width: 1200px) {
    font-size: 6rem;
  }
  
  margin: 0;
`

export interface LogoHeaderProps {
  readonly text: string
}

export const LogoHeader = (props: LogoHeaderProps) => {
  return (
    <HeaderContainer>
      <CuHackingText>cuHacking</CuHackingText>
      <RegularText>{props.text}</RegularText>
    </HeaderContainer>
  )
}
