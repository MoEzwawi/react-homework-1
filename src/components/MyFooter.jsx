import { Container } from "react-bootstrap";

const date = new Date()
const year = date.getFullYear()

const MyFooter = () => {
    return (
        <Container fluid className="border-3 border-black border-top bg-secondary py-2 d-flex justify-content-center">
            <p className="mb-0">EPICODE SCHOOL {year} &copy;</p>
        </Container>
    )
}

export default MyFooter