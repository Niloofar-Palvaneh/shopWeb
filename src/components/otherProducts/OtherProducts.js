import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image';
import Title from '../title/Title';
import Link from 'next/link';

export default function OtherProducts() {

    return (
        <>
            <div className='mt-24'>
                <Title title="سایر محصولات فروشگاه" />
                <div className='w-full flex items-center justify-center'>
                    <Swiper
                    slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper w-1/2 sm:w-full md:w-full"
                    >
                        <SwiperSlide className='flex items-center justify-center'>
                            <div className="p-4 border border-b-blue-300 rounded m-4 overflow-hidden shadow flex items-start  group w-max sm:items-center sm:flex-col">
                              <Image src={"/imgs/tshert.webp"} width={200} height={200}/>
                                <div className='flex flex-col gap-2 items-start justify-start'>
                                    <span className='text-[16px] font-bold'>
                                        تیشرت
                                    </span>
                                    <div className='w-full h-[2px] bg-gray-200 rounded'></div>
                                    <div className='w-[90%] text-gray-700 mt-2'>
                                        تیشرت لانگ رنگ مشکی با نوشته سفید / طرح جذاب با جنس عالی
                                        تیشرت لانگ رنگ مشکی با نوشته سفید / طرح جذاب با جنس عالی
                                    </div>
                                    <span className='text-red-600 text-[16px]'>
                                        120000
                                        تومان
                                    </span>
                                    <Link className='bg-blue-500 text-white px-4 py-1 rounded mt-4 hover:bg-blue-600 transition shadow' href={"#"}>خرید</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center'>
                            <div className="p-4 border border-b-blue-300 rounded m-4 overflow-hidden shadow flex items-start  group w-max sm:items-center sm:flex-col">
                              <Image src={"/imgs/laptap.webp"} width={200} height={200}/>
                                <div className='flex flex-col gap-2 items-start justify-start'>
                                    <span className='text-[16px] font-bold'>
                                        لبتاب
                                    </span>
                                    <div className='w-full h-[2px] bg-gray-200 rounded'></div>
                                    <div className='w-[90%] text-gray-700 mt-2'>
                                       لبتاب asus مناسب وبگردی کیفیت صفحه عالی
                                       لبتاب asus مناسب وبگردی کیفیت صفحه عالی
                                    </div>
                                    <span className='text-red-600 text-[16px]'>
                                        120000
                                        تومان
                                    </span>
                                    <Link className='bg-blue-500 text-white px-4 py-1 rounded mt-4 hover:bg-blue-600 transition shadow' href={"#"}>خرید</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center'>
                            <div className="p-4 border border-b-blue-300 rounded m-4 overflow-hidden shadow flex items-start  group w-max sm:items-center sm:flex-col">
                              <Image src={"/imgs/handzfree.webp"} width={200} height={200}/>
                                <div className='flex flex-col gap-2 items-start justify-start'>
                                    <span className='text-[16px] font-bold'>
                                        هندزفری
                                    </span>
                                    <div className='w-full h-[2px] bg-gray-200 rounded'></div>
                                    <div className='w-[90%] text-gray-700 mt-2'>
                                        هندزفری بلوتوثی سفید با رنگ بندی : مشکی و خاکستری
                                        هندزفری بلوتوثی سفید با رنگ بندی : مشکی و خاکستری
                                    </div>
                                    <span className='text-red-600 text-[16px]'>
                                        800000
                                        تومان
                                    </span>
                                    <Link className='bg-blue-500 text-white px-4 py-1 rounded mt-4 hover:bg-blue-600 transition shadow' href={"#"}>خرید</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center'>
                            <div className="p-4 border border-b-blue-300 rounded m-4 overflow-hidden shadow flex items-start  group w-max sm:items-center sm:flex-col">
                              <Image src={"/imgs/seshoar2.webp"} width={200} height={200}/>
                                <div className='flex flex-col gap-2 items-start justify-start'>
                                    <span className='text-[16px] font-bold'>
                                        سشوار 
                                    </span>
                                    <div className='w-full h-[2px] bg-gray-200 rounded'></div>
                                    <div className='w-[90%] text-gray-700 mt-2'>
                                        سشوار مشکی  از برند فیلیپس / تنشیم درجه حرارت باد
                                        سشوار مشکی  از برند فیلیپس / تنشیم درجه حرارت باد
                                    </div>
                                    <span className='text-red-600 text-[16px]'>
                                        520000
                                        تومان
                                    </span>
                                    <Link className='bg-blue-500 text-white px-4 py-1 rounded mt-4 hover:bg-blue-600 transition shadow' href={"#"}>خرید</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>

    )
}