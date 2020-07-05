import * as React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './headerSmall.css';

type HeaderSmallProps = {
    title: string,
    subtitle: string
}

const HeaderSmall = ({ title, subtitle }: HeaderSmallProps) => {
    return (
        <Jumbotron fluid className="header-small" >
            <Container>
                <h1 className="header-small-title" > {title} < span className="header-small-subtitle" > {subtitle} </span></h1>
            </Container>
        </Jumbotron>
    )
}

export default HeaderSmall;