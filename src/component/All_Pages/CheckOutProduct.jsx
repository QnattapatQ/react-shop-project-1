import React from 'react'
import Header from '../Header/Header'
import { FooterSection } from '../FooterSection/FooterSection'
import ResponsiveSize from '../../../public/ResonsiveSize'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const CheckOutProduct = () => {

    const productInLocalStorage = JSON.parse(localStorage.getItem('productList')) || [];

    const [productInCart, setProductInCart] = useState([]);
    const [productQuantity, setProductQuantity] = useState(1);
    const [checkNumber, setCheckNumber] = useState(false);

    useEffect(() => {
        if(productQuantity <= 1) {
            setCheckNumber(true)
        } else {
            setCheckNumber(false)
        }
    },[productQuantity]);

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
    }

    const removeProductQuantity = (product) => {
        const findProduct = productInCart.find((data) => data.id === product.id)

        if(findProduct) {
            const updatedQuantity = productInCart.map((data) => data.id === product.id ? { ...data, productCount: data.productCount - 1 } : data );
            setProductInCart(updatedQuantity);
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
                                                    <div>
                                                        <p className='mb-2'>No Product</p>
                                                        <Link className='underline text-sm' to='/shop'>Go to Shopping</Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    }
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