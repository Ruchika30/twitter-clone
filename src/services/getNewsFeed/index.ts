
import response from '../../mocks/services/getNewsFeed'

export const getNewsFeed = () => {

    return fetch('/getNewsFeed')
        .then(() => response.data);

}