"use client";

import { useState } from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";

import { Outlet } from "react-router-dom";
import DrawerAulas from "../components/drawerAula";
import { Menu } from "@mui/icons-material";

const drawerWidth = 260;

export default function DefaultPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
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

      {/* Drawer */}
      <DrawerAulas
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Conteúdo */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: { sm: `${drawerWidth}px` }, // desloca no desktop, ignora no mobile
          display: "flex",
          justifyContent: "center", // centraliza horizontalmente
          alignItems: "flex-start", // topo, mas centralizado
          width: "100%",
        }}
      >
        <div className="w-full max-w-4xl">
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}
