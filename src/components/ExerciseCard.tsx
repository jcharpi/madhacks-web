import React from "react";
import { Button, Card, Col } from "react-bootstrap";

interface Props {
    exercise: string;
}

const ExerciseCard = (props: Props) => {

    function handleClick() {
        console.log("hi")
    }

    return <Col className="select--col" xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card onClick={handleClick} className="select--card stretched-link">
            <Card.Title className="select--card--title">{props.exercise}</Card.Title>
            <Card.Img variant="bottom" className="select--image" alt="Exercise" src="https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg"/>
        </Card>
    </Col>
}

export default ExerciseCard