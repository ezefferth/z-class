"use client";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Box,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate, useLocation } from "react-router-dom";
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
  ],
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
  const navigate = useNavigate();
  const location = useLocation();

  // disciplina e aula atualmente ativa pela rota
  const pathParts = location.pathname.split("/").filter(Boolean);
  const activeDiscSlug = pathParts[1]; // /aulas/[disciplina]/[aula]
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
      <Toolbar />
      <List>
        {Object.entries(disciplinas).map(([disciplina, aulas]) => {
          const disciplinaSlug = slugify(disciplina);
          const isDisciplinaAtiva = disciplinaSlug === activeDiscSlug;

          return (
            <Box key={disciplina}>
              {/* DISCIPLINA */}
              <ListItemButton onClick={() => toggleDisciplina(disciplina)}>
                <ListItemText
                  primary={disciplina}
                  primaryTypographyProps={{
                    fontWeight: isDisciplinaAtiva ? "bold" : "normal",
                  }}
                />
                {openDisciplinas[disciplina] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              {/* AULAS */}
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
                          transition: "all 0.25s ease", // 👈 animação suave
                          "& .MuiListItemText-primary": {
                            paddingLeft: isAulaAtiva ? "8px" : "0px",
                            transition: "all 0.25s ease",
                            fontWeight: isAulaAtiva ? "bold" : "normal",
                          },
                        }}
                        onClick={() =>
                          navigate(`/aulas/${disciplinaSlug}/${aulaSlug}`)
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
      {/* MOBILE */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* DESKTOP */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
