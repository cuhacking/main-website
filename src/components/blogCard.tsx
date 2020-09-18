import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import FeatureImage from 'images/default-feature-image.jpg'
import ProfileIcon from 'images/DefaultProfileIcon.png'

const Card = styled.div`
  margin: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: var(--white);
  background-clip: border-box;
  border-radius: 0.25rem;
`

const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`

const CardImgTop = styled.img`
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
`

const Tag = styled.span`
  color: var(--purple2);
`

const Small = styled.div`
  font-size: 62.5%;
`

type BlogCardProps = {
  title: string
  reading_time: number
  published_at: Date
  excerpt: string
  feature_image: string
  slug: String
  tags: Array<any>
  primary_author_name: String
  authors: Array<any>
}

const BlogCard = ({
  title,
  reading_time,
  published_at,
  excerpt,
  feature_image,
  slug,
  tags,
  authors,
  primary_author_name
}: BlogCardProps) => {
  console.log(feature_image)
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

  const month = new Date(published_at).getMonth()
  const formatted_published_at =
    new Date(published_at).getDate() +
    ' ' +
    months[month] +
    ' ' +
    new Date(published_at).getFullYear()
  return (
    <Card className='mb-2'>
      <Link to={'/blog/' + slug}>
        <CardImgTop
          src={feature_image == null ? FeatureImage : feature_image}
          alt='img'
        />
        <CardBody>
          {tags.map((tag: any) => (
            <Tag key='tag.name'>{tag.name.toUpperCase()}</Tag>
          ))}
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <Small>
            <section className='post-full-byline-content'>
              <ul className='author-list'>
                {authors.map((author: any) => (
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
                {/* <h4 className="author-name"><a href="/author/ghost/">{primary_author_name}</a></h4> */}
                <h4 className='author-name'>{primary_author_name}</h4>

                <div className='byline-meta-content'>
                  <time className='byline-meta-date'>
                    {formatted_published_at}
                  </time>
                  <span className='byline-reading-time'>
                    <span className='bull'>•</span> {reading_time} min read
                  </span>
                </div>
              </section>
            </section>
          </Small>
        </CardBody>
      </Link>
    </Card>
  )
}

export default BlogCard