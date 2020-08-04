import React from 'react';
import './single-post.css';

export default class SinglePost extends React.Component<object> {

    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: [],
            slug: props.match.params.slug
        };
    }

    componentDidMount() {
        const { slug }: any = this.state;
        fetch("https://admin.cuhacking.com/ghost/api/v3/content/posts/slug/" + slug + "?key=4ff22bcd0f6effc7d2df8ee82b&include=tags,authors")
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
        console.log(posts[0]);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (<main id="site-main" className="site-main outer">
                <div className="inner">
                    <article className="post-full post">
                        <header className="post-full-header">

                            <section className="post-full-tags">
                                {posts[0].tags.map((tag: any) => (<span className="tag-single-post">{tag.name.toUpperCase()}</span>))}
                            </section>

                            <h1 className="post-full-title">{posts[0].title}</h1>

                            <p className="post-full-custom-excerpt">{posts[0].excerpt}</p>

                            <div className="post-full-byline">

                                <section className="post-full-byline-content">

                                    <ul className="author-list">
                                        {posts[0].authors.map((author: any) => (
                                            <li className="author-list-item">
                                                <div className="author-card">
                                                    <img className="author-profile-image" src={author.profile_image} alt="Ghost" />
                                                    <div className="author-info">
                                                        <div className="bio">
                                                            <h2>{author.name}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="author-avatar">
                                                    <img className="author-profile-image" src="https://static.ghost.org/v3.0.0/images/ghost.png" alt="Ghost" />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <section className="post-full-byline-meta">
                                        <h4 className="author-name"><a href="/author/ghost/">{posts[0].primary_author.name}</a></h4>
                                        <div className="byline-meta-content">
                                            <time className="byline-meta-date">{posts[0].published_at}</time>
                                            <span className="byline-reading-time"><span className="bull">•</span> {posts[0].reading_time} min read</span>
                                        </div>
                                    </section>

                                </section>


                            </div>
                        </header>
                        <figure className="post-full-image">
                            <img srcSet={posts[0].feature_image + " 300w, " +
                                posts[0].feature_image + " 600w, " +
                                posts[0].feature_image + " 1000w, " +
                                posts[0].feature_image + " 2000w, "} sizes="(max-width: 800px) 400px,
                        (max-width: 1170px) 1170px,
                            2000px" src={posts[0].feature_image} alt={posts[0].title} />
                        </figure>
                        <section className="post-full-content">
                            <div className="post-content" dangerouslySetInnerHTML={{ __html: posts[0].html }} />
                        </section>
                    </article>
                </div>
            </main>);
        }
    }
}