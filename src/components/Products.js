import React, { Component } from 'react'

import {
    Row,
    Badge,
} from 'react-bootstrap';
import Product from './Product';
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
                    <Product />
                    <Product />
                    <Product />
                </Row>
            </>
        )
    }
}

export default Products;