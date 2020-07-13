import * as constants from './../constants/constant'
var data = JSON.parse(localStorage.getItem('CART'));


var initState = data ? data : [];


const cart = (state = initState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case constants.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                //Tìm thấy thì cắt phần tử đó ở 1 vị trí
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case constants.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state]
    }
}

const findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;