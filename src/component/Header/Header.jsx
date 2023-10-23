import React, { useContext, useState } from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize';
import FlexCenterBetween, { FlexCenter } from '../../../public/Flex';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/Ai';
import { GiHamburgerMenu } from 'react-icons/Gi';
import { SizeWidth } from '../../App';
import { MobileMenuShow } from '../../App';
import { MenuSlide } from './MenuSlide';
import { SearchSection } from './SearchSection';

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

    const mobileResponse = useContext(MobileMenuShow);

    const [toggleOpen, setToggleOpen] = useState(false);

    const [openSearch, setOpenSearch] = useState(false);

    return (
       <div className='border'>
            <ResponsiveSize className='px-8 py-4'>
                <FlexCenterBetween>
                    <div className='flex justify-between items-center basis-[65%]'>
                        <div className='max-sm:w-24'>
                            <a href="#">
                                <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/logo-regular.png" alt="" />
                            </a>
                        </div>
                        <div className={`${mobileResponse ? 'hidden' : 'block'}`}>
                            <ul className='flex gap-[1em] relative'>
                                {menuLists.map((menu, index) => (
                                    <li className='' key={index}><a href={menu.href}>{menu.menuName}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <FlexCenter className='gap-8 max-sm:gap-5'>
                        <button><AiOutlineSearch className='text-[1.5rem]' onClick={() => {setOpenSearch(!openSearch)}}/></button>
                        <p>$0.00</p>
                        <div className='relative'>
                            <AiOutlineShoppingCart className='text-[1.5rem] cursor-pointer'/>
                            <FlexCenter className='absolute bg-black text-white w-4 h-4 rounded-full text-[12px] font-semibold top-[-8px] right-[-8px] p-2'>0</FlexCenter>
                        </div>
                        <div>
                            <a className={`${mobileResponse ? 'hidden' : 'block'} bg-black text-white p-2 border border-white rounded-md font-medium duration-200 hover:bg-white hover:text-black hover:border-black`} href="#">Login</a>
                            <GiHamburgerMenu onClick={() => {setToggleOpen(!toggleOpen)}} className={`${mobileResponse ? 'block' : 'hidden'} text-[1.5rem] cursor-pointer`}/>
                        </div>
                    </FlexCenter>
                </FlexCenterBetween>
            </ResponsiveSize>
            <MenuSlide toggleOpen={toggleOpen} setToggleOpen={setToggleOpen}/>
            <SearchSection openSearch={openSearch} setOpenSearch={setOpenSearch}/>
       </div>
    )
}

export default Header