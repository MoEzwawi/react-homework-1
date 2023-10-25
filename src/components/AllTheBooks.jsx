import { Button, Card, Container, Row, Col, Dropdown } from 'react-bootstrap';
import scifiBooks from '../data/scifi.json'
import fantasyBooks from '../data/fantasy.json'
import historyBooks from '../data/history.json'
import horrorBooks from '../data/horror.json'
import romanceBooks from '../data/romance.json'
import { Component } from 'react';


class AllTheBooks extends Component {
    state = {
        currentGenre: scifiBooks
    }
    setGenre = (genre) => {
        this.setState({
            currentGenre: genre
        })
    }
    render() {
        return (
            <div>
                <Container className='mt-3 me-5 d-flex justify-content-end'>
                    <Dropdown>
                        <Dropdown.Toggle variant="white please" id="dropdown-basic">
                            Select Genre
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => { this.setGenre(scifiBooks) }}>Scifi</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.setGenre(fantasyBooks) }}>Fantasy</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.setGenre(historyBooks) }}>History</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.setGenre(horrorBooks) }}>Horror</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.setGenre(romanceBooks) }}>Romance</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Container className='mb-5 mt-3'>
                    <Row className='g-3 mb-5'>
                        {this.state.currentGenre.map((book) => {
                            return (
                                <Col key={book.asin} xs={12} sm={6} md={4} lg={3} xl={2}>
                                    <Card>
                                        <Card.Img src={book.img} style={{ height: ' 220px' }} />
                                        <Card.Body style={{ height: ' 180px' }} className="d-flex flex-column justify-content-between bg-info-subtle">
                                            <Card.Title>{book.price} €</Card.Title>
                                            <Card.Text className='text-truncate'>
                                                {book.title}
                                            </Card.Text>
                                            <Button variant="primary">Add to cart</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}


export default AllTheBooks