import React from "react";
import { Container, Row } from "react-bootstrap";
import ExerciseCard from "../components/ExerciseCard"
export default function SelectPage() {

    let exercises: string[] = ["Run", "Walk", "Jog", "Dance", "Swim", "Hike", "Jump"]

    return (
        <>
            <h2 className="select--title">Select Exercise</h2>
            <Container fluid className="select--container">
                <Row>
                    {exercises.map(exercise => 
                        <ExerciseCard key={exercise} exercise={exercise}/>
                    )}
                </Row>
            </Container>   
        </>
    )
}