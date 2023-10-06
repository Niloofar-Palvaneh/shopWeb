import Image from "next/image"

export default function BasketModal({showBasketHandler}) {

    return (
        <>

            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-50">
                <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white rounded p-4 ">
                    <div className="relative flex items-center justify-between mb-4">
                        <h2 className="text-gray-800 font-bold">
                            سبد خرید شما
                        </h2>
                        <div
                            onClick={showBasketHandler}
                            className="w-full absolute top-0 left-2 flex items-end justify-end text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                className="w-8 h-8 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                 
                    <div className="flex items-center justify-between border shadow p-2 mt-4">
                        <Image src={"/imgs/goshi.webp"} width={100} height={100} />
                        <div className="flex flex-col gap-2">
                            گوشی آیفون
                            <p className="text-gray-700">
                                گوشی موبایل ایفون گوشی موبایل ایفون
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                className="w-9 p-2 h-9 bg-gray-200 text-red-500 rounded font-bold">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                className="w-9 p-2 h-9 bg-gray-200 text-blue-500 rounded font-bold">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <div className="w-9 p-2 h-9 bg-gray-200 text-green-700 rounded font-bold flex items-center justify-center ">
                                2
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button className="bg-blue-500 text-white p-2 rounded m-4">
                            تکمیل فرایند خرید
                        </button>
                        <button className="bg-gray-500 text-white p-2 rounded m-4">
                           مجموع : 230000
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
