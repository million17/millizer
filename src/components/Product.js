import React, { Component } from 'react'
import {
    Col,
    Button,
    Card
} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as constants from './../constants/constant'
class Product extends Component {
    render() {
        var { product } = this.props;

        return (
            <Col>
                <Card>
                    <Card.Img variant="top" src={product.image} alt={product.name} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            {this.showRatings(product.rating)}
                        </Card.Text>
                        <Card.Text>
                            {product.price} $
                        </Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => this.onAddToCart(product)}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(constants.ADD_TO_CART_SUCCESS);
    }
    showRatings(rating) {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<FontAwesomeIcon icon="star" key={i} />)
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<FontAwesomeIcon icon="star-half-alt" key={j + 69} />)
        }
        return result;
    }
}

export default Product;