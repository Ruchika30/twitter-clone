

import { useState } from 'react'
import MenuOptions from '../../components/MenuBar'
import Widgets from '../../components/Widgets'
import useGetProfileDetails from './useGetProfileDetails'
import ProfileBio from './ProfileBio'
import TweetsList from './TweetsListTabs'
import ModalComponent from '../../components/TweetModal'
import useWindowSize from '../../hooks/useWindowSize'

const ProfilePg = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { isMobile } = useWindowSize()

    const { profileData = { tweets: [] }, isLoadingProfileData } = useGetProfileDetails()

    if (isLoadingProfileData) {
        return <h1>Loading...</h1>
    }
    const openTweetModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }


    return (
        <div className="w-screen h-screen flex bg-white dark:bg-black" >

            {/* Menu sidebar */}
            <div className='w-2/6 flex align-middle justify-end'>
                <MenuOptions openTweetModal={openTweetModal} />
            </div>


            {/* Main area */}
            <div className="text-white h-full border border-solid border-gray-100  dark:border-slate-700	
                overflow-y-auto w-3/6 ">

                {/* Heading */}
                <div className='bg-white sticky top-0 z-30 dark:bg-black'>
                    <h1 className='text-lg text-black dark:text-white font-bold py-3 pl-4'>Profile</h1>
                </div>

                {/* ProfileBio */}
                <ProfileBio details={profileData} />


                {/* tweets  */}
                <TweetsList tweetList={profileData?.tweets} />
            </div>

            {/* side widgets */}
            <Widgets />

            {/* Modal */}
            <ModalComponent isMobile={isMobile} isOpen={isOpen} closeModal={closeModal} />

        </div >
    )
}

export default ProfilePg