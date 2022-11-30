

const ProfileBio = ({ details }: { details: any }) => {
    const { backgroundImage,
        screenName,
        userName,
        followers,
        following,
        joined,
        description,
        profileImage } = details || {}

    return (
        <>
            {/* Banner */}
            <div className='w-full bg-black h-40'>
                <img src={backgroundImage} alt="background" className="w-full h-full" />
            </div>

            {/* Profile image */}
            <div className="w-40 h-40 ml-4 -mt-20 rounded-full flex justify-center items-center bg-slate-300"
            >
                <img src={profileImage} alt="profileImage" className="w-40 rounded-full" />
            </div>

            <div className="p-4 text-black ">
                <div className="font-extrabold text-xl">{screenName}</div>
                <div className="">@{userName}</div>
                <div className="mt-2">{description}</div>
                <div className="mt-2">Joined on: <span>{joined}</span></div>
                <div className="mt-2 text-sm flex">
                    <div className="mr-4">
                        <span className="font-extrabold mr-1">{following}</span>Following
                    </div>
                    <div>
                        <span className="font-extrabold  mr-1">{followers}</span>Followers
                    </div>
                </div>
            </div>

            {/* tweets  */}


        </>
    )
}

export default ProfileBio