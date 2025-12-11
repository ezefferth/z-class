"use client";

import { useState } from "react";
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
  initialCode: string;
  height?: number;
}

export default function CodeBlockRunner({
  initialCode,
  height = 200,
}: Props) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState(initialCode);
  const [editorExpanded, setEditorExpanded] = useState(false);
  const [resultExpanded, setResultExpanded] = useState(true);

  function runCode() {
    setOutput(code);
    setResultExpanded(true);
  }

  function copyCode() {
    navigator.clipboard.writeText(code);
  }

  return (
    <div className="border border-gray-700 bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg mt-6">

      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#161616] border-b border-gray-700">
        <span className="text-gray-300 font-semibold">Editor de Código (HTML)</span>

        <div className="flex gap-3 items-center">
          
          {/* COPIAR */}
          <button
            onClick={copyCode}
            className="text-gray-300 hover:text-white transition"
            title="Copiar código"
          >
            <FiCopy size={18} />
          </button>

          {/* EXPANDIR / MINIMIZAR EDITOR */}
          <button
            onClick={() => setEditorExpanded(!editorExpanded)}
            className="text-gray-300 hover:text-white transition"
            title="Expandir/Minimizar editor"
          >
            {editorExpanded ? <FiMinimize2 size={18} /> : <FiMaximize2 size={18} />}
          </button>

          {/* EXECUTAR */}
          <button
            onClick={runCode}
            className="bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded flex items-center gap-1"
          >
            <FiPlay size={16} /> Executar
          </button>
        </div>
      </div>

      {/* EDITOR */}
      <div>
        <Editor
          height={editorExpanded ? "350px" : `${height}px`}
          defaultLanguage="html"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            automaticLayout: true,
          }}
        />
      </div>

      {/* RESULTADO: HEADER */}
      <div className="bg-[#111] border-t border-gray-700 px-4 py-2 flex justify-between items-center">
        <span className="text-gray-300 font-semibold">Resultado</span>

        <button
          onClick={() => setResultExpanded(!resultExpanded)}
          className="text-gray-300 hover:text-white transition"
        >
          {resultExpanded ? <FiChevronDown size={20} /> : <FiChevronUp size={20} />}
        </button>
      </div>

      {/* OUTPUT */}
      {resultExpanded && (
        <div className="bg-white border-t border-gray-700">
          <iframe
            srcDoc={output}
            className="w-full"
            style={{ height: editorExpanded ? 350 : 220 }}
          ></iframe>
        </div>
      )}
    </div>
  );
}
