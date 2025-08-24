"use client";

import { Box, Typography, Button } from "@mui/material";

export default function HeaderBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitle1" color="#666">
          Arena
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="#333">
          Praia Beach
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FD5E09",
          color: "#fff",
          "&:hover": { backgroundColor: "#e04e00" },
          borderRadius: 2,
          px: 3,
          py: 1,
          textTransform: "none",
        }}
      >
        + Criar evento
      </Button>
    </Box>
  );
}
