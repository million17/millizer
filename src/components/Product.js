import React, { Component } from 'react'
import logo from '../../src/logo.svg';
import {
    Col,
    Button,
    Card
} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Product extends Component {
    render() {
        var { product } = this.props;
        return (
            <Col>
                <Card style={{ width: '18rem' }}>
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
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
    showRatings(rating) {
        var result = [];
        for(var i = 1; i<= rating ; i++) {
            result.push(<FontAwesomeIcon icon="star" />)
        }
        for(var j = 1 ; j<= (5-rating); j++) {
            result.push(<FontAwesomeIcon icon="star-half-alt" />)
        }
        return result;
    }
}

export default Product;