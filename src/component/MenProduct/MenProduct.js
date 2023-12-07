import { v4 as uuidv4 } from 'uuid';

const menProduct = [
    {
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 10',
        price: '$33.00 - $36.00',
        discount: false
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-02-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 10',
        price: '$33.00 - $36.00',
        discount: false
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-05-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 10',
        price: '$33.00 - $36.00',
        discount: true,
        discountPrice: {
            price: '-14%'
        }
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-03-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 10',
        price: '$33.00 - $36.00',
        discount: true,
        discountPrice: {
            price: '-20%'
        }
    },{
        id: uuidv4(),
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 10',
        price: '$33.00 - $36.00',
        discount: false
    }
];

export default menProduct;