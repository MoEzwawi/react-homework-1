import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
    state = {
        searchField: ""
    }
    render() {
        return (
            <>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text" placeholder="Search" value={this.state.searchField} onChange={(e) => {
                            this.setState({
                                searchField: e.target.value
                            })
                        }} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
                <Container className='mb-5 mt-3'>
                    <Row className='g-3 mb-5'>
                        {this.props.arrayOfBooks.map((book) => {
                            return (
                                <Col xs={12} sm={6} md={4} lg={3} xl={2} key={book.asin}>
                                    <SingleBook oneBook={book} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </>
        )
    }
}

export default BookList