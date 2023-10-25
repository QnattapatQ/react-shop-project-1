import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'

export const HeroSection = () => {
    return (
        <div className='bg-main-pink'>
            <div className='bg-green-500 px-8 h-full'>
                <div className='flex h-full max-md:flex-col bg-main-pink'>
                    <div className='basis-6/12 bg-red-400 flex items-center py-[55px]'>
                        <div className='w-full max-md:text-center'>
                            <div className='mb-[10px]'>
                                <h6 className='uppercase font-normal text-[rgba(0,0,0,0.6)]'>Women</h6>
                            </div>
                            <div className='mb-10'>
                                <h1 className='text-[3.5rem] max-lg:text-[3rem] font-semibold leading-[1em]'>Slick. Modern. <span className='block'>Awesome.</span></h1>
                            </div>
                            <div>
                                <a className='bg-black text-white text-sm py-3 px-5' href="#">Shop Collection</a>
                            </div>
                        </div>
                    </div>
                    <div className='basis-6/12 bg-indigo-400 h-full'>
                        <div className='bg-contain h-full w-full max-md:w-[70%] mx-auto bg-center bg-no-repeat bg-[url(https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero-bg.png)]'>
                            <div>
                                <a href="#"><img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero.png" alt="" /></a>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}
