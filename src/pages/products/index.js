import Link from "next/link"
import Image from "next/image"

export default function Products() {

    return (
        <>
            <div className="flex px-[200px] sm:px-0 md:px-0 xl:px-[20px]">
                <div className="flex flex-col gap-4  w-[40%] mt-8">
                    <div className="flex flex-col gap-2 border-b border-dashed border-orange-500 pb-4">
                        <span className="text-gray-900 font-bold">
                            دسته ها
                        </span>
                        <div className="text-gray-500">
                            <Link href={"#"}>
                                کالای دیجیتال
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 border-b border-dashed border-orange-500 pb-4">
                        <span className="text-gray-900 font-bold">
                            قیمت
                        </span>
                        <div className="text-gray-500 flex flex-col">
                            <input type="range" min={0} max={200000} />
                            <span>
                                0تومان
                                -
                                200000تومان
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 border-b border-dashed border-orange-500 pb-4">
                        <span className="text-gray-900 font-bold">
                            رنگ
                        </span>
                        <div className="text-gray-500 flex items-center gap-2">
                            <div className="bg-blue-700 w-[20px] h-[20px] rounded-full"></div>
                            <div className="bg-red-700 w-[20px] h-[20px] rounded-full"></div>
                            <div className="bg-green-700 w-[20px] h-[20px] rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 border-b border-dashed border-orange-500 pb-4">
                        <span className="text-gray-900 font-bold">
                            سایز
                        </span>
                        <div className="text-gray-500 flex flex-col items-start gap-2">
                            <div className=" flex items-center gap-1">
                                <input type="checkbox" name="xl" />
                                <label htmlFor="xl">xl</label>
                            </div>
                            <div className=" flex items-center gap-1">
                                <input type="checkbox" name="xxl" />
                                <label htmlFor="xxl">xxl</label>
                            </div>
                            <div className=" flex items-center gap-1">
                                <input type="checkbox" name="xxxl" />
                                <label htmlFor="xxxl">xxxl</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-2 w-full gap-2 mr-4 mt-8 mb-8">
                    <div className="border group overflow-hidden p-2 rounded flex flex-col items-center gap-4">
                        <Image className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 "
                            src={"/imgs/goshi.webp"} width={150} height={150} alt="product" />
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h6 className="text-xl font-bold sm:text-sm">
                                گوشی موبایل
                            </h6>
                            <p className="text-gray-600 text-sm">
                                گوشی موبایل ایفون توضیحات تکمیلی در مورد آن
                            </p>
                            <span className="text-red-700">
                                50000
                                تومان
                            </span>
                        </div>
                    </div>
                    <div className="border group overflow-hidden p-2 rounded flex flex-col items-center gap-4">
                        <Image className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 "
                            src={"/imgs/seshoar.webp"} width={150} height={150} alt="product" />
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h6 className="text-xl font-bold  sm:text-sm">
                                سشوار
                            </h6>
                            <p className="text-gray-600 text-sm">
                                سشوار برای خشک کردن و حالت دادن به مو
                            </p>
                            <span className="text-red-700">
                                80000
                                تومان
                            </span>
                        </div>
                    </div>
                    <div className="border group overflow-hidden p-2 rounded flex flex-col items-center gap-4">
                        <Image className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 "
                            src={"/imgs/laptap.webp"} width={150} height={150} alt="product" />
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h6 className="text-xl font-bold  sm:text-sm">
                                لبتاب
                            </h6>
                            <p className="text-gray-600 text-sm">
                                لبتاب برای انجام کارهایی مانند وبگردی و بازی
                            </p>
                            <span className="text-red-700">
                                5000000
                                تومان
                            </span>
                        </div>
                    </div>
                    <div className="border group overflow-hidden p-2 rounded flex flex-col items-center gap-4">
                        <Image className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 "
                            src={"/imgs/ton.webp"} width={150} height={150} alt="product" />
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h6 className="text-xl font-bold  sm:text-sm">
                                تن ماهی طبیعت
                            </h6>
                            <p className="text-gray-600 text-sm">
                                گرسنی معنا ندارد
                            </p>
                            <span className="text-red-700">
                                500
                                تومان
                            </span>
                        </div>
                    </div>
                    <div className="border group overflow-hidden p-2 rounded flex flex-col items-center gap-4">
                        <Image className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 "
                            src={"/imgs/handzfree.webp"} width={150} height={150} alt="product" />
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h6 className="text-xl font-bold  sm:text-sm">
                                هندزفری
                            </h6>
                            <p className="text-gray-600 text-sm">
                                هندزفری بلوتوثی بی سیم و کاربردی
                            </p>
                            <span className="text-red-700">
                                90000
                                تومان
                            </span>
                        </div>
                    </div>
                    <div className="border group overflow-hidden p-2 rounded flex flex-col items-center gap-4">
                        <Image className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 "
                            src={"/imgs/tshert.webp"} width={150} height={150} alt="product" />
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h6 className="text-xl font-bold  sm:text-sm">
                                تیشرت
                            </h6>
                            <p className="text-gray-600 text-sm">
                                تیشرت لانگ پنبه اصل
                            </p>
                            <span className="text-red-700">
                                12000
                                تومان
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}