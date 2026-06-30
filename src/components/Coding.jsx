import React from 'react'
import { CODING_DATA } from '@/utils/helper'
import { CODING_CARD } from '@/utils/helper'
import Button from './common/Button'
const Coding = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className=' md:pt-40 sm:pt-20 pt-16 lg:pt-[212.1px] bg-white px-4'>
                <h2 className='lg:text-67 md:text-5xl text-4xl font-bold text-center text-black leading-13 md:leading-21.75'>App, web, & AI coding</h2>
                <div className='flex flex-row gap-x-3 gap-y-5.5 flex-wrap max-w-240 mx-auto justify-center mt-15.75'>
                    {CODING_DATA.map((item, index) => {
                        return (
                            <div key={index}
                                className='py-4.25 px-7 bg-light-blue w-fit rounded-[62px] flex items-center justify-center'>
                                <p className='text-white text-base font-semibold leading-100'>{item}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-row mt-25 gap-x-7.75 sm:gap-y-8.25 gap-y-5 flex-wrap items-center justify-center'>
                    {CODING_CARD.map((project, index) => (
                        <div key={index}>
                            <div className="group relative sm:w-119 sm:h-119 w-87 h-87 overflow-hidden rounded-3xl gap-7.75">
                                <img
                                    src={project.Image}
                                    alt={project.title}
                                    className=" absolute w-full h-full object-cover inset-0"
                                />

                                <div className="absolute bottom-0 left-0 w-full bg-black/50 pt-6 pb-8.75 pl-9 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                                    <h3 className="text-white font-bold text-22 leading-100">
                                        {project.title}
                                    </h3>

                                    <p className="text-white font-medium text-lg leading-100 mt-1.5">
                                        {project.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Button variant="primary" className="md:mb-[129.1px] mb-14 md:mt-25 mt-13 px-11.25">Download Case Studies</Button>
            </div>
        </div>
    )
}

export default Coding
