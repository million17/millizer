import { combineReducers } from 'redux';
import products from '../../src/reducers/products';
import cart from '../../src/reducers/cart';
const reducers = combineReducers({
    products,
    cart
})

export default reducers;