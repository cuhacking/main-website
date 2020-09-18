import React from 'react'
import { Link, graphql } from 'gatsby'
import { PageLayout } from 'layouts'
import { SEO } from 'components'
import styled from 'styled-components'

import BlogCard from 'components/blogCard'
import BlogCardFeatured from 'components/blogCardFeatured'
import bkgUrl from 'images/bkg-small.svg'
import { LogoHeader } from 'components/logoHeader'

export default ({ data }) => {
  const posts = data.allGhostPost.edges.map((edge) => edge.node)

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

  const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: var(--mobile-width);
    @media (min-width: 1200px) {
      max-width: var(--desktop-width);
    }
  `

  const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  `

  const ColMd4 = styled.div`
    @media (min-width: 768px) {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
  `

  const HorizontalRuler = styled.hr`
    @media (max-width: 768px) {
      display: none;
    }
  `

  let text

  if (posts[0]) {
    text = (
      <div className='card mb-2'>
        <Link to={posts[0].slug}>
          <BlogCardFeatured
            title={posts[0].title}
            excerpt={
              posts[0].custom_excerpt
                ? posts[0].custom_excerpt
                : posts[0].excerpt.substring(0, 175)
            }
            feature_image={posts[0].feature_image}
            reading_time={posts[0].reading_time}
            slug={posts[0].slug}
            published_at={posts[0].published_at}
            tags={posts[0].tags}
            primary_author_name={posts[0].primary_author.name}
            authors={posts[0].authors}
          />
        </Link>
      </div>
    )
  } else {
    text = <p>No posts are available</p>
  }

  return (
    <PageLayout>
      <SEO title='Blog' />
      {/* <HeaderSmall title='cuHacking' subtitle='Blog' /> */}
      <SplashContainer>
        <LogoHeader text={'Blog'} />
      </SplashContainer>

      <Container>
        {text}
        <HorizontalRuler />

        <Row>
          {posts.slice(1).map((post: any) => (
            <ColMd4 key={post.id}>
              <BlogCard
                title={post.title}
                excerpt={
                  post.custom_excerpt
                    ? post.custom_excerpt
                    : post.excerpt.substring(0, 175)
                }
                feature_image={post.feature_image}
                reading_time={post.reading_time}
                slug={post.slug}
                published_at={post.published_at}
                tags={post.tags}
                primary_author_name={post.primary_author.name}
                authors={post.authors}
              />
            </ColMd4>
          ))}
        </Row>
      </Container>
    </PageLayout>
  )
}

export const postListQuery = graphql`
  query {
    allGhostPost(sort: { order: DESC, fields: published_at }) {
      edges {
        node {
          slug
          excerpt
          feature_image
          primary_author {
            name
            profile_image
          }
          title
          primary_tag {
            name
          }
          published_at
          reading_time
          authors {
            profile_image
            name
          }
          tags {
            name
          }
        }
      }
    }
  }
`
