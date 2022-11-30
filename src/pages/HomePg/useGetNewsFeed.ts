import { useQuery } from 'react-query'
import { getNewsFeed } from '../../services/getNewsFeed'

const useGetNewsFeed = () => {

    const { data, isLoading } = useQuery('getNewsFeed', getNewsFeed)

    return {
        newsFeedData: data,
        isLoadingNewsFeed: isLoading
    }
}

export default useGetNewsFeed