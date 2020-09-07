import React from 'react'
import styled from 'styled-components'

import { PageLayout } from 'layouts'
import { Button, SEO } from 'components'

import bkgUrl from 'images/bkg-small.svg'
import eventDiscussion from 'images/event-discussion.svg'
import eventPd from 'images/event-pd.svg'
import eventSoftSkills from 'images/event-soft-skills.svg'
import eventTechnical from 'images/event-technical.svg'

import moment, { Moment } from 'moment'
import { LogoHeader } from 'components/logoHeader'

type Category = 'discussion' | 'pd' | 'skills' | 'technical'

interface Event {
  readonly title: string
  readonly time: Moment
  readonly description: string
  readonly category: Category
}

const events: Event[] = [
  {
    title: 'Social Event',
    time: moment.parseZone('2020-09-01T19:00-04:00'),
    description:
      'Online Town. Allows participants to chat and meet one another.',
    category: 'discussion'
  },
  {
    title: 'Academic Info Panel',
    time: moment.parseZone('2020-09-09T18:00-04:00'),
    description:
      '3rd+ year students from CS, SE, and CSE with a Q&A session where participants will have an opportunity to ask their questions.',
    category: 'pd'
  },
  {
    title: 'Academic Info Panel',
    time: moment.parseZone('2020-09-09T18:00-04:00'),
    description:
      '3rd+ year students from CS, SE, and CSE with a Q&A session where participants will have an opportunity to ask their questions.',
    category: 'skills'
  },
  {
    title: 'Academic Info Panel',
    time: moment.parseZone('2020-09-09T18:00-04:00'),
    description:
      '3rd+ year students from CS, SE, and CSE with a Q&A session where participants will have an opportunity to ask their questions.',
    category: 'technical'
  }
]

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(40vh);

  background: bottom / cover no-repeat url(${bkgUrl});

  @media only screen and (min-width: 700px) {
    justify-content: flex-start;
  }
`

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  &:first-child {
      margin-top: 50px;
  }

  &:last-child {
      margin-bottom: 50px;
  }

  width: var(--mobile-width);

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);

    &:first-child {
        margin-top: 100px;
    }
    
    &:last-child {
        margin-bottom: 100px;
    }

    flex-direction: row;
  }
`

const EventsHeader = styled.h1`
  color: var(--dark-purple);
  font-size: 48px;
  font-weight: normal;

  width: calc(100% - 15px);
  margin-left: 15px;
`

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  max-width: 100%;

  @media only screen and (min-width: 1200px) {
    max-width: calc(33% - 30px);
  }

  border: 2px solid #bfbfbf;
  border-radius: var(--border-radius);

  box-sizing: border-box;
  padding: 30px;
  margin: 15px;
`

const EventTitle = styled.h1`
  margin: 5px 0 0 0;
`

const EventTime = styled.h3`
  color: var(--light-purple);
  font-size: 18px;

  margin: 0 0 5px 0;
`

const EventDescription = styled.p`
  font-size: 18px;
`

const EventGraphic = styled.img`
  width: 50px;
  height: 50px;
`

const CuHackingText = styled.h1`
  font-family: var(--monsterrat);
  color: var(--white);
  font-weight: semi-bold;
`

const categoryToEvent = (category: Category): string => {
  if (category === 'discussion') {
    return eventDiscussion
  } else if (category === 'pd') {
    return eventPd
  } else if (category === 'skills') {
    return eventSoftSkills
  } else {
    return eventTechnical
  }
}

const EventsPage = () => {
  return (
    <PageLayout>
      <SEO title='Events' />
      <SplashContainer>
        <LogoHeader text={"Events"} />
      </SplashContainer>
      <EventsContainer>
      <EventsHeader>September</EventsHeader>
        {events
          .sort((a, b) => a.time.milliseconds() - b.time.millisecond())
          .filter((event) => event.time > moment())
          .map((event) => (
            <EventCard>
              <EventGraphic src={categoryToEvent(event.category)} />
              <EventTitle>{event.title}</EventTitle>
              <EventTime>
                {event.time.format('h:mm a • ') +
                  event.time.format('D MMM YYYY').toUpperCase()}
              </EventTime>
              <EventDescription>{event.description}</EventDescription>
            </EventCard>
          ))}
      </EventsContainer>

      {events.filter((event) => event.time < moment()).length > 0 && (
        <>
          <EventsContainer>
          <EventsHeader>Past Events</EventsHeader>

            {events
              .sort((a, b) => a.time.milliseconds() - b.time.millisecond())
              .filter((event) => event.time < moment())
              .map((event) => (
                <EventCard>
                  <EventGraphic src={categoryToEvent(event.category)} />
                  <EventTitle>{event.title}</EventTitle>
                  <EventTime>
                    {event.time.format('h:mm a • ') +
                      event.time.format('D MMM YYYY').toUpperCase()}
                  </EventTime>
                  <EventDescription>{event.description}</EventDescription>
                </EventCard>
              ))}
          </EventsContainer>
        </>
      )}
    </PageLayout>
  )
}

export default EventsPage
