import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'
import SmallText, { BoldText } from '../../../public/HeaderText'

const MenModel = () => {
    return (
        <ResponsiveSize>
            <div className='flex justify-between gap-7'>
                <div className='w-full'>
                    <div>
                        <a href="#">
                            <img className='w-full h-full object-cover' src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-02.jpg" alt="" />
                        </a>
                    </div>
                    <div className='text-center'>
                        <div className='px-6 pb-2'>
                            <SmallText>Men</SmallText>
                            <BoldText>The base collection - Ideal every day.</BoldText>
                        </div>
                        <div className='mt-5'>
                            <a className='bg-black text-white text-sm py-3 px-5 duration-200 border font-medium rounded border-black hover:text-zinc-300' href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <a href="#">
                        <img className='w-full h-full object-cover' src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-01.jpg" alt="" />
                    </a>
                </div>
            </div>
        </ResponsiveSize>
    )
}

export default MenModel