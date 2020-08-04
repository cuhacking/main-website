import React from 'react';
import './blog.css';
import BlogCard from '../components/blog-card';
// import HeaderSmall from '../components/headerSmall'

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
    fetch("https://admin.cuhacking.com/ghost/api/v3/content/posts/?key=4ff22bcd0f6effc7d2df8ee82b&include=tags,authors")
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
          {/* <HeaderSmall title="cuHacking" subtitle="Blog" /> */}
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