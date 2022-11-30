

import MenuOptions from '../../components/MenuBar'
import Widgets from '../../components/Widgets'
import useGetProfileDetails from './useGetProfileDetails'
import ProfileBio from './ProfileBio'
import TweetsList from './TweetsListTabs'

const ProfilePg = () => {
    const { profileData = { tweets: [] }, isLoadingProfileData } = useGetProfileDetails()

    if (isLoadingProfileData) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="w-screen h-screen flex bg-white dark:bg-black" >

            {/* Menu sidebar */}
            <div className='w-2/6 flex align-middle justify-end'>
                <MenuOptions />
            </div>


            {/* Main area */}
            <div className="text-white h-full border border-solid border-gray-100	
                overflow-y-auto w-3/6 ">

                {/* Heading */}
                <div className='bg-white sticky top-0 z-30'>
                    <h1 className='text-lg text-black  font-bold py-3 pl-4'>Profile</h1>
                </div>

                {/* ProfileBio */}
                <ProfileBio details={profileData} />


                {/* tweets  */}
                <TweetsList tweetList={profileData?.tweets} />
            </div>

            {/* side widgets */}
            <div className='w-2/6 flex-auto'>
                <Widgets />
            </div>

        </div >
    )
}

export default ProfilePg