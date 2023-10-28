import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/Ai';
import { SizeWidth } from '../../App';
import { useContext } from 'react';

export const MenuSlide = ({ toggleOpen, setToggleOpen }) => {

    const menuLists = [{
        menuName: 'Buy T-Shirts',
        href: '#',
        boderStyles: true,
    },{
        menuName: 'Women',
        href: '#',
        boderStyles: true,
    },{
        menuName: 'Men',
        href: '#',
        boderStyles: true,
    },{
        menuName: 'About',
        href: '#',
        boderStyles: true,
    },{
        menuName: 'Contact',
        href: '#',
        boderStyles: false,
    },];

    const widthDetail = useContext(SizeWidth);

    useEffect(() => {
        if(widthDetail > 1024) {
            setToggleOpen(false)
        }
    }, [widthDetail]);

    return (
        <div className={`${toggleOpen && widthDetail <= 1024 ? 'translate-x-[0] visible opacity-100' : 'translate-x-[100%] opacity-0 invisible'} z-40 fixed inset-0 duration-300 bg-gray-100`}>
            <div className='absolute right-5 top-5'>
                <button className='flex justify-center items-center'><AiOutlineClose onClick={() => {setToggleOpen(!toggleOpen)}} className='text-[1.5rem]'/></button>
            </div>
            <div className='relative'>
                <div className='mt-16 relative'>
                    <ul>
                        {menuLists.map((menu, index) => (
                            <li className={`${menu.boderStyles ? 'border-t' : 'border'} p-4 cursor-pointer duration-200 hover:bg-white bg-[#faedeb] border-[rgba(224,214,213,0.48)]`} key={index}><a href={menu.href}>{menu.menuName}</a></li>
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
