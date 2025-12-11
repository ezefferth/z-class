"use client";

import CodeBlock from "@/src/components/codeBlock";
import CodeEditorRunner from "@/src/components/codeEditorRunner";
import CodeRunner from "@/src/components/codeRunner";
import LayoutAula from "@/src/components/layoutAula";

export default function Aula2() {
  return (
    <LayoutAula titulo="Aula 2 – Fundamentos Essenciais do HTML: Estrutura, Semântica e Construção de Conteúdo">
      <section className="space-y-10">
        {/* INTRODUÇÃO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>

          <p>
            Após compreendermos a história da Internet, o surgimento da Web e os
            primeiros passos em HTML, chegamos agora ao estudo detalhado dos
            elementos mais importantes dessa linguagem. O HTML é a base
            estrutural de toda página web, e seu domínio é essencial para
            qualquer desenvolvedor front-end, mesmo aqueles que trabalharão com
            frameworks como React, Angular ou Vue.
          </p>

          <p className="mt-3">
            Nesta aula, vamos estudar os principais grupos de tags do HTML,
            entender seu papel semântico, suas boas práticas e como navegadores
            interpretam cada elemento.
          </p>
        </div>

        {/* TAGS TEXTUAIS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">2. Tags Textuais</h2>

          <p>
            Tags textuais controlam como textos são organizados e destacados.
            Saber diferenciar elementos semânticos de elementos apenas visuais é
            fundamental para acessibilidade, SEO e boas práticas.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Principais tags textuais
          </h3>

          <ul className="list-disc ml-6">
            <li>
              <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> — níveis de
              título
            </li>
            <li>
              <code>&lt;p&gt;</code> — parágrafos
            </li>
            <li>
              <code>&lt;strong&gt;</code> — destaque semântico
            </li>
            <li>
              <code>&lt;b&gt;</code> — negrito visual
            </li>
            <li>
              <code>&lt;em&gt;</code> — ênfase semântica
            </li>
            <li>
              <code>&lt;i&gt;</code> — itálico visual
            </li>
            <li>
              <code>&lt;u&gt;</code> — sublinhado
            </li>
            <li>
              <code>&lt;small&gt;</code> — texto pequeno
            </li>
            <li>
              <code>&lt;mark&gt;</code> — destacar texto
            </li>
            <li>
              <code>&lt;del&gt;</code> — texto removido
            </li>
            <li>
              <code>&lt;sup&gt;</code> — sobrescrito
            </li>
            <li>
              <code>&lt;sub&gt;</code> — subscrito
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Exemplo prático</h3>

          <CodeEditorRunner
            // language="html"
            initialCode={`<h1>Bem-vindo ao Curso!</h1>
<p>Este é um <strong>parágrafo importante</strong> com <em>ênfase semântica</em>.</p>
<p>Texto químico: H<sub>2</sub>O • Fórmula matemática: x<sup>2</sup> + y<sup>2</sup></p>`}
          />
        </div>

        {/* TAGS ESTRUTURAIS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">3. Tags Estruturais</h2>

          <p>
            Tags estruturais organizam o conteúdo da página em blocos lógicos.
            Elas ajudam mecanismos de busca, navegadores e leitores de tela a
            entenderem o significado de cada parte do documento.
          </p>

          <ul className="list-disc ml-6 mt-3">
            <li>
              <code>&lt;!DOCTYPE html&gt;</code>
            </li>
            <li>
              <code>&lt;html&gt;</code>
            </li>
            <li>
              <code>&lt;head&gt;</code>
            </li>
            <li>
              <code>&lt;meta&gt;</code>
            </li>
            <li>
              <code>&lt;title&gt;</code>
            </li>
            <li>
              <code>&lt;body&gt;</code>
            </li>
            <li>
              <code>&lt;header&gt;</code>
            </li>
            <li>
              <code>&lt;nav&gt;</code>
            </li>
            <li>
              <code>&lt;main&gt;</code>
            </li>
            <li>
              <code>&lt;section&gt;</code>
            </li>
            <li>
              <code>&lt;article&gt;</code>
            </li>
            <li>
              <code>&lt;aside&gt;</code>
            </li>
            <li>
              <code>&lt;footer&gt;</code>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Exemplo</h3>

          <CodeEditorRunner
            // language="html"
            initialCode={`<header>
  <h1>Portal de Notícias</h1>
</header>

<main>
  <article>
    <h2>Título da Matéria</h2>
    <p>Conteúdo da notícia...</p>
  </article>
</main>

<footer>
  <p>&copy; 2025 - Todos os direitos reservados.</p>
</footer>`}
          />
        </div>

        {/* LISTAS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">4. Tags para Listas</h2>

          <p>Listas organizam conteúdos de forma clara e estruturada:</p>

          <ul className="list-disc ml-6">
            <li>
              <code>&lt;ul&gt;</code> — não ordenada
            </li>
            <li>
              <code>&lt;ol&gt;</code> — ordenada
            </li>
            <li>
              <code>&lt;li&gt;</code> — item
            </li>
            <li>
              <code>&lt;dl&gt;</code> — definição
            </li>
            <li>
              <code>&lt;dt&gt;</code> — termo
            </li>
            <li>
              <code>&lt;dd&gt;</code> — descrição
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Exemplo</h3>

          <CodeEditorRunner
            // language="html"
            initialCode={`<dl>
  <dt>Internet</dt>
  <dd>Rede mundial de computadores interligados.</dd>

  <dt>HTML</dt>
  <dd>Linguagem de marcação para páginas web.</dd>
</dl>`}
          />

        </div>

        {/* TABELAS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">5. Tags para Tabelas</h2>

          <p>
            Tabelas são usadas para exibir dados organizados. Nunca devem ser
            utilizadas para layout.
          </p>

          <ul className="list-disc ml-6">
            <li>
              <code>&lt;table&gt;</code>
            </li>
            <li>
              <code>&lt;tr&gt;</code>
            </li>
            <li>
              <code>&lt;td&gt;</code>
            </li>
            <li>
              <code>&lt;th&gt;</code>
            </li>
            <li>
              <code>&lt;caption&gt;</code>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Exemplo</h3>

          <CodeEditorRunner
            // language="html"
            initialCode={`<table>
  <caption>Tabela Nutricional</caption>
  <tr>
    <th>Item</th>
    <th>Calorias</th>
  </tr>
  <tr>
    <td>Arroz</td>
    <td>130 kcal</td>
  </tr>
</table>`}
          />

        </div>

        {/* LINKS E MÍDIA */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            6. Tags para Links e Mídia
          </h2>

          <ul className="list-disc ml-6">
            <li>
              <code>&lt;a&gt;</code>
            </li>
            <li>
              <code>&lt;img&gt;</code>
            </li>
            <li>
              <code>&lt;figure&gt;</code>
            </li>
            <li>
              <code>&lt;figcaption&gt;</code>
            </li>
            <li>
              <code>&lt;audio&gt;</code>
            </li>
            <li>
              <code>&lt;video&gt;</code>
            </li>
            <li>
              <code>&lt;iframe&gt;</code>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Exemplo</h3>

          <CodeEditorRunner
            // language="html"
            initialCode={`<figure>
  <img src="prato.jpg" alt="Imagem do prato">
  <figcaption>Prato principal servido com molho especial.</figcaption>
</figure>`}
          />

        </div>

        {/* FORMULÁRIOS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">7. Tags para Formulários</h2>

          <p>Formulários são essenciais para interação:</p>

          <ul className="list-disc ml-6">
            <li>
              <code>&lt;form&gt;</code>
            </li>
            <li>
              <code>&lt;input&gt;</code>
            </li>
            <li>
              <code>&lt;button&gt;</code>
            </li>
            <li>
              <code>&lt;label&gt;</code>
            </li>
            <li>
              <code>&lt;select&gt;</code>
            </li>
            <li>
              <code>&lt;option&gt;</code>
            </li>
            <li>
              <code>&lt;textarea&gt;</code>
            </li>
            <li>
              <code>&lt;fieldset&gt;</code>
            </li>
            <li>
              <code>&lt;legend&gt;</code>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Exemplo</h3>

          <CodeEditorRunner
            // language="html"
            initialCode={`<form>
  <label for="nome">Nome:</label>
  <input id="nome" type="text"/>

  <label for="msg">Mensagem:</label>
  <textarea id="msg"></textarea>

  <button type="submit">Enviar</button>
</form>`}
          />

        </div>

        {/* ATIVIDADE */}
        <div>
          <h2 className="text-2xl font-bold mb-4">8. Atividade Prática</h2>

          <p>
            Crie uma página HTML completa para apresentar uma receita culinária,
            utilizando corretamente os conceitos estudados nesta aula.
          </p>

          <h3 className="text-xl font-semibold mt-4">Requisitos:</h3>

          <ul className="list-disc ml-6">
            <li>Estrutura semântica completa.</li>
            <li>Imagem do prato.</li>
            <li>Ingredientes em lista não ordenada.</li>
            <li>Modo de preparo com lista ordenada.</li>
            <li>Tabela nutricional.</li>
            <li>Uso correto de figure + figcaption.</li>
            <li>Pelo menos um link externo.</li>
          </ul>
        </div>

        {/* CONCLUSÃO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">9. Conclusão</h2>

          <p>
            Nesta aula você aprendeu os principais elementos do HTML: textos,
            estrutura, listas, tabelas, formulários e mídia. Esses conceitos são
            os blocos fundamentais para qualquer projeto web moderno.
          </p>

          <p className="mt-3">
            Na próxima aula vamos iniciar o estudo do CSS e aprender a separar
            estrutura e estilo — um dos pilares da construção de interfaces.
          </p>
        </div>
      </section>
    </LayoutAula>
  );
}
