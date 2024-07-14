//request to play a track


import makeRequest from "../utils/request";

async function reqPlayTrackWithId(accessToken, deviceId, trackUris){
    //use makeRequest
    const options = {
        method: 'PUT',
        url: `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uris: trackUris.map(trackUri => 'spotify:track:' + trackUri),
        })
    }
    try {
        const response = await makeRequest(options);
        console.log("Request Play", response)
        return response;
    } catch (error) {
        console.error('Error playing track:', error);
        throw error;
    }
}



export {reqPlayTrackWithId};
