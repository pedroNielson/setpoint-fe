"use client";

import { Box } from "@mui/material";
import Sidebar from "@/components/sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, overflow: "auto" }}>
          {children}
        </Box>
      </Box>
    </div>
  );
}
