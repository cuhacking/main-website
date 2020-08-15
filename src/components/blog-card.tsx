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