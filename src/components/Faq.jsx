"use client";
import React from 'react'
import { useState } from "react";
import Icons from './common/Icons';
import { FAQ_DATA } from '@/utils/helper';





const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };
    return (
        <div className='bg-gray pb-1 lg:pb-[125.1px]'>
            <div className='max-w-[1489.1px] gap-6 px-4 items-center flex min-[1105px]:flex-row flex-col gap-y-20 justify-between mx-auto w-full'>
                <div className='max-w-[625.1px] w-full'>
                    <h2 className='font-extrabold lg:text-67 text-center sm:leading-20.5 md:text-5xl sm:text-4xl text-3xl '>Commonly asked questions</h2>
                    <div >
                        {FAQ_DATA.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} >
                                    <button type="button" onClick={() => toggle(index)} aria-expanded={isOpen} className={` ${index === 0 ? "mt-11.75" : "mt-7.75"} flex max-w-150 w-full items-center justify-between gap-3 text-left text-base font-medium text-gray-900`}>
                                        <span className='text-xl font-medium text-black leading-100'>{item.question}</span>
                                        <div className={` ${isOpen ? "rotate-180" : ""}`}>
                                            <Icons icon={'downarow'} />
                                        </div>
                                    </button>
                                    <div className={`grid overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="min-h-0">
                                            <p className="pb-4 text-sm max-w-[500.1px] leading-relaxed text-gray-500">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='max-w-[726.1px] p-4 flex flex-col items-center justify-center w-full shadow-[0px_2px_30px_4px_#0000001A] bg-white rounded-3xl h-auto lg:min-h-[705.1px] '>
                    <Icons icon={'faqlogo'} />
                    <h2 className='font-bold md:text-5xl text-3xl leading-14.5 max-w-[400.1px] mt-9.5 text-center'>Book a 15-minute intro call</h2>
                    <div className='h-[95.1px]'>
                        <button className='bg-[linear-gradient(180deg,#000000_0%,#393939_100%)] hover:shadow-2xl hover:text-red-500 cursor-pointer border rounded-2xl py-4.75 px-11.25 mt-7 text-xl hover:mt-6 duration-500 shadow-[0px_2px_10px_0px_#00000029] font-semibold text-white border-black'>Book a call</button>
                    </div>
                    <div className='flex flex-row mt-15.25 gap-1 '>
                        <p className='sm:text-22 text-base font-medium leading-11 '>Prefer to email? </p>
                        <a href="mailto:hello@floatingworld.ca" className="sm:text-22 text-base font-semibold leading-11 text-light-blue">
                            hello@floatingworld.ca
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
