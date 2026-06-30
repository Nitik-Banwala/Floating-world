import React from 'react'
import Icons from './common/Icons'
import { WORLD_DATA } from '@/utils/helper'

const World = () => {
    return (
        <div className='bg-gray pb-17 lg:pb-[189.1px]'>
            <div className='max-w-[1489.1px] gap-8 flex min-[1300px]:flex-row gap-y-20 items-center flex-col w-full mx-auto px-4 pt-20 lg:pt-[261.1px]'>
                <div className=' absolute right-0 z-0 -mt-10 lg:-mt-30'>
                    <Icons icon={'elipsfour'} />
                </div>
                 <div className='z-10 flex min-[755px]:hidden' > 
                    <div className='bg-light-black pt-16.25 pb-15 w-full max-w-[476.1px] flex flex-col shadow-[0px_2px_30px_4px_#0000001A] pl-10.5 pr-10 rounded-3xl '>
                        <div>
                            <div className='rounded-[50px] z-10 bg-white max-w-[181.1px] flex py-3.75 pl-4 flex-row items-center gap-2.75'>
                                <div className='rounded-full bg-light-blue h-3.5 w-3.5'></div>
                                <p className='text-base font-semibold text-black leading-100 '>Slots available</p>
                            </div>
                            <h2 className='text-67 text-white z-10 leading-18 font-bold mt-7 max-w-75 '>
                                Join Floating
                                World
                            </h2>
                        </div>
                        <div>
                            <div className='bg-black pt-5 flex flex-row items-center justify-between px-6.5 pb-7.25 rounded-xl mt-[109.1px]'>
                                <div className='flex flex-col'>
                                    <p className='text-white text-22 font-extrabold leading-100 h-[27.1px]'>Book a 15 min intro call</p>
                                    <p className='text-white mt-2.25 text-lg font-medium leading-6.5 max-w-70 tracking-wide'>Learn how Floatingworld works and how it can help you</p>
                                </div>
                                <Icons icon={'nextarrow'} />
                            </div>
                            <div className='bg-black pt-5 flex flex-row items-center justify-between px-6.5 pb-7.25 rounded-xl mt-[21.1px]'>
                                <div className='flex flex-col'>
                                    <p className='text-white text-22 font-extrabold leading-100 h-[27.1px]'>Book a 15 min intro call</p>
                                    <p className='text-white mt-2.25 text-lg font-medium leading-6.5 max-w-70 tracking-wide'>Learn how Floatingworld works and how it can help you</p>
                                </div>
                                <Icons icon={'nextarrow'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='z-10 hidden min-[755px]:flex' > 
                    <div className='bg-light-black md:pt-16.25 md:pb-15 p-6 w-full min-[1305px]:w-[476.1px] flex min-[1305px]:flex-col flex-row shadow-[0px_2px_30px_4px_#0000001A] md:pl-10.5 md:pr-10 rounded-3xl '>
                        <div>
                            <div className='rounded-[50px] z-10 bg-white max-w-[181.1px] flex py-3.75 pl-4 flex-row items-center gap-2.75'>
                                <div className='rounded-full bg-light-blue h-3.5 w-3.5'></div>
                                <p className='text-base font-semibold text-black leading-100 '>Slots available</p>
                            </div>
                            <h2 className='text-67 text-white z-10 leading-18 font-bold mt-7 max-w-75 '>
                                Join Floating
                                World
                            </h2>
                        </div>
                        <div>
                            <div className='bg-black pt-5 flex flex-row items-center justify-between px-6.5 pb-7.25 rounded-xl min-[1305px]:mt-[109.1px]'>
                                <div className='flex flex-col'>
                                    <p className='text-white text-22 font-extrabold leading-100 h-[27.1px]'>Book a 15 min intro call</p>
                                    <p className='text-white mt-2.25 text-lg font-medium leading-6.5 max-w-70 tracking-wide'>Learn how Floatingworld works and how it can help you</p>
                                </div>
                                <Icons icon={'nextarrow'} />
                            </div>
                            <div className='bg-black pt-5 flex flex-row items-center justify-between px-6.5 pb-7.25 rounded-xl mt-[21.1px]'>
                                <div className='flex flex-col'>
                                    <p className='text-white text-22 font-extrabold leading-100 h-[27.1px]'>Book a 15 min intro call</p>
                                    <p className='text-white mt-2.25 text-lg font-medium leading-6.5 max-w-70 tracking-wide'>Learn how Floatingworld works and how it can help you</p>
                                </div>
                                <Icons icon={'nextarrow'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white z-10 rounded-3xl pt-[49.1px] sm:pb-[61.1px] min-[1305]:max-w-[981.1px] w-full p-6 sm:px-13.5'>
                    <p className='md:text-51 text-4xl font-bold leading-100 text-black'>Memberships</p>
                    <div className='max-w-[264.1px] flex flex-row items-center gap-4.25 w-full mt-9 bg-black p-0.75 h-[42.1px] rounded-[50px]'>
                        <div className='bg-light-blue w-[130.1px] flex justify-center items-center  h-full rounded-[50px]'>
                            <p className='text-base font-semibold leading-100 text-white'>Basic</p>
                        </div>
                        <p className='text-base font-semibold leading-100 text-white'>Advanced</p>
                    </div>
                    <p className='text-5xl font-bold mt-6 leading-20.5'>$600/m</p>
                    <p className='font-medium text-xl text-black mt-3.5 leading-100'>Pause or cancel anytime</p>
                    <hr className='mt-9 mb-9.5 bg-black' />
                    <p className='text-22 text-black mb-5.25 font-semibold leading-100'>Whats included</p>
                    <div className='grid min-[790px]:grid-cols-2 grid-cols-1 ml-4'>
                        {WORLD_DATA.map((item, index) => {
                            return (
                                <div key={index}>
                                    <li className=' text-base max-w-80 2xl:max-w-100 2xl:text-xl font-medium leading-9.5'>{item}</li>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <button className='bg-[linear-gradient(180deg,#000000_0%,#393939_100%)] hover:shadow-2xl hover:text-red-500 cursor-pointer border rounded-2xl py-4.75 px-11.25 mt-11 text-xl hover:mt-10 duration-500 shadow-[0px_2px_10px_0px_#00000029] font-semibold text-white border-black'>Book a call</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default World
