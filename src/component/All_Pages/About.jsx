import React from 'react'
import Header from '../Header/Header'
import { FooterSection } from '../FooterSection/FooterSection'
import ResponsiveSize from '../../../public/ResonsiveSize'
import SmallText from '../../../public/HeaderText'

const About = () => {
    return (
        <div>
            <Header/>
            <div className='px-8'>
                <ResponsiveSize>
                    <div>
                        <div className='flex items-center justify-center flex-col max-w-[740px] w-full mx-auto pt-7'>
                            <div className='relative text-center inline-block'>
                                <h1 className='text-[55px] font-semibold max-sm:text-4xl'>About</h1>
                                <span className='absolute w-14 h-[2px] bg-black bottom-0 right-2/4 translate-x-2/4'></span>
                            </div>
                            <div className='text-center mt-5'>
                                <p className='font-medium mb-7'>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</p>
                                <p className='text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer 
                                    ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem, interdum tincidunt libero. Nulla vel 
                                    quam lobortis, varius est scelerisque, dapibus nisl.
                                </p>
                            </div>
                        </div>
                    </div>
                </ResponsiveSize>
            </div>
            <div className='relative w-full h-[742px] max-lg:h-[654px] max-lg:bg-local bg-fixed bg-cover bg-center bg-no-repeat bg-[url(https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/bg-01.jpg)]'>
                <div className='flex items-center justify-center h-full'>
                    <div className='flex gap-6'>
                        <div className='flex flex-col basis-1/2'>
                            <p>THE MISSION</p>
                            <h2>At the heart of everything, we set out to offer the best quality.</h2>
                        </div>
                        <div className='flex flex-col basis-1/2'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non 
                                eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Aenean placerat 
                                facilisis ex, eu laoreet lorem convallis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection/>
        </div>
    )
}

export default About