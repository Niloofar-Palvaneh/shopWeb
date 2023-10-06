import Link from "next/link"

export default function Products() {

    return (
        <>
            <div>
                <div className="flex flex-col gap-4 px-[200px] w-[40%] mt-8">
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
            </div>
        </>
    )
}