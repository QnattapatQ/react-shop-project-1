import React from 'react'
import { FaPlus } from "react-icons/fa";

export const ReviewProduct = ({ name }) => {
    return (
        <div className='py-4'>
            <div className='relative flex items-center justify-between cursor-pointer pb-3'>
                <p className='font-semibold text-sm'>Description</p>
                <p className='font-semibold'><FaPlus /></p>
            </div>
            <div className='py-3'>
                <p className='text-sm text-gray-500 pb-3'>There are no reviews yet.</p>
                <form className='w-full border p-[22px]'>
                    <h2 className='text-gray-500'>Be the first to review "{name}"</h2>
                    <p className='text-xs text-gray-500 mt-1 mb-2'>Your email address will not be published. Required fields are marked *</p>
                    <div className='flex items-center my-4'>
                        <p className='inline-block text-gray-500'>Your Rating *</p>
                        <div className="rating ml-2">
                            <input type="radio" name="rating-1" className="mask mask-star w-[19px] h-[19px]" />
                            <input type="radio" name="rating-1" className="mask mask-star w-[19px] h-[19px]" />
                            <input type="radio" name="rating-1" className="mask mask-star w-[19px] h-[19px]" />
                            <input type="radio" name="rating-1" className="mask mask-star w-[19px] h-[19px]" />
                            <input type="radio" name="rating-1" className="mask mask-star w-[19px] h-[19px]" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-gray-500'>Your review *</p>
                            <textarea className='border w-full resize-none outline-none p-3'  rows="4"></textarea>
                        </div>
                        <div className='flex items-center justify-between gap-3 max-sm:flex-col'>
                            <div className='w-full'>
                                <p>Name *</p>
                                <input className='border w-full p-2 outline-none' type="text" />
                            </div>
                            <div className='w-full'>
                                <p>Email *</p>
                                <input className='border w-full p-2 outline-none' type="text" />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 mt-3'>
                            <input className='inline-block' type="checkbox" />
                            <p className='inline-block text-[13px] text-gray-500'>Save my name, email, and website in this browser for the next time I comment.</p>
                        </div>
                        <button className='bg-black px-6 py-3 text-white text-sm mt-5 duration-150 hover:text-gray-300'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
