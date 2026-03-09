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
      <section className="space-y-14 text-gray-800 leading-relaxed">

        {/* BLOCO 1: INTRODUÇÃO (Capítulo 1 do Cormen) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            1. Algoritmos como Tecnologia
          </h2>
          <p>
            Antes de contarmos instruções, precisamos entender: <strong>o que é um algoritmo?</strong> 
            Informalmente, é qualquer procedimento computacional bem definido que toma algum valor 
            (ou conjunto de valores) como <em>entrada</em> e produz algum valor (ou conjunto) como <em>saída</em>.
          </p>
          <p className="mt-3">
            No Capítulo 1 de <em>Algoritmos: Teoria e Prática</em>, os autores deixam claro que os algoritmos 
            são uma tecnologia tão importante quanto o hardware. Computadores podem ser incrivelmente rápidos, 
            mas não têm velocidade infinita. A memória pode ser barata, mas não é gratuita. O tempo de 
            computação é um recurso limitado, e a eficiência de um algoritmo determina se um problema é 
            resolvível na prática ou apenas na teoria.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4 border-l-4 border-blue-500">
            <h4 className="font-semibold">Exemplo de Impacto:</h4>
            <p className="text-sm">
              Imagine dois algoritmos de ordenação: o <strong>Insertion Sort</strong> (que leva tempo proporcional 
              a $c_1 \cdot n^2$) e o <strong>Merge Sort</strong> (que leva tempo proporcional a $c_2 \cdot n \log n$). 
              Para entradas massivas, mesmo que o Insertion Sort rode em um supercomputador e o Merge Sort em 
              um computador antigo, o Merge Sort terminará muito antes. Isso prova que a eficiência algorítmica 
              supera o hardware no longo prazo.
            </p>
          </div>
        </div>

        {/* BLOCO 2: MODELO RAM (Capítulo 2) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            2. O Modelo RAM (Random-Access Machine)
          </h2>
          
          <p>
            Para analisar algoritmos matematicamente sem nos preocuparmos com a arquitetura de um 
            processador Intel, ARM ou Apple Silicon, adotamos uma máquina abstrata chamada 
            <strong>Modelo RAM</strong>.
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li><strong>Execução Sequencial:</strong> As instruções são executadas uma após a outra. Não há operações concorrentes (paralelismo).</li>
            <li><strong>Custo Uniforme de Instrução:</strong> Cada operação elementar (aritmética como soma/multiplicação, movimentação de dados, controle como IF/GOTO) leva um tempo constante para ser executada.</li>
            <li><strong>Acesso Uniforme à Memória:</strong> Ler ou escrever em qualquer posição da memória leva exatamente o mesmo tempo. Não modelamos a hierarquia de cache (L1, L2, L3).</li>
            <li><strong>Tipos de Dados Simples:</strong> Inteiros e ponto flutuante têm um limite de tamanho predefinido (ex: palavras de 32 ou 64 bits), de forma que uma soma de números gigantes não conta como 1 passo, mas a soma padrão sim.</li>
          </ul>
        </div>

        {/* BLOCO 3: ORDENAÇÃO POR INSERÇÃO E ANÁLISE LINHA A LINHA (Capítulo 2) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            3. Analisando um Algoritmo Clássico: Insertion Sort
          </h2>
          
          <p>
            Vamos usar o exemplo clássico do Capítulo 2 do livro: a Ordenação por Inserção (Insertion Sort). 
            Ele funciona como organizar cartas de baralho na sua mão.
          </p>

          <CodeBlock
            initialCode={`// Algoritmo Insertion Sort
function insertionSort(A) {
  for (let j = 1; j < A.length; j++) {    // Custo: c1 | Vezes: n
    let key = A[j];                       // Custo: c2 | Vezes: n-1
    // Inserir A[j] na sequência ordenada A[0..j-1]
    let i = j - 1;                        // Custo: c4 | Vezes: n-1
    
    while (i >= 0 && A[i] > key) {        // Custo: c5 | Vezes: sum(tj)
      A[i + 1] = A[i];                    // Custo: c6 | Vezes: sum(tj - 1)
      i = i - 1;                          // Custo: c7 | Vezes: sum(tj - 1)
    }
    A[i + 1] = key;                       // Custo: c8 | Vezes: n-1
  }
  return A;
}`}
          />
          <p className="mt-4">
            O tempo de execução total $T(n)$ é a soma dos tempos de execução de cada instrução.
            Sendo $t_j$ o número de vezes que o teste do laço <code>while</code> é executado para aquele valor de $j$.
          </p>
        </div>

        {/* BLOCO 4: MELHOR, PIOR E CASO MÉDIO (Capítulo 2) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            4. Melhor, Pior e Caso Médio
          </h2>
          <p>
            O valor de $t_j$ no algoritmo acima depende completamente da entrada.
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-4">
            <li>
              <strong>Melhor Caso (Vetor já ordenado):</strong> O laço <code>while</code> falha logo na primeira tentativa ($t_j = 1$). 
              A equação se torna uma função linear: <br/>
              <code className="bg-gray-100 px-2 py-1 rounded">T(n) = a·n + b</code> (Crescimento Linear).
            </li>
            <li>
              <strong>Pior Caso (Vetor em ordem reversa):</strong> O <code>while</code> precisa comparar o elemento com todos os anteriores ($t_j = j$). 
              A soma gera uma progressão aritmética, resultando em uma função quadrática: <br/>
              <code className="bg-gray-100 px-2 py-1 rounded">T(n) = a·n² + b·n + c</code> (Crescimento Quadrático).
            </li>
            <li>
              <strong>Caso Médio:</strong> Assumindo que os dados são aleatórios, em média, inspecionamos metade do subarranjo. O tempo ainda resulta em uma função quadrática.
            </li>
          </ul>
          <div className="bg-yellow-50 p-4 rounded-lg mt-4 border-l-4 border-yellow-500">
            <strong>Por que focamos no pior caso?</strong><br/>
            1. Nos dá um limite superior garantido. O algoritmo nunca vai demorar mais que isso.<br/>
            2. Para muitos algoritmos, o pior caso ocorre com frequência (ex: buscar algo que não existe no banco de dados).<br/>
            3. O caso médio costuma ser tão ruim quanto o pior caso (como vimos no Insertion Sort).
          </div>
        </div>

        {/* BLOCO 5: DIVISÃO E CONQUISTA (Capítulo 2) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            5. Divisão e Conquista e a Abordagem Recursiva
          </h2>
          
          <p>
            Para resolver o problema do tempo quadrático, o Capítulo 2 introduz o <strong>Merge Sort</strong>, 
            baseado no paradigma de Divisão e Conquista:
          </p>
          <ul className="list-disc ml-6 mt-2 mb-4 space-y-1">
            <li><strong>Dividir:</strong> o problema em subproblemas menores.</li>
            <li><strong>Conquistar:</strong> resolver os subproblemas recursivamente.</li>
            <li><strong>Combinar:</strong> juntar as soluções para formar a solução final.</li>
          </ul>
          <p>O Merge Sort divide o vetor pela metade, ordena cada metade e depois funde (faz o <em>merge</em>) de ambas.</p>
          <p className="mt-4 font-mono text-center font-bold text-lg bg-gray-100 p-4 rounded">
            T(n) = 2T(n/2) + Θ(n)
          </p>
          <p className="mt-4">
            Como veremos em aulas futuras (através da Árvore de Recorrência ou Teorema Mestre), 
            essa equação se resolve em <strong>T(n) = Θ(n log n)</strong>, que cresce incrivelmente 
            mais devagar que $n^2$.
          </p>
        </div>

        {/* BLOCO 6: CRESCIMENTO DE FUNÇÕES E NOTAÇÕES (Capítulo 3) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            6. Crescimento de Funções (Capítulo 3)
          </h2>
          
          <p>
            Quando o tamanho da entrada $n$ se torna grande o suficiente, apenas o termo de maior ordem 
            da função de tempo de execução importa. Ignoramos os termos de ordem inferior e os coeficientes constantes. 
            É aqui que entra a <strong>Análise Assintótica</strong>.
          </p>

          <h3 className="text-2xl font-semibold mt-8 text-gray-700 border-b pb-2">
            A Notação $\Theta$ (Theta) - Limite Exato
          </h3>
          <p className="mt-3">
            Dizemos que $f(n) = \Theta(g(n))$ se existirem constantes positivas $c_1$, $c_2$ e $n_0$ tais que:
          </p>
          <p className="mt-2 font-mono text-center bg-gray-100 p-3 rounded">
            0 ≤ c₁·g(n) ≤ f(n) ≤ c₂·g(n), para todo n ≥ n₀
          </p>
          <p className="mt-3">
            <strong>Exemplo Prático:</strong> Mostre que $f(n) = \frac{1}{2}n^2 - 3n$ é $\Theta(n^2)$.
            Precisamos achar constantes de forma que $c_1 n^2 \le \frac{1}{2}n^2 - 3n \le c_2 n^2$.
            Dividindo por $n^2$, temos $c_1 \le \frac{1}{2} - \frac{3}{1}\le c_2$.
            Para $n \ge 7$, a parte do meio é positiva. Podemos escolher $c_1 = 1/14$, $c_2 = 1/2$ e $n_0 = 7$.
          </p>

          <h3 className="text-2xl font-semibold mt-8 text-gray-700 border-b pb-2">
            A Notação $O$ (Big-O) - Limite Superior
          </h3>
          <p className="mt-3">
            Quando só conseguimos garantir um "teto" para o crescimento. É o mais usado na indústria para 
            analisar o <em>pior caso</em>. $f(n) = O(g(n))$ se:
          </p>
          <p className="mt-2 font-mono text-center bg-gray-100 p-3 rounded">
            0 ≤ f(n) ≤ c·g(n), para todo n ≥ n₀
          </p>
          <p className="mt-3">
            Isso significa que o algoritmo "não cresce mais rápido que" $g(n)$.
          </p>

          <h3 className="text-2xl font-semibold mt-8 text-gray-700 border-b pb-2">
            A Notação $\Omega$ (Ômega) - Limite Inferior
          </h3>
          <p className="mt-3">
            Estabelece o "chão". $f(n) = \Omega(g(n))$ se:
          </p>
          <p className="mt-2 font-mono text-center bg-gray-100 p-3 rounded">
            0 ≤ c·g(n) ≤ f(n), para todo n ≥ n₀
          </p>
          <p className="mt-3">
            Para o Insertion Sort, o tempo de execução é $\Omega(n)$ (melhor caso) e $O(n^2)$ (pior caso). 
            Portanto, ele NÃO é $\Theta(n^2)$ e nem $\Theta(n)$, pois seu crescimento depende do arranjo inicial.
          </p>
        </div>

        {/* BLOCO 7: COMPARAÇÃO E CLASSIFICAÇÃO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            7. Principais Classes de Crescimento
          </h2>
          <p>Para $n$ suficientemente grande, a ordem de eficiência esperada é:</p>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2">Notação</th>
                  <th className="px-4 py-2">Nome</th>
                  <th className="px-4 py-2">Exemplo Algorítmico</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono text-sm">O(1)</td>
                  <td className="px-4 py-2">Constante</td>
                  <td className="px-4 py-2">Acesso a índice de array.</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-2 font-mono text-sm">O(log n)</td>
                  <td className="px-4 py-2">Logarítmica</td>
                  <td className="px-4 py-2">Busca Binária.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono text-sm">O(n)</td>
                  <td className="px-4 py-2">Linear</td>
                  <td className="px-4 py-2">Percorrer um vetor; Busca Sequencial.</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-2 font-mono text-sm">O(n log n)</td>
                  <td className="px-4 py-2">Linearítmica / Quasilinear</td>
                  <td className="px-4 py-2">Merge Sort, Heap Sort.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono text-sm">O(n²)</td>
                  <td className="px-4 py-2">Quadrática</td>
                  <td className="px-4 py-2">Insertion Sort, Bubble Sort.</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-2 font-mono text-sm">O(2ⁿ)</td>
                  <td className="px-4 py-2">Exponencial</td>
                  <td className="px-4 py-2">Força bruta para o Caixeiro Viajante, Fibonacci recursivo sem memoização.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* BLOCO 8: ESPAÇO VS TEMPO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            8. Complexidade de Espaço
          </h2>
          <p>
            A análise não se restringe apenas ao tempo (operações). Analisamos também a quantidade 
            de memória RAM que o algoritmo necessita para rodar, conhecida como <strong>Complexidade de Espaço</strong>.
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li><strong>In-place (No local):</strong> O algoritmo usa uma quantidade constante $O(1)$ de memória extra além da entrada. <em>Exemplo: Insertion Sort.</em></li>
            <li><strong>Espaço Auxiliar:</strong> O algoritmo exige arrays secundários. <em>Exemplo: Merge Sort exige $O(n)$ de memória extra para fundir os arrays.</em></li>
            <li><strong>Pilha de Chamadas (Call Stack):</strong> Algoritmos recursivos consomem memória na pilha de execução do SO. Uma recursão de profundidade $n$ consome $O(n)$ de espaço.</li>
          </ul>
        </div>

        {/* BLOCO 9: CONCLUSÃO */}
        <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            9. Conclusão da Aula
          </h2>
          <p className="text-lg">
            A Análise de Algoritmos purifica o código, removendo o viés do hardware e da linguagem, 
            e o transforma em matemática pura. Vimos como modelar algoritmos usando a máquina RAM, 
            extrair equações de tempo de execução (como no Insertion Sort) e abstraí-las usando a 
            poderosa notação assintótica (Big-O, Theta e Ômega).
          </p>
          <p className="mt-4 font-semibold text-blue-300">
            Próxima Aula: Resolução aprofundada de Equações de Recorrência (Método da Substituição, 
            Árvore de Recorrência e Teorema Mestre).
          </p>
        </div>

      </section>
    </LayoutAula>
  );
}