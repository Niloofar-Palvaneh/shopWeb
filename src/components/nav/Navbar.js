
import { HiOutlineShoppingBag } from "react-icons/hi"
import { FcCustomerSupport } from "react-icons/fc"

import Link from "next/link"
import { TfiMenu } from "react-icons/tfi"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

import LoginModal from "../loginModal/LoginModal"
import BasketModal from "../basketModal/BasketModal"

export default function Navbar() {
    const [showBasket, setShowBasket] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const ShowMobileMenuHandler = () => {
        setShowMobileMenu(!showMobileMenu)
    }
    const showLoginModalHandler = () => {
        setShowLoginModal(!showLoginModal)
    }
    const showBasketHandler = () => {
        setShowBasket(!showBasket)
    }

    return (
        <>
            {
                showBasket && <BasketModal showBasketHandler={showBasketHandler} />
            }
            {
                showLoginModal && <LoginModal showLoginModalHandler={showLoginModalHandler} />
            }
            <div className="flex px-[200px] py-4 items-center justify-between xl:px-[10px]">
                <Link href={"#"}>
                    <h1 className="text-gray-700 font-bold text-2xl">نام فروشگاه</h1>
                    <h2 className="text-gray-500 ">َشعار فروشگاه</h2>
                </Link>
                <div className="bg-gray-200 rounded-md w-[48%] flex items-center justify-between pr-2 sm:hidden">
                    <input className="border-none outline-none bg-inherit" type="text" placeholder="جستجو در فروشگاه..." />
                    <button className="text-gray-400 p-2 hover:bg-gray-300 hover:rounded-l-md transition ease-in hover:text-gray-500">جستجو</button>
                </div>
                <div
                    onClick={showLoginModalHandler}
                    href={"#"} className="text-gray-500 sm:text-sm cursor-pointer">
                    ورود/ثبت نام در سایت
                </div>
                <div
                    onClick={showBasketHandler}
                    className="bg-orange-600 p-2 rounded-xl sm:hidden cursor-pointer">
                    <HiOutlineShoppingBag className="text-white text-3xl" />
                </div>
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
                <div
                    onClick={showBasketHandler}
                    className="bg-orange-600 p-2 rounded-xl hidden sm:inline-block ">
                    <HiOutlineShoppingBag className="text-white text-xl" />
                </div>
                <div className="bg-gray-200 rounded-md w-full  flex items-center justify-between pr-2 hidden sm:flex">
                    <input className="border-none outline-none bg-inherit" type="text" placeholder="جستجو در فروشگاه..." />
                    <button className="text-gray-400 p-2 hover:bg-gray-300 hover:rounded-l-md transition ease-in hover:text-gray-500">جستجو</button>
                </div>
            </div>


            <div className={`${showMobileMenu ? "inline" : "hidden"} transition-[display] ease-in-out delay-150`}>
                <ul className="flex flex-col gap-4 fixed top-0 bg-[url('/imgs/moo.png')] bg-cover bg-center bg-white
                    z-50 w-full h-auto shadow px-4 pt-2 pb-4 border-b border-b-2 border-orange-500">
                    <div
                        onClick={ShowMobileMenuHandler}
                        className="flex items-center justify-end w-full ">
                        <AiOutlineClose className="text-3xl bg-gray-400 p-2 text-red-500" />
                    </div>
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400 active">خانه</Link>
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400">کالای دیجیتال</Link>
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400">خانه و آشپزخانه</Link>
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400">خودرو و ابزار</Link>
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400">سوپر مارکت</Link>
                    <Link href={"/cantact"} className="transition ease-in-out hover:text-red-400">تماس با ما</Link>
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400">بلاگ</Link>
                </ul>
            </div>
            <div className="flex px-[200px] py-4 items-center justify-between shadow-[0px_19px_19px_0px_#00000024] z-10 xl:px-[10px]">
                <ul className="flex gap-4 xl:text-sm md:hidden">
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400 active nn">خانه</Link>
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400">کالای دیجیتال</Link>
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400">خانه و آشپزخانه</Link>
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400">خودرو و ابزار</Link>
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400">سوپر مارکت</Link>
                    <Link href={"/cantact"} className="transition ease-in-out hover:text-red-400">تماس با ما</Link>
                    <Link href={"/products"} className="transition ease-in-out hover:text-red-400">بلاگ</Link>
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
        </>
    )
}