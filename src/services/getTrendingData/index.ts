
import response from '../../mocks/services/getTrendingDetails'


export const getTrendingData = () => {
    return fetch('/getTrendingData')
        .then(() => (response.data));

}