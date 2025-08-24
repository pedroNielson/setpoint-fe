"use client";
import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Avatar,
  Button,
} from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EventIcon from "@mui/icons-material/Event";
import ChatIcon from "@mui/icons-material/Chat";
import Image from "next/image";
import logo from "@/assets/Setpoint.png";
import SearchBar from "../searchBar";

const drawerWidth = 240;

export default function Sidebar() {
  const mainMenu = [
    { text: "Home", icon: <HomeIcon />, href: "/home" },
    { text: "Eventos", icon: <EventIcon />, href: "/events" },
  ];

  const footerMenu = [
    { text: "Feedback", icon: <ChatIcon />, href: "#" },
    { text: "Ajuda", icon: <HelpOutlineIcon />, href: "#" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#f8f9fa",
        },
        borderRight: "1px solid #e0e0e0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Image
          src={logo}
          alt="Setpoint Logo"
          width={1181 / 9}
          height={360 / 9}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", pl: 2, pb: 2 }}>
        <Avatar>AS</Avatar>
        <Box sx={{ p: 2 }}>
          <Box sx={{ fontWeight: "bold" }}>Boa tarde, Admin!</Box>
          <Box sx={{ fontSize: "0.875rem", color: "gray" }}>Administrador</Box>
        </Box>
      </Box>

      <Box sx={{ px: 2, pb: 2 }}>
        <SearchBar />
      </Box>

      <Box sx={{ overflow: "auto" }}>
        <List>
          {mainMenu.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ overflow: "auto" }}>
        <List>
          {footerMenu.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      <Box
        sx={{
          p: 2,
          gap: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <Box sx={{ fontWeight: "bold" }}>Faça um upgrade, vá além!</Box>
        <Box sx={{ fontSize: "0.875rem", color: "gray", pb: 2 }}>
          Crie campeonatos, acesse relatórios e fidelize atletas
        </Box>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#FD5E09",
            color: "#fff",
            "&:hover": { backgroundColor: "#e04e00" },
            borderRadius: 2,
          }}
        >
          Upgrade
        </Button>
      </Box>
    </Drawer>
  );
}
