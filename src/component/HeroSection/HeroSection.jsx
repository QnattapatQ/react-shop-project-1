import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'

export const HeroSection = () => {
    return (
        <div className='bg-main-pink h-[800px]'>
            <ResponsiveSize className='bg-green-500 px-8 h-full'>
                <div className='flex h-full'>
                    <div className='basis-6/12 bg-red-400 h-full flex items-center'>
                        <div>
                            <div>
                                <h6 className='uppercase font-normal text-[rgba(0,0,0,0.6)]'>Women</h6>
                            </div>
                            <div className='mb-5'>
                                <h1>Slick. Modern. <br/> Awesome.</h1>
                            </div>
                            <div>
                                <a className='bg-black text-white text-sm py-3 px-5' href="#">Shop Collection</a>
                            </div>
                        </div>
                    </div>
                    <div className='basis-6/12 bg-indigo-400 h-full'>

                    </div>  
                </div>
            </ResponsiveSize>
        </div>
    )
}
