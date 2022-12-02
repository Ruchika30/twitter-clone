


import Avatar from '@mui/material/Avatar';
import { color } from "../../tokens/color";
import { VerifiedIcon, RepeatIcon, ChatIcon, FavoriteIcon, PublishIcon } from '../../components/Icons'

interface ISinglePost {
    screenName: string
    userName: string
    verified: string
    avatar: string
    beforeTime: string
    text: string
    comment: string
    repost: string
    likes: string
    reshare: string
}

const SinglePost = ({ screenName, userName, verified, avatar, beforeTime, text, comment, repost, likes, reshare }: ISinglePost) => {


    return (
        <div className="flex my-4 border-b border-gray-100 dark:border-slate-700	">
            <div className="px-4">
                <Avatar src={avatar} />
            </div>


            {/* name, username  */}
            <div className="w-full">
                <div className="flex items-baseline">

                    <h3 className="text-black  dark:text-slate-200 font-bold mr-1">{screenName}</h3>
                    <span className="text-sm text-gray-400">
                        {verified &&
                            <VerifiedIcon fontSize="small" sx={{ color: color.twitterBlue }} />} @
                        {userName}

                    </span>
                    <span className="text-sm text-gray-400 ml-1">{beforeTime}hr</span>
                </div>

                <div className="text-black  dark:text-slate-200 text-sm">
                    <p>{text}</p>
                </div>


                {/* share, other icons */}
                <div className="flex my-4">
                    <div className="flex-1 flex justify-start">
                        <ChatIcon fontSize="small" sx={{ color: 'grey' }} />
                        <span className="text-black  dark:text-slate-200 items-center text-sm ml-2 ">{comment}</span>
                    </div>
                    <div className="flex-1 flex justify-start">
                        <RepeatIcon fontSize="small" sx={{ color: 'grey' }} />
                        <span className="text-black   dark:text-slate-200 items-center text-sm ml-2">{repost}</span>

                    </div>
                    <div className="flex-1 flex justify-start ">
                        <FavoriteIcon fontSize="small" sx={{ color: 'grey' }} />
                        <span className="text-black   dark:text-slate-200 items-center text-sm ml-2">{likes}</span>
                    </div>
                    <div className="flex-1 flex justify-start">
                        <PublishIcon fontSize="small" sx={{ color: 'grey' }} />
                        <span className="text-black  dark:text-slate-200 items-center text-sm ml-2">{reshare}</span>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default SinglePost