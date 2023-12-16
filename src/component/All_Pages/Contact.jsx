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
                <div>
                    <div className='relative flex max-lg:flex-col'>
                        <div className='basis-[55%] bg-main-pink px-24 py-36 max-lg:px-16 max-lg:py-16 max-sm:p-6'>
                            <p className='text-3xl font-semibold max-sm:text-2xl'>Get in touch</p>
                            <p className='mt-5 max-sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</p>
                            <div className='flex flex-col gap-3 mt-5'>
                                <p className='underline flex items-center gap-1 max-sm:text-sm'><FaMapMarkerAlt/>123 Fifth Avenue, New York, NY 10160</p>
                                <p className='underline flex items-center gap-1 max-sm:text-sm'><MdMail/>contact@info.com</p>
                                <p className='underline flex items-center gap-1 max-sm:text-sm'><FaPhoneAlt/>9-334-7565-9787</p>
                            </div>
                        </div>
                        <div className='basis-1/2'>
                            <div className='p-12 max-sm:p-6 bg-white shadow-md flex flex-col gap-5 absolute left-1/2 top-1/2 -translate-y-1/2 max-lg:relative max-lg:translate-y-0 max-lg:top-0 max-lg:left-0'>
                                <div className='w-full flex gap-5 max-sm:flex-col'>
                                    <input className='w-full p-[0.75em] border inline-block placeholder:text-sm' type="text" placeholder='First Name'/>
                                    <input className='w-full p-[0.75em] border inline-block placeholder:text-sm' type="text" placeholder='Last Name'/>
                                </div>
                                <input className='w-full p-[0.75em] border placeholder:text-sm' placeholder='Your Email Address...'/>
                                <textarea className='resize-none p-[0.75em] border placeholder:text-sm' placeholder='Message...' rows="5"></textarea>
                                <button className='self-start bg-black py-[10px] px-[20px] text-white'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-10'>
                    <iframe className='w-full h-[450px] border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7102516614277!2d100.6597403748547!3d13.68710268669808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d609431a959bb%3A0x181f483771e2d444!2z4Liq4Lin4LiZ4Lir4Lil4Lin4LiHIOC4oy45!5e1!3m2!1sth!2sth!4v1702749247685!5m2!1sth!2sth" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <FooterSection/>
        </div>
    )
}

export default Contact