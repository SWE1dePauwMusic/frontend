import React, { useState } from 'react';
import makeRequest from "../../utils/request";
import Playlist from "../../components/Playlists/Playlist2";
import {getTokenHandler} from "../../utils/tokenHandling";
import {useNavigate} from "react-router-dom";
import {GetLikedPlaylist, RemoveTrackFromLikedPlaylist} from "../../Services/manageLikePlaylist";

const LikedPlaylist = () => {
    const [playlist, setPlayList] = useState(null)
    const navigate = useNavigate()

    const GetLikedPlaylist = async () => {
        try {
            const accessToken = getTokenHandler('accessToken');

            const options = {
                method: 'GET',
                url: `http://localhost:5000/my-fav`,
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                // params: {
                //     'limit':20,
                //     'time_range':'medium_term',
                // }
            }

            const responseData = await makeRequest(options);
            if (!responseData.success) {
                // Log error details and possibly return or throw an error
                console.log('ErrorCode:', responseData.status, 'ErrorMessage:', responseData.error);
                return; // Or handle the error as needed, maybe throw an error or set an error state
            }
            setPlayList(responseData);
        } catch (error) {
            console.log(error);
        }
    }

    const RemoveTrackFromLikedPlaylist = async (trackId) => {
        console.log("remove track from like playlist: ", trackId)
        const accessToken = getTokenHandler('accessToken');

        const options = {
            method: 'DELETE',
            url: `http://localhost:5000/my-fav`,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "ids": [trackId]
            }),
        }

        try {
            const responseData = await makeRequest(options);
            if (!responseData.success) {
                // Log error details and possibly return or throw an error
                console.log('ErrorCode:', responseData.status, 'ErrorMessage:', responseData.error);
                return; // Or handle the error as needed, maybe throw an error or set an error state
            }
            await GetLikedPlaylist();
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <>
            <button onClick={() => navigate('/main')}>Back</button>

            <button style={styles.playButton} onClick={GetLikedPlaylist}>
                Top Track
            </button>
            {/*<button style={styles.playButton} onClick={handleRecommendationWithTopTrack}>*/}
            {/*    Recommend with Top 5 Track*/}
            {/*</button>*/}
            {playlist && (
                <Playlist
                    playlistResponse={playlist} playlistId={"Like-playlist"} removeTrack={RemoveTrackFromLikedPlaylist}
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

export { LikedPlaylist };
