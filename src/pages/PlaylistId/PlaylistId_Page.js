import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Playlist from "../../components/Playlists/Playlist2";
import {getTokenHandler} from "../../utils/tokenHandling";
import makeRequest from "../../utils/request";


const PlaylistWithId = () => {
    const { playlistId } = useParams(); // Extracting playlistId from the URL
    const [playlist, setPlaylist] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const accessToken = getTokenHandler("accessToken");
                const options = {
                    method: "GET",
                    url: `http://localhost:5000/get-playlist`,
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    params: {
                        playlistId: playlistId,
                    },
                };
                const responseData = await makeRequest(options);
                console.log(responseData)
                if (!responseData.success) {
                    console.log("ErrorCode:", responseData.status, "ErrorMessage:", responseData.error);
                    return;
                }
                setPlaylist(responseData);
            } catch (error) {
                console.log(error);

            }
        }
        fetchPlaylist();
    }, []);
    if (!playlist) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <button onClick={() => navigate('/main/user-playlists')}>Back</button>
            <Playlist playlistResponse={playlist} playlistId={playlistId} />
        </>
    )
}



export { PlaylistWithId };