import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/Ai';
import { SizeWidth } from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const MenuSlide = ({ toggleOpen, setToggleOpen }) => {

    const menuLists = [{
        menuName: 'Buy T-Shirts',
        href: '/shop',
        boderStyles: true,
    },{
        menuName: 'Women',
        href: '/women',
        boderStyles: true,
    },{
        menuName: 'Men',
        href: '/men',
        boderStyles: true,
    },{
        menuName: 'About',
        href: '/about',
        boderStyles: true,
    },{
        menuName: 'Contact',
        href: '/contact',
        boderStyles: false,
    },];

    const [mobileSize, setMobileSize] = useState(false);

    const widthDetail = useContext(SizeWidth);

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
        } else {
            setMobileSize(false);
        }

        return () => {
            window.removeEventListener('resize', detechSize);
        }

    },[desktopSize]);

    useEffect(() => {
        if(widthDetail > 1024) {
            setToggleOpen(false)
        }
    }, [widthDetail]);

    return (
        <div className={`${toggleOpen && desktopSize.winWidth <= 1024 ? 'translate-x-[0] visible opacity-100' : 'translate-x-[100%] opacity-0 invisible'} z-40 fixed inset-0 duration-300 bg-gray-100`}>
            <div className='absolute right-5 top-5'>
                <button className='flex justify-center items-center'><AiOutlineClose onClick={() => {setToggleOpen(!toggleOpen)}} className='text-[1.5rem]'/></button>
            </div>
            <div className='relative'>
                <div className='mt-16 relative'>
                    <ul>
                        {menuLists.map((menu, index) => (
                            <li className={`${menu.boderStyles ? 'border-t' : 'border'} p-4 cursor-pointer w-full duration-200 hover:bg-white bg-[#faedeb] border-[rgba(224,214,213,0.48)]`} key={index}><Link className='w-full block' to={menu.href}>{menu.menuName}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className='mt-5 p-4'>
                    <a className='bg-black text-white p-2 px-5 border border-black rounded-md font-medium duration-200 hover:bg-white hover:text-black' href="#">Login</a>
                </div>
            </div>
        </div>
    )
}
