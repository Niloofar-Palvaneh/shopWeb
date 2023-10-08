import Image from "next/image"

export default function Error() {

    return (
        <>
            <div className="flex items-center justify-center flex-col gap-4 mt-12 text-3xl text-red-500 font-bold">
                this url not found
                <Image src={"/imgs/404.gif"} width={100} height={100} className="w-1/2" />
            </div>
        </>
    )
}