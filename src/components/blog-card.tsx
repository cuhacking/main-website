import * as React from 'react';
import './blog-card.css';

type BlogCardProps = {
    title: string,
    reading_time: number,
    published_at?: Date,
    excerpt: string,
    feature_image: string
}

const BlogCard = ({ title, reading_time, published_at, excerpt, feature_image }: BlogCardProps) => {
    return (
        <div className="card mb-2">
            <img src={feature_image} alt="img" className="card-img-top" />
            <div className="card-body">
                <h4>{title}</h4>
                <p>{excerpt}</p>
                <p>{reading_time} MIN Read</p>
            </div>
        </div>
    )
}

export default BlogCard;