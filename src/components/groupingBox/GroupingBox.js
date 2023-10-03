


export default function GroupingBox(props) {
    return (
        <>
            <div className="bg-red-100 shadow rounded-xl flex items-center justify-center flex-col px-2 py-4 sm:w-full">
                <div className="text-3xl ">
                    {props.icon}
                </div>
                <div className="text-red-500 mt-2">
                    {props.des}
                </div>
            </div>
        </>
    )
}