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
            <div className=" mt-4 text-gray-500 nn">
                <div className="flex px-[200px] py-4 items-center justify-between shadow-[0px_19px_19px_0px_#00000024] z-10 xl:px-[10px]">
                    <ul className="flex gap-4 xl:text-sm md:hidden">
                        <Link href={"#"} className="transition ease-in-out hover:text-red-400 active nn">خانه</Link>
                        <Link href={"#"} className="transition ease-in-out hover:text-red-400">کالای دیجیتال</Link>
                        <Link href={"#"} className="transition ease-in-out hover:text-red-400">خانه و آشپزخانه</Link>
                        <Link href={"#"} className="transition ease-in-out hover:text-red-400">خودرو و ابزار</Link>
                        <Link href={"#"} className="transition ease-in-out hover:text-red-400">سوپر مارکت</Link>
                        <Link href={"#"} className="transition ease-in-out hover:text-red-400">تماس با ما</Link>
                        <Link href={"#"} className="transition ease-in-out hover:text-red-400">بلاگ</Link>
                    </ul>
                    <div className="flex gap-4 items-center">
                        <Link href={"#"} className="transition ease-in-out hover:bg-gray-100 p-[5px] rounded-xl">
                            راهنمای خرید
                        </Link>
                        <Link href={"#"} className="bg-red-100 p-[5px] rounded-xl text-red-800 transition ease-in-out hover:text-white hover:bg-red-400">
                            محصولات تخفیف دار
                        </Link>
                    </div>
                </div>

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