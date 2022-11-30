

import TweetContainer from '../../../components/TweetContainer'
import useGetNewsFeed from '../useGetNewsFeed';
import Post from './Post';
import './style.css'

const NewsFeed = (): JSX.Element => {
    const { newsFeedData, isLoadingNewsFeed } = useGetNewsFeed()


    const onClickTweet = () => {
        console.log("New tweet")
    }



    return (

        <div className="text-white h-full border border-solid border-gray-100	
                    overflow-y-auto w-3/6 ">

            {/* Heading */}
            <div className='bg-white sticky top-0 z-30'>
                <h1 className='text-lg text-black  font-bold py-3 pl-4'>Home</h1>
            </div>

            {/* Tweet container */}
            <TweetContainer onClickTweet={onClickTweet} />



            {/* Post list */}
            <Post newsFeedData={newsFeedData} />



        </div>

    )

}

export default NewsFeed