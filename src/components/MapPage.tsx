import { Card } from "react-bootstrap";
import GoogleMap from "./GoogleMap";

export default function MapPage () {
    return (
        <>
            <div className="center--map">
                <Card className="map--card">
                    <Card.Header className="map--card--header">Your Workout</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Type: Run
                            </Card.Text>

                            <Card.Text>
                                Start Location: 306 Eagle Heights
                            </Card.Text>

                            <Card.Text>
                                End Location: Memorial Union
                            </Card.Text>

                            <Card.Text>
                                Current Weather: Sunny ☀️
                            </Card.Text>
                        </Card.Body>
                </Card>

                
                <GoogleMap />
            </div>               
        </>
    )
}