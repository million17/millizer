import ip from '../assets/images/iphone-11.png';
import ap from '../assets/images/apple-watch.jpg';
import ss from '../assets/images/samsung.png';
var initState = [
    {
        id: 1,
        name: 'Iphone 11 Pro Max',
        image: ip,
        description: 'Made in China',
        price: 400,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Apple Watch',
        image: ap,
        description: 'Made in China',
        price: 400,
        inventory: 10,
        rating: 1 
    },
    {
        id: 3,
        name: 'Samsung Galaxy Fold',
        image: ss,
        description: 'Made in China',
        price: 1500,
        inventory: 23,
        rating: 5 
    },
];

const products = (state = initState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default products;