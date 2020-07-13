import * as constants from './../constants/constant'
import ip from '../assets/images/iphone-11.png';
import ap from '../assets/images/apple-watch.jpg';
var data = JSON.parse(localStorage.getItem('CART'));


// var initState = data ? data : [];
var initState = [
    {
        product: {
            id: 1,
            name: 'Iphone 11 Pro Max',
            image: ip,
            description: 'Made in China',
            price: 400,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 2,
            name: 'Apple Watch',
            image: ap,
            description: 'Made in China',
            price: 400,
            inventory: 10,
            rating: 1
        },
        quantity: 2
    },


]

const cart = (state = initState, action) => {
    switch (action.type) {
        case constants.ADD_TO_CART:
            console.log(action)
            return [...state];
        default: return [...state]
    }
}

export default cart;