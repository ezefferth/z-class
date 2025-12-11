"use client";

import { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // DARK
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({
  code,
  language = "javascript",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const highlighted = Prism.highlight(
    code,
    Prism.languages[language],
    language
  );

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative bg-[#1e1e1e] text-white rounded-md p-4 mb-5">
      <button
        onClick={copy}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-xs px-2 py-1 rounded"
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>

      <pre className="overflow-x-auto">
        <code
          className="block"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </div>
  );
}
