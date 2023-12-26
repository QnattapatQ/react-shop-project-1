import React, { useEffect, useState } from 'react'

export const BtnQuantity = ({ product }) => {

    const [productQuantity, setProductQuantity] = useState(1);
    const [checkNumber, setCheckNumber] = useState(false);

    const [cartProduct, setCartProduct] = useState([]);

    const addToCart = () => {
        setCartProduct((oldProduct) => [...oldProduct, product]);
        localStorage.setItem('productList', JSON.stringify([...cartProduct]));
    }

    useEffect(() => {
        if(cartProduct.length === 0){
            setCartProduct([product])
        } else {
            setCartProduct((oldProduct) => [...oldProduct, product])
        }
    }, [product]);


    useEffect(() => {
        if(productQuantity <= 1) {
            setCheckNumber(true)
        } else {
            setCheckNumber(false)
        }
    },[productQuantity]);

    return (
        <div className='flex items-center gap-5 my-4'>
            <div className='flex'>
                <button disabled={checkNumber} className='border w-10 h-10 -mr-[1px] duration-150 hover:bg-gray-100' onClick={() => {setProductQuantity(productQuantity - 1)}}>-</button>
                <div className='border p-2 w-10 h-10 text-center'>{productQuantity}</div>
                <button className='border w-10 h-10 -ml-[1px] duration-150 hover:bg-gray-100' onClick={() => {setProductQuantity(productQuantity + 1)}}>+</button>
            </div>
            <div>
                <button className='bg-black text-white px-[15px] h-10 duration-150 hover:text-gray-300' onClick={() => {addToCart(product)}}>Add to Cart</button>
            </div>
        </div>
    )
}
