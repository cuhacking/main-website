import * as React from 'react';
import './headerSmall.css';

type HeaderSmallProps = {
    title: string,
    subtitle: string
}

const HeaderSmall = ({ title, subtitle }: HeaderSmallProps) => {
    return (
        <div className="header-small" >
            <div className="container">
                <div className="jumbotron-fluid">
                    <h1 className="header-small-title" > {title} < span className="header-small-subtitle" > {subtitle} </span></h1>
                </div>
            </div>
        </div>
    )
}

export default HeaderSmall;