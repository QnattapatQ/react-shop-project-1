import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'
import SmallText, { BoldText } from '../../../public/HeaderText'
import { Link } from 'react-router-dom'

export const FooterSection = () => {
    return (
        <div className='px-8 mt-5 bg-main-pink'>
            <div className='flex items-center justify-center flex-col py-24 '>
                <ResponsiveSize>
                    <div className='text-center w-[950px]'>
                        <h3 className='font-semibold'>Subscribe To Get Offers In Your Inbox</h3>
                        <p className='text-sm mt-3'>Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum</p>
                        <div className='flex h-12 w-full gap-4 mt-7'>
                            <input className='h-full w-full border p-3' type="text" placeholder='Your email address...' />
                            <button className='bg-black px-4 text-white'>Subscribe</button>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <ul className='flex items-center justify-center gap-7'>
                            <li className='text-sm text-gray-700 duration-150 hover:text-black'><Link to="/shop">Buy t-Shirts</Link></li>
                            <li className='text-sm text-gray-700 duration-150 hover:text-black'><Link to="/women">Women</Link></li>
                            <li className='text-sm text-gray-700 duration-150 hover:text-black'><Link to="/men">Men</Link></li>
                            <li className='text-sm text-gray-700 duration-150 hover:text-black'><Link to="/about">About</Link></li>
                            <li className='text-sm text-gray-700 duration-150 hover:text-black'><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </ResponsiveSize>
            </div>
        </div>
    )
}
