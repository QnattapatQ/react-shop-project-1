import React from 'react'
import { AiOutlineClose } from 'react-icons/Ai';
import { useState, useEffect } from 'react';
import './cartsidebar.css';
import { Link } from 'react-router-dom';

const CartSideBar = ({ setOpenCartBar, openCartBar, setProductLength }) => {

    const [productInCart, setProductInCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const productInLocalStorage = JSON.parse(localStorage.getItem('productList')) || [];

    useEffect(() => {
        setProductInCart(productInLocalStorage);
    }, []);

    useEffect(() => {
        setProductLength(productInCart.length)
        localStorage.setItem('productList', JSON.stringify(productInCart));
        calTotalPrice()
    }, [productInCart]);

    const removeProdcut = (product) => {
        const updateCart = productInCart.filter((data) => {
            if(data.id !== product.id) {
                return data
            }
        });
        setProductInCart(updateCart);
        window.location.reload(false);
    }

    const calTotalPrice = () => {
        setTotalPrice(0);
        productInCart.forEach((data) => {
            setTotalPrice((priceOfPrevProduct) => priceOfPrevProduct + (data.lowPrice * data.productCount))
        });
    }

    // DeakTop Width Start

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

    // DeakTop Width End

    return (
        <div>
            <div className={`${openCartBar ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed duration-500 inset-0 z-40 bg-[rgba(0,0,0,0.4)]`} onClick={() => {setOpenCartBar(!openCartBar)}}>
                
            </div>
            <div className={`${openCartBar ? 'translate-x-[0] opacity-100 visible' : 'translate-x-[100%] opacity-0 invisible'} z-50 fixed duration-300 right-0 top-0 bottom-0 h-full bg-white w-[380px] flex flex-col max-sm:w-full`}>
                <div className='flex items-center justify-between p-4 border-b-2'>
                    <p>Shopping Cart</p>
                    <AiOutlineClose className='text-lg cursor-pointer' onClick={() => {setOpenCartBar(!openCartBar)}}/>
                </div>
                <div className='cart-side-bar h-full overflow-y-auto relative'>
                    {productInCart.length !== 0 ?
                        <div className='p-4'>
                            {productInCart.map((data) => (
                                <div className='py-2' key={data.id}>
                                    <div className='flex items-center gap-4 ' key={data.id}>
                                        <div className='w-[60px]'>
                                            <img className='w-full h-full object-cover' src={data.productTeaser} alt="" />
                                        </div>
                                        <div className='flex-1'>
                                            <p>{data.productName}</p>
                                            <div className=''>
                                                <p className='inline-block'>{data.productCount} x ${data.lowPrice * data.productCount}</p>
                                            </div>
                                        </div>
                                        <AiOutlineClose className='text-lg cursor-pointer' onClick={() => {removeProdcut(data)}}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                            :
                        <div className='p-4 h-full flex items-center justify-center'>
                            <p>No products in the cart.</p>
                        </div>    
                    }
                </div>
                <div className='p-4'>
                    <div className='py-2'>
                        Total: $ {totalPrice}
                    </div>
                    <div className='w-full py-2'>
                        <Link to="/checkout" className='py-2 px-4 block text-center bg-black cursor-pointer text-white'>Continue Shopping</Link>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default CartSideBar