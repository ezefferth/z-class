

"use client";

import LayoutAula from "@/src/components/layoutAula";
// Se for usar ícones do MUI, pode importá-los aqui:
// import { CheckCircle, Code, Storage, PhoneIphone, Functions } from "@mui/icons-material";

export default function PlanoDeEnsinoMobile() {
  return (
    <LayoutAula titulo="Plano de Ensino: Desenvolvimento de Aplicações Móveis">
      <section className="space-y-12 text-gray-800 leading-relaxed text-lg">

        {/* ==========================================
            CABEÇALHO E INFORMAÇÕES GERAIS
        ========================================== */}
        <div className="bg-linear-to-r from-indigo-800 to-violet-900 text-white p-8 md:p-10 rounded-2xl shadow-xl">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            📱 Desenvolvimento de Aplicações Móveis
          </h1>
          <p className="text-indigo-100 text-lg md:text-xl mb-8 max-w-3xl">
            Apresentação da disciplina, metodologia de trabalho, ferramentas utilizadas e o caminho que
            vamos percorrer para construir aplicativos completos do zero ao deploy.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-indigo-200 text-sm font-semibold uppercase">Curso</p>
              <p className="font-bold text-white">Sistemas de Informação</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-indigo-200 text-sm font-semibold uppercase">Carga Horária</p>
              <p className="font-bold text-white">72 horas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-indigo-200 text-sm font-semibold uppercase">Duração</p>
              <p className="font-bold text-white">1 Semestre</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-indigo-200 text-sm font-semibold uppercase">Modalidade</p>
              <p className="font-bold text-white">Presencial</p>
            </div>
          </div>
        </div>

        {/* ==========================================
            1. OBJETIVOS
        ========================================== */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-2 border-indigo-100 pb-2">
            1. Objetivos da Disciplina
          </h2>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg mb-8 shadow-sm">
            <h3 className="text-xl font-bold text-indigo-900 mb-2">🎯 Objetivo Geral</h3>
            <p className="text-indigo-800">
              Capacitar os alunos no desenvolvimento de aplicações móveis modernas utilizando tecnologias web e frameworks multiplataforma, integrando interfaces móveis com serviços backend e bancos de dados.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Objetivos Específicos:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Compreender os fundamentos do desenvolvimento web aplicados a aplicações móveis.",
              "Desenvolver interfaces utilizando HTML, CSS e JavaScript.",
              "Utilizar React para construção de interfaces baseadas em componentes.",
              "Desenvolver aplicações móveis multiplataforma utilizando React Native.",
              "Implementar APIs com Node.js e Express.",
              "Utilizar Prisma ORM para persistência de dados.",
              "Integrar frontend móvel com backend e banco de dados."
            ].map((obj, index) => (
              <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <span className="text-indigo-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700 text-base">{obj}</span>
              </li>
            ))}
          </ul>
        </div>



        {/* ==========================================
            2. EMENTA E CONTEÚDO PROGRAMÁTICO
        ========================================== */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-violet-900 border-b-2 border-violet-100 pb-2">
            2. Ementa e Conteúdo Programático
          </h2>
          <p className="mb-8 text-gray-700">
            <strong>Ementa:</strong> Desenvolvimento de aplicações móveis com páginas dinâmicas. Backend utilizando um modelo objeto-relacional. Integração entre frontend móvel e backend.
          </p>

          <div className="space-y-6">
            {/* Bloco 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-stretch">
              <div className="shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                🌐
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">Revisão de Tecnologias Web & React</h4>
                <p className="text-gray-600 text-base mt-1">
                  HTML e CSS para construção de interfaces e organização de páginas. Fundamentos de React: Componentes, props, state e hooks.
                </p>
              </div>
            </div>

            {/* Bloco 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-stretch">
              <div className="shrink-0 w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                📱
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">Desenvolvimento Mobile com React Native</h4>
                <p className="text-gray-600 text-base mt-1">
                  Criação de interfaces móveis, navegação entre telas, gerenciamento de estado, consumo de APIs e armazenamento local.
                </p>
              </div>
            </div>

            {/* Bloco 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-stretch">
              <div className="shrink-0 w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                ⚙️
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">Backend & Persistência de Dados</h4>
                <p className="text-gray-600 text-base mt-1">
                  Introdução ao Node.js, desenvolvimento de APIs REST com Express. Modelagem de dados e operações CRUD utilizando Prisma ORM.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            3. PROCEDIMENTOS DE ENSINO E RECURSOS
        ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🛠️</span> Metodologia
            </h3>
            <p className="text-gray-700 text-base mb-4">
              A disciplina será conduzida por meio de <strong>aulas expositivas e práticas em laboratório</strong>.
              Durante o semestre os alunos irão desenvolver aplicações utilizando React Native e integrar estas
              aplicações com serviços backend desenvolvidos em Node.js.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-semibold rounded-full">VS Code</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm font-semibold rounded-full">React Native</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-semibold rounded-full">Prisma ORM</span>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">💻</span> Recursos Necessários
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 text-base">
              <li>Laboratório de informática;</li>
              <li>Projetor multimídia e quadro;</li>
              <li>Computadores com acesso à internet;</li>
              <li>Ambiente de desenvolvimento configurado (Node.js, Expo/CLI, ferramentas auxiliares).</li>
            </ul>
          </div>
        </div>

        {/* ==========================================
            4. AVALIAÇÃO E BIBLIOGRAFIA
        ========================================== */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-gray-200 pb-2">
            4. Avaliação e Bibliografia
          </h2>

          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-8">
            <h3 className="text-xl font-bold text-amber-900 mb-3">📝 Critérios de Avaliação</h3>
            <p className="text-gray-800 mb-4">
              A avaliação será composta por <strong>duas provas práticas</strong> realizadas em laboratório.
            </p>
            <div className="bg-white p-4 rounded-lg inline-block border border-amber-100 shadow-sm font-mono text-amber-900 font-bold mb-4">
              Média Final (MA) = (P1 + P2) / 2
            </div>
            <p className="text-amber-800 text-sm font-medium">
              * O aluno será considerado aprovado se obtiver média maior ou igual a 6,0 (ou média estipulada pela instituição).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Básica */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">📚</span> Bibliografia Básica
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="pl-4 border-l-2 border-indigo-400">
                  <strong>SILVA, Maurício Samy.</strong> Jquery: a biblioteca do programador JavaScript. Novatec, 2010.
                </li>
                <li className="pl-4 border-l-2 border-indigo-400">
                  <strong>GOODMAN, John.</strong> JavaScript: a bíblia. Elsevier, 2001.
                </li>
                <li className="pl-4 border-l-2 border-indigo-400">
                  <strong>RAMALHO, José Antônio Alves.</strong> HTML dinâmico. Berkeley Brasil, 1999.
                </li>
              </ul>
            </div>

            {/* Complementar */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">📖</span> Bibliografia Complementar
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="pl-4 border-l-2 border-gray-300">
                  <strong>FLANAGAN, David.</strong> JavaScript: o guia definitivo. Bookman, 2013.
                </li>
                <li className="pl-4 border-l-2 border-gray-300">
                  <strong>SAVOLA, Tom.</strong> Usando HTML: o guia de referência mais completo. Campus.
                </li>
                <li className="pl-4 border-l-2 border-gray-300">
                  <strong>ALVES, William Pereira.</strong> HTML & CSS: aprenda como construir páginas web. Expressa, 2021.
                </li>
                <li className="pl-4 border-l-2 border-gray-300">
                  <strong>OLIVEIRA, C. L. V.; ZANETTI, H. A. P.</strong> JavaScript descomplicado. Érica, 2020.
                </li>
                <li className="pl-4 border-l-2 border-gray-300">
                  <strong>SIMAS, Victor Luiz et al.</strong> Desenvolvimento para dispositivos móveis. SAGAH, 2019.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </LayoutAula>
  );
}