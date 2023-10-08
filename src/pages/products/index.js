import Link from "next/link"
import Image from "next/image"

export default function Products() {
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

    return (
        <>
            <div className="flex px-[200px] sm:px-0 md:px-0 xl:px-[20px] sm:flex-col">
                <div className="flex flex-col gap-4  w-[40%] mt-8 sm:w-full">
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
                <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full gap-2 mr-4 mt-8 mb-8 sm:m-0 sm:mt-4">
                    {
                        productsArry.map(arry => (
                            <div className="border group overflow-hidden p-2 rounded flex flex-col items-center gap-4">
                                <Image className="group-hover:scale-110 transition ease-in-out delay-150 duration-300 "
                                    src={arry.img} width={150} height={150} alt="product" />
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <h6 className="text-xl font-bold sm:text-sm">
                                        {arry.name}
                                    </h6>
                                    <p className="text-gray-600 text-sm">
                                        {arry.des}
                                    </p>
                                    <span className="text-red-700">
                                        {arry.price}
                                        تومان
                                    </span>
                                </div>
                                <Link className="bg-orange-500 text-white rounded p-2" href={`/products/${arry.id}`}>
                                    مشاهده محصول
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}