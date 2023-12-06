import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'
import SmallText, { BoldText } from '../../../public/HeaderText'

const WomenPreview = () => {
    return (
        <div className='relative mt-36 h-full w-full px-8'>
            <div className='bg-main-pink w-1/2 max-lg:w-full h-full absolute inset-0 -z-10'>
                
            </div>
            <ResponsiveSize>
                <div className='z-10 flex items-center gap-6 max-lg:flex-col'>
                    <div className='mt-[-50px] mr-[50px] mb-[50px] max-lg:mr-0 max-lg:mb-0'>
                        <a href="#" className=''>
                            <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-03.jpg" alt="" />
                        </a>
                    </div>
                    <div className='w-1/2 max-lg:w-full max-lg:mt-6 flex flex-col items-start'>
                        <SmallText>Women</SmallText>
                        <BoldText>Spring Summer Collection</BoldText>
                        <p className='text-gray-500 mt-2 text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, 
                            congue justo at, lobortis orci. Aliquam venenatis dui lectus, eu convallis 
                            turpis convallis et. Pellentesque.
                        </p>
                        <a className='bg-black text-white mt-8 text-sm py-3 inline-block px-5 duration-200 border font-medium rounded border-black hover:text-zinc-300' href="#">See Whole Collection</a>
                    </div>
                </div>
            </ResponsiveSize>
        </div>
    )
}

export default WomenPreview