import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Header/Header';
import allProducts from '../AllProducts/allProduct.js';
import { FooterSection } from '../FooterSection/FooterSection.jsx';
import ResponsiveSize from '../../../public/ResonsiveSize.jsx';
import { BtnQuantity } from './BtnQuantity.jsx';
import { DescriptionProduct } from './DescriptionProduct.jsx';
import { FaPlus } from "react-icons/fa";
import { ReviewProduct } from './ReviewProduct.jsx';
import { RelatedProductMen } from './RelatedProductMen.jsx';
import { RelatedProductWomen } from './RelatedProductWomen.jsx';
import { IoIosSearch } from "react-icons/io";
import ProductPopup from './ProductPopup.jsx';

const ProductDetail = () => {

    const { id } = useParams();

    const [saveProduct, setSaveProduct] = useState(allProducts);

    useEffect(() => {
        setSaveProduct(allProducts.filter((data) => {
            if(data.id === id){
                return data;
            }
        }));
    }, [id]);

    const [toggleProduct, setToggleProduct] = useState(false);

    const [numberOfShirt, setNumberOfShirt] = useState(0);

    return (
        <div>
            <Header/>
            <ResponsiveSize>
                {saveProduct.map((data) => (
                    <div className='pt-10 px-8' key={data.id}>
                        <div className='grid grid-cols-2 gap-10 max-lg:grid-cols-1'>
                            <div className=''>
                                <div className='w-full grid grid-rows-2 gap-5'>
                                    <div className='relative w-full'>
                                        <img className='w-full -h-full' src={data.gallery[0].img} alt="" />
                                        <div onClick={() => {setToggleProduct(!toggleProduct)}} className='absolute bg-white w-9 h-9 p-1 rounded-full top-5 right-5 flex items-center justify-center cursor-pointer'><IoIosSearch className='text-2xl' /></div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-5'>
                                        <div className='relative cursor-pointer' onClick={() => {setToggleProduct(!toggleProduct), setNumberOfShirt(1)}}>
                                            <img className='w-full h-full' src={data.gallery[1].img} alt="" />
                                        </div>
                                        <div className='relative cursor-pointer' onClick={() => {setToggleProduct(!toggleProduct), setNumberOfShirt(2)}}>
                                            <img className='w-full h-full' src={data.gallery[2].img} alt="" />
                                        </div>
                                        <div className='relative cursor-pointer' onClick={() => {setToggleProduct(!toggleProduct), setNumberOfShirt(3)}}>
                                            <img className='w-full h-full' src={data.gallery[3].img} alt="" />
                                        </div>
                                    </div>
                                </div>    
                            </div>  
                            <div className=''>
                                <div>
                                    <Link to={data.gender === 'WOMEN' ? '/women' : '/men'}>{data.gender === 'WOMEN' ? 'WOMEN' : 'MEN'}</Link>
                                    <h2 className='text-4xl font-semibold my-2 max-sm:text-2xl'>{data.productName}</h2>
                                    <p className='font-semibold text-xl'>{data.price} <span className='font-normal text-sm'>& Free Shipping</span></p>
                                    <p className='text-sm mt-1 text-gray-500'>{data.desc}</p>
                                </div>
                                <div className='mt-3 mb-8'>
                                    <p className='font-semibold text-sm'>Color</p>
                                    <div className="btn-group mt-3 flex gap-2 text-center">
                                    <button className='border px-4 py-2 text-sm'>Black</button>
                                    <button className='border px-4 py-2 text-sm'>White</button>
                                    <button className='border px-4 py-2 text-sm'>Pink</button>
                                    </div>
                                </div>
                                <hr/>
                                <BtnQuantity/>
                                <hr/>
                                <div className='flex text-xs gap-4 mt-2 mb-7'>
                                    <p className='text-gray-500'>SKU: N/A</p>
                                    <p>
                                        <span className='text-gray-500'>Category:</span>
                                        <Link className='capitalize ml-1 hover:underline' to={data.gender === 'WOMEN' ? '/women' : '/men'}>{data.gender}</Link>
                                    </p>    
                                </div>
                                <hr/>
                                <DescriptionProduct/>
                                <div>
                                    <div className='relative flex items-center justify-between py-[13px] cursor-pointer'>
                                        <p className='font-semibold text-sm'>Additional information</p>
                                        <p className='font-semibold'><FaPlus /></p>
                                    </div>
                                    <div className='pb-4'>
                                        <table className="table-auto w-full"> 
                                            <tbody className='border'>
                                                <tr>
                                                    <td className='border py-2 px-4 text-sm'>Color</td>
                                                    <td className='border py-2 px-4 text-sm'>Black, Orange, White</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr/>
                                </div>
                                <ReviewProduct name={data.productName}/>   
                            </div>         
                        </div>
                        <div>
                            {data.gender === 'WOMEN' ? 
                                <RelatedProductWomen womenProductId={data.id}/> 
                                    : 
                                <RelatedProductMen menProductId={data.id}/> 
                            }
                        </div>
                        <ProductPopup 
                            product={data} 
                            toggleProduct={toggleProduct} 
                            setToggleProduct={setToggleProduct} 
                            numberOfShirt={numberOfShirt} 
                        />
                    </div>
                    
                ))}
            </ResponsiveSize>
            <FooterSection/>
        </div>
    )
}

export default ProductDetail