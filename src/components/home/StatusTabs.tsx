"use client";

import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";

export default function StatusTabs() {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Ativos" />
        <Tab label="Encerrados" />
      </Tabs>
    </Box>
  );
}
