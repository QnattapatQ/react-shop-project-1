import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header';
import { ProductContext } from '../ProductProvider/ProductProvider';
import popularProduct from '../PopularProduct/product';

const ProductDetail = () => {

    const [saveProduct, setSaveProduct] = useState([]);
    const [saveID, setSaveID] = useState('');
    const [productID, setProductID] = useState('');


    const { id } = useParams();

    useEffect(() => {
        const productLocal = JSON.parse(localStorage.getItem('product')) || [];
        if (productLocal) setSaveProduct(productLocal);
    }, []);

    useEffect(() => {

        const productOnPage = popularProduct.filter((data) => {     
            return data.id === id;
        });
            setSaveProduct(productOnPage)
            localStorage.setItem('product', JSON.stringify(productOnPage));

    }, []);


    return (
        <>
            <Header/>
            {saveProduct.map((data) => (
                <div>
                    <div>{data.id}</div>           
                </div>
            ))}
        </>
    )
}

export default ProductDetail