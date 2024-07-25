
import Film from './Film';
import { Container, Row, Col } from 'react-bootstrap'

const SearchResults = (props) => {
    return (
        <Container>
            <Row>
                {props.films.map((f, i) => (
                    <Col key={'Col' + i} md="3" sm="4" xs="6">
                        <Film key={i} {...f} getDetails={props.getDetails} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default SearchResults;
