import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'
import SmallText, { BoldText } from '../../../public/HeaderText'

const MenModel = () => {
    return (
        <div className='px-8'>
            <ResponsiveSize>
                <div className='flex justify-between gap-7 max-md:flex-col'>
                    <div className='w-full'>
                        <div className='pb-6'>
                            <a href="#">
                                <img className='w-full h-full object-cover' src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-02.jpg" alt="" />
                            </a>
                        </div>
                        <div className='text-center leading-3 max'>
                            <div className='px-6 pb-2'>
                                <SmallText>Men</SmallText>
                                <p className='leading-10 mt-2 text-4xl font-semibold max-lg:text-3xl'>The base collection - Ideal every day.</p>
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
        </div>
    )
}

export default MenModel