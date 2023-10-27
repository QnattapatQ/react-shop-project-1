import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'
import popularProduct from './product';
import SmallText, { BoldText } from '../../../public/HeaderText';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

const PopularProduct = () => {
    return (
        <div className='pt-24'>
            <ResponsiveSize>
                <div className='text-center'>
                    <SmallText>Summner Collection</SmallText>
                    <BoldText>Popular T-Shirts</BoldText>
                </div>
                <div className='pt-8'>
                    <div className='grid grid-cols-4 gap-7'>
                        {popularProduct.map((data, index) => (
                            <div className='relative overflow-hidden' key={index}>
                                <div className='bg-red-500 relative'>
                                    <a href="#"><img className='w-full' src={data.productTeaser} alt="" /></a>
                                    <a className='absolute inset-0' href="#"><img className='' src={data.realProduct} alt="" /></a>
                                    <div>
                                        <a className='absolute right-5 top-5 w-7 h-7 bg-white rounded-full flex items-center justify-center' href="#"><FaShoppingCart/></a>
                                        <a className='absolute right-5 top-[65px] w-7 h-7 bg-white rounded-full flex items-center justify-center' href="#"><BsFillEyeFill/></a>
                                    </div>
                                </div>
                                { data.discount && (
                                    <div className='absolute left-5 top-5 bg-white p-[6px] rounded-full'>
                                        <p className='text-xs'>{data.discountPrice.price}</p>
                                    </div>
                                )}  
                            </div>
                        ))}
                    </div>
                </div>
            </ResponsiveSize>
        </div>
    )
}

export default PopularProduct