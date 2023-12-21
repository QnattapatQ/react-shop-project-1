import { v4 as uuidv4 } from 'uuid';

const allProducts = [
    {
        id: 't-shirt-name-1',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 1',
        number: 1,
        price: '$18.00 - $20.00',
        lowPrice: 18.00,
        highPrice: 20.00,
        discount: false,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.',
        gallery : {
            img1: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-a.jpg',
            img2: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg',
            img3: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c.jpg',
            img4: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d.jpg',
        },
    },
    {
        id: 't-shirt-name-2',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-02-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 2',
        number: 2,
        price: '$22.00 - $27.00',
        lowPrice: 22.00,
        highPrice: 27.00,
        discount: false,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.',
        gallery : {
            img1: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-02-a.jpg',
            img2: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg',
            img3: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c.jpg',
            img4: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d.jpg',
        }
    },{
        id: 't-shirt-name-3',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-07-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 3',
        number: 3,
        price: '$32.00 - $34.00',
        lowPrice: 32.00,
        highPrice: 34.00,
        discount: false,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.',
        gallery : {
            img1: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-07-a.jpg',
            img2: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg',
            img3: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c.jpg',
            img4: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d.jpg',
        }
    },{
        id: 't-shirt-name-4',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-05-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 4',
        number: 4,
        price: '$17.00 - $19.00',
        lowPrice: 17.00,
        highPrice: 19.00,
        discount: true,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.',
        discountPrice: {
            price: '-14%'
        },
        gallery : {
            img1: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-05-a.jpg',
            img2: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg',
            img3: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c.jpg',
            img4: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d.jpg',
        }
    },{
        id: 't-shirt-name-5',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-04-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 5',
        number: 5,
        price: '$40.00 - $42.00',
        lowPrice: 40.00,
        highPrice: 42.00,
        discount: true,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.',
        discountPrice: {
            price: '-14%'
        },
        gallery : {
            img1: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-04-a.jpg',
            img2: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg',
            img3: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c.jpg',
            img4: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d.jpg',
        }
    },{
        id: 't-shirt-name-6',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-03-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 6',
        number: 6,
        price: '$18.00 - $22.00',
        lowPrice: 18.00,
        highPrice: 22.00,
        discount: true,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.',
        discountPrice: {
            price: '-20%'
        },
        gallery : {
            img1: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-03-a.jpg',
            img2: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg',
            img3: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c.jpg',
            img4: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d.jpg',
        }
    },{
        id: 't-shirt-name-7',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 7',
        number: 7,
        price: '$38.00 - $39.00',
        lowPrice: 38.00,
        highPrice: 39.00,
        discount: true,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.',
        discountPrice: {
            price: '-20%'
        },
        gallery : {
            img1: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a.jpg',
            img2: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg',
            img3: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c.jpg',
            img4: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d.jpg',
        }
    },{
        id: 't-shirt-name-8',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 8',
        number: 8,
        price: '$21.00 - $25.00',
        lowPrice: 21.00,
        highPrice: 25.00,
        discount: false,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.',
        gallery : {
            img1: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a.jpg',
            img2: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg',
            img3: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c.jpg',
            img4: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d.jpg',
        }
    },{
        id: 't-shirt-name-9',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-06-a-300x366.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-300x366.jpg',
        gender: 'WOMEN',
        productName: 'T-Shirt Name 9',
        number: 9,
        price: '$23.00 - $28.00',
        lowPrice: 23.00,
        highPrice: 28.00,
        discount: false,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.',
        gallery : {
            img1: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-06-a.jpg',
            img2: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg',
            img3: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c.jpg',
            img4: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d.jpg',
        }
    },{
        id: 't-shirt-name-10',
        productTeaser: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg',
        realProduct: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c-400x488.jpg',
        gender: 'MEN',
        productName: 'T-Shirt Name 10',
        number: 10,
        price: '$33.00 - $36.00',
        lowPrice: 33.00,
        highPrice: 36.00,
        discount: false,
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor aliquet varius.',
        gallery : {
            img1: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a.jpg',
            img2: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg',
            img3: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c.jpg',
            img4: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d.jpg',
        }
    }
];

export default allProducts;