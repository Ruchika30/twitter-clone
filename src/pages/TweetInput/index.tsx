import { CloseIcon } from '../../components/Icons'
import TweetContainer from '../../components/TweetContainer'


const TweetInput = (props: any) => {

    console.log("propsp---", props);

    const submitTweet = () => {
        console.log("New tweet")
    }

    return (

        <div className="h-screen w-screen bg-white">
            <div className="flex flex-col">
                <CloseIcon className='text-black cursor-pointer'
                    onClick={props.onClickClose}
                />heyye
                <TweetContainer submitTweet={submitTweet} isFromModal />
            </div>

        </div>
    )
}

export default TweetInput