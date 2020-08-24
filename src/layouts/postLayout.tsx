import React from 'react'
import './postLayout.css'
import * as config from '../config.json'

export default class PostLayout extends React.Component<object> {
  constructor(props: any) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      slug: props.match.params.slug
    }
  }

  componentDidMount() {
    const { slug }: any = this.state
    const URL =
      config.blog.url +
      'slug/' +
      slug +
      '?key=' +
      config.blog.key +
      '&include=tags,authors'
    fetch(URL)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            posts: result.posts
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, posts }: any = this.state
    console.log(posts[0])
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
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
      posts[0].published_at =
        new Date(posts[0].published_at).getDate() +
        ' ' +
        months[month] +
        ' ' +
        new Date(posts[0].published_at).getFullYear()
      return (
        <main id='site-main' className='site-main outer'>
          <div className='inner'>
            <article className='post-full post'>
              <header className='post-full-header'>
                <section className='post-full-tags'>
                  {posts[0].tags.map((tag: any) => (
                    <span className='tag-single-post'>
                      {tag.name.toUpperCase()}
                    </span>
                  ))}
                </section>

                <h1 className='post-full-title'>{posts[0].title}</h1>

                <p className='post-full-custom-excerpt'>{posts[0].excerpt}</p>

                <div className='post-full-byline'>
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
                      {/* <h4 className="author-name"><a href="/author/ghost/">{posts[0].primary_author.name}</a></h4> */}
                      <h4 className='author-name'>
                        {posts[0].primary_author.name}
                      </h4>

                      <div className='byline-meta-content'>
                        <time className='byline-meta-date'>
                          {posts[0].published_at}
                        </time>
                        <span className='byline-reading-time'>
                          <span className='bull'>•</span>{' '}
                          {posts[0].reading_time} min read
                        </span>
                      </div>
                    </section>
                  </section>
                </div>
              </header>

              {posts[0].feature_image == null ? (
                ''
              ) : (
                <figure className='post-full-image'>
                  <img
                    srcSet={
                      posts[0].feature_image +
                      ' 300w, ' +
                      posts[0].feature_image +
                      ' 600w, ' +
                      posts[0].feature_image +
                      ' 1000w, ' +
                      posts[0].feature_image +
                      ' 2000w, '
                    }
                    sizes='(max-width: 800px) 400px,
                        (max-width: 1170px) 1170px,
                            2000px'
                    src={posts[0].feature_image}
                    alt={posts[0].title}
                  />
                </figure>
              )}

              <section className='post-full-content'>
                <div
                  className='post-content'
                  dangerouslySetInnerHTML={{ __html: posts[0].html }}
                />
              </section>
            </article>
          </div>
        </main>
      )
    }
  }
}
