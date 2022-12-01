

const LoggedInView = ({ data }: { data?: any }) => {
    return (
        <>
            <div className="m-4 p-4 rounded-lg bg-slate-100 dark:bg-slate-800">
                <h2 className="font-extrabold text-lg dark:text-white">
                    What's happening ?
                </h2>

                <ul className="mt-4">
                    {data?.map((item: any) => {
                        return (
                            <li className="list-none my-4 ">
                                <h4 className="text-xs dark:text-gray-500">{item?.key}</h4>
                                <h3 className="text-sm text-black dark:text-white font-bold">{item?.text}</h3>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}


export default LoggedInView