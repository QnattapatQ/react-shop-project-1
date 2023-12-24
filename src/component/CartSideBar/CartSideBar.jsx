import React from 'react'
import { AiOutlineClose } from 'react-icons/Ai';
import { useState, useEffect } from 'react';

const CartSideBar = ({ setOpenCartBar, openCartBar }) => {

    const [productInCart, setProductInCart] = useState([]);

    useEffect(() => {
        let productInLocalStorage = JSON.parse(localStorage.getItem('productList')) || [];
        setProductInCart(productInLocalStorage);
    }, []);

    const [desktopSize, setDesktopSize] = useState({
        winWidth: window.innerWidth
    })

    const detechSize = () => {
        setDesktopSize({
            winWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detechSize);

        if(desktopSize.winWidth > 1024){
            setOpenCartBar(false);
        }

        return () => {
            window.removeEventListener('resize', detechSize);
        }

    },[desktopSize]);

    return (
        <div className={`${openCartBar ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed duration-500 inset-0 z-40 bg-[rgba(0,0,0,0.4)]`} onClick={() => {setOpenCartBar(!openCartBar)}}>
            <div className={`${openCartBar ? 'translate-x-[0] opacity-100 visible' : 'translate-x-[100%] opacity-0 invisible'} fixed duration-300 right-0 top-0 bottom-0 h-full bg-white w-[380px] flex flex-col`}>
                <div className='flex items-center justify-between p-4 border-b-2'>
                    <p>Shopping Cart</p>
                    <AiOutlineClose className='text-lg cursor-pointer' onClick={() => {setOpenCartBar(!openCartBar)}}/>
                </div>
                <div className='h-full'>
                    {productInCart.length !== 0 ?
                        <div>
                            <p>{productInCart.productName}</p>
                        </div>
                            :
                        <div className='p-4 h-full flex items-center justify-center'>
                            <p>No products in the cart.</p>
                        </div>    
                    }
                </div>
                <div className='p-4 w-full'>
                    <a className='py-2 px-4 block text-center bg-black cursor-pointer text-white' href="">Continue Shopping</a>
                </div>
            </div>
        </div>
    )
}

export default CartSideBar