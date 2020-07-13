import React, { Component } from 'react'
import {
    Table,

} from 'react-bootstrap';
class Carts extends Component {
    render() {
        var { children } = this.props;
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </Table>
        )
    }
}

export default Carts;