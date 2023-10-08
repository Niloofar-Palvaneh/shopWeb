import { useRouter } from "next/router"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SingleProduct() {
    const [productDetails, setProductDetails] = useState({})
    const productsArry = [
        {
            id: 1,
            name: "گوشی موبایل ",
            des: "گوشی موبایل ایفون توضیحات تکمیلی در مورد آن",
            price: "250000",
            img: "/imgs/goshi.webp"
        },
        {
            id: 2,
            name: "شسوار",
            des: "سشوار  مسافرتی توضیحات تکمیلی در مورد آن",
            price: "250000",
            img: "/imgs/seshoar.webp"
        },
        {
            id: 3,
            name: "لبتاب",
            des: "  لبتاب سامسونگ توضیحات تکمیلی در مورد آن",
            price: "250000",
            img: "/imgs/laptap.webp"
        },
        {
            id: 4,
            name: "تن ماهی",
            des: "تن ماهی توضیحات تکمیلی در مورد آن",
            price: "250000",
            img: "/imgs/ton.webp"
        },
        {
            id: 5,
            name: "هندزفری",
            des: "هندزفری توضیحات تکمیلی در مورد آن",
            price: "250000",
            img: "/imgs/handzfree.webp"
        },
        {
            id: 6,
            name: "تیشرت",
            des: "تیشرت توضیحات تکمیلی در مورد آن",
            price: "250000",
            img: "/imgs/tshert.webp"
        },
    ]
    const route = useRouter()

    useEffect(() => {
        setProductDetails(productsArry.find(pro => pro.id == route.query.id))
    }, [])

    console.log(productDetails);
    return (
        <>
            <div className="px-[250px] sm:px-0 mt-12 mb-24 sm:mb-12 md:px-0">
                <div className="flex gap-4 sm:flex-col sm:items-center sm:justify-center">
                    <Image
                        className="w-[40%]"
                        src={productDetails.img} width={150} height={150} alt="product" />
                    <div className="flex flex-col gap-8 sm:items-center sm:justify-center">
                        <h1 className="text-3xl font-bold sm:text-xl">
                            {productDetails.name}
                        </h1>
                        <p className="text-xl text-gray-600 sm:text-sm">
                            {productDetails.des}
                        </p>
                    </div>
                </div>
                <div className="w-full flex items-end justify-end sm:justify-center sm:mt-8">
                    <button className="bg-blue-500 text-white p-2 rounded hover:shadow">
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>
        </>
    )
}