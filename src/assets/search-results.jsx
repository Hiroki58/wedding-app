import React from "react";

import TrackList from "./track-list";

const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      <TrackList tracks={props.searchResults}/>
    </div>
  );
};

export default SearchResults;
