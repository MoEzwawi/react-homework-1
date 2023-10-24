import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import scifiBooks from '../data/scifi.json'


const AllTheBooks = () => {
    return (
        <Container>
            <Row className='g-3'>
                {scifiBooks.map((book) => {
                    return (
                        <Col key={book.asin} xs={12} sm={6} md={4} lg={3} xl={2}>
                            <Card>
                                <Card.Img src={book.img} style={{ height: ' 220px' }} />
                                <Card.Body style={{ height: ' 180px' }}>
                                    <div className="d-flex flex-column justify-content-between">
                                        <Card.Title>{book.price}</Card.Title>
                                        <Card.Text className='text-nowrap text-truncate'>
                                            {book.title}
                                        </Card.Text>
                                        <Button variant="primary">Add to cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}

export default AllTheBooks