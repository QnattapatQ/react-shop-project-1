import React from 'react'
import { FaMinus } from "react-icons/fa6";
import { RxRadiobutton } from "react-icons/rx";

export const DescriptionProduct = () => {
    return (
        <div className=''>
            <div className='relative flex items-center justify-between py-[13px] cursor-pointer'>
                <p className='font-semibold text-sm'>Description</p>
                <p className='font-semibold'><FaMinus /></p>
            </div>
            <hr/>
            <div className='py-4'>
                <p className='uppercase text-sm'>About the Product</p>
                <p className='text-sm text-gray-500 my-3'>Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                        <p><RxRadiobutton/></p>
                        100% Cotton
                    </div>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                        <p><RxRadiobutton/></p>
                        260gsm
                    </div>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                        <p><RxRadiobutton/></p>
                        Breathable Fabric
                    </div>
                </div>
            </div>
            <hr/>
            <div className='py-4'>
                <p className='uppercase text-sm'>Size & Fit</p>
                <div className='flex flex-col mt-3'>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                        <p><RxRadiobutton/></p>
                        Model is wearing size M and is 6'1"
                    </div>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                        <p><RxRadiobutton/></p>
                        Standard fit for a relaxed, easy feel
                    </div>
                </div>
            </div>
            <hr/>
            <div className='py-4'>
                <p className='uppercase text-sm'>Free Delivery & Returns</p>
                <p className='text-sm text-gray-500 my-3'>Free standard delivery on orders over $60.</p>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                        <p><RxRadiobutton/></p>
                        <p>You can return your order for any reason, free of charge, within 30 days</p>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                        <p><RxRadiobutton/></p>
                        We also offer a Free-of-Charge shipping label
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}
