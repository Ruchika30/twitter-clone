
import { useState } from 'react'
import MenuOptions from '../../components/MenuBar'
import Widgets from '../../components/Widgets'
import TweetContainer from '../../components/TweetContainer'
import Post from '../../components/Posts'
import useGetNewsFeed from './useGetNewsFeed';
import NewFeedHeader from './NewsFeedHeader'
import { EditIcom } from '../../components/Icons'
import { color } from '../../tokens/color';
import ModalComponent from '../../components/TweetModal'
import useWindowSize from '../../hooks/useWindowSize'


const HomePage = () => {
    const { newsFeedData, isLoadingNewsFeed } = useGetNewsFeed()
    const [isOpen, setIsOpen] = useState(false)
    const { isMobile, } = useWindowSize()


    if (isLoadingNewsFeed) {
        return <h2>Loading ...</h2>
    }


    const onClickTweet = () => {
        console.log("New tweet")
    }

    const closeModal = () => {
        setIsOpen(false)
    }


    const openTweetModal = () => {
        setIsOpen(true)
    }

    return (
        <div className="w-screen h-screen flex bg-white dark:bg-black" >

            {/* Menu panel */}
            <div className=' hidden md:flex w-2/6 align-middle justify-end'>
                <MenuOptions openTweetModal={openTweetModal} />
            </div>


            {/* News feed */}
            <div className="text-white h-full border border-solid border-gray-100 overflow-y-auto
                md:w-3/6 sm:w-full">

                {/* Heading */}
                <NewFeedHeader heading="Home" />

                {/* Tweet container */}
                <div className='hidden md:block'>
                    <TweetContainer submitTweet={onClickTweet} />
                </div>

                {/* Post list */}
                <Post newsFeedData={newsFeedData} />
            </div>


            {/* TweetIcon - mobileView */}
            <div className="w-14 h-14 md:hidden bottom-10 right-5 absolute bg-twitterBlue rounded-full flex items-center justify-center"
                onClick={openTweetModal}
            >
                <EditIcom sx={{ color: color.white }} />
            </div>

            {/* side widgets */}
            <Widgets />

            {/* Modal */}
            <ModalComponent isMobile={isMobile} isOpen={isOpen} closeModal={closeModal} />

        </div >
    )
}

export default HomePage