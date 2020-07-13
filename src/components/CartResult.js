import React, { Component } from 'react'

class CartResult extends Component {
    render() {
        var { cart } = this.props;
        return (
            <tr>
                <td colSpan="2"> Total Price : </td>
                <td colSpan="2">{this.showTotalAmount(cart)}$</td>
            </tr>
        )
    }
    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity
            }
        }
        return total;
    }
}
export default CartResult;
