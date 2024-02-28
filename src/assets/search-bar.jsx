import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import React, { useCallback } from "react";


export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const search = useCallback(() => {
    props.onSearch(searchTerm);
  }, [props.onSearch, searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // props.onSearch(searchTerm);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      search();
    }
  }


  return (
    <Container>
      <TextField
        id="search"
        type="search"
        label="Search"
        tabIndex={0}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        sx={{ width: 400 }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <SearchIcon onClick={search}/>
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}
