import { Fragment } from "react";
import { Link } from "react-router-dom";
import song from "../../assets/songs.jpeg"
const Playlist = ({playlists}) => {
    return (
        <Fragment>
            {playlists.map((playlist)=>(
                <Link key={playlist._id} to={`/playlist/${playlist._id}`}>
                    <div className="playlist-com">
                        {playlist.img === "" ? (
                            <img 
                            src={song}
                            alt={playlist.name} />
                        ) : (
                            <img src={playlist.img} alt={playlist.name} />
                        )}
                        <p>{playlist.name}</p>
                        <span>{playlist.desc}</span>
                    </div>
                </Link>
            ))}
        </Fragment>
    );
};