import React from 'react';
import ResponsiveSize from '../../../public/ResonsiveSize';
import { Link } from 'react-router-dom';
import SmallText from '../../../public/HeaderText';
import womenProduct from './womenProduct.js';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import PuffLoader from "react-spinners/PuffLoader";

const WomenProduct = () => {

    const [sortProduct, setSortProduct] = useState(womenProduct);
    const [selectValue, setSelectValue] = useState('default');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const sortData = () => {
            if(selectValue === 'default'){
                setSortProduct(
                    ...womenProduct.sort((a, b) => a.number - b.number)
                );

            } else if(selectValue === 'popularity' || selectValue === 'latest'){
                setSortProduct(
                    ...womenProduct.sort((a, b) => b.number - a.number)
                );
            } else if(selectValue === 'lowtohigh'){
                setSortProduct(
                    ...womenProduct.sort((a, b) => a.lowPrice - b.lowPrice)
                );
            } else if(selectValue === 'hightolow'){
                setSortProduct(
                    ...womenProduct.sort((a, b) => b.lowPrice - a.lowPrice)
                );
            }
        };
        sortData();
    },[selectValue, sortProduct, loading]);

    useEffect(() => {
        showLoading();
    },[selectValue]);

    const showLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1200);
    };

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
                                <select onChange={(e) => {setSelectValue(e.target.value)}} defaultValue={selectValue} className="select select-bordered w-full max-w-xs">
                                    <option value="default">Default sorting</option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="latest">Sort by latest</option>
                                    <option value="lowtohigh">Sort by price:low to high</option>
                                    <option value="hightolow">Sort by price:high to low</option>
                                </select>
                            </div>
                        </div>
                        {loading ? (
                            <div className='min-h-[100vh] flex items-center justify-center'>
                                <PuffLoader color="#ffa599" />
                            </div>
                        ) : (
                            <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-7 mb-10 mt-10'>
                            {womenProduct.map((data, index) => (
                                <div className={`${loading ? '' : 'animate-productScale'} relative overflow-hidden group/img group/option`} key={index}>
                                    <div className='relative'>
                                        <Link to={`/product/${data.id}`}><img className='w-full duration-500 group-hover/img:opacity-0' src={data.productTeaser} alt="" /></Link>
                                        <Link to={`/product/${data.id}`} className='absolute inset-0 z-[-1] duration-500 opacity-0 group-hover/img:opacity-100 group-hover/img:z-10'><img className='w-full h-full' src={data.realProduct} alt="" /></Link>
                                        <div>
                                            <button 
                                                className='tooltip tooltip-left absolute z-20 right-5 shadow-md top-5 w-7 h-7 opacity-0 duration-300
                                                 bg-white rounded-full flex items-center justify-center group-hover/option:opacity-100' 
                                                href="#"
                                                data-tip='Select Options'
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
                        )}
                    </div>
                </div>
            </ResponsiveSize>
        </div>
    )
}

export default WomenProduct