import Title from "../title/Title"
import Image from "next/image"
import Link from "next/link"

export default function PopularProducts() {

    return (
        <>
            <div className="mt-24 flex flex-col gap-8 px-[200px] sm:px-0 md:p-0 xl:px-8">
                <Title title="پرفروش ترین محصولات فروشگاه" />
                <div className="grid grid-cols-5 gap-4 sm:grid-cols-1 md:grid-cols-2">
                    <div className="p-4 border rounded overflow-hidden shadow flex flex-col items-center justify-center group">
                        <div
                            className='transition-all duration-300 group-hover:bg-[url(/imgs/goshi2.webp)] bg-[url(/imgs/goshi.webp)] w-[150px] h-[150px]
                            bg-cover bg-center
                            ' >
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <span>
                                گوشی موبایل آیفون
                            </span>
                            <span className='text-red-600 text-[14px]'>
                                6000000
                                تومان
                            </span>
                        </div>
                    </div>
                    <div className="p-4 border rounded overflow-hidden shadow flex flex-col items-center justify-center group">
                        <div
                            className='transition-all duration-300 group-hover:bg-[url(/imgs/seshoar2.webp)] bg-[url(/imgs/seshoar.webp)] w-[150px] h-[150px]
                            bg-cover bg-center
                            ' >
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <span>
                                سشوار
                            </span>
                            <span className='text-red-600 text-[14px]'>
                                500000
                                تومان
                            </span>
                        </div>
                    </div>
                    <div className="p-4 border rounded overflow-hidden shadow flex flex-col items-center justify-center group overflow-hidden relative">
                        <div
                            className='transition-all duration-300 group-hover:bg-[url(/imgs/ton2.webp)] bg-[url(/imgs/ton.webp)] w-[150px] h-[150px]
                            bg-cover bg-center
                            ' >
                        </div>
                        <div className='bg-red-400 text-white p-1 text-sm rounded absolute top-0 right-0 z-20'>
                            12 درصد
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
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
                    </div>
                    <div className="p-4 border rounded overflow-hidden shadow flex flex-col items-center justify-center group">
                        <div
                            className='transition-all duration-300 group-hover:bg-[url(/imgs/tshert2.webp)] bg-[url(/imgs/tshert.webp)] w-[150px] h-[150px]
                            bg-cover bg-center
                            ' >
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <span>
                                تیشرت
                            </span>
                            <span className='text-red-600 text-[14px]'>
                                120000
                                تومان
                            </span>
                        </div>
                    </div>
                    <div className="p-4 border rounded overflow-hidden shadow flex flex-col items-center justify-center group">
                        <div
                            className='transition-all duration-300 group-hover:bg-[url(/imgs/laptap2.webp)] bg-[url(/imgs/laptap.webp)] w-[150px] h-[150px]
                            bg-cover bg-center
                            ' >
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <span>
                                تیشرت
                            </span>
                            <span className='text-red-600 text-[14px]'>
                                120000
                                تومان
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <div className="flex items-center justify-center gap-8 sm:flex-col md:flex-col sm:w-full">
                        <Link href={"#"} className="w-[580px] sm:w-full md:w-[600px] sm:w-full md:full xl:w-full">
                            <Image src={"/imgs/55.webp"} width={200} height={100} className="w-full rounded-md" />
                        </Link>
                        <Link href={"#"} className="w-[580px] sm:w-full md:w-[600px] sm:w-full md:full xl:w-full">
                            <Image src={"/imgs/66.webp"} width={200} height={100} className="w-full rounded-md" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}