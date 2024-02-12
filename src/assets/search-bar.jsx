import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import React, { useCallback } from "react";


export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const search = useCallback(() => {
    props.onSearch(searchTerm);
  }, [props.onSearch, searchTerm]);

  return (
    <Container>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 500 }}
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