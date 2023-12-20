import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header';
import allProducts from '../AllProducts/allProduct.js';
import { FooterSection } from '../FooterSection/FooterSection.jsx';
import ResponsiveSize from '../../../public/ResonsiveSize.jsx';
import { BoldText } from '../../../public/HeaderText.jsx';

const ProductDetail = () => {

    const { id } = useParams();

    const [saveProduct, setSaveProduct] = useState(allProducts);

    // useEffect(() => {
    //     const productLocal = JSON.parse(localStorage.getItem('product')) || [];
    //     if (productLocal) setSaveProduct(productLocal);
    // }, []);

    useEffect(() => {
        setSaveProduct(allProducts.filter((data) => {
            if(data.id === id){
                return data;
            }
        })); // localStorage.setItem('product', JSON.stringify(productOnPage));
    }, [id]);

    return (
        <>
            <Header/>
                <ResponsiveSize>
                    {saveProduct.map((data) => (
                        <div className='grid grid-cols-2 gap-10' key={data.id}>
                            <div className='bg-orange-500'>
                                <div className='w-full grid grid-rows-2 gap-5'>
                                    <img className='w-full -h-full' src={data.gallery.img1} alt="" />
                                    <div className='grid grid-cols-2 gap-5'>
                                        <div className='relative'>
                                            <img className='w-full h-full' src={data.gallery.img2} alt="" />
                                        </div>
                                        <div className='relative'>
                                            <img className='w-full h-full' src={data.gallery.img3} alt="" />
                                        </div>
                                        <div className='relative'>
                                            <img className='w-full h-full' src={data.gallery.img4} alt="" />
                                        </div>
                                    </div>
                                </div>    
                            </div>  
                            <div className=''>
                                <div>
                                    <p>{data.gender}</p>
                                    <BoldText>{data.productName}</BoldText>
                                    <p className='font-semibold text-xl'>{data.price} <span className='font-normal text-sm'>& Free Shipping</span></p>
                                    <p className='text-sm'>{data.desc}</p>
                                </div>
                                <div className='mt-3'>
                                    <p>Color</p>
                                    <div className="btn-group mt-3 flex gap-2 text-center">
                                        <input type="radio" name="options" data-title="Black" className="btn border text-center text-sm capitalize" value="Black"/>
                                        <input type="radio" name="options" data-title="Pink" className="btn border text-center text-sm capitalize" value="Pink"/>
                                        <input type="radio" name="options" data-title="White" className="btn border text-center text-sm capitalize" value="White"/>
                                    </div>
                                </div>    
                            </div>         
                        </div>
                    ))}
                </ResponsiveSize>
            <FooterSection/>
        </>
    )
}

export default ProductDetail