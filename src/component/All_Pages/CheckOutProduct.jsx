import React from 'react'
import Header from '../Header/Header'
import { FooterSection } from '../FooterSection/FooterSection'
import ResponsiveSize from '../../../public/ResonsiveSize'
import { BtnQuantity } from '../ProductDetail/BtnQuantity'

const CheckOutProduct = () => {
    return (
        <div>
            <Header/>
            <ResponsiveSize>
               <div className='mt-10'>
                    <div className='flex gap-10 max-lg:flex-col'>
                        <div className='basis-[70%] max-lg:basis-full'>
                            <table class="table-auto w-full border">
                                <thead className='border-b'>
                                    <tr className='p-2'>
                                        <th className='uppercase p-2'>Product</th>
                                        <th className='uppercase p-2'></th>
                                        <th className='uppercase p-2'>Price</th>
                                        <th className='uppercase p-2'>Quantity</th>
                                        <th className='uppercase p-2'>Total</th>
                                    </tr>
                                </thead>
                                <tbody className='p-4'>
                                    <tr> 
                                        <td className='flex items-center justify-center py-4'><img src="https://preview.colorlib.com/theme/cozastore/images/item-cart-04.jpg.webp" alt="" /></td>
                                        <td className='text-center py-4'>T-Shirt-Name-2</td>
                                        <td className='text-center py-4'>$ 36.00</td>
                                        <td className='py-4'>
                                            <div className='flex items-center justify-center'>
                                                <button className='border w-10 h-10 -mr-[1px] duration-150 hover:bg-gray-100'>-</button>
                                                <div className='border p-2 w-10 h-10 text-center'>1</div>
                                                <button className='border w-10 h-10 -ml-[1px] duration-150 hover:bg-gray-100'>+</button>
                                            </div>
                                        </td>
                                        <td className='text-center py-4'>$ 36.00</td>
                                    </tr>
                                    <tr> 
                                        <td className='flex items-center justify-center py-4'><img src="https://preview.colorlib.com/theme/cozastore/images/item-cart-04.jpg.webp" alt="" /></td>
                                        <td className='text-center py-4'>T-Shirt-Name-2</td>
                                        <td className='text-center py-4'>$ 36.00</td>
                                        <td className='py-4'>
                                            <div className='flex items-center justify-center'>
                                                <button className='border w-10 h-10 -mr-[1px] duration-150 hover:bg-gray-100'>-</button>
                                                <div className='border p-2 w-10 h-10 text-center'>1</div>
                                                <button className='border w-10 h-10 -ml-[1px] duration-150 hover:bg-gray-100'>+</button>
                                            </div>
                                        </td>
                                        <td className='text-center py-4'>$ 36.00</td>
                                    </tr>
                                    <tr> 
                                        <td className='flex items-center justify-center py-4'><img src="https://preview.colorlib.com/theme/cozastore/images/item-cart-04.jpg.webp" alt="" /></td>
                                        <td className='text-center py-4'>T-Shirt-Name-2</td>
                                        <td className='text-center py-4'>$ 36.00</td>
                                        <td className='py-4'>
                                            <div className='flex items-center justify-center'>
                                                <button className='border w-10 h-10 -mr-[1px] duration-150 hover:bg-gray-100'>-</button>
                                                <div className='border p-2 w-10 h-10 text-center'>1</div>
                                                <button className='border w-10 h-10 -ml-[1px] duration-150 hover:bg-gray-100'>+</button>
                                            </div>
                                        </td>
                                        <td className='text-center py-4'>$ 36.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='basis-[30%] border max-lg:basis-full'>
                            
                        </div>
                    </div>
                </div> 
            </ResponsiveSize>
            <FooterSection/>
        </div>
    )
}

export default CheckOutProduct