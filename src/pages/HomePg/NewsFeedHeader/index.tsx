


const NewFeedHeader = ({ heading }: { heading: string }) => {
    return (
        <div className='bg-white sticky top-0 z-30'>
            <h1 className='text-lg text-black  font-bold py-3 pl-4'>{heading}</h1>
        </div>
    )
}



export default NewFeedHeader