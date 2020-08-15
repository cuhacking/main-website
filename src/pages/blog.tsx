import React from 'react';
import './blog.css';
import BlogCard from '../components/blog-card';
import HeaderSmall from '../components/headerSmall'
import * as config from "../config.json";

export default class Blog extends React.Component<object> {

  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    };
  }

  componentDidMount() {
    const URL = config.blog.url + "?key=" + config.blog.key + "&include=tags,authors";
    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            posts: result.posts
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, posts }: any = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <HeaderSmall title="cuHacking" subtitle="Blog" />
          <main className="container">
            <div className="row">
              {posts.map((post: any) => (
                <div className="col-md-4">
                  <BlogCard key={post.id} title={post.title} excerpt={post.excerpt}
                    feature_image={post.feature_image} reading_time={post.reading_time} slug={post.slug} published_at={post.published_at} tags={post.tags} />
                </div>
              ))}
            </div>
          </main>
        </div>
      );
    }
  }
}