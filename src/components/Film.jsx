import { Card, Button } from 'react-bootstrap';

const Film = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.Poster} />
            <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Subtitle>
                    Year: {props.Year}
                </Card.Subtitle>
                <Button variant="primary" onClick={() => props.getDetails(props.imdbID)}>Details</Button>
            </Card.Body>
        </Card>
    );
}

export default Film;