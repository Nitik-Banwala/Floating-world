import React from 'react'
import Icons from './common/Icons'
import Button from './common/Button'
import { CARD_DATA } from '@/utils/helper'

const Plans = () => {
    return (
        <div className='bg-gray '>
            <div className='flex mx-auto items-center px-4 flex-col max-w-[1730.1px] w-full md:pt-[138.1px] pt-[57.1px] md:pb-[151.1px] pb-[97.1px]'>
                <h2 className='text-center flex lg:text-67 md:text-5xl text-4xl w-full mx-auto max-w-210 font-extrabold leading-10 lg:leading-19.25'>We didn’t reinvent the wheel. Just web support</h2>
                <p className='mt-5.5 text-26 font-medium text-center leading-100'>Expert Website Scaling, Maintenance, & AI Integration </p>
                <div className='flex flex-row gap-4 flex-wrap justify-center mt-17.5 max-w-[1380.1px] w-full min-[1100px]:justify-between mx-auto'>
                    {CARD_DATA.map((item, index) => {
                        return (
                            <div key={index}
                            className='flex flex-col items-center'>
                                <Icons icon={item.Icons} />
                                <p className={` ${index === 2 ? " mt-7.5" :" mt-10"} max-w-[345.1px] text-22 items-center text-center`}>{item.para}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='h-[107.1px]'>
                    <Button variant="primary" className="mt-19.5">See Plans</Button>
                </div>
            </div>
        </div>
    )
}

export default Plans
