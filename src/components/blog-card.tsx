import React from 'react';
import './blog-card.css';
import { Link } from 'react-router-dom';

type BlogCardProps = {
    title: string,
    reading_time: number,
    published_at: Date,
    excerpt: string,
    feature_image: string,
    slug: String,
    tags: Array<any>
}

const BlogCard = ({ title, reading_time, published_at, excerpt, feature_image, slug, tags }: BlogCardProps) => {
    return (
        <div className="card mb-2">
            <Link to={"/blog/" + slug}>
                <img src={feature_image} alt="img" className="card-img-top" />
                <div className="card-body">
                    {tags.map((tag: any) => (<span className="tag">{tag.name.toUpperCase()}</span>))}
                    <h2>{title}</h2>
                    <p>{excerpt}</p>
                    <div className="date-reading-time">
                        <p>{reading_time} MIN Read</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard;