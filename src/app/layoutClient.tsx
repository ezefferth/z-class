"use client";

import { useState } from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";
import DrawerAulas from "../components/drawerAula";

const drawerWidth = 260;

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <h1 className="text-lg font-semibold">Minhas Aulas</h1>
        </Toolbar>
      </AppBar>

      <DrawerAulas
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: { sm: `${drawerWidth}px` },
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <div className="w-full max-w-4xl">{children}</div>
      </Box>
    </Box>
  );
}
