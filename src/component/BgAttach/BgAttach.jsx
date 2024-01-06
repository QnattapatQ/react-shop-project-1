import React from 'react'

const BgAttach = () => {
    return (
        <div className='mt-[100px]'>
            <div className='relative w-full h-[742px] max-lg:h-[654px] max-lg:bg-local bg-fixed bg-cover bg-center bg-no-repeat bg-[url(https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/bg-01.jpg)]'>
                <div className='absolute bg-[rgba(0,0,0,0.2)] inset-0'></div>
                <div className='h-full w-full flex items-center  justify-center absolute flex-col z-10'>
                    <h6 className='w-full text-center text-white'>NEW COLLECTION</h6>
                    <h2 className='text-center text-white font-semibold mt-2'>
                        <span className='block text-4xl mb-2'>Be different in your own way!</span> 
                        Find your unique style.
                    </h2>
                    <a className='bg-black text-white mt-8 text-sm py-3 px-5 duration-200 border font-medium rounded border-black hover:text-zinc-300' href="#">Shop Collection</a>
                </div>
            </div>  
        </div>
    )
}

export default BgAttach