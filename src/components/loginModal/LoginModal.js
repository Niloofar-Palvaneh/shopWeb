import { useState } from "react"


export default function LoginModal() {
    const [loginOrRegister , setLoginOrRegister] = useState(false)
    const changeModal = ()=>{
        setLoginOrRegister(!loginOrRegister)
    }

    return (
        <>
            <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-50">
                <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white rounded">

                    <form className={`border border-4 border-orange-500 rounded overflow-hidden space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 ${loginOrRegister ? "" : "hidden"}`} action="#">
                        <h3 className="text-xl font-medium text-gray-900 w-full text-center m-4 ">ثبت نام در سایت</h3>
                        <div>
                            <label for="email" className="text-sm font-medium text-gray-900 block mb-2 ">ایمیل</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">پسورد</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="" />
                                </div>
                                <div className="text-sm ml-3">
                                    <label for="remember" className="font-medium text-gray-900">مرا به خاطرت بسپار</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ایجاد اکانت</button>
                        <div className="text-sm font-medium text-gray-500 ">
                            اکانت دارید؟ <a href="#" className="text-blue-700 hover:underline "
                            onClick={changeModal}
                            >ورود به اکانت</a>
                        </div>
                    </form>

                    <form className={`border border-4 border-orange-500 rounded overflow-hidden space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 ${loginOrRegister ? "hidden" : ""}`} action="#">
                        <h3 className="text-xl font-medium text-gray-900 w-full text-center m-4">ورود به حساب کاربری</h3>
                        <div>
                            <label for="email" className="text-sm font-medium text-gray-900 block mb-2 ">ایمیل</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">پسورد</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="" />
                                </div>
                                <div className="text-sm ml-3">
                                    <label for="remember" className="font-medium text-gray-900">مرا به خاطرت بسپار</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">پسورد را فراموش کرده اید؟</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ورود</button>
                        <div className="text-sm font-medium text-gray-500 ">
                            اکانت ندارید؟ <a href="#" className="text-blue-700 hover:underline "
                            onClick={changeModal}
                            >ایجاد حساب</a>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}