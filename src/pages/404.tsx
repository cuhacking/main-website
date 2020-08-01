import React from 'react'
import styled from 'styled-components'
import { PageLayout } from 'layouts'
import { Button, SEO } from 'components'
import bkgNoCurveUrl from 'images/bkg-no-curve.svg'

const BkgContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 65px);
  min-height: 480px;

  background: center / cover no-repeat url(${bkgNoCurveUrl});
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: var(--white);

  width: var(--mobile-width);

  h1 {
    font-size: 2.5rem;
    font-weight: bold;

    margin: 0;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 700px) {
    h1 {
      font-size: 4rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);

    h1 {
      font-size: 6rem;
    }
  }
`

const NotFoundPage = () => (
  <PageLayout>
    <SEO title='404: Not found' />
    <BkgContainer>
      <TextContainer>
        <h1>Page Not Found</h1>
        <p>Let's get you back to safety.</p>
        <Button link='/'>Home</Button>
      </TextContainer>
    </BkgContainer>
  </PageLayout>
)

export default NotFoundPage
