//request to play a track


import makeRequest from "./request";

async function reqPlayTrackWithId(accessToken, deviceId, trackUri){

    //use makeRequest
    const options = {
        method: 'PUT',
        url: `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uris: ['spotify:track:' + trackUri],
        })
    }
    try {
        const response = await makeRequest(options);
        console.log(response)
        return response;
    } catch (error) {
        console.error('Error playing track:', error);
        throw error;
    }
}

export {reqPlayTrackWithId};
//
// const playTrack = (trackUri) => {
//     fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
//         method: 'PUT',
//         headers: {
//             'Authorization': `Bearer ${accessToken}`,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             uris: ['spotify:track:'+ trackUri],
//         }),
//     }).catch(error => console.error('Error playing track:', error));
// };