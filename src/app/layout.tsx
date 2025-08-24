import "./globals.css";
import Sidebar from "@/components/sidebar";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const drawerWidth = 240;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Box sx={{ display: "flex" }}>
          {/* Sidebar fixa */}
          <Sidebar />

          {/* Conteúdo principal */}
          <Box
            // component="main"
            sx={{
              width: "100%",
              // ml: `${drawerWidth}px`,
              // p: 3,
              backgroundColor: "#e9ecef", // cor de fundo suave para o conteúdo
              minHeight: "100vh", // garante que o conteúdo ocupe toda a altura da
            }}
          >
            {/* <AppBar
              position="fixed"
              // sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
              <Toolbar>
                <Typography variant="h6" noWrap component="div">
                  Sistema de Campeonatos
                </Typography>
              </Toolbar>
            </AppBar>
            <Toolbar /> espaçamento por causa do AppBar */}
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
