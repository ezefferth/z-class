"use client";

import dynamic from 'next/dynamic';
import LayoutAula from "@/src/components/layoutAula";

// Importando dinamicamente para evitar erros de SSR com editores de código
const CodeBlockRunner = dynamic(
  () => import("@/src/components/codeEditorRunner"), 
  { ssr: false, loading: () => <p className="text-gray-500 italic">Carregando editor interativo...</p> }
);

export default function Aula2FundamentosHTML() {
  return (
    <LayoutAula titulo="Aula 2 – Fundamentos Essenciais do HTML: Estrutura, Semântica e Conteúdo">
      <section className="space-y-14 text-gray-800 leading-relaxed">

        {/* INTRODUÇÃO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            1. A Anatomia da Web: Introdução ao HTML
          </h2>
          <p>
            Após compreendermos a história da Internet e os protocolos da Web, chegamos ao 
            estudo detalhado da fundação de qualquer interface digital: o <strong>HTML (HyperText Markup Language)</strong>. 
            O HTML não é uma linguagem de programação (pois não possui lógica, variáveis ou loops), mas sim uma 
            linguagem de marcação. Ele dita a <em>estrutura</em> e o <em>significado</em> do conteúdo.
          </p>
          <p className="mt-3">
            O domínio absoluto do HTML é vital. Mesmo que você utilize frameworks modernos como React, 
            Angular ou Vue no futuro, o resultado final renderizado no navegador do usuário será sempre o bom e velho HTML.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4 border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-800">Por que o HTML bem escrito importa? (Acessibilidade e SEO)</h4>
            <p className="text-sm mt-1">
              Escrever HTML não é apenas fazer o texto aparecer na tela. É garantir que <strong>Leitores de Tela</strong> 
              (usados por pessoas com deficiência visual) consigam interpretar a página, e que os robôs do <strong>Google (Web Crawlers)</strong> 
              entendam o que é o título principal, o que é um artigo e o que é rodapé. Isso afeta diretamente 
              o rankeamento do seu site nas buscas.
            </p>
          </div>
        </div>

        {/* TAGS TEXTUAIS */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            2. Tipografia e Tags Textuais
          </h2>
          
          <p>
            As tags textuais controlam como os textos são organizados. Saber diferenciar elementos 
            com <strong>peso semântico</strong> daqueles que são apenas <em>visuais</em> é um dos marcos 
            de um desenvolvedor sênior.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6">
            <div className="bg-gray-50 p-4 rounded border">
              <h4 className="font-bold text-gray-700 border-b pb-2 mb-2">Hierarquia (Headings)</h4>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li><code>&lt;h1&gt;</code> — Título principal da página (use apenas um por página).</li>
                <li><code>&lt;h2&gt; a &lt;h6&gt;</code> — Subtítulos para organizar seções.</li>
                <li><code>&lt;p&gt;</code> — Parágrafos de texto comum.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded border">
              <h4 className="font-bold text-gray-700 border-b pb-2 mb-2">Semântica vs Visual</h4>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li><code>&lt;strong&gt;</code> — Importância, gravidade ou urgência (semântico).</li>
                <li><code>&lt;b&gt;</code> — Apenas chama a atenção visualmente (negrito).</li>
                <li><code>&lt;em&gt;</code> — Ênfase ao falar a frase (semântico).</li>
                <li><code>&lt;i&gt;</code> — Texto alternativo ou termo técnico (itálico).</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-4">Laboratório: Renderização Tipográfica</h3>
          <CodeBlockRunner
            height={500}
            initialCode={`<div style="background-color: white; color: #111; padding: 30px; font-family: 'Segoe UI', sans-serif; line-height: 1.6;">

  <h1 style="color: #2563eb;">A História da Web</h1>
  
  <h2 style="color: #4b5563; border-bottom: 2px solid #eee; padding-bottom: 5px;">
    Capítulo 1: O Início de Tudo
  </h2>

  <p>
    A Internet é um lugar vasto. Para nos destacarmos, precisamos entender a diferença entre 
    <strong>importância semântica (strong)</strong> e apenas <b>negrito visual (b)</b>. 
  </p>

  <p>
    Da mesma forma, usamos o <em>itálico para ênfase na fala</em>, 
    diferente da tag <i>&lt;i&gt;, usada para termos estrangeiros</i> (ex: <i>Software</i>).
  </p>

  <h3>Preços e Atualizações (H3)</h3>
  <p>
    No lançamento, o curso custava <del>R$ 500,00</del>, 
    mas hoje ele sai por <mark>apenas R$ 0,00</mark>!
  </p>

  <h4>A Ciência por trás (H4)</h4>
  <p>
    Água: H<sub>2</sub>O (Subscrito).<br>
    Teoria da Relatividade: E = mc<sup>2</sup> (Sobrescrito).
  </p>

  <hr style="margin: 20px 0;">

  <p style="text-align: center;">
    <small>&copy; 2025 - A tag &lt;small&gt; é para direitos autorais e letras miúdas.</small>
  </p>

</div>`}
          />
        </div>

        {/* TAGS ESTRUTURAIS */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            3. Semântica Estrutural do HTML5
          </h2>
          
          <p>
            Antes do HTML5, os desenvolvedores organizavam os sites usando centenas de tags genéricas 
            <code>&lt;div&gt;</code>. Isso criava o famoso "Div Soup" (Sopa de Divs), impossível de ler e sem 
            significado para os motores de busca. Hoje, usamos tags que <em>explicam</em> o que o bloco faz.
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li><code>&lt;header&gt;</code>: Cabeçalho da página ou de uma seção.</li>
            <li><code>&lt;nav&gt;</code>: Bloco de links de navegação principal.</li>
            <li><code>&lt;main&gt;</code>: O conteúdo principal e único daquela página.</li>
            <li><code>&lt;section&gt;</code>: Uma seção temática de conteúdo.</li>
            <li><code>&lt;article&gt;</code>: Um conteúdo independente (como um post de blog ou notícia).</li>
            <li><code>&lt;aside&gt;</code>: Conteúdo lateral ou complementar (barras laterais).</li>
            <li><code>&lt;footer&gt;</code>: Rodapé da página (copyright, links úteis).</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Laboratório: Estrutura Completa HTML5</h3>
          <p className="text-sm text-gray-600 mb-2">Explore o código abaixo para ver como as tags interagem para formar um layout.</p>
          <CodeBlockRunner
            height={600}
            initialCode={`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Portal Semântico</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; display: flex; flex-direction: column; min-height: 100vh; }
    header { background: #2c3e50; color: white; padding: 20px; text-align: center; }
    nav { background: #34495e; padding: 10px; text-align: center; }
    nav a { color: white; text-decoration: none; margin: 0 15px; font-weight: bold; }
    .container { display: flex; flex: 1; }
    main { flex: 3; padding: 20px; background: #f4f6f7; }
    aside { flex: 1; padding: 20px; background: #e0e0e0; border-left: 4px solid #bdc3c7; }
    article { background: white; padding: 15px; margin-bottom: 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    footer { background: #2c3e50; color: white; text-align: center; padding: 15px; margin-top: auto; }
  </style>
</head>
<body>

  <header>
    <h1>Portal de Tecnologia</h1>
  </header>

  <nav>
    <a href="#">Home</a>
    <a href="#">Notícias</a>
    <a href="#">Contato</a>
  </nav>

  <div class="container">
    <main>
      <section>
        <h2 style="color: #2980b9;">Últimas Notícias</h2>
        <article>
          <h3>O que é HTML Semântico?</h3>
          <p>É o uso de tags que dão significado ao conteúdo, como <strong>header</strong> e <strong>footer</strong>.</p>
        </article>
      </section>
    </main>

    <aside>
      <h3>Sobre o Autor</h3>
      <p>Desenvolvedor apaixonado por ensinar web.</p>
    </aside>
  </div>

  <footer>
    <p>&copy; 2025 - Todos os direitos reservados.</p>
  </footer>

</body>
</html>`}
          />
        </div>

        {/* LISTAS E TABELAS */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            4. Organizando Dados: Listas e Tabelas
          </h2>
          <p>Nem todo texto é um parágrafo. Às vezes, precisamos enumerar itens ou cruzar dados em linhas e colunas.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Listas</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li><code>&lt;ul&gt;</code> — Lista não-ordenada (pontos/bullets).</li>
                <li><code>&lt;ol&gt;</code> — Lista ordenada (números/letras).</li>
                <li><code>&lt;li&gt;</code> — O item da lista em si.</li>
                <li><code>&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;</code> — Listas de definição (como um dicionário).</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-800">Atenção com as Tabelas!</h4>
              <p className="text-sm mt-1">
                Tabelas (<code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>) devem ser usadas <strong>exclusivamente</strong> para dados tabulares (como relatórios financeiros ou estatísticas). 
                Nos anos 90, era comum usar tabelas para montar o layout do site. Hoje, isso é uma péssima prática. Layout se faz com CSS (Flexbox/Grid).
              </p>
            </div>
          </div>
        </div>

        {/* MÍDIA */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            5. Multimídia e Navegação (Links, Imagens e Vídeos)
          </h2>
          
          <p>
            A Web se tornou rica visualmente graças à capacidade do HTML de incorporar mídia externa. 
            Todas essas tags dependem fortemente dos <strong>Atributos</strong> (como <code>src</code> e <code>href</code>) para funcionar.
          </p>

          <h3 className="text-xl font-semibold mt-6">Laboratório: Elementos de Mídia</h3>
          <CodeBlockRunner
            height={500}
            initialCode={`<div style="background: white; padding: 20px; font-family: sans-serif;">
  
  <h3 style="color: #333;">1. Links e Imagens</h3>
  <a href="https://www.google.com" target="_blank" style="display: inline-block; background: #4285f4; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; margin-bottom: 15px;">
    Ir para o Google (Abre em nova aba)
  </a>
  <br>
  
  <figure style="border: 1px solid #ccc; display: inline-block; padding: 10px; background: #f9f9f9;">
    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300" alt="Fatia de Pizza" />
    <figcaption style="text-align: center; color: #555; margin-top: 8px; font-style: italic;">
      Fig. 1: A tag alt é crucial para acessibilidade.
    </figcaption>
  </figure>

  <hr style="margin: 20px 0;">

  <h3 style="color: #333;">2. Áudio e Vídeo Nativo</h3>
  <audio controls style="margin-bottom: 15px;">
    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  </audio>
  <br>

  <video width="300" controls poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
  </video>

</div>`}
          />
        </div>

        {/* FORMULÁRIOS */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            6. Interatividade Analógica: Formulários
          </h2>
          
          <p>
            Os formulários (<code>&lt;form&gt;</code>) são a ponte principal de comunicação entre o usuário 
            e os servidores web. É através de <em>inputs</em> que enviamos dados para serem processados no Back-end.
          </p>

          <h3 className="text-xl font-semibold mt-6">Laboratório: Formulário Completo</h3>
          <CodeBlockRunner
            height={480}
            initialCode={`<div style="background-color: white; color: #333; padding: 20px; font-family: Arial, sans-serif;">

  <form action="/enviar" method="POST">
    <fieldset style="border: 2px solid #4CAF50; padding: 15px; border-radius: 5px;">
      <legend style="background: #4CAF50; color: white; padding: 5px 10px; border-radius: 4px;">
        Entre em Contato
      </legend>

      <div style="margin-bottom: 15px;">
        <label for="nome" style="display: block; font-weight: bold;">Nome Completo:</label>
        <input type="text" id="nome" required placeholder="Digite seu nome..." style="width: 95%; padding: 8px;">
      </div>

      <div style="margin-bottom: 15px;">
        <label for="motivo" style="display: block; font-weight: bold;">Motivo:</label>
        <select id="motivo" style="width: 98%; padding: 8px;">
          <option value="duvida">Dúvida</option>
          <option value="elogio">Elogio</option>
        </select>
      </div>

      <div style="margin-bottom: 15px;">
        <label for="msg" style="display: block; font-weight: bold;">Mensagem:</label>
        <textarea id="msg" rows="4" style="width: 95%; padding: 8px;" placeholder="Escreva aqui..."></textarea>
      </div>

      <button type="submit" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 4px;">
        Enviar Mensagem
      </button>

    </fieldset>
  </form>

</div>`}
          />
        </div>

        {/* ATIVIDADE PRÁTICA */}
        <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            7. Desafio Final: O Site do Restaurante
          </h2>
          <p className="text-lg mb-4">
            Chegou a hora de unir tudo. O cliente exigiu que o site do seu restaurante tenha <strong>navegação interna, cardápio bem estruturado, uma receita destaque e um formulário de reserva completo</strong>.
          </p>

          <p className="mb-2 text-green-300 font-bold">Requisitos Obrigatórios:</p>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-sm">
            <li><strong>Menu de Navegação:</strong> Links internos que levam para as seções (ex: <code>href="#cardapio"</code>).</li>
            <li><strong>Seção Cardápio:</strong> Use listas de definição (<code>dl</code>).</li>
            <li><strong>Receita do Chef:</strong> Ingredientes em (<code>ul</code>) e Preparo em (<code>ol</code>).</li>
            <li><strong>Formulário de Reserva:</strong> Com data (<code>type="date"</code>) e número de pessoas (<code>type="number"</code>).</li>
          </ul>

          <CodeBlockRunner
            height={500}
            initialCode={`<div style="background: white; color: black; padding: 15px; font-family: sans-serif;">

  <header style="text-align: center;">
    <h1>Restaurante Sabor & Código</h1>
    <nav>
      <a href="#home">Início</a> |
      <a href="#cardapio">Cardápio</a> |
      <a href="#receita">Receita do Mês</a> |
      <a href="#reservas">Reservas</a>
    </nav>
  </header>
  <hr>

  <main>
    <section id="home">
      <h2>Bem-vindo à nossa cozinha</h2>
      <p>Aqui o código é limpo e a comida é saborosa.</p>
    </section>
    <hr>

    <section id="cardapio">
      <h2>Nosso Cardápio</h2>
      <h3>Entradas</h3>
      <ul>
        <li>Bruschetta de Tomate</li>
        <li>Salada Caprese</li>
      </ul>
      <h3>Pratos Principais</h3>
      <dl>
        <dt><strong>Risoto de Funghi</strong></dt>
        <dd>Arroz arbóreo com cogumelos frescos.</dd>
      </dl>
    </section>
    <hr>

    <section id="reservas">
      <h2>Faça sua Reserva</h2>
      <form>
        <label>Data:</label>
        <input type="date"><br><br>
        <label>Pessoas:</label>
        <input type="number" min="1" max="10"><br><br>
        <button type="button">Reservar Mesa</button>
      </form>
    </section>
  </main>
  <hr>

  <footer style="text-align: center; color: gray;">
    <p>Rua da Web, 404 - Internet City</p>
    <p>&copy; 2025 Restaurante Sabor & Código</p>
  </footer>

</div>`}
          />
        </div>

        {/* CONCLUSÃO */}
        <div className="border-t-2 border-blue-200 pt-8 mt-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">8. Conclusão</h2>
          <p>
            Nesta aula, focamos puramente nas tags e no significado estrutural delas. Como você pôde notar, 
            sem um estilo aprimorado, as páginas parecem documentos simples dos anos 90, independentemente de quão 
            boa seja a sua marcação semântica.
          </p>
          <p className="mt-3 font-semibold text-lg text-blue-600">
            Na Aula 3, entraremos no mundo do CSS (Cascading Style Sheets). Vamos aprender a selecionar essa estrutura HTML e transformá-la em interfaces modernas, responsivas e profissionais.
          </p>
        </div>

      </section>
    </LayoutAula>
  );
}