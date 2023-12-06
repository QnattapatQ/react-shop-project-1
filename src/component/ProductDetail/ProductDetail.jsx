import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header';
import { ProductContext } from '../ProductProvider/ProductProvider';
import popularProduct from '../PopularProduct/product';
import summerProduct from '../SummerProduct/SummerProduct';

const ProductDetail = () => {

    const [saveProduct, setSaveProduct] = useState([]);


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

    useEffect(() => {

        const summerProductOnPage = summerProduct.filter((data) => {     
            return data.id === id;
        });
            setSaveProduct(summerProductOnPage)
            localStorage.setItem('product', JSON.stringify(summerProductOnPage));

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