import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { SearchIcon } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onsubmit={() => {}}
      sx={{
        borderRadius: "20",
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      Test
    </Paper>
  );
};

export default SearchBar;
