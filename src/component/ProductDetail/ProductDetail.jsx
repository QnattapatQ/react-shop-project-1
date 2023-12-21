import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Header/Header';
import allProducts from '../AllProducts/allProduct.js';
import { FooterSection } from '../FooterSection/FooterSection.jsx';
import ResponsiveSize from '../../../public/ResonsiveSize.jsx';
import { BoldText } from '../../../public/HeaderText.jsx';
import { BtnQuantity } from './BtnQuantity.jsx';
import { DescriptionProduct } from './DescriptionProduct.jsx';
import { FaPlus } from "react-icons/fa";
import { ReviewProduct } from './ReviewProduct.jsx';
import { RelatedProductMen } from './RelatedProductMen.jsx';
import { RelatedProductWomen } from './RelatedProductWomen.jsx';

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

    return (
        <div>
            <Header/>
            <ResponsiveSize>
                {saveProduct.map((data) => (
                    <div className='pt-10 px-8' key={data.id}>
                        <div className='grid grid-cols-2 gap-10 max-lg:grid-cols-1'>
                            <div className=''>
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
                    </div>
                    
                ))}
            </ResponsiveSize>
            <FooterSection/>
        </div>
    )
}

export default ProductDetail