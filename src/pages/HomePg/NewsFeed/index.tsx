

import TweetContainer from '../../../components/TweetContainer'
import Posts from '../../../components/Posts';
import { AuthContext } from '../../../use-auth'
import NewFeedHeader from '../NewsFeedHeader';
import { useContext } from 'react';
import GuestUserView from './GuestUserView'
import useGetTrendingData from '../useGetTrendingData';

const NewsFeed = ({ data, isLoading }: { data?: {}, isLoading?: boolean }): JSX.Element => {
    const { isLoggedIn } = useContext(AuthContext);
    const { trendingData } = useGetTrendingData()


    const submitTweet = () => {
        console.log("New tweet")
    }

    if (isLoading) {
        return <h1>Loading ..</h1>
    }


    return (
        <div className="text-white h-full border border-solid border-gray-100 dark:border-slate-700
        overflow-y-auto w-3/6 ">
            <>
                {isLoggedIn() ? (
                    <>

                        {/* Heading */}
                        <NewFeedHeader heading="Home" />

                        {/* Tweet container */}
                        <TweetContainer onSubmit={submitTweet} />

                        {/* Post list */}
                        <Posts newsFeedData={data} />
                    </>

                ) : <>
                    <GuestUserView data={trendingData} />
                </>}

            </>
        </div>

    )

}

export default NewsFeed