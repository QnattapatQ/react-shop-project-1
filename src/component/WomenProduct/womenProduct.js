import { v4 as uuidv4 } from 'uuid';

const womenProduct = [
    {
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 1',
        price: '$18.00 - $20.00',
        number: 1,
        lowPrice: 18.00,
        highPrice: 20.00,
        discount: false
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-07-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 3',
        price: '$32.00 - $34.00',
        number: 3,
        lowPrice: 32.00,
        highPrice: 34.00,
        discount: false
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-04-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 5',
        price: '$40.00 - $42.00',
        number: 5,
        lowPrice: 40.00,
        highPrice: 42.00,
        discount: true,
        discountPrice: {
            price: '-14%'
        }
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 7',
        price: '$36.00 - $39.00',
        number: 7,
        lowPrice: 36.00,
        highPrice: 39.00,
        discount: true,
        discountPrice: {
            price: '-20%'
        }
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-06-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 9',
        price: '$23.00 - $28.00',
        number: 9,
        lowPrice: 23.00,
        highPrice: 28.00,
        discount: false
    }
];

export default womenProduct;