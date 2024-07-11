import React, { useState } from 'react';
import makeRequest from "../../Config/request";
import Playlist from "../../components/Playlists/Playlist2";

const TopTrack = () => {
    const [playlist, setPlayListReady] = useState(null);

    const handleToptrack = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            const options = {
                method: 'GET',
                url: `http://localhost:5000/top-tracks`,
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                params: {
                    'limit':20,
                    'time_range':'medium_term',
                }
            }

            const response = await makeRequest(options);
            setPlayListReady(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleRecommendationWithTopTrack = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            const options = {
                method: 'GET',
                url: `http://localhost:5000/top-tracks`,
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                params: {
                    'limit':5,
                    'time_range':'medium_term',
                }
            }
            const response = await makeRequest(options);
            const listId = response.data.playlistInfo.trackList.map((item) => item.id);

            const options2 = {
                method: 'GET',
                url: `http://localhost:5000/recommendations`,
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
            console.log(response2.playlistInfo)
            setPlayListReady(response2);



        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <button style={styles.playButton} onClick={handleToptrack}>
                Top Track
            </button>
            <button style={styles.playButton} onClick={handleRecommendationWithTopTrack}>
                Recommend with Top 5 Track
            </button>
            {playlist && (
                <Playlist
                    accessToken={localStorage.getItem("accessToken")}
                    deviceId={localStorage.getItem("deviceId")}
                    playlistResponse={playlist}
                />
            )}
        </>
    )
}

const styles = {
    playButton: {
        padding: '5px 10px',
        fontSize: '14px',
    },
}

export { TopTrack };
