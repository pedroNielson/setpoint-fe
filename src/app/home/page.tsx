"use client";

import HeaderBar from "@/components/home/HeaderBar";
import { Box, Typography } from "@mui/material";
import StatusTabs from "@/components/home/StatusTabs";
import CategoryFilters from "@/components/home/CategoryFilters";
import EventsGrid from "@/components/home/EventsGrid";

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
      <HeaderBar />
      <StatusTabs />
      <CategoryFilters />
      <Typography variant="h6" fontWeight="bold" color="#333">
        Eventos
      </Typography>
      <EventsGrid />
    </Box>
  );
}
