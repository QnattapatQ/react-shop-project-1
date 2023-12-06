import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'
import { Link } from 'react-router-dom'

export const CategorySection = () => {
    return (
        <div className='px-8 mt-12'>
            <ResponsiveSize>
                <div className='flex gap-5 max-md:flex-col'>
                    <div className='basis-1/2 max-md:basis-full'>
                        <Link to="/men">
                            <div className='relative'>
                                <img className='w-full h-full' src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/cat-men-400x400.jpg" alt="" />
                                <div className='uppercase p-1 text-center absolute bottom-5 left-5 right-5 duration-200 bg-[rgba(255,255,255,0.8)] hover:bg-white text-sm font-semibold'>Men <span className='uppercase block text-[10px] font-normal'>5 products</span></div>
                            </div>
                        </Link>
                    </div>

                    <div className='basis-1/2 max-md:basis-full'>
                        <Link to="/women">
                            <div className='relative'>
                                <img className='w-full h-full' src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/cat-women-400x400.jpg" alt="" />
                                <div className='uppercase p-1 text-center absolute bottom-5 left-5 right-5 duration-200  bg-[rgba(255,255,255,0.8)] hover:bg-white text-sm font-semibold'>Women <span className='uppercase block text-[10px] font-normal'>5 products</span></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </ResponsiveSize>
        </div>
    )
}
