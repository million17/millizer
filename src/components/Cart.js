import React, { Component } from 'react'
import {
    Button
} from 'react-bootstrap';
import * as constants from './../constants/constant'

class Cart extends Component {
    render() {
        var { item } = this.props;
        var { quantity } =  item;
        return (
            <tr>
                <td>{item.product.id}</td>
                <td>{item.product.name}</td>
                <td>
                    <img src={item.product.image} alt={item.product.name} width="200" />
                </td>
                <td>{item.product.price}
                    $ </td>
                <td>
                    {quantity}
                    <label
                        className="btn btn-primary"
                        onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}>-</label>

                    <label
                        className="btn btn-primary"
                        onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}>+</label>
                </td>
                <td>{this.showSubtotal(item.product.price, item.quantity)} $</td>
                <td>
                    <Button
                        variant="outline-warning"
                        onClick={() => { this.onDelete(item.product) }}
                    >Delete
                    </Button>
                </td>
            </tr>
        )
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var {onUpdateProductInCart, onChangeMessage} = this.props;
            onUpdateProductInCart(product, quantity);
            onChangeMessage(constants.UPDATE_CART_SUCCESS);
        }
    }

    onDelete = (product) => {
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(constants.DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    showSubtotal = (price, quantity) => {
        return price * quantity;
    }
}
export default Cart;