"use client";

import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import {
  FiPlay,
  FiCopy,
  FiMinimize2,
  FiMaximize2,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

interface Props {
  initialHtml?: string;
  initialCss?: string;
  height?: number;
}

export default function CodeBlockRunnerCSS({
  initialHtml = "",
  initialCss = "",
  height = 200,
}: Props) {
  // Estados para armazenar os códigos separados
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [cssCode, setCssCode] = useState(initialCss);
  
  // Controle de abas
  const [activeTab, setActiveTab] = useState<"html" | "css">("html");

  // Estado do resultado combinado
  const [output, setOutput] = useState("");
  
  // Controles de interface
  const [editorExpanded, setEditorExpanded] = useState(false);
  const [resultExpanded, setResultExpanded] = useState(true);

  // Função para juntar o CSS e o HTML num único documento para o iframe
  const generateOutput = (html: string, css: string) => {
    return `
      <style>
        ${css}
      </style>
      ${html}
    `;
  };

  // Inicializa o output logo na primeira renderização
  useEffect(() => {
    setOutput(generateOutput(initialHtml, initialCss));
  }, [initialHtml, initialCss]);

  function runCode() {
    setOutput(generateOutput(htmlCode, cssCode));
    setResultExpanded(true);
  }

  function copyCode() {
    // Copia o código da aba que está ativa no momento
    const codeToCopy = activeTab === "html" ? htmlCode : cssCode;
    navigator.clipboard.writeText(codeToCopy);
  }

  return (
    <div className="border border-gray-700 bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg mt-6">
      
      {/* HEADER E ABAS */}
      <div className="flex justify-between items-center bg-[#161616] border-b border-gray-700">
        
        {/* Abas de Navegação */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("html")}
            className={`px-5 py-3 font-semibold text-sm transition-all border-b-2 ${
              activeTab === "html"
                ? "border-orange-500 text-orange-400 bg-[#1e1e1e]"
                : "border-transparent text-gray-400 hover:text-gray-200 hover:bg-[#252525]"
            }`}
          >
            index.html
          </button>
          <button
            onClick={() => setActiveTab("css")}
            className={`px-5 py-3 font-semibold text-sm transition-all border-b-2 ${
              activeTab === "css"
                ? "border-blue-500 text-blue-400 bg-[#1e1e1e]"
                : "border-transparent text-gray-400 hover:text-gray-200 hover:bg-[#252525]"
            }`}
          >
            style.css
          </button>
        </div>

        {/* Controles da Direita */}
        <div className="flex gap-3 items-center px-4">
          <button
            onClick={copyCode}
            className="text-gray-400 hover:text-white transition"
            title={`Copiar ${activeTab.toUpperCase()}`}
          >
            <FiCopy size={18} />
          </button>

          <button
            onClick={() => setEditorExpanded(!editorExpanded)}
            className="text-gray-400 hover:text-white transition"
            title="Expandir/Minimizar editor"
          >
            {editorExpanded ? <FiMinimize2 size={18} /> : <FiMaximize2 size={18} />}
          </button>

          <button
            onClick={runCode}
            className="bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded flex items-center gap-1 font-medium text-sm transition-colors shadow-sm"
          >
            <FiPlay size={16} /> Executar
          </button>
        </div>
      </div>

      {/* EDITOR MONACO */}
      <div>
        <Editor
          height={editorExpanded ? "400px" : `${height}px`}
          language={activeTab} // Muda automaticamente a sintaxe (html ou css)
          theme="vs-dark"
          value={activeTab === "html" ? htmlCode : cssCode}
          onChange={(value) => {
            if (activeTab === "html") {
              setHtmlCode(value || "");
            } else {
              setCssCode(value || "");
            }
          }}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            automaticLayout: true,
            padding: { top: 16 }, // Dá um respiro visual no topo do código
          }}
        />
      </div>

      {/* RESULTADO: HEADER */}
      <div className="bg-[#111] border-t border-gray-700 px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-[#1a1a1a] transition-colors"
           onClick={() => setResultExpanded(!resultExpanded)}>
        <span className="text-gray-300 font-semibold text-sm flex items-center gap-2">
          {resultExpanded ? <FiChevronDown size={18} /> : <FiChevronUp size={18} />}
          Resultado
        </span>
      </div>

      {/* OUTPUT (IFRAME) */}
      {resultExpanded && (
        <div className="bg-white border-t border-gray-700">
          <iframe
            srcDoc={output}
            className="w-full bg-white"
            style={{ height: editorExpanded ? 400 : height }}
            title="Resultado do Código"
          ></iframe>
        </div>
      )}
    </div>
  );
}