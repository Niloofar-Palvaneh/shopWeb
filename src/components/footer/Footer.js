import Image from "next/image"
import Link from "next/link"

export default function Footer() {

    return (
        <>
            <div className="bg-[url('/imgs/moo.png')] bg-cover bg-center px-[200px] py-12 xl:px-[10px] flex flex-col gap-12">
                <div>
                    <div className=" flex items-center justify-between">
                        <div className="flex  items-center gap-4">
                            <Image src={"/imgs/foo1.webp"} width={60} height={60} />
                            <div>
                                <span className="font-bold text-gray-600">
                                    ارسال سریع سفارش
                                </span>
                                <p className="text-sm text-gray-500 mt-2">
                                    سریع ارسال میشود.
                                </p>
                            </div>
                        </div>
                        <div className="flex  items-center gap-4">
                            <Image src={"/imgs/foo2.webp"} width={60} height={60} />
                            <div>
                                <span className="font-bold text-gray-600">
                                    ارسال سریع سفارش
                                </span>
                                <p className="text-sm text-gray-500 mt-2">
                                    سریع ارسال میشود.
                                </p>
                            </div>
                        </div>
                        <div className="flex  items-center gap-4">
                            <Image src={"/imgs/foo3.webp"} width={60} height={60} />
                            <div>
                                <span className="font-bold text-gray-600">
                                    ارسال سریع سفارش
                                </span>
                                <p className="text-sm text-gray-500 mt-2">
                                    سریع ارسال میشود.
                                </p>
                            </div>
                        </div>
                        <div className="flex  items-center gap-4">
                            <Image src={"/imgs/foo4.webp"} width={60} height={60} />
                            <div>
                                <span className="font-bold text-gray-600">
                                    ارسال سریع سفارش
                                </span>
                                <p className="text-sm text-gray-500 mt-2">
                                    سریع ارسال میشود.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-between gap-12">
                    <div className="flex flex-col gap-4">
                        <span className="font-bold text-gray-600 text-[17px] flex items-center gap-2">
                            <div className="w-[13px] h-[13px] bg-orange-600 rounded-full"></div>
                            درباره فروشگاه ما
                        </span>
                        <p className="text-[12px] text-gray-600 w-[450px] leading-6">
                            من یک پاراگراف هستم درمورد این بخش که شما می‌توانید به راحتی با دوبار کلیک برروی من، استایل و ابعاد و... من را تغییر دهید.
                            من یک پاراگراف هستم درمورد این بخش که شما می‌توانید به راحتی با دوبار کلیک برروی من، استایل و ابعاد و... من را تغییر دهید.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-bold text-gray-600 text-[17px] flex items-center gap-2">
                            <div className="w-[13px] h-[13px] bg-orange-600 rounded-full"></div>
                            تماس با ما
                        </span>
                        <ul className="text-[12px] text-gray-600  leading-6">
                            <li>آدرس:  استان شهر خیابان کوچه پلاک واحد</li>
                            <li>تلفن : 09999999999</li>
                            <li>ایمیل : hhhh@gmail.cpm</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-bold text-gray-600 text-[17px] flex items-center gap-2">
                            <div className="w-[13px] h-[13px] bg-orange-600 rounded-full"></div>
                            منوی سایت
                        </span>
                        <ul className="text-[12px] text-gray-600  leading-6 flex flex-col">
                            <Link href={"#"} className="hover:text-orange-500">
                                فروشگاه
                            </Link>
                            <Link href={"#"} className="hover:text-orange-500">
                                سوالات متداول
                            </Link>
                            <Link href={"#"} className="hover:text-orange-500">
                                تماس با ما
                            </Link>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <Image src={"/imgs/fot1.webp"} width={100} height={120} />
                        <Image src={"/imgs/fot2.webp"} width={100} height={120} />
                    </div>
                </div>
            </div>
            <div className="w-full p-2 bg-gray-200 text-center text-gray-500">
                ساخته شده با ❤️
            </div>
        </>
    )
}