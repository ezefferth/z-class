"use client";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Box,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

interface DrawerAulasProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const drawerWidth = 260;

const disciplinas = {
  "Fundamentos de Desenvolvimento Web": [
    "Aula 0",
    "Aula 1",
    "Aula 2",
    "Aula 3",
    "Aula 4",
  ],
  "Análise de Algoritmos": ["Aula 1", "Aula 2"],
  "Introdução a Computação": ["Aula 0", "Aula 1"],
  "Desenvolvimento de Aplicações Móveis": ["Aula 0", "Aula 1"]
};

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
}

export default function DrawerAulas({
  mobileOpen,
  handleDrawerToggle,
}: DrawerAulasProps) {
  const router = useRouter();
  const pathname = usePathname();

  const pathParts = pathname.split("/").filter(Boolean);
  const activeDiscSlug = pathParts[1];
  const activeAulaSlug = pathParts[2];

  const [openDisciplinas, setOpenDisciplinas] = useState<
    Record<string, boolean>
  >({});

  function toggleDisciplina(disciplina: string) {
    setOpenDisciplinas((prev) => ({
      ...prev,
      [disciplina]: !prev[disciplina],
    }));
  }

  const drawerContent = (
    <div>
      {/* Header do Drawer com botão de fechar */}
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Toolbar>

      <List>
        {Object.entries(disciplinas).map(([disciplina, aulas]) => {
          const disciplinaSlug = slugify(disciplina);
          const isDisciplinaAtiva = disciplinaSlug === activeDiscSlug;

          return (
            <Box key={disciplina}>
              <ListItemButton onClick={() => toggleDisciplina(disciplina)}>
                <ListItemText
                  primary={disciplina}
                  primaryTypographyProps={{
                    fontWeight: isDisciplinaAtiva ? "bold" : "normal",
                  }}
                />
                {openDisciplinas[disciplina] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse
                in={openDisciplinas[disciplina]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {aulas.map((aula) => {
                    const aulaSlug = slugify(aula);
                    const isAulaAtiva =
                      isDisciplinaAtiva && aulaSlug === activeAulaSlug;

                    return (
                      <ListItemButton
                        key={aula}
                        sx={{
                          pl: 4,
                          backgroundColor: isAulaAtiva
                            ? "rgba(0,0,0,0.1)"
                            : "transparent",
                          transition: "all 0.25s ease",
                          "& .MuiListItemText-primary": {
                            paddingLeft: isAulaAtiva ? "8px" : "0px",
                            transition: "all 0.25s ease",
                            fontWeight: isAulaAtiva ? "bold" : "normal",
                          },
                        }}
                        onClick={() =>
                          router.push(`/aulas/${disciplinaSlug}/${aulaSlug}`)
                        }
                      >
                        <ListItemText primary={aula} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </Box>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      {/* BOTÃO HAMBÚRGUER FLUTUANTE */}
      {/* Ele some automaticamente quando o menu está aberto para não sobrepor o botão de fechar */}
      {!mobileOpen && (
        <IconButton
          color="inherit"
          aria-label="abrir menu"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1100, // Garante que fique acima do conteúdo da página
            backgroundColor: "white",
            boxShadow: 2,
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* DRAWER MOBILE (Sobrepõe o conteúdo) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* DRAWER DESKTOP (Empurra o conteúdo) */}
      <Drawer
        variant="persistent" // <-- Mudado de "permanent" para "persistent"
        open={mobileOpen}    // <-- Agora obedece ao estado de abertura
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}