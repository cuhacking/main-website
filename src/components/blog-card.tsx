import React from 'react';
import './blog-card.css';
import { Link } from 'react-router-dom';
import FeatureImage from '../assets/default-feature-image.jpg';

type BlogCardProps = {
    title: string,
    reading_time: number,
    published_at: Date,
    excerpt: string,
    feature_image: string,
    slug: String,
    tags: Array<any>,
    primary_author_name: String,
    authors: Array<any>
}

const BlogCard = ({ title, reading_time, published_at, excerpt, feature_image, slug, tags, authors, primary_author_name }: BlogCardProps) => {
    console.log(feature_image);
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

    const month = (new Date(published_at)).getMonth();
    const formatted_published_at = (new Date(published_at)).getDate() + " " + months[month] + " " +
        (new Date(published_at)).getFullYear();
    return (
        <div className="card mb-2">
            <Link to={"/blog/" + slug}>
                <img src={feature_image == null ? FeatureImage : feature_image} alt="img" className="card-img-top" />
                <div className="card-body">
                    {tags.map((tag: any) => (<span className="tag" key="tag.name">{tag.name.toUpperCase()}</span>))}
                    <h2>{title}</h2>
                    <p>{excerpt}</p>
                    <section className="post-full-byline-content">

                        <ul className="author-list">
                            {authors.map((author: any) => (
                                <li className="author-list-item" key="author.name">
                                    <div className="author-card">
                                        <img className="author-profile-image" src={author.profile_image} alt="Ghost" />
                                        <div className="author-info">
                                            <div className="bio">
                                                <h2>{author.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="author-avatar">
                                        <img className="author-profile-image" src={author.profile_image} alt="Ghost" />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <section className="post-full-byline-meta">
                            {/* <h4 className="author-name"><a href="/author/ghost/">{primary_author_name}</a></h4> */}
                            <h4 className="author-name">{primary_author_name}</h4>

                            <div className="byline-meta-content">
                                <time className="byline-meta-date">{formatted_published_at}</time>
                                <span className="byline-reading-time"><span className="bull">•</span> {reading_time} min read</span>
                            </div>
                        </section>

                    </section>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard;