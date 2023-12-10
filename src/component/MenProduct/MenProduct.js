import { v4 as uuidv4 } from 'uuid';

const menProduct = [
    {
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 10',
        price: '$33.00 - $38.00',
        number: 10,
        lowPrice: 33.00,
        highPrice: 38.00,
        discount: false
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-02-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 2',
        price: '$22.00 - $27.00',
        number: 2,
        lowPrice: 22.00,
        highPrice: 27.00,
        discount: false
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-05-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 4',
        price: '$17.00 - $19.00',
        number: 4,
        lowPrice: 17.00,
        highPrice: 19.00,
        discount: true,
        discountPrice: {
            price: '-14%'
        }
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-03-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 6',
        price: '$18.00 - $22.00',
        number: 6,
        lowPrice: 18.00,
        highPrice: 22.00,
        discount: true,
        discountPrice: {
            price: '-20%'
        }
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 8',
        price: '$21.00 - $25.00',
        number: 8,
        lowPrice: 21.00,
        highPrice: 25.00,
        discount: false
    }
];

export default menProduct;