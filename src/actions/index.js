import * as constants from './../constants/constant';


export const actAddToCart = (product, quantity) => {
    return {
        type: constants.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: constants.CHANGE_MSG,
        message
    }
}

export const actRemoveProductInCart = (product) => {
    return {
        type: constants.DELETE_PRODUCT_IN_CART,
        product
    }
}