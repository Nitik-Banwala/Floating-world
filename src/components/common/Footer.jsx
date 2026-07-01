import React from 'react'
import { FOOTER_LINKS } from '@/utils/helper'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='bg-gray pt-12 xl:pt-1 2xl:pt-[125.1px] sm:pb-40 pb-10 lg:pb-40 xl:pb-50 2xl:pb-[263.1px]'>
            <div className='max-w-5xl flex px-4 flex-col mx-auto items-center justify-center '>
                <p className='2xl:text-103 xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-3xl font-bold text-black/80 leading-20.5'>Floatingworld Inc.™</p>
                <div className='flex flex-row flex-wrap justify-center mt-5 lg:mt-20.75 gap-10 md:gap-[63.1px]'>
                    {FOOTER_LINKS.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link href="/"
                                className='text-xl font-medium text-black leading-100 hover:underline duration-500 hover:text-light-blue'>
                                    {item}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer
