import React, { useContext, useState, useEffect } from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize';
import FlexCenterBetween, { FlexCenter } from '../../../public/Flex';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/Ai';
import { GiHamburgerMenu } from 'react-icons/Gi';
// import { MobileMenuShow } from '../../App';
import { MenuSlide } from './MenuSlide';
import { SearchSection } from './SearchSection';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuLists = [{
        menuName: 'Buy T-Shirts',
        href: '/shop'
    },{
        menuName: 'Women',
        href: '/women'
    },{
        menuName: 'Men',
        href: '/men'
    },{
        menuName: 'About',
        href: '/about'
    },{
        menuName: 'Contact',
        href: '/contact'
    },];

    // const mobileResponse = useContext(MobileMenuShow);

    const [toggleOpen, setToggleOpen] = useState(false);

    const [openSearch, setOpenSearch] = useState(false);

    const [fixedHeader, setFixedHeader] = useState(false);

    const [scrollDetail, setScrollDetail] = useState({
        scrollDetail: window.scrollY
    })

    const resetScroll = () => {
        setScrollDetail({
            scrollDetail: window.scrollY
        });
    }

    const [mobileSize, setMobileSize] = useState(false);

    const [desktopSize, setDesktopSize] = useState({
        winWidth: window.innerWidth
    })

    const detechSize = () => {
        setDesktopSize({
            winWidth: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detechSize);


        if(desktopSize.winWidth <= 1024){
            setMobileSize(true);
            console.log(mobileSize)
        } else {
            setMobileSize(false);
            console.log(mobileSize)
        }

        return () => {
            window.removeEventListener('resize', detechSize);
        }

    },[desktopSize]);

    useEffect(() => {
        window.addEventListener('scroll', resetScroll);

        if(scrollDetail.scrollDetail > 199) {
            setFixedHeader(true);
        } else {
            setFixedHeader(false);
        }

    },[scrollDetail])

    return (
        <>
            <div className={`${fixedHeader ? 'fixed left-0 w-full right-0 animate-headerFixed' : ''} z-50 duration-300 border px-8 py-4 bg-white`}>
                    <ResponsiveSize className=''>
                        <FlexCenterBetween>
                            <div className='flex justify-between items-center basis-[65%]'>
                                <div className='max-sm:w-24'>
                                    <Link to="/">
                                        <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/logo-regular.png" alt="" />
                                    </Link>
                                </div>
                                <div className={`${mobileSize ? 'hidden' : 'block'}`}>
                                    <ul className='flex gap-[1em]'>
                                        {menuLists.map((menu, index) => (
                                            <li className='relative py-2 duration-200' key={index}>
                                                <div className='duration-200 ease-in after:absolute after:h-[1px] after:w-0 after:bottom-0 after:bg-black after:left-0 hover:after:w-full hover:after:right-0'>
                                                    <a className='text-black' href={menu.href}>{menu.menuName}</a>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <FlexCenter className='gap-8 max-sm:gap-5'>
                                <button><AiOutlineSearch className='text-[1.5rem] text-black' onClick={() => {setOpenSearch(!openSearch)}}/></button>
                                <p className='text-black'>$0.00</p>
                                <div className='relative'>
                                    <AiOutlineShoppingCart className='text-[1.5rem] cursor-pointer text-black'/>
                                    <FlexCenter className='absolute bg-black text-white w-4 h-4 rounded-full text-[12px] font-semibold top-[-8px] right-[-8px] p-2'>0</FlexCenter>
                                </div>
                                <div>
                                    <a className={`${mobileSize ? 'hidden' : 'block'} bg-black text-white p-2 border border-white rounded-md font-medium duration-200 hover:bg-white hover:text-black hover:border-black`} href="#">Login</a>
                                    <GiHamburgerMenu onClick={() => {setToggleOpen(!toggleOpen)}} className={`${mobileSize ? 'block' : 'hidden'} text-black text-[1.5rem] cursor-pointer`}/>
                                </div>
                            </FlexCenter>
                        </FlexCenterBetween>
                    </ResponsiveSize>
            </div>
            <MenuSlide toggleOpen={toggleOpen} setToggleOpen={setToggleOpen}/>
            <SearchSection openSearch={openSearch} setOpenSearch={setOpenSearch}/>
        </>    
    )
}

export default Header