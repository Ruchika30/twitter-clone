
import TweetContainer from '../../components/TweetContainer'
import { CloseIcon } from '../../components/Icons'


const TweetInput = (props: any) => {
    const submitTweet = () => {
        console.log("New tweet")
    }

    return (

        <div className="h-screen w-screen bg-white">
            <div className="flex flex-col">
                <CloseIcon className='text-black cursor-pointer'
                    onClick={props.onClickClose}
                />heyye
                <TweetContainer onSubmit={submitTweet} isFromModal />
            </div>

        </div>
    )
}

export default TweetInput