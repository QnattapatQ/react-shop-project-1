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
            <div className='relative w-full p-[7%] my-12 max-lg:bg-local bg-fixed bg-cover bg-center bg-no-repeat bg-[url(https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/bg-02.jpg)]'>
                <div className='absolute bg-[rgba(0,0,0,0.4)] inset-0'></div>
                <div className='flex items-center justify-center h-full'>
                    <div className='z-10'>
                        <ResponsiveSize>
                            <div className='flex gap-6 z-10 max-lg:flex-col scroll-px-48'>
                                <div className='flex justify-center flex-col basis-1/2 max-lg:basis-full '>
                                    <p className='text-white mb-2'>THE MISSION</p>
                                    <h2 className='text-white text-4xl font-semibold pr-[20%] mb-5 max-md:text-3xl'>At the heart of <br/> everything, we set out to offer the best quality.</h2>
                                    <span className='w-[50px] h-[2px] bg-white'></span>
                                </div>
                                <div className='flex flex-col basis-1/2 max-lg:basis-full'>
                                    <p className='text-white text-xl font-semibold max-sm:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non 
                                        eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Aenean placerat 
                                        facilisis ex, eu laoreet lorem convallis.
                                    </p>

                                    <p className='text-white text-xl font-semibold mt-5 max-sm:text-lg'>Fusce gravida justo a lectus tempus lacinia. Ut mollis 
                                    scelerisque ultricies. Aenean facilisis efficitur magna, at feugiat massa bibendum at.
                                    Etiam ut venenatis urna.
                                    </p>
                                </div>
                            </div>
                        </ResponsiveSize>
                    </div>
                </div>
            </div>
            <ResponsiveSize>
                <div className='mb-36'>
                    <div className='flex items-center justify-center flex-col max-w-[740px] w-full mx-auto pt-7'>
                        <div className='relative text-center inline-block'>
                            <h1 className='text-[36px] font-semibold max-sm:text-4xl'>How it Started</h1>
                            <span className='absolute w-14 h-[2px] bg-black bottom-0 right-2/4 translate-x-2/4'></span>
                        </div>
                        <div className='text-center mt-5'>
                            <p className='text-gray-500 mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                    </div>
                    <div className='flex max-lg:flex-col'>
                        <div className='basis-1/2 p-[75px] bg-main-pink max-lg:basis-full'>
                            <h1 className='text-[36px] font-semibold max-sm:text-4xl mb-5'>Vel mauris molestie dignissim</h1>
                            <p className='mb-5 font-semibold'>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</p>
                            <p className='text-sm'>Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus. Maecenas et odio 
                                id turpis sollicitudin pulvinar sit amet vitae augue. Phasellus nec ultricies arcu. Quisque 
                                efficitur tellus sit amet bibendum molestie. Duis id egestas odio. Phasellus lacinia ex quis 
                                faucibus tempor. Sed feugia.
                            </p>
                        </div>
                        <div className='basis-1/2 bg-[url(https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/about-01.jpg)] bg-cover bg-center bg-no-repeat max-lg:basis-full'>
                            
                        </div>
                    </div>
                </div>
            </ResponsiveSize>
            <FooterSection/>
        </div>
    )
}

export default About