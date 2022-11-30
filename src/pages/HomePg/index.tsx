

import MenuOptions from '../../components/MenuBar'
import Widgets from '../../components/Widgets'
import TweetContainer from '../../components/TweetContainer'
import Post from '../../components/Posts'
import useGetNewsFeed from './useGetNewsFeed';
import NewFeedHeader from './NewsFeedHeader'


const HomePage = () => {

    const { newsFeedData, isLoadingNewsFeed } = useGetNewsFeed()


    const onClickTweet = () => {
        console.log("New tweet")
    }

    if (isLoadingNewsFeed) {
        return <h2>Loading ...</h2>
    }

    return (
        <div className="w-screen h-screen flex bg-white dark:bg-black" >

            {/* Menu panel */}
            <div className='w-2/6 flex align-middle justify-end'>
                <MenuOptions />
            </div>


            {/* News feed */}
            <div className="text-white h-full border border-solid border-gray-100	
                    overflow-y-auto w-3/6 ">

                {/* Heading */}
                <NewFeedHeader heading="Home" />

                {/* Tweet container */}
                <TweetContainer onClickTweet={onClickTweet} />


                {/* Post list */}
                <Post newsFeedData={newsFeedData} />
            </div>

            {/* side widgets */}
            <div className='w-2/6 flex-auto'>
                <Widgets />
            </div>

        </div >
    )
}

export default HomePage