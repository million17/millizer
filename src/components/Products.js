import React, { Component } from 'react'
import {
    Row,
    Badge,
} from 'react-bootstrap';
class Products extends Component {
    render() {
        return (
            <>
                <Row className="text-center my-5">
                    <h1>
                        Lists Product <Badge variant="secondary">New</Badge>
                    </h1>
                </Row>
                <Row className="my-5">
                    {this.props.children}
                </Row>
            </>
        )
    }


}



export default Products;