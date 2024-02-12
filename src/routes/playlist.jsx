import SearchBar from "../assets/search-bar"
import SearchResults from "../assets/search-results"
import Spotify from "../util/spotify";
import { useState } from "react";
import React, { useCallback } from "react";

export default function Playlist() {
    const [searchResults, setSearchResults] = useState([]);

    const search = useCallback((term) => {
        Spotify.search(term).then(setSearchResults);
      }, []);

    return (
        <div id="playlistContainer" className="flex flex-row flex-wrap justify-evenly w-screen mt-10">  
            <div id="musicPlayer" style={{width: '600px', height:'80vh'}}>
                <iframe style={{borderRadius: 12, width: '600px', height:'100%'}} src="https://open.spotify.com/embed/playlist/26wd56yxtnTqiTpA7jJo7Q?utm_source=generator" loading="lazy"></iframe>
            </div>  
            <div id="searchBox" style={{width:'600px', height:'600px'}}>
                <SearchBar onSearch={search}/>
                <div id="searchResults" className="overflow-y-scroll">
                    <SearchResults searchResults={searchResults}/>
                </div>
            </div>            
        </div>
    )
}