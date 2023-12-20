import { v4 as uuidv4 } from 'uuid';

const popularProduct = [
    {
        id: 't-shirt-name-10',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c-300x366.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 10',
        price: '$33.00 - $36.00',
        discount: false
    },{
        id: 't-shirt-name-9',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-06-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 9',
        price: '$23.00 - $28.00',
        discount: false
    },{
        id: 't-shirt-name-8',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-300x366.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 8',
        price: '$21.00 - $25.00',
        discount: false
    },{
        id: 't-shirt-name-7',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 7',
        price: '$36.00 - $39.00',
        discount: true,
        discountPrice: {
            price: '-14%'
        }
    }
]

export default popularProduct;