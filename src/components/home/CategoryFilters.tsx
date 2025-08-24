"use client";

import { Box, Chip } from "@mui/material";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import SportsIcon from "@mui/icons-material/Sports";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { useState } from "react";

const categories = [
  { label: "Beach Tennis", icon: <SportsTennisIcon /> },
  { label: "Futvôlei", icon: <SportsVolleyballIcon /> },
  { label: "Vôlei", icon: <SportsIcon /> },
  { label: "Corrida", icon: <DirectionsRunIcon /> },
];

export default function CategoryFilters() {
  const [selected, setSelected] = useState("Beach Tennis");

  return (
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      {categories.map((cat) => (
        <Chip
          key={cat.label}
          label={cat.label}
          icon={cat.icon}
          clickable
          color={selected === cat.label ? "warning" : "default"}
          onClick={() => setSelected(cat.label)}
          sx={{
            borderRadius: 2,
            fontWeight: selected === cat.label ? "bold" : "normal",
          }}
        />
      ))}
    </Box>
  );
}
