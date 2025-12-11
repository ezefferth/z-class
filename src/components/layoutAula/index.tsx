import { ReactNode } from "react";

interface LayoutAulaProps {
  titulo: string;
  children: ReactNode;
}

export default function LayoutAula({ titulo, children }: LayoutAulaProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{titulo}</h2>
      <div className="prose dark:prose-invert">{children}</div>
    </div>
  );
}
