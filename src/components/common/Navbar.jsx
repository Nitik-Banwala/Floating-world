import React from 'react'
import { DATA } from '@/utils/helper'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <section className='max-sm:hidden fixed bottom-1 left-1/2 -translate-x-1/2 z-50'>
            <div className='bg-[linear-gradient(177.56deg,#131414_2.37%,#424242_97.81%)] rounded-[86px] border-2 border-black py-2.75 pl-2.75 flex items-center gap-4 sm:gap-7.5 min-w-100 sm:min-w-161'>
                <Link href="/">
                    <div className='sm:w-16.25 w-12 sm:h-16.25 h-12 rounded-full bg-white flex items-center justify-center shrink-0'>
                        <Image src="/assets/images/navlogo.png"
                            height={42}
                            width={40}
                            alt="logo-img"
                            className='sm:w-10.5 w-8 sm:h-11 h-8' />
                    </div>
                </Link>
                <ul className='flex items-center gap-4 sm:gap-9.75 text-white font-medium text-xs sm:text-base leading-100 whitespace-nowrap'>
                    {DATA.map((item, index) => (
                        <Link href="/" key={index} className=' cursor-pointer transition-all duration-500 hover:text-red-500'>
                            {item}
                        </Link>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Navbar
