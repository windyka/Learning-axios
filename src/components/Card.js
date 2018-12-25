import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Card.css'

const Example = (props) => {
    const { create, update, judul, id } = props
    return (
        <div className='card-box'>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{id}</CardTitle>
                    <CardTitle>{judul}</CardTitle>
                    <CardSubtitle>{create}</CardSubtitle>
                    <CardText>{update}</CardText>
                    <Button>Learn More...</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;