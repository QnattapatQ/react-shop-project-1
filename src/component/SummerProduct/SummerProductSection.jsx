import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'
import SmallText from '../../../public/HeaderText'
import { BoldText } from '../../../public/HeaderText'
import SummerProduct from './SummerProduct.jsx'

export const SummerProductSection = () => {
    return (
        <div className='mt-24 px-8 bg-white'>
            <ResponsiveSize>
                <div className='text-center'>
                    <SmallText>Summner Collection</SmallText>
                    <BoldText className='text-black'>On Sale T-Shirts</BoldText>
                </div>
                <div className='pt-8'>
                    <SummerProduct/>
                </div>
            </ResponsiveSize>
        </div>
    )
}
