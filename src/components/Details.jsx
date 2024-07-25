import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, Container, Row, Col, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { omdbUrl, apiKey } from "./consts.json";

const Details = (props) => {

    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        console.log('id:', id);

        const getData = async () => {
            try {
                const { data } = await axios.get(`${omdbUrl}${apiKey}&i=${id}`);
                setDetails(data);
            } catch (err) {
                console.error(err)
            }
        }
        getData();
    }, []);

    return (
        <Container>
            <Row>
                <Col xs={3}>
                    <Image src={details.Poster} fluid />
                </Col>
                <Col xs={9}  >
                    <Table striped>
                        <tbody>
                            <tr>
                                <td>Title: </td>
                                <td>{details.Title}</td>
                            </tr>
                            <tr>
                                <td>Year: </td>
                                <td>{details.Year}</td>
                            </tr>
                            <tr>
                                <td>Rated: </td>
                                <td>{details.Rated}</td>
                            </tr>
                            <tr>
                                <td>Actors:</td>
                                <td> {details.Actors}</td>
                            </tr>
                            <tr>
                                <td>Metascore:</td>
                                <td> {details.Metascore}</td>
                            </tr>
                            <tr>
                                <td>Ratings:</td>
                                <td> {details.Ratings && details.Ratings.map(rate => <p>{`${rate.Source}: ${rate.Value}`}</p>)}</td>
                            </tr>
                            <tr>
                                <td>Plot:</td>
                                <td> {details.Plot}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row >
        </Container >
    );
}

export default Details;