import React from 'react'
import { graphql } from 'gatsby'
import { SEO } from 'components'
import PageLayout from './pageLayout'
import ProfileIcon from 'images/DefaultProfileIcon.png'
import { LogoHeader } from 'components/logoHeader'
import styled from 'styled-components'
import bkgUrl from 'images/bkg-small.svg'

import './postLayout.css'

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

export default ({ data: { ghostPost: post } }) => {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JULY',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC'
  ]
  const month = new Date(post.published_at).getMonth()
  post.published_at =
    new Date(post.published_at).getDate() +
    ' ' +
    months[month] +
    ' ' +
    new Date(post.published_at).getFullYear()
  return (
    <PageLayout>
      <SEO title={post.title} />
      {/* <SplashContainer>
        <LogoHeader text={'Blog'} />
      </SplashContainer> */}
      <div className='inner' id='article'>
        <article className='post-full post'>
          <header className='post-full-header'>
            <section className='post-full-tags'>
              {post.tags.map((tag: any) => (
                <span className='tag-single-post'>
                  {tag.name.toUpperCase()}
                </span>
              ))}
            </section>

            <h1 className='post-full-title'>{post.title}</h1>

            <p className='post-full-custom-excerpt'>{post.custom_excerpt}</p>
            <hr></hr>

            <div className='post-full-byline'>
              <section className='post-full-byline-content'>
                <ul className='author-list'>
                  {post.authors.map((author: any) => (
                    <li className='author-list-item' key='author.name'>
                      <div className='author-card'>
                        <img
                          className='author-profile-image'
                          src={author.profile_image}
                          alt='Ghost'
                        />
                        <div className='author-info'>
                          <div className='bio'>
                            <h2>{author.name}</h2>
                          </div>
                        </div>
                      </div>
                      <div className='author-avatar'>
                        <img
                          className='author-profile-image'
                          src={
                            author.profile_image
                              ? author.profile_image
                              : ProfileIcon
                          }
                          alt='Ghost'
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                <section className='post-full-byline-meta'>
                  <h4 className='author-name'>{post.primary_author.name}</h4>

                  <div className='byline-meta-content'>
                    <time className='byline-meta-date'>
                      {post.published_at}
                    </time>
                    <span className='byline-reading-time'>
                      <span className='bull'>•</span> {post.reading_time} min
                      read
                    </span>
                  </div>
                </section>
              </section>
            </div>
          </header>

          {post.feature_image == null ? (
            ''
          ) : (
            <figure className='post-full-image'>
              <img
                srcSet={
                  post.feature_image +
                  ' 300w, ' +
                  post.feature_image +
                  ' 600w, ' +
                  post.feature_image +
                  ' 1000w, ' +
                  post.feature_image +
                  ' 2000w, '
                }
                sizes='(max-width: 800px) 400px,
                    (max-width: 1170px) 1170px,
                        2000px'
                src={post.feature_image}
                alt={post.title}
              />
            </figure>
          )}

          <section className='post-full-content'>
            <div
              className='post-content'
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </section>
        </article>
      </div>
      {/* </main> */}
    </PageLayout>
  )
}

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      feature_image
      html
      tags {
        name
      }
      authors {
        profile_image
        name
      }
      published_at
      excerpt
      custom_excerpt
      primary_author {
        name
      }
      reading_time
    }
  }
`
