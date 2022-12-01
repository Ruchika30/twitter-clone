
import { color } from '../../../tokens/color'
import { EditIcom } from '../../Icons'

const TweetBtn = ({ onClick }: {
    onClick?: () => void
}) => {

    return (
        <>
            <div className="hidden md:block">
                <button className='rounded-xl w-full  py-4 px-4 font-bold capitalize bg-twitterBlue text-white'
                    onClick={onClick}
                >Tweet</button>
            </div>

            {/* Edit icon */}
            <div className="absolute  md:hidden w-14 h-14 bg-twitterBlue rounded-full flex items-center justify-center"
            >
                <EditIcom sx={{ color: color.white }} />
            </div>
        </>

    )
}

export default TweetBtn