import React from 'react'
import { AiOutlineClose } from 'react-icons/Ai';

const CartSideBar = () => {
    return (
        <div className='fixed inset-0 z-40 bg-[rgba(0,0,0,0.4)]'>
            <div className='fixed right-0 top-0 bottom-0 h-full bg-white w-[380px] flex flex-col'>
                <div className='flex items-center justify-between p-4 border-b-2'>
                    <p>Shopping Cart</p>
                    <AiOutlineClose className='text-lg cursor-pointer'/>
                </div>
                <div className='p-4 h-full flex items-center justify-center'>
                    <p>No products in the cart.</p>
                </div>
                <div className='p-4 w-full'>
                    <a className='py-2 px-4 block text-center bg-black cursor-pointer text-white' href="">Continue Shopping</a>
                </div>
            </div>
        </div>
    )
}

export default CartSideBar