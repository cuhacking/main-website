import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

import { PageLayout } from 'layouts'
import { Button, SEO } from 'components'

import bkgUrl from 'images/bkg.svg'
import whiteLogoUrl from 'images/logo-white.svg'
import laptopUrl from 'images/laptop-animated.svg'
import peopleUrl from 'images/people-animated-bob.svg'
import buildingUrl from 'images/building-with-sun-animated.svg'

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100vh - 65px);
  min-height: 480px;

  background: bottom / cover no-repeat url(${bkgUrl});

  @media only screen and (min-width: 700px) {
    justify-content: flex-start;
  }
`

const Splash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: var(--mobile-width);

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20vh;
  }

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const Logo = styled.img`
  height: 50vw;
  margin: 0 0 50px;

  @media only screen and (min-width: 700px) {
    height: 350px;
    width: 300px;
    margin: 0;
  }

  @media only screen and (min-width: 1200px) {
    height: 410px;
    width: 410px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--white);
  text-align: center;

  p {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 700px) {
    align-items: flex-end;
    text-align: right;

    p {
      font-size: 1.8rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    p {
      font-size: 2.6rem;
    }
  }
`

const QuestionsContainer = styled.div`
  margin-top: 50px;
  width: var(--mobile-width);

  @media only screen and (min-width: 1200px) {
    margin-top: 100px;
    max-width: var(--desktop-width);
  }
`

const QuestionDiv = styled.div<{ inView: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  transition: 0.5s ease-out;

  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) =>
    props.inView ? `translateY(0)` : `translateY(10px)`};

  @media only screen and (min-width: 700px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`

const QuestionDivReversed = styled(QuestionDiv)`
  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }
`

const DialogueDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    color: var(--dark-purple);
    font-weight: normal;
    margin-bottom: 0;
  }

  p {
    margin: 1rem 0 1.5rem;
  }
`

const Graphic = styled.img`
  width: 100%;

  @media only screen and (min-width: 700px) {
    flex-shrink: 0;
    width: 300px;
    height: 300px;
  }

  @media only screen and (min-width: 1200px) {
    width: 600px;
    height: 400px;
  }
`

const IndexPage = () => {
  const [laptopRef, laptopInView] = useInView({
    threshold: 0.75,
    triggerOnce: true
  })
  const [peopleRef, peopleInView] = useInView({
    threshold: 0.75,
    triggerOnce: true
  })
  const [buildingRef, buildingInView] = useInView({
    threshold: 0.75,
    triggerOnce: true
  })

  return (
    <PageLayout>
      <SEO title='Home' />
      <SplashContainer>
        <Splash>
          <Logo src={whiteLogoUrl} />
          <TextContainer>
            <p>
              Our hackathon is going virtual!
              <br />
              January 29–31.
            </p>
            {/* <Button link='/about'>Learn More</Button> */}
            <Button external link='https://discord.gg/TGvYPnD'>
              Join Our Discord Server
            </Button>
          </TextContainer>
        </Splash>
      </SplashContainer>
      <QuestionsContainer>
        <QuestionDiv ref={laptopRef} inView={laptopInView}>
          <Graphic src={laptopUrl} />
          <DialogueDiv>
            <h1>Who are we?</h1>
            <p>
              Students, just like you! We come from various disciplines and
              backgrounds, and we aim to help foster the skills and crafts of
              all those involved in our community. We do this through evolving
              challenges and events which bring out the hidden talents of
              everyone around us.
              <br />
              <br />
              We strive to give you the control over your technical and creative
              development, recreational participation, and networking
              opportunities with industry leaders, so you can propel yourself to
              new heights.
            </p>
          </DialogueDiv>
        </QuestionDiv>
        <QuestionDivReversed ref={peopleRef} inView={peopleInView}>
          <Graphic src={peopleUrl} />
          <DialogueDiv>
            <h1>Our Community & Events</h1>
            <p>
              The cuHacking community has be growing ever since our first
              hackathon in 2017. Now we have grown even larger
              than just an annual event — we hack all year round! Join the community to tag along on our
              adventures.
            </p>
            <Button external link='https://discord.gg/TGvYPnD'>
              Join Our Discord Server
            </Button>
          </DialogueDiv>
        </QuestionDivReversed>
        <QuestionDiv ref={buildingRef} inView={buildingInView}>
          <Graphic src={buildingUrl} />
          <DialogueDiv>
            <h1>What about the hackathon?</h1>
            <p>
              This year,
              <strong>cuHacking 2021 is going virtual!</strong>
              We'll be hosting the event through our website and Discord server from
              January 29 to 31.
              <br>
              <br>
              Registration windows will be announced in the coming days.
            </p>
            {/* <Button link='/about'>Read More</Button> */}
          </DialogueDiv>
        </QuestionDiv>
      </QuestionsContainer>
    </PageLayout>
  )
}

export default IndexPage
