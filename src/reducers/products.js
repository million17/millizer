import ip from '../assets/images/iphone-11.png';
import ap from '../assets/images/apple-watch.jpg';
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
];

const products = (state = initState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default products;