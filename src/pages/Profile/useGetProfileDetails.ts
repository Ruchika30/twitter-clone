
import { useQuery } from 'react-query'
import { getProfileDetails } from '../../services/getProfileDetails'

const useGetProfileDetails = () => {
    const { data, isLoading } = useQuery('getProfileDetails', getProfileDetails)

    return {
        profileData: data,
        isLoadingProfileData: isLoading
    }


}

export default useGetProfileDetails