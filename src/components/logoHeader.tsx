import React from 'react'

import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--white);
  text-align: left;
`

const CuHackingText = styled.h1`
  font-family: var(--monsterrat);
  font-weight: semi-bold;
  font-size: 96px;
  margin-right: 16px;
`

const RegularText = styled.h1`
  font-weight: normal;
  font-size: 96px;
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
