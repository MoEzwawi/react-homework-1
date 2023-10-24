import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
    return (
        <Container fluid className="position-fixed bottom-0 border-3 border-black border-top bg-secondary py-4">
            <Row>
                <Col>
                    EPICODE SCHOOL 2023 &copy;
                </Col>
            </Row>
        </Container>
    )
}

export default MyFooter