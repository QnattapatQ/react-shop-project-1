import React from 'react'
import Header from '../Header/Header'
import { FooterSection } from '../FooterSection/FooterSection'
import ResponsiveSize from '../../../public/ResonsiveSize'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CheckOutProduct = () => {

    const productInLocalStorage = JSON.parse(localStorage.getItem('productList')) || [];

    const [productInCart, setProductInCart] = useState([]);

    useEffect(() => {
        setProductInCart(productInLocalStorage);
    }, []);

    const convertToTwoDecimal = (price, count) => {
        let isDecimal = price * count
        return isDecimal.toFixed(2)
    }

    const addProductQuantity = (product) => {
        const findProduct = productInCart.find((data) => data.id === product.id)

        if(findProduct) {
            const updatedQuantity = productInCart.map((data) => data.id === product.id ? { ...data, productCount: data.productCount + 1 } : data );
            setProductInCart(updatedQuantity);
        }

        setTimeout(() => {
            window.location.reload(false);
        }, 1500);
    }

    const removeProductQuantity = (product) => {
        const findProduct = productInCart.find((data) => data.id === product.id)

        if(findProduct) {
            const updatedQuantity = productInCart.map((data) => data.id === product.id ? { ...data, productCount: data.productCount - 1 } : data );
            setProductInCart(updatedQuantity);
        }

        if(product.productCount < 1) {
            const updatedQuantity = productInCart.map((data) => data.id === product.id ? { ...data, productCount: 1 } : data );
            setProductInCart(updatedQuantity);
            Swal.fire({
                text: `Do you want to remove a "${product.productName}" from your cart?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
            }).then((result) => {
                if (result.isConfirmed) {
                    const updateCart = productInCart.filter((data) => {
                        if(data.id !== product.id) {
                            return data
                        }
                    });
                    setProductInCart(updateCart);
                  Swal.fire({
                    text: `"${product.productName}" has been removed.`, 
                    timer: 1500, 
                    icon: "success"
                  });
                  setTimeout(() => {
                    window.location.reload(false);
                  }, 1500);
                }
            });
        }
    }

    useEffect(() => {
        localStorage.setItem('productList', JSON.stringify([...productInCart]));
    }, [productInCart]);

    return (
        <div>
            <Header/>
            <ResponsiveSize>
               <div>
                    <div className='flex gap-10 max-lg:flex-col pt-10 pb-20'>
                        <div className='basis-[70%] max-lg:basis-full'>
                            <table className="table-auto w-full border">
                                <thead className='border-b'>
                                    <tr className='p-2'>
                                        <th className='uppercase p-2 text-sm'>Product</th>
                                        <th className='uppercase p-2 text-sm'></th>
                                        <th className='uppercase p-2 text-sm'>Price</th>
                                        <th className='uppercase p-2 text-sm'>Quantity</th>
                                        <th className='uppercase p-2 text-sm'>Total</th>
                                    </tr>
                                </thead>
                                <tbody className='p-4'>
                                    {productInCart.length !== 0 ? 
                                        <>
                                            {productInCart.map((data) => (
                                                <tr className='border-b' key={data.id}> 
                                                    <td className='flex items-center justify-center py-4'>
                                                        <Link to={`/product/${data.id}`}><img className='w-[80px]' src={data.productTeaser} alt="" /></Link>
                                                    </td>
                                                    <td className='text-center py-4'>{data.productName}</td>
                                                    <td className='text-center py-4'>${data.lowPrice.toFixed(2)}</td>
                                                    <td className='py-4'>
                                                        <div className='flex items-center justify-center'>
                                                            <button className='border w-10 h-10 -mr-[1px] duration-150 hover:bg-gray-100' onClick={() => {removeProductQuantity({...data, productCount: data.productCount - 1})}}>-</button>
                                                            <div className='border p-2 w-10 h-10 text-center'>{data.productCount}</div>
                                                            <button className='border w-10 h-10 -ml-[1px] duration-150 hover:bg-gray-100' onClick={() => {addProductQuantity({...data, productCount: data.productCount + 1})}}>+</button>
                                                        </div>
                                                    </td>
                                                    <td className='text-center py-4'>{'$' + convertToTwoDecimal(data.lowPrice, data.productCount)}</td>
                                                </tr>
                                            ))}
                                        </>    
                                        : 
                                        <>
                                            <tr>
                                                <td className='p-5 text-center' colSpan={5}>
                                                    <div className='h-full text-center'>
                                                        <p>No Product in your Cart...</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    }
                                </tbody>
                            </table>
                            <div className='w-full p-5 border-x border-b'>
                                <div className='flex items-stretch justify-between w-full'>
                                    <div className='flex items-stretch'>
                                        <input className='border rounded-full py-2.5 px-3.5 outline-none placeholder:text-sm' placeholder='Coupon Code...' type="text" />
                                        <button className='ml-5 border bg-gray-100 uppercase py-2.5 px-3.5 rounded-full text-sm font-medium duration-300 hover:bg-gray-200'>Apply Coupon</button>
                                    </div>
                                    <Link className='border bg-gray-100 uppercase py-2.5 px-3.5 leading-2 rounded-full h-full text-sm font-medium duration-300 hover:bg-gray-200' to='/shop'>Go to Shopping</Link>
                                </div>
                            </div>
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