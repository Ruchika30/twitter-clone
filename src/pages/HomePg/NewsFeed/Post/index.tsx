

import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from '@mui/icons-material/Verified';// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import { color } from "../../../../tokens/color";

interface IPost {
    displayName: string
    username: string
    verified: string
    text: string
    image: string
    avatar: string
}


const Post = ({ newsFeedData
}: { newsFeedData: any }) => {

    return (
        <>
            {
                newsFeedData?.map((post: any) => {
                    const { screen_name, username, verified, avatar, beforeTime, text, comment, repost, likes, reshare } = post

                    return (
                        <div className="flex my-4 border-b border-gray-100" >
                            <div className="px-4">
                                <Avatar src={avatar} />
                            </div>


                            {/* name, username  */}
                            <div className="w-full">
                                <div className="flex items-baseline">

                                    <h3 className="text-black font-bold mr-1">{screen_name}</h3>
                                    <span className="text-sm text-slate-500 ">
                                        {verified &&
                                            <VerifiedIcon fontSize="small" sx={{ color: color.twitterBlue }} />} @
                                        {username}

                                    </span>
                                    <span className="text-sm text-slate-500 ml-1">{beforeTime}hr</span>
                                </div>

                                <div className="text-black text-sm">
                                    <p>{text}</p>
                                </div>


                                {/* share, other icons */}
                                <div className="flex my-4">
                                    <div className="flex-1 flex justify-start">
                                        <ChatBubbleOutlineOutlinedIcon fontSize="small" sx={{ color: 'grey' }} />
                                        <span className="text-black items-center text-sm ml-2 ">{comment}</span>
                                    </div>
                                    <div className="flex-1 flex justify-start">
                                        <RepeatIcon fontSize="small" sx={{ color: 'grey' }} />
                                        <span className="text-black items-center text-sm ml-2">{repost}</span>

                                    </div>
                                    <div className="flex-1 flex justify-start ">
                                        <FavoriteBorderIcon fontSize="small" sx={{ color: 'grey' }} />
                                        <span className="text-black items-center text-sm ml-2">{likes}</span>
                                    </div>
                                    <div className="flex-1 flex justify-start">
                                        <PublishIcon fontSize="small" sx={{ color: 'grey' }} />
                                        <span className="text-black items-center text-sm ml-2">{reshare}</span>
                                    </div>


                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default Post