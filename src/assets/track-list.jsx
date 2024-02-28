import React from "react";
import Spotify from "../util/spotify";
import Track from "./track";
import { useState } from "react";


const TrackList = (props) => {
  const [playlistTracks, setplaylistTracks] = useState([]);
  Spotify.getPlaylist().then(setplaylistTracks);
  return (
    <div className="TrackList">
      {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
            playlistTracks={playlistTracks}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
