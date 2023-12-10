import React from 'react'
import Header from '../Header/Header'
import { FooterSection } from '../FooterSection/FooterSection'
import ResponsiveSize from '../../../public/ResonsiveSize'

const About = () => {
    return (
        <div>
            <Header/>
            <div className='px-8'>
                <ResponsiveSize>
                    <div className='flex items-center justify-center'>
                        <div className='relative text-center inline-block'>
                            <h1 className='text-[55px] font-semibold'>About</h1>
                            <span className='absolute w-14 h-[2px] bg-black bottom-0 right-2/4 translate-x-2/4'></span>
                        </div>
                    </div>
                </ResponsiveSize>
            </div>
            <FooterSection/>
        </div>
    )
}

export default About