//request to play a track


import makeRequest from "../utils/request";
import {getTokenHandler} from "../utils/tokenHandling";

async function reqPlayTrackWithId(accessToken, deviceId, trackUris){
    // //use makeRequest
    // const options = {
    //     method: 'PUT',
    //     url: `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
    //     headers: {
    //         'Authorization': `Bearer ${accessToken}`,
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         uris: trackUris.map(trackUri => 'spotify:track:' + trackUri),
    //     })
    // }
    // try {
    //     const response = await makeRequest(options);
    //     console.log("Request Play", response)
    //     return response;
    // } catch (error) {
    //     console.error('Error playing track:', error);
    //     throw error;
    // }

    await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uris: trackUris.map(trackUri => 'spotify:track:' + trackUri),
        }),
    }).catch(error => console.error('Error playing playlist:', error));
}


async function reqPlayPlaylistWithId(accessToken, deviceId, playlistUri) {
    // const accessToken = getTokenHandler("accessToken");
    // const deviceId = localStorage.getItem("deviceId");
    await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            context_uri: `spotify:playlist:${playlistUri}`,
        }),
    }).catch(error => console.error('Error playing playlist:', error));
}

export {reqPlayTrackWithId, reqPlayPlaylistWithId};
