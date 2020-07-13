import React, { Component } from 'react'
import {
    Row,
    Badge,
} from 'react-bootstrap';
import Product from './Product';
import { connect } from 'react-redux';
class Products extends Component {
    render() {
        var { products } = this.props;
        return (
            <>
                <Row className="text-center my-5">
                    <h1>
                        Lists Product <Badge variant="secondary">New</Badge>
                    </h1>
                </Row>
                <Row className="my-5">
                    {this.showProducts(products)}
                </Row>
            </>
        )
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product} />
            })
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(Products);