import React, { useState } from 'react';
import makeRequest from "../../utils/request";
import Playlist from "../../components/Playlists/Playlist2";
import {getTokenHandler} from "../../utils/tokenHandling";
import {useNavigate} from "react-router-dom";

const SearchTracks = () => {
    const [playlist, setPlayListReady] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchTrack = async (type) => {
        try {
            const accessToken = getTokenHandler('accessToken');

            const options = {
                method: 'GET',
                url: `/search`,
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                params: {
                    q: searchQuery,
                    type: type,
                    limit: 30,
                }
            }

            const responseData = await makeRequest(options);
            if (!responseData.success) {
                console.log("ErrorCode:", responseData.status, "ErrorMessage:", responseData.error);
                return;
            }
            console.log(responseData)
            setPlayListReady(responseData);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <button onClick={() => navigate('/main')}>Back</button>

            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                style={styles.input}
            />
            <button style={styles.searchButton} onClick={() => handleSearchTrack('track')}>Track</button>
            <button style={styles.searchButton} onClick={() => handleSearchTrack('album')}>Album</button>
            <button style={styles.searchButton} onClick={() => handleSearchTrack('artist')}>Artist</button>

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
    input: {
        margin: '10px 0',
        padding: '5px',
        fontSize: '14px',
    },
    searchButton: {
        margin: '0 5px',
        padding: '5px 10px',
        fontSize: '14px',
    },
}

export { SearchTracks };
