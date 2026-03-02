"use client";

import dynamic from 'next/dynamic';
import LayoutAula from "@/src/components/layoutAula";

const CodeBlock = dynamic(
  () => import("@/src/components/codeBlock"),
  { ssr: false, loading: () => <p>Carregando editor...</p> }
);

export default function Aula1AnaliseAlgoritmos() {
  return (
    <LayoutAula titulo="Aula 1 – Modelo RAM, Crescimento Assintótico e Fundamentos Teóricos">
      <section className="space-y-12">

        {/* BLOCO 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            1. O que significa analisar um algoritmo?
          </h2>

          <p>
            A análise de algoritmos não busca medir segundos reais de execução,
            mas compreender matematicamente como o tempo de execução cresce
            em função do tamanho da entrada.
          </p>

          <p className="mt-3">
            Se dois algoritmos resolvem o mesmo problema, queremos saber:
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Qual cresce mais lentamente?</li>
            <li>Qual escala melhor para grandes volumes de dados?</li>
            <li>Qual é viável para n muito grande?</li>
          </ul>

          <p className="mt-4">
            A análise de algoritmos é, essencialmente, uma análise de funções matemáticas.
          </p>
        </div>

        {/* BLOCO 2 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            2. O Modelo RAM (Random Access Machine)
          </h2>

          <p>
            Para eliminar dependências de hardware, adotamos o Modelo RAM.
            Ele assume uma máquina abstrata onde:
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Cada operação elementar custa 1 unidade de tempo.</li>
            <li>Acesso à memória custa 1 unidade de tempo.</li>
            <li>Não existe paralelismo.</li>
            <li>Números possuem tamanho ilimitado.</li>
          </ul>

          <p className="mt-4">
            Essa abstração nos permite modelar algoritmos como funções T(n).
          </p>
        </div>

        {/* BLOCO 3 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            3. Exemplo Formal de Análise
          </h2>

          <p>
            Considere o algoritmo que soma os elementos de um vetor:
          </p>

          <CodeBlock
            initialCode={`function somaVetor(A) {
  let soma = 0;           // c1
  for (let i = 0; i < A.length; i++) { // c2(n+1)
    soma = soma + A[i];   // c3(n)
  }
  return soma;            // c4
}`}
          />

          <p className="mt-4 font-mono">
            T(n) = c1 + c2(n+1) + c3(n) + c4
          </p>

          <p className="mt-3">
            Simplificando:
          </p>

          <p className="mt-2 font-mono">
            T(n) = an + b
          </p>

          <p className="mt-3">
            Logo, o crescimento é linear.
          </p>
        </div>

        {/* BLOCO 4 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            4. Casos de Análise
          </h2>

          <p>
            Um algoritmo pode ter comportamentos distintos dependendo da entrada.
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-3">
            <li><strong>Melhor caso:</strong> menor número de operações possíveis.</li>
            <li><strong>Pior caso:</strong> maior número de operações possíveis.</li>
            <li><strong>Caso médio:</strong> média ponderada sobre todas as entradas.</li>
          </ul>

          <p className="mt-4">
            Em análise assintótica, geralmente focamos no pior caso,
            pois ele fornece um limite superior garantido.
          </p>
        </div>

        {/* BLOCO 5 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            5. Crescimento de Funções
          </h2>

          <p>
            As principais classes de crescimento são:
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Constante – O(1)</li>
            <li>Logarítmica – O(log n)</li>
            <li>Linear – O(n)</li>
            <li>Linearítmica – O(n log n)</li>
            <li>Quadrática – O(n²)</li>
            <li>Exponencial – O(2ⁿ)</li>
          </ul>

          <p className="mt-4">
            Para n grande:
          </p>

          <p className="mt-2 font-mono">
            log n &lt; n &lt; n log n &lt; n² &lt; 2ⁿ
          </p>
        </div>

        {/* BLOCO 6 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            6. Definição Formal de Big-O
          </h2>

          <p>
            Dizemos que f(n) = O(g(n)) se existirem constantes positivas c e n₀ tais que:
          </p>

          <p className="mt-2 font-mono">
            0 ≤ f(n) ≤ c·g(n), para todo n ≥ n₀
          </p>

          <p className="mt-4">
            Big-O fornece um limite superior assintótico.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Exemplo de Prova
          </h3>

          <p className="mt-3 font-mono">
            3n + 2 ≤ 5n, para n ≥ 2
          </p>

          <p className="mt-3">
            Logo:
          </p>

          <p className="mt-2 font-mono">
            3n + 2 = O(n)
          </p>
        </div>

        {/* BLOCO 7 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            7. Notações Ω e Θ
          </h2>

          <h3 className="text-xl font-semibold mt-4">
            Ω – Limite Inferior
          </h3>

          <p className="mt-2 font-mono">
            f(n) = Ω(g(n)) se 0 ≤ c·g(n) ≤ f(n)
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Θ – Limite Exato
          </h3>

          <p className="mt-2 font-mono">
            c1·g(n) ≤ f(n) ≤ c2·g(n)
          </p>

          <p className="mt-4">
            Quando usamos Θ, estamos afirmando crescimento assintótico exato.
          </p>
        </div>

        {/* BLOCO 8 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            8. Introdução à Análise de Recorrências
          </h2>

          <p>
            Algoritmos recursivos geram equações de recorrência.
          </p>

          <p className="mt-2 font-mono">
            T(n) = 2T(n/2) + n
          </p>

          <p className="mt-3">
            Essa é a recorrência do MergeSort.
          </p>

          <p className="mt-3">
            Pela expansão:
          </p>

          <p className="mt-2 font-mono">
            T(n) = O(n log n)
          </p>

          <p className="mt-4">
            Em aulas futuras veremos o Método da Substituição,
            Árvore de Recorrência e Teorema Mestre.
          </p>
        </div>

        {/* BLOCO 9 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            9. Espaço vs Tempo
          </h2>

          <p>
            Além do tempo, analisamos o consumo de memória:
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Espaço auxiliar.</li>
            <li>Pilha de recursão.</li>
            <li>Estruturas adicionais.</li>
          </ul>

          <p className="mt-4">
            Exemplo: MergeSort usa O(n) de memória auxiliar.
          </p>
        </div>

        {/* BLOCO FINAL */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            10. Conclusão
          </h2>

          <p>
            A análise de algoritmos transforma código em matemática.
            O foco não é o computador real, mas o crescimento assintótico.
          </p>

          <p className="mt-4">
            Próxima aula: Técnicas formais de prova e comparação rigorosa de funções.
          </p>
        </div>

      </section>
    </LayoutAula>
  );
}