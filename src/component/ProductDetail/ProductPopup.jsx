import React from 'react'
import { IoMdClose } from "react-icons/io";

const ProductPopup = ({ product, toggleProduct, setToggleProduct }) => {

    return (
        <div className={`${toggleProduct ? 'flex' : 'hidden'} fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[100] p-4`}>
            <div className='flex relative w-full bg-red-500 items-center justify-between'>
                <div>
                    4/4
                </div>
                <div onClick={() => {setToggleProduct(!toggleProduct)}} className='cursor-pointer'>
                    <IoMdClose className='text-2xl text-white'/>
                </div>
            </div>  
        </div>
    )
}

export default ProductPopup