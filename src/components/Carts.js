import React, { Component } from 'react'
import {
    Table,

} from 'react-bootstrap';
import Cart from './Cart';
import CartResult from './CartResult';
class Carts extends Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <Cart />
                    <CartResult />
                </tbody>
            </Table>
        )
    }
}

export default Carts;