import { Card, Col } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

interface Props {
    exercise: string;
}

const ExerciseCard = (props: Props) => {

    const [isFlipped, setIsFlipped] = useState(false)

    function handleClick() {
        setIsFlipped(prev => !prev)
        console.log(isFlipped)
    }

    return <Col className="select--col" xs={12} sm={12} md={6} lg={4} xl={4}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card onClick={handleClick} className="select--card stretched-link">
                <Card.Title className="select--card--title">{props.exercise}</Card.Title>
                <Card.Img variant="bottom" className="select--image" alt="Exercise" src="https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg"/>
            </Card>

            <Card onClick={handleClick} className="select--card stretched-link">
                <Card.Title className="select--card--title">{props.exercise}</Card.Title>
                <Card.Img variant="bottom" className="select--image" alt="Exercise" src="https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg"/>
            </Card>
        </ReactCardFlip>
        
    </Col>
}

export default ExerciseCard