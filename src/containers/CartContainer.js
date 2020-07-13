import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carts from './../components/Carts';
import Cart from './../components/Cart';
import * as constants from './../constants/constant';
import CartResult from './../components/CartResult';
class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Carts>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Carts>
        );
    }

    showCartItem = (cart) => {
        var result = <tr>
                        <td>{constants.CART_EMPTY}</td>
                    </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <Cart
                        key={index}
                        item={item}
                        index={index}
                    />
                );
            });
        }

        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }




}

//Kiểm tra các props nhận vào là kiểu gì ?
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps, null)(CartContainer);

//nv kết nối lên props