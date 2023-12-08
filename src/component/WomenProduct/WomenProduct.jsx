import React from 'react';
import ResponsiveSize from '../../../public/ResonsiveSize';
import { Link } from 'react-router-dom';
import SmallText from '../../../public/HeaderText';
import womenProduct from './womenProduct.js';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

const WomenProduct = () => {
    return (
        <div className='px-8 pt-12'>
            <ResponsiveSize>
                <div>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link to="/">Home</Link></li> 
                            <li><Link to="/women">Women</Link></li> 
                        </ul>
                    </div>
                    <h1 className='text-[55px] font-normal'>Women</h1>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <SmallText>Show all 5 results</SmallText>
                            <div>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option>Default sorting</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by latest</option>
                                    <option>Sort by price:low to high</option>
                                    <option>Sort by price:high to low</option>
                                </select>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-7 mb-10 mt-10'>
                            {womenProduct.map((data, index) => (
                                <div className='relative overflow-hidden group/img group/option' onClick={() => {setSaveProduct(data)}} key={index}>
                                    <div className='relative' onClick={() => {setSaveProduct(data)}}>
                                        <Link to={`/product/${data.id}`} onClick={() => {setSaveProduct(data)}}><img className='w-full duration-500 group-hover/img:opacity-0' src={data.productTeaser} alt="" /></Link>
                                        <Link to={`/product/${data.id}`} onClick={() => {setSaveProduct(data)}} className='absolute inset-0 z-[-1] duration-500 opacity-0 group-hover/img:opacity-100 group-hover/img:z-10'><img className='w-full h-full' src={data.realProduct} alt="" /></Link>
                                        <div>
                                            <button 
                                                className='tooltip tooltip-left absolute z-20 right-5 shadow-md top-5 w-7 h-7 opacity-0 duration-300
                                                bg-white rounded-full flex items-center justify-center group-hover/option:opacity-100' 
                                                href="#"
                                                data-tip='Select Options'
                                                onClick={() => {setSaveProduct(data)}}
                                            >
                                                <FaShoppingCart className='text-black'/>
                                            </button>
                                            <Link 
                                                className='tooltip tooltip-left absolute z-20 right-5 shadow-md top-[65px] w-7 h-7 opacity-0 duration-300
                                                bg-white rounded-full flex items-center justify-center group-hover/option:opacity-100' 
                                                to={`/product/${data.id}`}
                                                data-tip='View Product'
                                            >
                                                <BsFillEyeFill className='text-black'/>
                                            </Link>
                                        </div>
                                    </div>
                                    { data.discount && (
                                        <div className='absolute left-5 top-5 z-20 bg-white p-[6px] shadow-md rounded-full'>
                                            <p className='text-xs text-black'>{data.discountPrice.price}</p>
                                        </div>
                                    )}
                                    <Link to={`/product/${data.id}`}>
                                        <div className='p-2'>
                                            <SmallText className='mb-1'>{data.gender}</SmallText>
                                            <h2 className='text-black font-semibold mb-1 '>{data.productName}</h2>
                                            <p className='text-black text-xs font-medium'>{data.price}</p>
                                        </div>     
                                    </Link> 
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ResponsiveSize>
        </div>
    )
}

export default WomenProduct