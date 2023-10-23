import React from 'react'
import { AiOutlineClose } from 'react-icons/Ai';
import { FlexCenter } from '../../../public/Flex';
import { AiOutlineSearch } from 'react-icons/Ai';

export const SearchSection = ({ openSearch, setOpenSearch }) => {
    return (
        <div className={`${openSearch ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed inset-0 bg-[rgba(0,0,0,0.85)] duration-200`}>
            <div className='absolute right-10 top-10'>
                <button className='flex justify-center items-center text-white'><AiOutlineClose onClick={() => {setOpenSearch(!openSearch)}} className='text-[2rem]'/></button> 
            </div>
            <FlexCenter className='h-[100vh]'>
                <div className='max-w-[45%] max-lg:max-w-[60%] max-sm:max-w-[65%] duration-200 w-full mx-auto text-center'>
                    <p className='text-white text-xl max-sm:text-[16px] max-[480px]:hidden duration-200'>Start typing and press enter to search</p>
                    <div className='w-full mt-10 h-14 relative'>
                        <input className='w-full bg-transparent px-8 duration-200 text-white text-center text-3xl max-sm:text-2xl border-b-2 border-b-gray-400 outline-none h-full placeholder:text-center placeholder:text-3xl max-sm:placeholder:text-2xl' type="text" placeholder='Search...'/>
                        <AiOutlineSearch className='absolute right-0 top-0 text-[2rem] max-sm:text-[1.5rem] max-sm:top-4 text-gray-400 duration-200'/>
                    </div>
                </div>
            </FlexCenter>
        </div>
    )
}
