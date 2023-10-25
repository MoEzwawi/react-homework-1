import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap"
import { Component } from "react";
import SingleBook from "./SingleBook";
import scifiBooks from '../data/scifi.json'
import fantasyBooks from '../data/fantasy.json'
import historyBooks from '../data/history.json'
import horrorBooks from '../data/horror.json'
import romanceBooks from '../data/romance.json'

class BookList extends Component {
    state = {
        currentGenre: scifiBooks,
        searchField: ""
    }
    resetSearchField = () => {
        this.setState({
            searchField: ""
        })
    }
    setGenre = (genre) => {
        this.setState({
            currentGenre: genre
        })
    }
    render() {
        return (
            <>
                <Container>
                    <Row className="d-flex justify-content-around align-items-center">
                        <Col sm={12} md={3}>
                            <Form className="d-flex justify-content-center align-items-center">
                                <Form.Group className="mb-3">
                                    <Form.Label>Search</Form.Label>
                                    <Form.Control type="text" placeholder="Search" value={this.state.searchField} onChange={(e) => {
                                        this.setState({
                                            searchField: e.target.value
                                        })
                                    }} />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="ms-2 mt-3">
                                    Search
                                </Button>
                            </Form>
                        </Col>
                        <Col xs={0} md={6}></Col>
                        <Col sm={12} md={3} className="d-flex justify-content-end">
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Select Genre
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => {
                                        this.setGenre(scifiBooks)
                                        this.resetSearchField()
                                    }}>Scifi</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        this.setGenre(fantasyBooks)
                                        this.resetSearchField()
                                    }}>Fantasy</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        this.setGenre(historyBooks)
                                        this.resetSearchField()
                                    }}>History</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        this.setGenre(horrorBooks)
                                        this.resetSearchField()
                                    }}>Horror</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        this.setGenre(romanceBooks)
                                        this.resetSearchField()
                                    }}>Romance</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
                <Container className='mb-5 mt-3'>
                    <Row className='g-3 mb-5'>
                        {this.state.currentGenre.filter(book => book.title.toLowerCase().includes(this.state.searchField.toLowerCase())).map((book) => {
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