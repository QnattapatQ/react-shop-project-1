import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";

const ProductPopup = ({ product, toggleProduct, setToggleProduct, numberOfShirt }) => {

    const [imageIndex, setImageIndex] = useState(0);
    const [zoomImages, setZoomImages] = useState(false);

    const nextImages = () => {
        setImageIndex((numOfIndex) => numOfIndex + 1)
        if(imageIndex >= product.gallery.length - 1){
            setImageIndex(0)
        }
    }

    const prevImages = () => {
        setImageIndex((numOfIndex) => numOfIndex - 1)
        if(imageIndex <= 0){
            setImageIndex(3)
        }
    }

    useEffect(() => {
        setImageIndex(numberOfShirt)
    },[numberOfShirt]);

    return (
        <div className={`${toggleProduct ? 'flex' : 'hidden'} fixed duration-500 justify-center flex-col inset-0 bg-[rgba(0,0,0,0.5)] z-[50] p-4`}>
            <div className='relative h-full'>
                <div className='flex relative w-full items-center justify-between'>
                    <div className='text-white'>
                        {imageIndex + 1} / {product.gallery.length}
                    </div>
                   <div className='flex items-center gap-5'>
                        <div onClick={() => {setZoomImages(!zoomImages)}} className='cursor-pointer'>
                            <MdOutlineZoomIn className='text-2xl text-white'/>
                        </div>
                        <div onClick={() => {setToggleProduct(!toggleProduct), setImageIndex(0), setZoomImages(false)}} className='cursor-pointer'>
                            <IoMdClose className='text-2xl text-white'/>
                        </div>
                   </div>
                </div>
                <div className='flex items-center justify-center h-full gap-6 z-[60]' onClick={() => {setToggleProduct(!toggleProduct), setImageIndex(0)}}>
                    <div className={`${zoomImages ? 'w-[700px]' : 'w-[550px]'} duration-300`}>
                        <img className='object-cover w-full h-full' src={product.gallery[imageIndex].img} alt="" />    
                    </div>
                </div>
                <div>
                    <div className='absolute top-1/2 left-0 p-2 bg-[rgba(0,0,0,0.6)] rounded-full duration-300 cursor-pointer hover:bg-black' onClick={() => {prevImages(), setZoomImages(false)}}>
                        <FaArrowLeft className='text-white' />
                    </div>
                    <div className='absolute top-1/2 right-0 p-2 bg-[rgba(0,0,0,0.6)] rounded-full duration-300 cursor-pointer hover:bg-black' onClick={() => {nextImages(), setZoomImages(false)}}>
                        <FaArrowRight className='text-white'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPopup