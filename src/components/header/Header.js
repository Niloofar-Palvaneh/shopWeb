import "./../../styles/Header.module.css"

import Image from "next/image"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Link from "next/link";

export default function Header() {

    return (
        <>
            <div className=" mt-4 text-gray-500  ">
                <div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image className="w-full sm:h-[230px]" src={"/imgs/slid1.webp"} width={200} height={200} alt="slid img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="w-full sm:h-[230px]" src={"/imgs/slid2.webp"} width={200} height={200} alt="slid img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="w-full sm:h-[230px]" src={"/imgs/slid3.webp"} width={200} height={200} alt="slid img" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}