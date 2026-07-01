import Image from 'next/image'
import React from 'react'
import { DISCRIPTION } from '@/utils/helper'
import Icons from './common/Icons'
import Button from './common/Button'

const Money = () => {
    return (
        <div>
            <div className='bg-white px-4 md:pt-[119.1px] pt-[57.1px] md:pb-[101.1px] pb-[57.1px] text-center max-w-200 w-full flex flex-col mx-auto items-center'>
                <p className='text-22 leading-100 font-medium text-black'>They said it best</p>
                <p className='text-26 font-medium text-black leading-9 mt-16.75'>The bottom line is that Aaron and FloatingWorld Development are a First Class Operation. Candidly,  I would simply never consider switching my website development business anywhere else</p>
                <div className='mt-18.25'>
                    <Image src={'/assets/images/money.png'}
                        width={613}
                        height={118}
                        alt='money'
                    />
                </div>
            </div>
            <div className='bg-gray'>
                <div className='text-center px-4 md:pt-[110.1px] pt-[57.1px] md:pb-[119.1px] pb-[97.1px] max-w-173 w-full flex flex-col mx-auto items-center'>
                    <h1 className='lg:text-67 md:text-5xl text-4xl text-black/80 font-extrabold leading-10 lg:leading-18.25 max-w-150 '>It’s “you’ll never go back” better</h1>
                    <p className='text-26 font-medium text-black leading-9 mt-8.25'>Floatingworld replaces unreliable freelancers and expensive agencies for one flat monthly fee, with unwavering (fanatical?) support that will blow your mind.</p>
                    <div className='h-[107.1px]'>
                        <Button variant="primary" className="mt-17.5">See Plans</Button>
                    </div>
                </div>
            </div>
            <div className=' max-w-124 flex -mt-25 px-4 justify-end w-full mx-auto'>
                <Icons icon={'downarrows'} />
            </div>
            <div className='bg-white flex lg:items-center px-4 lg:flex-row flex-col gap-10 pt-9 justify-between lg:gap-4 md:pb-[138.1px] pb-[57.1px] max-w-[1235.1] mx-auto w-full'>
                <div className='min-[1190px]:pt-[67.1px] pt-6 flex flex-col rounded-3xl shadow-[0px_2px_30px_4px_#0000001A] min-[1190px]:pb-[56.1px] pb-6 min-[1190px]:pl-[58.1px] pl-6 max-w-[602.1px] w-full pr-6 min-[1190px]:pr-[39.1px]'>
                    <p className='max-w-[470.1px] text-26 font-medium text-black leading-9'>“Floating World has become a key partner in the development and expansion of Michael Campbell's MoneyTalks”</p>
                    <div className='flex mt-15.5 sm:flex-row flex-col sm:items-end items-center gap-6 sm:justify-between'>
                        <p className='text-lg font-medium hidden sm:flex leading-100'>Grant Longhurst <br />
                            HighPCI.com</p>
                        <p className='text-lg font-medium sm:hidden flex leading-100'>Grant Longhurst
                            HighPCI.com</p>
                        <Image src={'/assets/images/owner.png'}
                            alt='owner'
                            width={355}
                            height={285} />
                    </div>
                </div>
                <div className='lg:max-w-[570.1px] flex flex-col gap-10.75 w-full'>
                    {DISCRIPTION.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col'>
                                <p className='text-26 font-bold leading-100 text-black '>{item.hrading}</p>
                                <p className='text-22 leading-8.5 font-normal text-black mt-4'>{item.desc}</p>                         </div>
                        )

                    })}
                </div>
            </div>
        </div>
    )
}

export default Money
