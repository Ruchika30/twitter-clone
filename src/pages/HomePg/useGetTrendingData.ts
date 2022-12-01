import { useQuery } from 'react-query'
import { getTrendingData } from '../../services/getTrendingData'

const useGetTrendingData = () => {

    const { data, isLoading } = useQuery('getTrendingData', getTrendingData)

    return {
        trendingData: data,
        isLoadingTrendingData: isLoading
    }
}

export default useGetTrendingData