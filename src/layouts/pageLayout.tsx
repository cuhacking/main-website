import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Header, Footer } from 'components'

import './pageLayout.css'
import 'typeface-dm-sans'
import 'typeface-work-sans'
import 'typeface-montserrat-alternates'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
`

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id='faux-root'>
      <Header fixed={false} />
      <Header fixed={true} />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageLayout
