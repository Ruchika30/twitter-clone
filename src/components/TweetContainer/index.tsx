
import { useCallback, useMemo, useRef, useState } from "react";
import Avatar from '@mui/material/Avatar';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import useAutosizeTextArea from "./useAutosizeTextArea";
import TweetButton from "../TweetButton";

const icons = [ImageOutlinedIcon, GifBoxOutlinedIcon, SentimentSatisfiedOutlinedIcon, EventRepeatOutlinedIcon, LocationOnOutlinedIcon]

const TweetContainer = ({ submitTweet, isFromModal = false }:
    { submitTweet: () => void, isFromModal?: boolean }) => {

    const getInitailRows = useMemo(() => {
        return isFromModal ? 4 : 1
    }, [isFromModal]
    )

    const [value, setValue] = useState("");
    const [rows, setRows] = useState(getInitailRows)
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(textAreaRef.current, value);


    const handleChange = (e: any) => {
        const val = e.target?.value;
        setRows(4)
        setValue(val);
    };

    const checkIfDisabled = useCallback(() => {
        return !value.length
    }, [value.length]
    )
    return (
        <div>
            <div className='flex items-start border-b border-solid border-gray-100'>

                {/* avatar */}
                <div className='p-8 h-6 w-6 items-center flex justify-center'>
                    <Avatar src="https://i.pravatar.cc/150?img=3" />
                </div>



                {/* Tweet InputBox */}
                <div className='w-full mt-4'>
                    <div className='border-b flex border-solid border-gray-100 w-full mr-4 overflow-y-scroll max-h-48'
                        style={{ height: isFromModal ? '150px' : '50px' }}>
                        <textarea
                            ref={textAreaRef}
                            rows={rows}
                            onChange={handleChange}
                            placeholder="What's happening?"
                            className='w-full focus:outline-none text-black text-xl placeholder-gray-600 pb-4'
                        />
                    </div>


                    <div className='p-2'>
                        {/* icons */}
                        <div className="pr-3 flex justify-between items-center">
                            <div className='flex'>
                                {icons.map((Icon) => {
                                    return <div className='p-2'>
                                        <Icon className='text-twitterBlue' />
                                    </div>
                                })}

                            </div>


                            {/* tweet button */}
                            <TweetButton
                                onSubmit={submitTweet}
                                checkIfDisabled={checkIfDisabled}
                                onChange={handleChange}
                                label="Tweet"
                            />

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TweetContainer