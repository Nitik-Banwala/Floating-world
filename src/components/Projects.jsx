"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { PROJECTS } from '@/utils/helper';

import "swiper/css";

const Project = () => {
    return (
        <section className='pb-10 pt-10 md:pt-20 lg:pt-26.5 bg-white-smoke relative'>
            <div className='max-w-[1728px] w-full mx-auto flex items-center'>
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
                            <div className="group relative w-full h-119 overflow-hidden rounded-3xl gap-7.75">
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
                        </SwiperSlide> 
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Project