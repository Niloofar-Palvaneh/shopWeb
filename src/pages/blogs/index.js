import Image from "next/image"

export default function Blogs() {

    return (
        <>
            <div className="px-[200px] mt-24 mb-12 sm:px-0 md:px-8 xl:px-24">
                <div className="grid grid-cols-3 gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                    <div className="border hover:shadow">
                        <h1 className="text-center w-full font-bold p-4 text-gray-700">
                            گوشی سامسونگ نخرید!
                        </h1>
                        <Image
                            className="w-full rounded"
                            src={"/imgs/blog1.webp"} width={200} height={200} alt="blog1" />
                        <div className="flex flex-col p-4 gap-4">
                            <p className="text-sm text-gray-500 leading-7 line-clamp-4 w-full">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                            </p>
                            <button className="bg-orange-500 rounded p-2  text-white shadow-xl">
                                ادامه مطلب
                            </button>
                        </div>
                    </div>
                    <div className="border hover:shadow">
                        <h1 className="text-center w-full font-bold p-4 text-gray-700">
                            گوگل جاسوس است !
                        </h1>
                        <Image
                            className="w-full rounded"
                            src={"/imgs/blog2.webp"} width={200} height={200} alt="blog1" />
                        <div className="flex flex-col p-4 gap-4">
                            <p className="text-sm text-gray-500 leading-7 line-clamp-4 w-full">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                            </p>
                            <button className="bg-orange-500 rounded p-2  text-white shadow-xl">
                                ادامه مطلب
                            </button>
                        </div>
                    </div>
                    <div className="border hover:shadow">
                        <h1 className="text-center w-full font-bold p-4 text-gray-700">
                            بهترین تم رنگی اتاق خواب
                        </h1>
                        <Image
                            className="w-full rounded"
                            src={"/imgs/blog3.webp"} width={200} height={200} alt="blog1" />
                        <div className="flex flex-col p-4 gap-4">
                            <p className="text-sm text-gray-500 leading-7 line-clamp-4 w-full">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                            </p>
                            <button className="bg-orange-500 rounded p-2  text-white shadow-xl">
                                ادامه مطلب
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}