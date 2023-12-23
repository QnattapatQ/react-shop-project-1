import React from 'react'
import ResponsiveSize from '../../../public/ResonsiveSize'
import SmallText from '../../../public/HeaderText'
import gsap, { Bounce } from 'gsap'
import { useGSAP } from '@gsap/react'

export const HeroSection = () => {

    useGSAP(() => {
        gsap.from(".hero-txt", {
            opacity: 0,
            y: 100,
            duration: 1
        });

        gsap.from(".hero-img", {
            opacity: 0,
            x: 150,
            scale: 0.5,
            duration: 1,
            ease: "power1.inOut"
        });
    });

    return (
        <div className='bg-main-pink'>
            <div className='px-8 h-full'>
                <ResponsiveSize>
                    <div className='flex h-full max-md:flex-col bg-main-pink'>
                        <div className='basis-6/12 flex items-center py-[55px]'>
                            <div className='hero-txt w-full max-md:text-center'>
                                <div className='mb-[10px]'>
                                    <SmallText>Women</SmallText>
                                </div>
                                <div className='mb-10'>
                                    <h1 className='text-[3.5rem] max-lg:text-[3rem] text-black max-md:text-[2.5rem] font-semibold leading-[1em]'>Slick. Modern. <span className='block max-md:inline-block'>Awesome.</span></h1>
                                </div>
                                <div>
                                    <a className='bg-black text-white text-sm py-3 px-5 duration-200 border font-medium rounded border-black hover:text-zinc-300' href="#">Shop Collection</a>
                                </div>
                            </div>
                        </div>
                        <div className='basis-6/12 h-full'>
                            <div className='bg-contain h-full w-full max-md:w-[70%] mx-auto bg-center bg-no-repeat bg-[url(https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero-bg.png)]'>
                                <div className='hero-img'>
                                    <a href="#"><img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero.png" alt="" /></a>
                                </div>
                            </div>
                        </div>  
                    </div>
                </ResponsiveSize>
            </div>
        </div>
    )
}
