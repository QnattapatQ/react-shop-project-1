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
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setProductInCart(productInLocalStorage);
    }, []);

    useEffect(() => {
        localStorage.setItem('productList', JSON.stringify(productInCart));
        calTotalPrice()
    }, [productInCart]);

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

    const calTotalPrice = () => {
        setTotalPrice(0);
        productInCart.forEach((data) => {
            setTotalPrice((priceOfPrevProduct) => priceOfPrevProduct + (data.lowPrice * data.productCount))
        });
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
                                        <th className='uppercase p-4 text-sm'>Product</th>
                                        <th className='uppercase p-4 text-sm'></th>
                                        <th className='uppercase p-4 text-sm'>Price</th>
                                        <th className='uppercase p-4 text-sm'>Quantity</th>
                                        <th className='uppercase p-4 text-sm'>Total</th>
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
                        <div className='basis-[30%] max-lg:basis-full'>
                            <div className='border px-10 py-6'>
                                <p className='uppercase font-semibold text-xl'>Cart Totals</p>
                                <div className='mt-7'>
                                    <div className='pb-4 flex'>
                                        <div className='basis-[30%]'>
                                            <p className='inline-block'>Subtotals:</p>
                                        </div>
                                        <div className='basis-[70%]'>
                                            <p className='inline-block'>{totalPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className='pt-4 flex'>
                                        <div className='basis-[30%]'>
                                            <p className='inline-block'>Shipping:</p>
                                        </div>
                                        <div className='basis-[70%]'>
                                            <p className='inline-block text-gray-400 text-sm'>
                                                There are no shipping methods available. Please double check your address, or contact us if you need any help.
                                            </p>
                                            <div className='mt-5 w-full'>
                                                <p className='text-sm'>CALCULATE SHIPPING</p>
                                                <select className="select select-bordered select-sm w-full mt-2">
                                                    <option selected>Select your country...</option>
                                                    <option>USA</option>
                                                    <option>Thailand</option>
                                                </select>
                                                <div className='flex flex-col gap-4 mt-4'>
                                                    <input className='border p-2 outline-none text-sm' type="text" placeholder='State / Country'/>
                                                    <input className='border p-2 outline-none text-sm' type="text" placeholder='Postcode / Zip'/>
                                                </div>
                                                <button className='w-full mt-5 border bg-gray-100 uppercase py-2.5 px-3.5 rounded-full text-sm font-medium duration-300 hover:bg-gray-200'>Updata Totals</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </ResponsiveSize>
            <FooterSection/>
        </div>
    )
}

export default CheckOutProduct