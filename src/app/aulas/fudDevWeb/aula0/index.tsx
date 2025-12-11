"use client";

import LayoutAula from "@/src/components/layoutAula";

export default function Aula0() {
  return (
    <LayoutAula titulo="Aula 0 – Apresentação da Disciplina">
      <section className="space-y-8">
        {/* Quem sou eu */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quem sou eu?</h2>
          <p>Ezéfferth Chlysman Araujo Fernandes</p>

          <ul className="list-disc ml-6 mt-3">
            <li>Engenheiro de Computação</li>
            <li>Pós-Graduado em Governança de TI</li>
            <li>Pós-Graduado em Engenharia de Software</li>
            <li>Mestrando em Computação Aplicada</li>
          </ul>
        </div>

        {/* Apresentação da disciplina */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Apresentação da Disciplina
          </h2>

          <ul className="list-disc ml-6">
            <li>
              <strong>Disciplina:</strong> Fundamentos de Desenvolvimento Web
            </li>
            <li>
              <strong>Carga Horária:</strong> 80h
            </li>
            <li>
              <strong>Ementa:</strong> Fundamentação para desenvolvimento do
              front-end de aplicações para cliente Web. Linguagem de marcação
              HTML. Linguagem de estilo para web CSS, Javascript, Ajax, JSON,
              JQuery e APIs de HTML5.
            </li>
          </ul>
        </div>

        {/* Objetivos */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Objetivos</h2>

          <ul className="list-disc ml-6">
            <li>
              <strong>Gerais:</strong> Garantir aos alunos conhecimentos de
              conteúdos específicos de HTML, CSS e JavaScript, além de
              possibilitar o desenvolvimento de um projeto de página web com os
              conceitos aprendidos em sala.
            </li>
            <li className="mt-2">
              <strong>Específicos:</strong> Possibilitar que o aluno construa
              uma página em HTML e deixe o layout responsivo e mais intuitivo
              usando os conceitos de CSS, além de compor a página com JavaScript
              para dinamizar o conteúdo.
            </li>
          </ul>
        </div>

        {/* Competências */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Competências e Habilidades
          </h2>

          <p>
            Ter a capacidade de desenvolver aplicações Web completas utilizando
            HTML, além de deixar a página mais dinâmica com o CSS e JavaScript.
          </p>
        </div>

        {/* Conteúdo Programático */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Conteúdo Programático</h2>

          <h3 className="text-xl font-semibold mt-6">
            1. Introdução ao Desenvolvimento Web
          </h3>
          <ul className="list-disc ml-6">
            <li>O que é a Internet?</li>
            <li>Histórico da Internet no Brasil</li>
            <li>Conexões</li>
            <li>WWW</li>
            <li>O que é Hipertexto?</li>
            <li>Navegação na Internet</li>
            <li>O que é Site?</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">2. Fundamentos de HTML</h3>
          <ul className="list-disc ml-6">
            <li>A Linguagem de Hipertextos</li>
            <li>Uma Página Web Simples</li>
            <li>Tags Básicas</li>
            <li>Corpo do Texto</li>
            <li>Atributos</li>
            <li>Controle de Quebra de Linha</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">
            3. Formatação de Textos
          </h3>
          <ul className="list-disc ml-6">
            <li>Títulos do Texto</li>
            <li>Atributos de Texto</li>
            <li>Paleta de Cores do Browser</li>
            <li>Pré-Formatação</li>
            <li>Formatações Lógicas</li>
            <li>Estilos Físicos</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">4. Parágrafos e Listas</h3>
          <ul className="list-disc ml-6">
            <li>Parágrafo</li>
            <li>Bloco de Texto</li>
            <li>Divisão de Texto</li>
            <li>Listas</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">5. Links e Imagens</h3>
          <ul className="list-disc ml-6">
            <li>Links</li>
            <li>Manipulação de Imagens</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">6. Tabelas</h3>
          <ul className="list-disc ml-6">
            <li>Atributos</li>
            <li>Definição das Áreas da Tabela</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">7. Frames</h3>
          <ul className="list-disc ml-6">
            <li>O que é Frame?</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">8. Formulários</h3>
          <ul className="list-disc ml-6">
            <li>Controle de Formulários</li>
            <li>Entrada de Dados</li>
            <li>Área de Texto</li>
            <li>Lista</li>
            <li>Grupos de Itens</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">9. Entenda a CSS</h3>
          <ul className="list-disc ml-6">
            <li>O que é um estilo?</li>
            <li>O que é a folha de estilo em cascata?</li>
            <li>Versões de Regras da CSS</li>
            <li>As partes de uma regra CSS</li>
            <li>Tipos de Tags HTML</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">10. CSS</h3>
          <ul className="list-disc ml-6">
            <li>Controle de fonte</li>
            <li>Controle de texto</li>
            <li>Controle de listas e Mouse</li>
            <li>Controle de cor e fundo</li>
            <li>Controle de borda e margem</li>
            <li>Controle de posicionamento</li>
            <li>Controle de visibilidade</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">11. JavaScript</h3>
          <ul className="list-disc ml-6">
            <li>O que é JavaScript</li>
            <li>O que você pode fazer com JavaScript</li>
            <li>Conceitos Básicos</li>
            <li>Variáveis, Strings e Matrizes</li>
            <li>Condicionais e Loops</li>
            <li>Eventos e Funções</li>
            <li>Trabalhando com Janelas</li>
            <li>Manipulação de Imagens</li>
            <li>Trabalhando com Formulários</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">12. React</h3>
          <ul className="list-disc ml-6">
            <li>O que é React e por que foi criado</li>
            <li>
              Componentização: dividir a interface em partes independentes
            </li>
            <li>JSX: sintaxe semelhante ao HTML dentro do JavaScript</li>
            <li>Props: passagem de dados entre componentes</li>
            <li>State: gerenciamento de estado interno</li>
            <li>Hooks essenciais (useState, useEffect)</li>
            <li>Renderização declarativa</li>
            <li>Árvore de componentes</li>
            <li>Virtual DOM: atualização eficiente da interface</li>
            <li>Ciclo de vida de componentes (modo moderno, via Hooks)</li>
            <li>Eventos e manipulação de elementos</li>
            <li>Comunicação entre componentes (pai → filho, filho → pai)</li>
            <li>Reutilização de componentes e boas práticas</li>
            <li>Integração com APIs externas (fetch / axios)</li>
            <li>Gerenciamento de estado em aplicações maiores (Context API)</li>
          </ul>
        </div>

        {/* Metodologia */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Metodologia</h2>
          <p>
            O aluno é capacitado a desenvolver aplicações Web completas por meio
            de aulas teóricas e práticas em laboratório. Serão utilizados ATOM
            Text Editor, Xampp e NetBeans. O Google Classroom será utilizado
            para disponibilização de atividades, listas de exercícios e
            avaliações.
          </p>
        </div>

        {/* Critérios de Avaliação */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Critérios de Avaliação</h2>

          <h3 className="text-xl font-semibold mt-6">1º Bimestre</h3>
          <ul className="list-disc ml-6">
            <li>Média do Classroom (MC)</li>
            <li>Prova Teórica (P1)</li>
            <li>Avaliação de Desenvolvimento Integrada (ADI)</li>
          </ul>

          <p className="mt-4">
            <strong>Fórmula:</strong> M1 = (MC * 0,3 + P1 * 0,5) + ADI
          </p>

          <h3 className="text-xl font-semibold mt-6">2º Bimestre</h3>
          <ul className="list-disc ml-6">
            <li>Atividades Práticas (AT)</li>
            <li>Orientações (PO)</li>
          </ul>

          <p className="mt-4">
            <strong>Fórmula:</strong> M2 = AT * 0,8 + PO
          </p>

          <h3 className="text-xl font-semibold mt-6">Provas Substitutivas</h3>
          <ul className="list-disc ml-6">
            <li>1º Bimestre: substitui apenas prova teórica</li>
            <li>2º Bimestre: atividade extra valendo até 10</li>
          </ul>
        </div>
      </section>
    </LayoutAula>
  );
}
