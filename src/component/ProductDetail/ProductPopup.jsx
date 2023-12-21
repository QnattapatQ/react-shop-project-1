import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductPopup = ({ product, toggleProduct, setToggleProduct }) => {

    const [imageSlide, setImageSlide] = useState(0);

    return (
        <div className={`${toggleProduct ? 'flex' : 'hidden'} fixed duration-500 justify-center flex-col inset-0 bg-[rgba(0,0,0,0.5)] z-[100] p-4`} onClick={() => {setToggleProduct(!toggleProduct)}}>
            <div className='flex relative w-full items-center justify-between'>
                <div className='text-white'>
                    4/4
                </div>
                <div onClick={() => {setToggleProduct(!toggleProduct)}} className='cursor-pointer'>
                    <IoMdClose className='text-2xl text-white'/>
                </div>
            </div>
            <div className='flex items-center justify-between h-full gap-6'>
                <div>
                    <FaArrowLeft className='text-white cursor-pointer' />
                </div>
                <div className='w-[530px]'>
                    <img className='object-cover w-full h-full' src={product.gallery.img1} alt="" />
                </div>
                <div>
                    <FaArrowRight className='text-white cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}

export default ProductPopup