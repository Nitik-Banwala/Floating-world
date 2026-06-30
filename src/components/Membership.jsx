import React from 'react'
import { MEMBERSHIP } from '@/utils/helper'
import Icons from './common/Icons'
import Image from 'next/image'

const Membership = () => {
    return (
        <div className='bg-gray'>
            <div className='md:pt-[131.1px] pt-[57.1px] pb-[57.1px] md:pb-[123.1px] flex items-center flex-col px-4 max-w-[1353.1px] mx-auto'>
                <h2 className='font-extrabold lg:text-67 md:text-5xl text-4xl text-center leading-100'>Membership Benefits</h2>
                <div className='lg:grid grid-cols-3 flex flex-row flex-wrap lg:gap-y-21.5 gap-8 lg:justify-between justify-center w-full items-center mt-20'>
                    {MEMBERSHIP.map((item, index) => {
                        return (
                            <div key={index}
                                className='items-center flex flex-col text-center'>

                                <div>
                                    {index === 5 ? (

                                        <Image
                                            src={item.image}
                                            alt="image"
                                            width={133}
                                            height={133}
                                        />
                                    ) : (

                                        <Icons icon={item.icon} />
                                    )}
                                </div>
                                <p className={`${index === 0 ? "mt-12.5" : index === 3 ? "mt-10" : index === 4 ? "mt-6.5" : "mt-[35.1px]"} text-26 leading-100 font-bold text-black`}> {item.heding}</p>
                                <p className='max-w-[300.1px] mt-4.25'>{item.dess}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Membership
