
import MenuOptions from '../../components/MenuBar'
import Widgets from '../../components/Widgets'
import TweetContainer from '../../components/TweetContainer'
import Post from '../../components/Posts'
import useGetNewsFeed from './useGetNewsFeed';
import NewFeedHeader from './NewsFeedHeader'
import { EditIcom } from '../../components/Icons'
import { color } from '../../tokens/color';


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
            <div className=' hidden md:flex w-2/6 align-middle justify-end'>
                <MenuOptions />
            </div>


            {/* News feed */}
            <div className="text-white h-full border border-solid border-gray-100 overflow-y-auto
                md:w-3/6 sm:w-full">

                {/* Heading */}
                <NewFeedHeader heading="Home" />

                {/* Tweet container */}
                <TweetContainer onClickTweet={onClickTweet} />


                {/* Post list */}
                <Post newsFeedData={newsFeedData} />
            </div>


            {/* Edit icon */}
            <div className="w-14 h-14 bottom-10 right-5 absolute bg-twitterBlue rounded-full flex items-center justify-center"
            >
                <EditIcom sx={{ color: color.white }} />
            </div>

            {/* side widgets */}
            <Widgets />

        </div >
    )
}

export default HomePage