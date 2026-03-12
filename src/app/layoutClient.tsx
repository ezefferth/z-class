"use client";

import { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, useTheme } from "@mui/material";
import { Menu } from "@mui/icons-material";
import DrawerAulas from "../components/drawerAula"; // Ajuste o path se necessário

const drawerWidth = 260;

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  // Como agora esse estado controla tanto o mobile quanto o desktop, 
  // podemos até chamar de "menuOpen", mas manteremos seu nome para facilitar.
  const [mobileOpen, setMobileOpen] = useState(true); // Recomendo iniciar true no desktop
  const theme = useTheme();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* APP BAR */}
      <AppBar
        position="fixed"
        sx={{
          // A largura e a margem mudam dinamicamente se o menu está aberto ou não
          width: mobileOpen ? { sm: `calc(100% - ${drawerWidth}px)` } : "100%",
          ml: mobileOpen ? { sm: `${drawerWidth}px` } : 0,
          // Adiciona a animação suave do MUI ao abrir/fechar
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(mobileOpen && {
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
        }}
      >
        <Toolbar>
          {/* Botão de Hambúrguer: agora aparece em QUALQUER tela se o menu estiver fechado */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              ...(mobileOpen && { display: { sm: "none" } }), // Esconde no desktop SÓ se o menu já estiver aberto
            }}
          >
            <Menu />
          </IconButton>
          <h1 className="text-lg font-semibold">Z-Class</h1>
        </Toolbar>
      </AppBar>

      {/* COMPONENTE DO MENU */}
      <DrawerAulas
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* CONTEÚDO PRINCIPAL (CHILDREN) */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          // A mágica acontece aqui: A margem esquerda empurra ou puxa o conteúdo
          ml: mobileOpen ? { sm: `${drawerWidth}px` } : 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          // Mesma animação da AppBar para sincronizar o movimento
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(mobileOpen && {
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
        }}
      >
        <div className="w-full max-w-4xl">{children}</div>
      </Box>
    </Box>
  );
}