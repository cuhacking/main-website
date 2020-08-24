import React from 'react'
import { Link, graphql } from 'gatsby'
import { PageLayout } from 'layouts'
import { SEO } from 'components'

import './blog.css'
import BlogCard from 'components/blog-card'
import HeaderSmall from 'components/headerSmall'
import FeatureImage from 'images/default-feature-image.jpg'

export default ({ data }) => {
  const posts = data.allGhostPost.edges.map((edge) => edge.node)

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

  const month = new Date(posts[0].published_at).getMonth()
  const formatted_published_at =
    new Date(posts[0].published_at).getDate() +
    ' ' +
    months[month] +
    ' ' +
    new Date(posts[0].published_at).getFullYear()

  return (
    <PageLayout>
      <SEO title='Blog' />
      <HeaderSmall title='cuHacking' subtitle='Blog' />
      <div className='container'>
        <div className='card mb-2'>
          <Link to={posts[0].slug}>
            <div className='row'>
              <div className='col-md-6'>
                <img
                  src={
                    posts[0].feature_image == null
                      ? FeatureImage
                      : posts[0].feature_image
                  }
                  alt='img'
                  className='card-img-top'
                />
              </div>
              <div className='col-md-6'>
                <div className='card mb-2'>
                  <div className='card-body'>
                    {posts[0].tags ? (
                      posts[0].tags.map((tag: any) => (
                        <span className='tag' key='tag.name'>
                          {tag.name.toUpperCase()}
                        </span>
                      ))
                    ) : (
                      <span className='tag' key='tag.name'>
                        {'  '}
                      </span>
                    )}
                    <h2>{posts[0].title}</h2>
                    <p>{posts[0].excerpt}</p>
                    <section className='post-full-byline-content'>
                      <ul className='author-list'>
                        {posts[0].authors.map((author: any) => (
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
                                src={author.profile_image}
                                alt='Ghost'
                              />
                            </div>
                          </li>
                        ))}
                      </ul>

                      <section className='post-full-byline-meta'>
                        {/* <h4 className="author-name"><a href="/author/ghost/">{primary_author_name}</a></h4> */}
                        <h4 className='author-name'>
                          {posts[0].primary_author.name}
                        </h4>

                        <div className='byline-meta-content'>
                          <time className='byline-meta-date'>
                            {formatted_published_at}
                          </time>
                          <span className='byline-reading-time'>
                            <span className='bull'>•</span>{' '}
                            {posts[0].reading_time} min read
                          </span>
                        </div>
                      </section>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className='row'>
          {posts.slice(1).map((post: any) => (
            <div className='col-md-4' key={post.id}>
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                feature_image={post.feature_image}
                reading_time={post.reading_time}
                slug={post.slug}
                published_at={post.published_at}
                tags={post.tags}
                primary_author_name={post.primary_author.name}
                authors={post.authors}
              />
            </div>
          ))}
        </div>
      </div>
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
