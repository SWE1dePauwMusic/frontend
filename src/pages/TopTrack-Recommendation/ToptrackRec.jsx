import React, {useEffect, useState} from 'react';
import makeRequest from "../../utils/request";
import Playlist from "../../components/Playlists/Playlist2";
import {getTokenHandler} from "../../utils/tokenHandling";
import {useNavigate} from "react-router-dom";
import {handleToptrack} from "../../Services/managePlaylist";

const TopTrack = () => {
    const [playlist, setPlayListReady] = useState(null);
    const navigate = useNavigate();



    // useEffect(async () => {
    //     handlePlaylistChange("short_term")
    // }, []);
    const handlePlaylistChange = async (timeRange) => {
         setPlayListReady(await handleToptrack(timeRange))
    }


    return (
        <>
            <button onClick={() => navigate('/main')}>Back</button>

            <button style={styles.playButton} onClick={() => handlePlaylistChange("short_term")}>
                Short-Term (4 weeks)
            </button>
            <button style={styles.playButton} onClick={()=>handlePlaylistChange("medium_term")}>
                Medium-Term (6 months)
            </button>
            <button style={styles.playButton} onClick={() => handlePlaylistChange("long_term")}>
                Long-Term (all time)
            </button>
            {/*<button style={styles.playButton} onClick={handleRecommendationWithTopTrack}>*/}
            {/*    Recommend with Top 5 Track*/}
            {/*</button>*/}
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

export {TopTrack };
