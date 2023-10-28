import React, { useState } from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'
import SmallText, { BoldText } from '../../../public/HeaderText';
import { ProductList } from './ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';

const PopularProduct = () => {

    return (
        <div className='pt-24 px-8 bg-white'>
            <ResponsiveSize>
                <div className='text-center'>
                    <SmallText>Summner Collection</SmallText>
                    <BoldText className='text-black'>Popular T-Shirts</BoldText>
                </div>
                <div className='pt-8'>
                    <ProductList/>
                </div>
            </ResponsiveSize>
        </div>
    )
}

export default PopularProduct