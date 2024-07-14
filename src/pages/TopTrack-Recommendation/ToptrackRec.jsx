import React, { useState } from 'react';
import makeRequest from "../../utils/request";
import Playlist from "../../components/Playlists/Playlist2";
import {getTokenHandler} from "../../utils/tokenHandling";
import {useNavigate} from "react-router-dom";

const TopTrack = () => {
    const [playlist, setPlayListReady] = useState(null);
    const navigate = useNavigate();
    const handleToptrack = async () => {
        try {
            const accessToken = getTokenHandler('accessToken');

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

            const responseData = await makeRequest(options);
            if (!responseData.success) {
                // Log error details and possibly return or throw an error
                console.log('ErrorCode:', responseData.status, 'ErrorMessage:', responseData.error);
                return; // Or handle the error as needed, maybe throw an error or set an error state
            }
            setPlayListReady(responseData);
        } catch (error) {
            console.log(error);
        }
    }

    const handleRecommendationWithTopTrack = async () => {
        try {
            const accessToken = getTokenHandler('accessToken');

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
            if (!response2.success) {
                // Log error details and possibly return or throw an error
                console.log('ErrorCode:', response2.status, 'ErrorMessage:', response2.error);
                return; // Or handle the error as needed, maybe throw an error or set an error state
            }
            setPlayListReady(response2);



        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <button onClick={() => navigate('/main')}>Back</button>

            <button style={styles.playButton} onClick={handleToptrack}>
                Top Track
            </button>
            <button style={styles.playButton} onClick={handleRecommendationWithTopTrack}>
                Recommend with Top 5 Track
            </button>
            {playlist && (
                <Playlist
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
