"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { PROJECTS } from '@/utils/helper';

import "swiper/css";
import Icons from './common/Icons';

const Project = () => {
    return (
        <section className='pb-10 pt-[13.5px] bg-gray bg-white-smoke relative'>
            <div className='max-w-260 w-full  mx-auto mb-[92.5px] px-10 '>
                <div className=' absolute rounded-[50%] z-20 bg-white w-[185.1px] h-[185.1px] flex items-center justify-center'>
                    <p className='font-medium text-26 leading-7.5 text-black -rotate-15'>Latest  <br /> Projects</p>
                </div>
            </div>
            <div className='max-w-[1728px] z-0 w-full mx-auto flex items-center'>
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.1,
                        },
                        576: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                    }}
                >
                    {PROJECTS.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="group z-10 bg-gray relative w-86 sm:w-full sm:h-119 h-96 overflow-hidden rounded-3xl gap-7.75">
                                <img
                                    src={project.Image}
                                    alt={project.title}
                                    className=" absolute z-10 w-full h-full object-cover inset-0"
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Project