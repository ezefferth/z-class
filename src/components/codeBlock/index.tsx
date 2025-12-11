"use client";

import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // OU seu tema atual do Prism
import { Copy, Play } from "lucide-react";

interface Props {
  initialCode: string;
  language?: string;
  onRun?: (code: string) => void; // opcional (para integrar ao CodeRunner)
}

export default function CodeBlock({ initialCode, language = "html", onRun }: Props) {
  const [code, setCode] = useState(initialCode);
  const highlightedRef = useRef<HTMLPreElement>(null);

  // Atualiza highlight ao digitar
  useEffect(() => {
    if (highlightedRef.current) {
      highlightedRef.current.innerHTML = Prism.highlight(code, Prism.languages[language], language);
    }
  }, [code, language]);

  return (
    <div className="relative border rounded-lg bg-[#1e1e1e] shadow-md overflow-hidden mt-6">

      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#2b2b2b] border-b border-neutral-700">
        
        {/* Botão copiar */}
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <Copy size={16} /> Copiar
        </button>

        {/* Botão executar (opcional) */}
        {onRun && (
          <button
            onClick={() => onRun(code)}
            className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            <Play size={16} /> Executar
          </button>
        )}
      </div>

      {/* ÁREA DO EDITOR */}
      <div className="relative">
        
        {/* Lado do highlight */}
        <pre
          ref={highlightedRef}
          className={`language-${language} p-4 text-sm min-h-[180px] overflow-auto`}
        />

        {/* Textarea invisível (mas posicionado por cima) */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="
            absolute inset-0 w-full h-full
            bg-transparent text-transparent caret-white
            font-mono text-sm p-4
            outline-none resize-none
            overflow-auto
          "
        />
      </div>
    </div>
  );
}
