import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Countdown from "react-countdown";


export default function OffBox() {
    const [showOffBox, setShowOffBox] = useState(false)
    const [date] = useState(Date.now() + 300000);
    const onComplete = () => alert(`Time's Up!`);


    const Completionist = () => setShowOffBox(true);

    return (
        <>

            <div className={`bg-orange-600 p-6 rounded-xl mt-12 ${showOffBox && "hidden"}`}>
                <div>
                    <div className='text-white flex items-center justify-between'>
                        <span className='text-xl font-bold flex items-center gap-2'>
                            <div className='w-[15px] h-[15px] bg-gray-200 rounded-full'></div>
                            تا پایان تخفیف محصولات
                        </span>
                        <div className='flex items-start gap-4'>
                            <div className='font-bold'>
                                زمان باقی مانده تا پایان تخفیف
                            </div>
                            <div className='w-[100px]'>
                                <Countdown date={Date.now() + 500000000} className='text-xl'>
                                    <Completionist />
                                </Countdown>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[6px] bg-red-700 rounded my-4'></div>
                    <div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={true} modules={[Navigation]} loop={true} className="mySwiper p-12 ">
                            <SwiperSlide className='bg-white p-4 rounded-xl flex gap-4 flex-col items-center justify-center overflow-hidden'>
                                <Image className='transition duration-300 ease-in-out hover:scale-125' src={"/imgs/goshi.webp"} width={120} height={100} />
                                <div className='flex flex-col gap-2 items-center justify-center'>
                                    <span>
                                        گوشی موبایل آیفون
                                    </span>
                                    <span className='text-red-600 text-[14px]'>
                                        6000000
                                        تومان
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='bg-white p-4 rounded-xl flex gap-4 flex-col items-center justify-center overflow-hidden'>
                                <Image className='transition duration-300 ease-in-out hover:scale-125' src={"/imgs/handzfree.webp"} width={120} height={100} />
                                <div className='flex flex-col gap-2 items-center justify-center'>
                                    <span>
                                        هندزفری بلوتوثی
                                    </span>
                                    <span className='text-red-600  text-[14px]'>
                                        50000
                                        تومان
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='bg-white p-4 rounded-xl flex gap-4 flex-col items-center justify-center overflow-hidden'>
                                <Image className='transition duration-300 ease-in-out hover:scale-125' src={"/imgs/laptap.webp"} width={120} height={100} />
                                <div className='flex flex-col gap-2 items-center justify-center'>
                                    <span>
                                        لبتاب
                                    </span>
                                    <span className='text-red-600  text-[14px]'>
                                        60000000
                                        تومان
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='bg-white p-4 rounded-xl flex gap-4 flex-col items-center justify-center overflow-hidden relative'>
                                <div className='bg-red-400 text-white p-1 text-sm rounded absolute top-0 right-0'>
                                    12 درصد
                                </div>
                                <Image className='transition duration-300 ease-in-out hover:scale-125' src={"/imgs/ton.webp"} width={120} height={100} />
                                <div className='flex flex-col gap-2 items-center justify-center '>
                                    <span>
                                        تن ماهی
                                    </span>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-gray-500 text-[14px] text-sm line-through '>
                                            25000
                                            تومان
                                        </span>
                                        <span className='text-red-600 text-[14px]'>
                                            10000
                                            تومان
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='bg-white p-4 rounded-xl flex gap-4 flex-col items-center justify-center overflow-hidden'>
                                <Image className='transition duration-300 ease-in-out hover:scale-125' src={"/imgs/tshert.webp"} width={120} height={100} />
                                <div className='flex flex-col gap-2 items-center justify-center'>
                                    <span>
                                        تیشرت
                                    </span>
                                    <span className='text-red-600  text-[14px]'>
                                        40000
                                        تومان
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='bg-white p-4 rounded-xl flex gap-4 flex-col items-center justify-center overflow-hidden'>
                                <Image className='transition duration-300 ease-in-out hover:scale-125' src={"/imgs/seshoar.webp"} width={120} height={100} />
                                <div className='flex flex-col gap-2 items-center justify-center'>
                                    <span>
                                        سشوار
                                    </span>
                                    <span className='text-red-600  text-[14px]'>
                                        80000
                                        تومان
                                    </span>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}