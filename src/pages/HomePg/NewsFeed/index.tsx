

import TweetContainer from '../../../components/TweetContainer'
import useGetNewsFeed from '../useGetNewsFeed';
import Posts from '../../../components/Posts';
import './style.css'

const NewsFeed = (): JSX.Element => {
    const { newsFeedData, isLoadingNewsFeed } = useGetNewsFeed()


    const submitTweet = () => {
        console.log("New tweet")
    }

    if (isLoadingNewsFeed) {
        return <h1>Loaidng ..</h1>
    }


    return (

        <div className="text-white h-full border border-solid border-gray-100	
                    overflow-y-auto w-3/6 ">

            {/* Heading */}
            <div className='bg-white sticky top-0 z-30'>
                <h1 className='text-lg text-black  font-bold py-3 pl-4'>Home</h1>
            </div>

            {/* Tweet container */}
            <TweetContainer submitTweet={submitTweet} />



            {/* Post list */}
            <Posts newsFeedData={newsFeedData} />



        </div>

    )

}

export default NewsFeed