import React, { useState, useEffect } from "react";
import response from "./track";
import "./SongCard.css";
import Stack from "@mui/material/Stack";

export const SongCard = () => {
  const [trackData, setTrackData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch("track.json");
        console.log(response);
        if (!response) {
          throw new Error("Network response was not ok");
        }

        // const contentType = response.headers.get("content-type");
        // if (!contentType || !contentType.includes("application/json")) {
        //   throw new Error("Response is not JSON");
        // }

        // const data = await response.json();
        const data = response;
        setTrackData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!trackData) {
    return <div>Loading...</div>;
  }

  const { name, artists, popularity, duration, images } = trackData;
  console.log(artists);

  let imageUrl = "";
  if (images.length > 0) {
    imageUrl = images[1].url;
  }

  const formatDuration = (durationInMs) => {
    const minutes = Math.floor(durationInMs / 60000);
    const seconds = ((durationInMs % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  console.log(formatDuration(duration));

  return (
    <div className="songCard-body">
      <Stack direction="row" spacing={2} className="">
        <img className="song-image" src={imageUrl} alt="Current Song" />

        <div className="right-card">
          <div className="song-info">
            <h1>{name}</h1>
            <p>
              <b>{artists.join(", ")}</b> &#x2022; {name} &#x2022; year &#x2022;{" "}
              {formatDuration(duration)} &#x2022; {popularity}
            </p>
          </div>
        </div>
      </Stack>
    </div>
  );
};
