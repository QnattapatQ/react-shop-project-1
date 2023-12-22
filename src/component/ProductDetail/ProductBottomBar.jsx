import React, { useState, useEffect } from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'

export const ProductBottomBar = ({ product }) => {

    const [showProdcutBar, setShowProductBar] = useState(false);

    const [scrollDetail, setScrollDetail] = useState({
        scrollDetail: window.scrollY
    })

    const resetScroll = () => {
        setScrollDetail({
            scrollDetail: window.scrollY
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', resetScroll);

        if(scrollDetail.scrollDetail > 299) {
            setShowProductBar(true);
        } else {
            setShowProductBar(false);
        }

    },[scrollDetail])

    return (
        <div className={`${showProdcutBar ? 'animate-productBarUp opacity-100 visible' : 'bottom-[-100px] opacity-0 invisible'} fixed  bg-white left-0 duration-[0.5s] right-0 bottom-0 z-[20] shadow-[0px_0px_5px_1px_#00000024]`}>
            <ResponsiveSize>
                <div className='py-3 px-8 w-full flex items-center justify-between'>
                    <div>
                        <img className='max-h-14 inline-block' src={product.productTeaser} />
                        <p className='inline-block ml-5 font-semibold'>{product.productName}</p>
                    </div>
                    <div>
                        <p className='text-sm font-semibold inline-block mr-5'>{product.price}</p>
                        <button className='text-white bg-black py-2 px-4 text-sm cursor-pointer duration-150 hover:text-gray-300'>Select Option</button>
                    </div>
                </div>
            </ResponsiveSize>
        </div>
    )
}
