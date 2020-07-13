var initState = [
    {
        id: 1,
        name: 'Iphone X',
        image: '',
        description: 'Made in China',
        price: 400,
        inventory: 10
    },
    {
        id: 2,
        name: 'Apple Watch',
        image: '',
        description: 'Made in China',
        price: 400,
        inventory: 10
    },
];

const product = (state = initState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default product;