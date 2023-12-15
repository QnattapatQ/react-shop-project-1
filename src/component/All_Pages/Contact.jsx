import React from 'react'
import Header from '../Header/Header'
import { FooterSection } from '../FooterSection/FooterSection'
import ResponsiveSize from '../../../public/ResonsiveSize'
import SmallText, { BoldText } from '../../../public/HeaderText'
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <Header/>
            <div className='px-8'>
                <ResponsiveSize>
                    <div>
                        <div className='flex items-center justify-center flex-col max-w-[740px] w-full mx-auto pt-7'>
                            <div className='relative text-center inline-block'>
                                <h1 className='text-[55px] font-semibold max-sm:text-4xl'>Contact</h1>
                                <span className='absolute w-14 h-[2px] bg-black bottom-0 right-2/4 translate-x-2/4'></span>
                            </div>
                            <div className='text-center mt-5'>
                                <p className='font-medium mb-7'>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</p>
                            </div>
                        </div>
                    </div>
                </ResponsiveSize>
                <div className='relative flex'>
                    <div className='basis-1/2 bg-main-pink p-12'>
                        <BoldText>Get in touch</BoldText>
                        <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</p>
                        <div className='flex flex-col gap-3 mt-5'>
                            <p className='underline flex items-center gap-1'><FaMapMarkerAlt/>123 Fifth Avenue, New York, NY 10160</p>
                            <p className='underline flex items-center gap-1'><MdMail/>contact@info.com</p>
                            <p className='underline flex items-center gap-1'><FaPhoneAlt/>9-334-7565-9787</p>
                        </div>
                    </div>
                    <div className='basis-1/2 bg-green-500'>
                        <div className='p-12 bg-red-500 flex flex-col gap-5 absolute'>
                            <div className='w-full flex gap-5'>
                                <input className='w-full p-[0.75em] border inline-block placeholder:text-sm' type="text" placeholder='First Name'/>
                                <input className='w-full p-[0.75em] border inline-block placeholder:text-sm' type="text" placeholder='Last Name'/>
                            </div>
                            <input className='w-full p-[0.75em] border placeholder:text-sm' placeholder='Your Email Address...'/>
                            <textarea className='resize-none p-[0.75em] border placeholder:text-sm' placeholder='Message...' rows="5"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection/>
        </div>
    )
}

export default Contact