import React from 'react'
import styled from 'styled-components'

import { PageLayout } from 'layouts'
import { Button, SEO } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import bkgUrl from 'images/bkg-small.svg'
import eventDiscussion from 'images/event-discussion.svg'
import eventPd from 'images/event-pd.svg'
import eventSoftSkills from 'images/event-soft-skills.svg'
import eventTechnical from 'images/event-technical.svg'

import moment, { Moment } from 'moment'
import { LogoHeader } from 'components/logoHeader'

type Category = 'discussion' | 'pd' | 'skills' | 'technical'

interface Link {
  url: string
  label: string
}

interface Event {
  readonly title: string
  readonly time: Moment
  readonly description: string
  readonly category: Category
  readonly link?: Link
}

const events: Event[] = [
  {
    title: 'Online Town Social Hangout',
    time: moment.parseZone('2020-09-08T19:00-04:00'),
    description:
      'Online Town. Allows participants to chat and meet one another in a virtual physical space.',
    category: 'discussion'
  },
  {
    title: 'Academic Info Panel',
    time: moment.parseZone('2020-09-09T18:00-04:00'),
    description:
      'A Q&A session where participants will have the opportunity to ask their university-related questions to 3rd+ year students from Computer Science, Software Engineering, and Computer Systems Engineering.',
    category: 'pd'
  },
  {
    title: 'Introduction to Git and GitHub (Workshop)',
    time: moment.parseZone('2020-09-09T20:00-04:00'),
    description:
      'Git is an instrumental tool for collaborating on code in the industry. In this workshop, participants will learn how to create and fork repositories, write proper commits, create Pull Requests and Issues, and set up Git on their computer. Hosted by Wal Wal.',
    category: 'technical'
  },
  {
    title: 'Internship Info Panel',
    time: moment.parseZone('2020-09-10T18:00-04:00'),
    description:
      'A Q&A session where participants will have the opportunity to ask their internship-related questions to seasoned co-op students.',
    category: 'pd'
  },
  {
    title: 'Discord Social Night and Networking',
    time: moment.parseZone('2020-09-10T19:00-04:00'),
    description:
      'A virtual social on Discord! Join us in our voice chats to talk and network with other hackers in the community.',
    category: 'discussion'
  },
  {
    title: 'Movie Night on Netflix Party',
    time: moment.parseZone('2020-09-11T20:00-04:00'),
    description: 'Join us for a movie! The movie will be announced on Discord.',
    category: 'discussion',
    link: {
      url: 'https://www.netflixparty.com/',
      label: 'Netflix Party Extension'
    }
  },
  {
    title: 'Kotlin: like Java but so much better (Workshop)',
    time: moment.parseZone('2020-09-12T12:00-04:00'),
    description:
      'What makes Kotlin the 4th most loved language by developers? Find out in this workshop that will explore the features that make Kotlin a concise, powerful, and smart language. Please install IntelliJ (linked below) before the attending the workshop. Hosted by Derek Ellis.',
    category: 'technical',
    link: {
      url: 'https://www.jetbrains.com/idea/',
      label: 'Download IntelliJ IDEA'
    }
  },
  {
    title: 'Discord Community Game Night',
    time: moment.parseZone('2020-09-12T20:00-04:00'),
    description:
      'Join us for a some video games such as League of Legends, Skribbl.io, and more! The games that are played will be decided by the community on Discord.',
    category: 'discussion'
  },
  {
    title: 'Learn to Build on the Cloud using Amazon Web Services (Workshop)',
    time: moment.parseZone('2020-09-13T15:00-04:00'),
    description: 'Hosted by David Liao.',
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

    flex-direction: row;
  }
`

const EventsHeader = styled.h1`
  color: var(--dark-purple);
  font-weight: normal;

  width: calc(100% - 15px);
  margin-left: 15px;
`

const EventCardContainer = styled.div`
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

const EventTitle = styled.h2`
  margin: 5px 0 0 0;
`

const EventTime = styled.h3`
  color: var(--light-purple);
  font-size: 1.15em;
  font-weight: normal;

  margin: 0 0 5px 0;
`

const EventDescription = styled.p`
  font-size: 1.15em;
`

const EventGraphic = styled.img`
  width: 50px;
  height: 50px;
`

const EventAnchor = styled.a`
  color: var(--light-purple) !important;
  max-width: max-content;

  &:hover {
    text-decoration: underline !important;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  margin-top: -2px;
  margin-right: -5px;
`

const EventLink = (props: { link: Link }) => {
  const { url, label } = props.link
  return (
    <EventAnchor href={url}>
      {label}
      <StyledIcon icon={faExternalLinkAlt} size='1x' />
    </EventAnchor>
  )
}

const EventCard = (event: Event) => {
  return (
    <EventCardContainer>
      <EventGraphic src={categoryToEvent(event.category)} />
      <EventTitle>{event.title}</EventTitle>
      <EventTime>
        {event.time.format('h:mma • ') +
          event.time.format('D MMM YYYY').toUpperCase()}
      </EventTime>
      <EventDescription>{event.description}</EventDescription>
      {event.link && <EventLink link={event.link} />}
    </EventCardContainer>
  )
}

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
        <LogoHeader text={'Events'} />
      </SplashContainer>
      <EventsContainer>
        <EventsHeader>September</EventsHeader>
        {events
          .sort((a, b) => a.time.milliseconds() - b.time.millisecond())
          .filter((event) => event.time > moment())
          .map((event) => (
            <EventCard {...event} />
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
                <EventCard {...event} />
              ))}
          </EventsContainer>
        </>
      )}
    </PageLayout>
  )
}

export default EventsPage
