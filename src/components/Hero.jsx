import Image from 'next/image'
import React from 'react'
import Icons from './common/Icons'
import { SLIDER_DATA } from '@/utils/helper'
import Navbar from './common/Navbar'
import Link from 'next/link'

const Hero = () => {
    return (
        <div>
            <div className='max-w-[1728.1px] px-4 mx-auto w-full flex pt-5 pb-4.5 justify-center' >
                <Link href="/">
                    <Image
                        src={'/assets/images/logo.png'}
                        height={53}
                        width={222}
                        alt='image'
                    />
                </Link>
            </div>
            <div className=' px-4 md:pt-[134.1px] pt-[75.1px] items-center flex flex-col md:pb-[117.1px] pb-[57.1px] bg-light-blue'>
                <div className="absolute hidden min-[1300px]:flex z-10 -mt-24 left-33 animate-[spin_8s_linear_infinite] [animation-direction:forword]">
                    <Icons icon={"elipstwo"} />
                </div>
                <div className=' hidden min-[1300px]:flex absolute z-0 left-0'>
                    <Icons icon={'elipsone'} />
                </div>
                <div className=' hidden min-[1300px]:flex absolute z-0 mt-20 right-0'>
                    <Icons icon={'elipsthree'} />
                </div>
                <h1 className='font-bold lg:text-100 md:text-8xl sm:text text-5xl text-center lg:leading-26 leading-14 text-white max-w-200'>Scale & grow with ease</h1>
                <p className='mt-3.25 text-white text-26 text-center font-medium leading-100'>Monthly web maintenance packages for businesses. Cancel anytime</p>
                <div className='h-[107.1px]'>
                    <button className='bg-[linear-gradient(180deg,#000000_0%,#393939_100%)] hover:shadow-2xl hover:text-red-500 cursor-pointer border rounded-2xl py-4.75 px-12.75 mt-10 text-xl hover:mt-9 duration-500 shadow-[0px_2px_10px_0px_#00000029] font-semibold text-white border-black'>See Plans </button>
                </div>
                <div className='mt-5.25 flex flex-row gap-3.25 items-center'>
                    <Icons icon={'dote'} />
                    <p className='font-medium text-xs text-white'>Available now</p>
                </div>
            </div>
            <div className="overflow-hidden w-full">
                <div className="flex items-center mt-5 animate-marquee whitespace-nowrap">
                    {[...SLIDER_DATA, ...SLIDER_DATA].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center shrink-0 mx-6"
                        >
                            <Icons icon={"square"} />
                            <Image
                                src={item}
                                height={95}
                                width={249}
                                alt="slider"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    )
}

export default Hero
