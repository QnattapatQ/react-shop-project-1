import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'

export const FooterSection = () => {
    return (
       <div className='mt-5'>
            <div className='bg-main-pink px-8 py-8'>
                <div className='flex items-center justify-center flex-col py-24 '>
                    <ResponsiveSize>
                        <div className='text-center'>
                            <h3 className='font-semibold'>Subscribe To Get Offers In Your Inbox</h3>
                            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum</p>
                            <div className='flex w-full gap-4 ite mt-7 max-sm:flex-col'>
                                <input className='h-full w-full border p-3 flex-1' type="text" placeholder='Your email address...' />
                                <button className='bg-black px-4 py-2 text-white'>Subscribe</button>
                            </div>
                        </div>
                        <div className='mt-12'>
                            <ul className='flex items-center justify-center gap-7 flex-wrap'>
                                <li className='text-sm text-gray-700 duration-150 hover:text-black'><Link to="/shop">Buy t-Shirts</Link></li>
                                <li className='text-sm text-gray-700 duration-150 hover:text-black'><Link to="/women">Women</Link></li>
                                <li className='text-sm text-gray-700 duration-150 hover:text-black'><Link to="/men">Men</Link></li>
                                <li className='text-sm text-gray-700 duration-150 hover:text-black'><Link to="/about">About</Link></li>
                                <li className='text-sm text-gray-700 duration-150 hover:text-black'><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-center gap-5 mt-10'>
                            <a className='p-[10px] bg-white duration-150 hover:bg-gray-200' href="#"><FaFacebookF /></a>
                            <a className='p-[10px] bg-white duration-150 hover:bg-gray-200' href="#"><FaTwitter /></a>
                            <a className='p-[10px] bg-white duration-150 hover:bg-gray-200' href="#"><FaInstagram /></a>
                        </div>
                    </ResponsiveSize>
                </div>
            </div>
            <div className='bg-black py-5'>
                <div className='min-h-[80px]'>
                    <p className='text-white text-center'>Copyright © 2023 T-Shirts Store | Powered by T-Shirts Store</p>
                </div>
            </div>
       </div>
    )
}
