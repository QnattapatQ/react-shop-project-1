import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize';
import FlexCenterBetween, { FlexCenter } from '../../../public/Flex';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/Ai';

const Header = () => {

    const menuLists = [{
        menuName: 'Buy T-Shirts',
        href: '#'
    },{
        menuName: 'Women',
        href: '#'
    },{
        menuName: 'Men',
        href: '#'
    },{
        menuName: 'About',
        href: '#'
    },{
        menuName: 'Contact',
        href: '#'
    },];

    return (
       <div className='border'>
            <ResponsiveSize className='px-8 py-4'>
                <FlexCenterBetween>
                    <div>
                        <a href="#">
                            <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/logo-regular.png" alt="" />
                        </a>
                    </div>
                    <div className=''>
                        <ul className='flex gap-[1em]'>
                            {menuLists.map((menu, index) => (
                                <li key={index}><a href={menu.href}>{menu.menuName}</a></li>
                            ))}
                        </ul>
                    </div>
                    <FlexCenter className='gap-8'>
                        <button><AiOutlineSearch/></button>
                        <p>$0.00</p>
                        <div className='relative'>
                            <AiOutlineShoppingCart className='text-[1.5rem] '/>
                            <FlexCenter className='absolute bg-black text-white w-4 h-4 rounded-full text-[12px] font-semibold top-[-8px] right-[-8px] p-2'>0</FlexCenter>
                        </div>
                        <a href="#">Login</a>
                    </FlexCenter>
                </FlexCenterBetween>
            </ResponsiveSize>
       </div>
    )
}

export default Header