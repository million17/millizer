import React, { Component } from 'react'
import {
    Button
} from 'react-bootstrap';

class Cart extends Component {
    render() {
        var { item } = this.props;
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
                    {item.quantity}
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

    onDelete = (product) => {
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product);
    }

    showSubtotal = (price, quantity) => {
        return price * quantity;
    }
}
export default Cart;