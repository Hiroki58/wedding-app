import SearchBar from "../assets/search-bar"
import SearchResults from "../assets/search-results"
import Spotify from "../util/spotify";
import { useState } from "react";
import React, { useCallback } from "react";
import AlertDialog from '../assets/dialog';


export default function Playlist() {
    const [searchResults, setSearchResults] = useState([]);

    const search = useCallback((term) => {
        Spotify.search(term).then(setSearchResults);
    }, []);

    return (
        <div id="playlistContainer" className="flex flex-row flex-wrap justify-evenly w-screen mt-5">
            <AlertDialog title="Wedding music playlist" content="Let's add your favorite song to our wedding playlist!!" />
            <div id="musicPlayer" style={{ width: '600px', height: '80vh' }}>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/26wd56yxtnTqiTpA7jJo7Q?utm_source=generator" width="80%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div id="searchBox" style={{ width: '600px', height: '80vh' }}>
                <div className="sticky top-0 backdrop-blur-xl">
                    <SearchBar onSearch={search} />
                </div>
                <div id="searchResults">
                    <SearchResults searchResults={searchResults} />
                </div>
            </div>
        </div>
    )
}