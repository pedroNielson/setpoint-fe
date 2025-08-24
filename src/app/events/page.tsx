"use client";

import { Box, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        p: 3,
        backgroundColor: "#e9ecef",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="#333">
        Eventos
      </Typography>
    </Box>
  );
}
