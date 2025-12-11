"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "../app/page";
import Aula0 from "../app/aulas/fudDevWeb/aula0";
import Aula1 from "../app/aulas/fudDevWeb/aula1";
import Aula2 from "../app/aulas/fudDevWeb/aula2";

export default function WebRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route
            path="aulas/fundamentosdedesenvolvimentoweb/aula0"
            element={<Aula0 />}
          />
          <Route
            path="aulas/fundamentosdedesenvolvimentoweb/aula1"
            element={<Aula1 />}
          />
          <Route
            path="aulas/fundamentosdedesenvolvimentoweb/aula2"
            element={<Aula2 />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
