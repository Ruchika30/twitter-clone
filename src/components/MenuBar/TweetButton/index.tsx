

const TweetBtn = ({ onClick }: {
    onClick?: () => void
}) => {

    return (

        <button className='rounded-xl w-full  py-4 px-4 font-bold capitalize bg-twitterBlue text-white'
            onClick={onClick}
        >Tweet</button>

    )
}

export default TweetBtn