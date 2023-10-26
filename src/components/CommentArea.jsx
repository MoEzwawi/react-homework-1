import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
    state = {
        review: {
            comment: '',
            rate: '',
            elementID: ''
        }
    }
    render() {
        return (
            <>
                <p>EPICODE</p>
                <CommentList />
                <AddComment />
            </>
        )
    }
}

export default CommentArea