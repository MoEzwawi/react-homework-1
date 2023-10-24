import { Container, Row, Col, Alert } from "react-bootstrap";

const Welcome = () => {
    return (
        <Container className="border-5 mx-auto mt-3">
            <Row className="bg-info border-5 justify-content-center rounded-4">
                <Col md={9}>
                    <div>
                        <h1>EpiBooks</h1>
                    </div>
                    <Alert>
                        The best books in the world XD
                    </Alert>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome