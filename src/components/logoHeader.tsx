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
    font-size: 16px;
    justify-content: left;
    align-content: center;
  }

  font-size: 10px;
`

const CuHackingText = styled.h1`
  font-family: var(--monsterrat);
  font-weight: semi-bold;
    font-size: 5em;
  
  margin: 0 16px 0 0;
`

const RegularText = styled.h1`
  font-weight: normal;
  font-size: 5em;
  
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
