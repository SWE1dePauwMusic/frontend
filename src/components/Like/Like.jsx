import { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Like.css"

const Like = () => {
    const[like, setLike] =useState(false);

    return (
        <IconButton className="like-button" onClick={() => setLike(!like)}>
            {!like ? (<FavoriteBorderIcon className="like-outline"/>) :(<FavoriteIcon className="like-fill"/>)}
        </IconButton>
    )
}

export default Like;