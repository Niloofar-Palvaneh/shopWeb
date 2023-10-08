import Title from "@/components/title/Title"
import Image from "next/image"


export default function Cantact() {

    return (
        <>
            <div className="bg-[url('/imgs/cantactbg.png')] bg-cover bg-center px-[250px] sm:px-0">
                <div className="flex gap-12 mt-24 mb-24 sm:flex-col sm:gap-24">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-1">
                            <div className="w-[15px] h-[15px] bg-orange-500 shadow rounded-full"></div>
                            <Title title="تماس با ما" />
                        </div>
                        <p className="text-gray-500">
                            من یک پاراگراف هستم درمورد این بخش که شما می‌توانید به راحتی با دوبار کلیک برروی من، استایل و ابعاد و... من را تغییر دهید.
                            من یک پاراگراف هستم درمورد این بخش که شما می‌توانید به راحتی با دوبار کلیک برروی من، استایل و ابعاد و... من را تغییر دهید.
                        </p>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2 font-bold ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-700 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <span className="text-gray-600">
                                    تلفن پشتیبانی : 099999999
                                </span>
                            </div>
                            <div className="flex items-center gap-2 font-bold ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-700 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span className="text-gray-600">
                                    ایمیل پشتیبانی : hvjvh@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center gap-2 font-bold ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-700 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span className="text-gray-600">
                                    ایمیل پشتیبانی : hvjvh@gmffuyugtuytail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center ">
                        <div className="w-[300px] h-[270px] rounded-xl bg-orange-700 "></div>
                        <Image src={"/imgs/man.webp"} width={200} height={200} className=" absolute -top-8"  />
                    </div>
                </div>
            </div>
        </>
    )
}