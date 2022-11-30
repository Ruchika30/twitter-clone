
import response from '../../mocks/services/getUserProfileData'


const pivotData = (data: any) => {
    const {
        profile_background_image_url: backgroundImage,
        screen_name: screenName,
        verified,
        username: userName,
        followers_count: followers,
        following,
        joined,
        description,
        profile_image_url: profileImage } = data.user


    return {
        tweets: data.tweets,
        backgroundImage,
        screenName,
        profileImage,
        userName,
        verified,
        followers,
        following,
        joined,
        description
    }
}


export const getProfileDetails = () => {
    return fetch('/getProfileDetails')
        .then(() => pivotData(response.data));

}