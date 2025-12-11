"use client";

import { useState } from "react";
import { Play, Minimize2, Maximize2 } from "lucide-react";

interface CodeRunnerProps {
  code: string;
}

export default function CodeRunner({ code }: CodeRunnerProps) {
  const [output, setOutput] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  function executar() {
    setOutput(code);
    setVisible(true);
  }

  function toggleVisible() {
    setVisible((prev) => !prev);
  }

  function toggleExpand() {
    setExpanded((prev) => !prev);
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow-md mt-6 bg-neutral-100 dark:bg-neutral-900 transition-all">
      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-2 bg-neutral-200 dark:bg-neutral-800 border-b">
        {/* Botão Executar */}
        <button
          onClick={executar}
          className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <Play size={16} />
          Executar Código
        </button>

        {/* Botões de controle */}
        <div className="flex items-center gap-3">
          {/* Minimizar / Mostrar */}
          <button
            onClick={toggleVisible}
            title={visible ? "Ocultar resultado" : "Mostrar resultado"}
            className="p-1 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded transition"
          >
            <Minimize2 size={20} color="white"/>
          </button>

          {/* Expandir / Reduzir */}
          <button
            onClick={toggleExpand}
            title={expanded ? "Reduzir" : "Expandir"}
            className="p-1 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded transition"
          >
            <Maximize2 size={20} color="white"/>
          </button>
        </div>
      </div>

      {/* OUTPUT */}
      <div
        className={`transition-all duration-300 ${
          visible ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <iframe
          className={`w-full border-none bg-white transition-all ${
            expanded ? "h-[600px]" : "h-[300px]"
          }`}
          sandbox="allow-scripts allow-same-origin"
          srcDoc={output}
        />
      </div>
    </div>
  );
}
