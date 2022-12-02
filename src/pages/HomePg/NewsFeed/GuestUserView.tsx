

const GuestUserView = ({ data }: { data: any }) => {
    return (
        <>
            <div className="m-4 p-4 rounded-lg bg-slate-100 dark:bg-slate-800">

                <ul className="mt-4">
                    {data?.map((item: any) => {
                        return (
                            <li className="list-none my-4 ">
                                <h4 className="text-xs text-gray-500  dark:text-white">{item?.key}</h4>
                                <h3 className="text-sm text-black dark:text-white font-bold">{item?.text}</h3>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default GuestUserView