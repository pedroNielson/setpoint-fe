import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useState } from "react";

interface SearchBarProps {
  label?: string;
}

const SearchBar = ({ label = "Buscar..." }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleClear = () => setQuery("");
  const handleSearch = () => {
    // Implement search logic here
  };

  return (
    <TextField
      id="search-bar"
      label={label}
      variant="outlined"
      placeholder="Digite sua busca..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      sx={{ width: "100%", borderRadius: 2 }}
      slotProps={{
        input: {
          endAdornment: query ? (
            <ClearIcon
              color="action"
              style={{ cursor: "pointer" }}
              onClick={handleClear}
            />
          ) : (
            <SearchIcon
              color="action"
              style={{ cursor: "pointer" }}
              onClick={handleSearch}
            />
          ),
        },
      }}
    />
  );
};

export default SearchBar;
