
import { HiOutlineShoppingBag } from "react-icons/hi"
import { FcCustomerSupport } from "react-icons/fc"

import Link from "next/link"
import { TfiMenu } from "react-icons/tfi"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

export default function Navbar() {
    const [showMobileMenu , setShowMobileMenu] = useState(false)
    const ShowMobileMenuHandler = ()=>{
        setShowMobileMenu(!showMobileMenu)
    }
    return (
        <>
            <div className="flex px-[200px] py-4 items-center justify-between xl:px-[10px]">
                <Link href={"#"}>
                    <h1 className="text-gray-700 font-bold text-2xl">نام فروشگاه</h1>
                    <h2 className="text-gray-500 ">َشعار فروشگاه</h2>
                </Link>
                <div className="bg-gray-200 rounded-md w-[48%] flex items-center justify-between pr-2 sm:hidden">
                    <input className="border-none outline-none bg-inherit" type="text" placeholder="جستجو در فروشگاه..." />
                    <button className="text-gray-400 p-2 hover:bg-gray-300 hover:rounded-l-md transition ease-in hover:text-gray-500">جستجو</button>
                </div>
                <Link href={"#"} className="text-gray-500 md:hidden">
                    ورود/ثبت نام در سایت
                </Link>
                <Link href={"#"} className="bg-orange-600 p-2 rounded-xl sm:hidden ">
                    <HiOutlineShoppingBag className="text-white text-3xl" />
                </Link>
                <div className=" md:hidden flex items-center justify-center gap-4 bg-gray-200 shadow-[0px_9px_10px_0px_#00000024] py-2 px-4 rounded-md text-gray-500 ">
                    021-12345678
                    <FcCustomerSupport className="text-3xl" />
                </div>

                <div
                onClick={ShowMobileMenuHandler}
                className="text-2xl bg-gray-400 p-2 hidden sm:inline md:inline">
                    <TfiMenu />
                </div>
            </div>

            <div className="w-full flex items-center justify-between px-2 gap-4">
                <Link href={"#"} className="bg-orange-600 p-2 rounded-xl hidden sm:inline-block ">
                    <HiOutlineShoppingBag className="text-white text-xl" />
                </Link>
                <div className="bg-gray-200 rounded-md w-full  flex items-center justify-between pr-2 hidden sm:flex">
                    <input className="border-none outline-none bg-inherit" type="text" placeholder="جستجو در فروشگاه..." />
                    <button className="text-gray-400 p-2 hover:bg-gray-300 hover:rounded-l-md transition ease-in hover:text-gray-500">جستجو</button>
                </div>
            </div>


            <div className={`transition-all ${showMobileMenu ? "menu-custom-styles" : "hidden"}`}>
                <ul className="flex flex-col gap-4 absolute top-0 bg-white z-50 w-1/2 h-screen shadow px-4 pt-8">
                    <div className="flex items-center justify-end w-full ">
                        <AiOutlineClose className="text-3xl bg-gray-400 p-2 text-red-500" />
                    </div>
                    <Link href={"#"} className="transition ease-in-out hover:text-red-400 active">خانه</Link>
                    <Link href={"#"} className="transition ease-in-out hover:text-red-400">کالای دیجیتال</Link>
                    <Link href={"#"} className="transition ease-in-out hover:text-red-400">خانه و آشپزخانه</Link>
                    <Link href={"#"} className="transition ease-in-out hover:text-red-400">خودرو و ابزار</Link>
                    <Link href={"#"} className="transition ease-in-out hover:text-red-400">سوپر مارکت</Link>
                    <Link href={"#"} className="transition ease-in-out hover:text-red-400">تماس با ما</Link>
                    <Link href={"#"} className="transition ease-in-out hover:text-red-400">بلاگ</Link>
                </ul>
            </div>

        </>
    )
}