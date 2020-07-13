import React, { Component } from 'react'

class Cart extends Component {
    render() {
        var {item} = this.props;
        console.log(`Item` ,item)
        return (
            <tr>
                <td>{item.product.id}</td>
                <td>{item.product.name}</td>
                <td>
                    <img src={item.product.image} alt={item.product.name} width="200"/>
                </td>
                <td>{item.product.price} $ </td>
                <td>{item.quantity}</td>
                <td>{this.showSubtotal(item.product.price,item.quantity)} $</td>
            </tr>
        )
    }
    showSubtotal = (price,quantity) => {
        return price * quantity;
    }
}
export default Cart;