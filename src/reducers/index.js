import { combineReducers } from 'redux';
import products from '../../src/reducers/products';
import cart from '../../src/reducers/cart';
import message from '../../src/reducers/message';
const reducers = combineReducers({
    products,
    cart,
    message
})

export default reducers;