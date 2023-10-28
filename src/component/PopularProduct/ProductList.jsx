import React, { useState } from 'react'
import popularProduct from './product'
import { BsFillEyeFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import SmallText from '../../../public/HeaderText';

export const ProductList = ({ setProductSelect }) => {

    return (
        <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-7'>
            {popularProduct.map((data, index) => (
                <div className='relative overflow-hidden group/img group/option' onClick={() => {setProductSelect(data)}} key={index}>
                    <div className='relative'>
                        <a href="#"><img className='w-full duration-500 group-hover/img:opacity-0' src={data.productTeaser} alt="" /></a>
                        <a className='absolute inset-0 z-[-1] duration-500 opacity-0 group-hover/img:opacity-100 group-hover/img:z-10' href="#"><img className='w-full h-full' src={data.realProduct} alt="" /></a>
                        <div>
                            <a 
                                className='tooltip tooltip-left absolute z-20 right-5 shadow-md top-5 w-7 h-7 opacity-0 duration-300
                                bg-white rounded-full flex items-center justify-center group-hover/option:opacity-100' 
                                href="#"
                                data-tip='Select Options'
                            >
                                <FaShoppingCart className='text-black'/>
                            </a>
                            <a 
                                className='tooltip tooltip-left absolute z-20 right-5 shadow-md top-[65px] w-7 h-7 opacity-0 duration-300
                                bg-white rounded-full flex items-center justify-center group-hover/option:opacity-100' 
                                href="#"
                                onClick={() => {setProductSelect(data)}}
                                data-tip='View Product'
                            >
                                <BsFillEyeFill className='text-black'/>
                            </a>
                        </div>
                    </div>
                    { data.discount && (
                        <div className='absolute left-5 top-5 z-20 bg-white p-[6px] shadow-md rounded-full'>
                            <p className='text-xs text-black'>{data.discountPrice.price}</p>
                        </div>
                    )}
                    <div className='p-2'>
                        <SmallText className='mb-1'>{data.gender}</SmallText>
                        <h2 className='text-black font-semibold mb-1 '>{data.productName}</h2>
                        <p className='text-black text-xs font-medium'>{data.price}</p>
                    </div>  
                </div>
            ))}
        </div>
    )
}
