import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import scifiBooks from '../data/scifi.json'


const AllTheBooks = () => {
    return (
        <Container className='mb-5 mt-3'>
            <Row className='g-3 mb-5'>
                {scifiBooks.map((book) => {
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
    );
}

export default AllTheBooks