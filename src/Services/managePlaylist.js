import {getTokenHandler} from "../utils/tokenHandling";
import makeRequest from "../utils/request";

const handleToptrack = async (timeRange) => {
    try {
        const accessToken = getTokenHandler('accessToken');

        const options = {
            method: 'GET',
            url: `/top-tracks`,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            params: {
                'limit':50,
                'time_range':`${timeRange}`,
            }
        }

        const responseData = await makeRequest(options);

        if (!responseData.success) {
            // Log error details and possibly return or throw an error
            console.log('ErrorCode:', responseData.status, 'ErrorMessage:', responseData.error);
            return; // Or handle the error as needed, maybe throw an error or set an error state
        }
        console.log("Top track", responseData)
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

const handleRecommendationWithTopTrack = async () => {
    try {
        const accessToken = getTokenHandler('accessToken');

        // const options = {
        //     method: 'GET',
        //     url: `/top-tracks`,
        //     headers: {
        //         'Authorization': `Bearer ${accessToken}`,
        //         'Content-Type': 'application/json',
        //     },
        //     params: {
        //         'limit':5,
        //         'time_range':'short_term',
        //     }
        // }
        const response = handleToptrack('short_term')
        const listId = response.data.playlistInfo.trackList.map((item) => item.spotifyId);

        const options2 = {
            method: 'GET',
            url: `/recommendations`,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            params: {
                'seed_tracks': listId.join(','),
                'limit': 20,
            }
        }
        const response2 = await makeRequest(options2);
        if (!response2.success) {
            // Log error details and possibly return or throw an error
            console.log('ErrorCode:', response2.status, 'ErrorMessage:', response2.error);
            return; // Or handle the error as needed, maybe throw an error or set an error state
        }
        return response2;



    } catch (error) {
        console.log(error);
    }
}

export { handleToptrack, handleRecommendationWithTopTrack };