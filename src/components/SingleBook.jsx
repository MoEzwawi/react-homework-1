import { Component } from "react"
import { Card, Button } from "react-bootstrap"

class SingleBook extends Component {
    state = {
        selected: false
    }
    render() {
        return (
            <Card onClick={() => {
                if (this.state.selected === false) {
                    this.setState({
                        selected: true
                    })
                } else {
                    this.setState({
                        selected: false
                    })
                }
            }} className={this.state.selected === true ? "border-5 border-danger" : ""}>
                <Card.Img src={this.props.oneBook.img} style={{ height: ' 220px' }} />
                <Card.Body style={{ height: ' 180px' }} className="d-flex flex-column justify-content-between bg-info-subtle">
                    <Card.Title>{this.props.oneBook.price} €</Card.Title>
                    <Card.Text className='text-truncate'>
                        {this.props.oneBook.title}
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default SingleBook