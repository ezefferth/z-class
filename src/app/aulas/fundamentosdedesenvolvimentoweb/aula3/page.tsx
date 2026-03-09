"use client";

import dynamic from "next/dynamic";
import LayoutAula from "@/src/components/layoutAula";

// Importação dinâmica do editor para evitar erros de SSR
const CodeBlockRunner = dynamic(
  () => import('@/src/components/codeEditorRunner'),
  { ssr: false, loading: () => <p className="text-gray-500 italic">Carregando editor interativo...</p> }
);

export default function Aula3HTMLProfissional() {
  return (
    <LayoutAula titulo="Aula 3 – HTML Profissional: Estrutura Real, Semântica Avançada e Formulários Completos">
      <section className="space-y-14 text-gray-800 leading-relaxed">

        {/* INTRODUÇÃO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">1. Introdução ao HTML Profissional</h2>
          <p>
            Nesta aula, vamos elevar o nível. Deixaremos de focar apenas em "fazer o texto aparecer na tela" e 
            passaremos a construir documentos com <strong>padrões reais de mercado</strong>. Isso significa aplicar a 
            semântica correta, focar em acessibilidade (A11y), otimização para motores de busca (SEO) e construir 
            formulários robustos com validação nativa.
          </p>
          <p className="mt-3">
            O objetivo é garantir que seu código seja compreensível para humanos, máquinas, robôs do Google e 
            leitores de tela, preparando o terreno ideal para recebermos o CSS na próxima etapa.
          </p>
        </div>

        {/* ESTRUTURA PROFISSIONAL */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">2. A Estrutura Base de um Documento</h2>
          
          <p>
            Um documento HTML profissional separa estritamente as configurações invisíveis (no <code>&lt;head&gt;</code>) 
            do conteúdo visível (no <code>&lt;body&gt;</code>). A primeira linha deve ser sempre o <code>&lt;!DOCTYPE html&gt;</code>, 
            que avisa ao navegador que estamos usando a versão mais recente do HTML5.
          </p>

          <CodeBlockRunner
            height={450}
            initialCode={`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estrutura Base</title>
</head>
<body>

  <header>
    <h1>Portal de Tecnologia</h1>
    <nav>
      <a href="#home">Home</a> | <a href="#noticias">Notícias</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Bem-vindo!</h2>
      <p>Conteúdo principal estruturado corretamente.</p>
    </article>
  </main>

  <footer>
    <p>&copy; 2025 Portal Tech</p>
  </footer>

</body>
</html>`}
          />
        </div>

        {/* HEAD PROFISSIONAL (Movido para cá por coerência de fluxo) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">3. Os Segredos da Seção &lt;head&gt;</h2>
          
          <p>
            A tag <code>&lt;head&gt;</code> é o cérebro da sua página. Nada aqui (exceto o <code>title</code> e o <code>favicon</code>) 
            é diretamente visto pelo usuário, mas ela define como a página se comporta, como se adapta ao celular e 
            como aparece quando o link é compartilhado no WhatsApp ou indexado pelo Google.
          </p>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 mt-4 mb-6">
            <h4 className="font-bold text-blue-800 mb-2">Elementos Críticos do Head:</h4>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><strong>Charset:</strong> <code>&lt;meta charset="UTF-8"&gt;</code> garante que acentos e cedilhas funcionem.</li>
              <li><strong>Viewport:</strong> É o que faz seu site poder ser lido em celulares sem precisar dar zoom.</li>
              <li><strong>Open Graph (og:):</strong> Metadados lidos por redes sociais (Facebook, LinkedIn, X) para gerar os "cards" com imagem e título quando você cola um link.</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-4">Laboratório: Head Profissional</h3>
          <p className="text-sm text-gray-600 mb-2">Explore as metatags avançadas neste exemplo que simula um ambiente real de produção.</p>
          <CodeBlockRunner
            height={600}
            initialCode={`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Curso HTML Profissional</title>
  <meta name="description" content="Aprenda a criar páginas web profissionais com HTML5 avançado.">
  <meta name="keywords" content="HTML, Web Design, Programação, Frontend">
  <meta name="author" content="Seu Nome">
  <meta name="robots" content="index, follow">

  <meta name="theme-color" content="#2563eb">

  <meta property="og:title" content="Curso HTML 2025">
  <meta property="og:description" content="Aprenda HTML do zero ao profissional">
  <meta property="og:image" content="https://seusite.com/capa.jpg">
  <meta property="og:type" content="website">

  <link rel="icon" href="favicon.ico">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>
<body>
  <div style="font-family: 'Roboto', sans-serif; padding: 20px;">
    <h1>Exemplo de Head Completo</h1>
    <p>As configurações acima definem como os motores de busca e as redes sociais interpretam esta página.</p>
  </div>
</body>
</html>`}
          />
        </div>

        {/* SEMÂNTICA AVANÇADA */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">4. Semântica Avançada (Micro-formatos)</h2>
          <p>
            Além das tags estruturais (<code>main</code>, <code>header</code>), o HTML5 trouxe tags refinadas 
            para dar contexto a pedaços específicos de conteúdo. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">
            <ul className="list-disc ml-6 space-y-2 text-sm bg-gray-50 p-4 border rounded">
              <li><code>&lt;time datetime="..."&gt;</code>: Formata datas para máquinas lerem.</li>
              <li><code>&lt;abbr title="..."&gt;</code>: Define abreviações com explicação ao passar o mouse.</li>
              <li><code>&lt;blockquote cite="..."&gt;</code>: Citações em bloco com origem rastreável.</li>
            </ul>
            <ul className="list-disc ml-6 space-y-2 text-sm bg-gray-50 p-4 border rounded">
              <li><code>&lt;figure&gt; & &lt;figcaption&gt;</code>: Agrupa uma imagem com sua legenda.</li>
              <li><code>&lt;details&gt; & &lt;summary&gt;</code>: <strong>Incrível!</strong> Cria uma aba sanfona (accordion) nativa, sem usar nenhum JavaScript!</li>
              <li><code>&lt;kbd&gt;</code>: Indica uma entrada de teclado (ex: atalhos).</li>
            </ul>
          </div>

          <CodeBlockRunner
            height={450}
            initialCode={`<div style="font-family: sans-serif; padding: 20px;">
  <h2>História da Computação</h2>

  <p>
    Em <time datetime="1946-02-14">14 de Fevereiro de 1946</time>, 
    surgiu o <abbr title="Electronic Numerical Integrator and Computer" style="cursor: help; border-bottom: 1px dotted blue;">ENIAC</abbr>.
  </p>

  <blockquote cite="https://developer.mozilla.org" style="border-left: 4px solid #ccc; margin-left: 0; padding-left: 15px; font-style: italic;">
    "HTML é a base estrutural da Web."
  </blockquote>

  <details style="margin-top: 20px; background: #f1f1f1; padding: 10px; border-radius: 5px; cursor: pointer;">
    <summary style="font-weight: bold;">Clique aqui para ler mais sobre o ENIAC</summary>
    <p style="margin-top: 10px;">O ENIAC foi um dos primeiros computadores eletrônicos de grande escala, ocupando salas inteiras.</p>
  </details>

  <p style="margin-top: 20px;">Dica: Pressione <kbd style="background: #eee; border: 1px solid #ccc; padding: 2px 5px; border-radius: 3px;">Ctrl</kbd> + <kbd style="background: #eee; border: 1px solid #ccc; padding: 2px 5px; border-radius: 3px;">S</kbd> para salvar.</p>
</div>`}
          />
        </div>

        {/* ACESSIBILIDADE */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">5. Acessibilidade (A11y) no HTML</h2>
          
          <p>
            Um desenvolvedor de excelência não cria sites apenas para quem pode ver. Pessoas com deficiência visual 
            utilizam <strong>Leitores de Tela</strong> (Softwares que leem o código em voz alta).
          </p>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mt-4 mb-6">
            <h4 className="font-bold text-yellow-800 mb-2">A Regra de Ouro do Atributo "alt"</h4>
            <p className="text-sm">
              Sempre use o atributo <code>alt</code> em imagens. Se a imagem não carregar, ou se um cego estiver navegando, o texto do <code>alt</code> será lido. Nunca escreva "imagem de um cachorro", escreva o contexto visual: "Cachorro golden retriever correndo em um gramado ensolarado". Além disso, utilize <code>aria-label</code> em botões ou inputs que não possuem texto visível explícito.
            </p>
          </div>

          <CodeBlockRunner
            height={300}
            initialCode={`<form style="padding: 20px; font-family: sans-serif;">

  <label for="email">Receber Newsletter:</label><br>
  <input 
    type="email" 
    id="email" 
    required 
    aria-label="Digite seu e-mail para receber notícias"
    placeholder="seu@email.com"
    style="padding: 8px; margin-top: 5px;"
  >
  <br><br>

  <img 
    src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=300"
    alt="Mulher digitando em um notebook prateado em uma mesa rústica"
    style="border-radius: 8px;"
  >

</form>`}
          />
        </div>

        {/* FORMULÁRIOS COMPLETOS */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">6. Formulários Profissionais e Validação Nativa</h2>
          
          <p>
            O HTML5 revolucionou os formulários inserindo <strong>validação nativa no navegador</strong>. 
            Você não precisa de Javascript complexo para forçar alguém a digitar um e-mail correto ou uma senha longa; o próprio HTML faz isso com atributos como <code>required</code> e <code>minlength</code>.
          </p>

          <CodeBlockRunner
            height={700}
            initialCode={`<div style="font-family: Arial; padding: 20px;">
  <form>
    <fieldset style="border: 1px solid #bbb; padding: 20px; border-radius: 8px; max-width: 400px;">
      <legend style="font-weight: bold; background: #fff; padding: 0 5px;">Cadastro Completo</legend>

      <label for="nome" style="display:block; margin-top: 10px;">Nome (Mín. 3 letras):</label>
      <input type="text" id="nome" required minlength="3" style="width: 100%; padding: 5px;">

      <label for="email" style="display:block; margin-top: 10px;">Email válido:</label>
      <input type="email" id="email" required style="width: 100%; padding: 5px;">

      <label for="senha" style="display:block; margin-top: 10px;">Senha forte:</label>
      <input type="password" id="senha" minlength="6" required style="width: 100%; padding: 5px;">

      <div style="display: flex; gap: 10px; margin-top: 15px;">
        <div style="flex: 1;">
          <label for="idade">Idade:</label><br>
          <input type="number" id="idade" min="18" max="120" style="width: 100%; padding: 5px;">
        </div>
        <div style="flex: 1;">
          <label for="data">Nascimento:</label><br>
          <input type="date" id="data" style="width: 100%; padding: 5px;">
        </div>
      </div>

      <div style="margin-top: 15px;">
        <label style="font-weight: bold;">Gênero:</label><br>
        <input type="radio" name="genero" id="masc"> <label for="masc">Masculino</label>
        <input type="radio" name="genero" id="fem"> <label for="fem">Feminino</label>
      </div>

      <div style="margin-top: 15px;">
        <label for="cor" style="margin-right: 10px;">Cor do Perfil:</label>
        <input type="color" id="cor">
      </div>

      <div style="margin-top: 15px;">
        <label for="arquivo">Envie seu currículo:</label><br>
        <input type="file" id="arquivo" accept=".pdf" style="margin-top: 5px;">
      </div>

      <button type="submit" style="margin-top: 20px; width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Cadastrar e Validar Dados
      </button>
    </fieldset>
  </form>
</div>`}
          />
        </div>

        {/* ATIVIDADE FINAL */}
        <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg mt-10">
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            7. Desafio Prático: Sistema de Inscrição em Evento Acadêmico
          </h2>
          <p className="mb-4 text-lg">
            Agora você vai aplicar tudo o que aprendeu construindo a estrutura final de uma página web 
            para um evento de tecnologia.
          </p>

          <p className="mb-2 text-green-300 font-bold">Requisitos Obrigatórios para Avaliação:</p>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-sm text-gray-300">
            <li><strong>Estrutura:</strong> Deve conter as seções <code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code>, <code>article</code> e <code>footer</code>.</li>
            <li><strong>Semântica:</strong> Empregue uso de <code>&lt;time&gt;</code> para as datas das palestras e <code>&lt;figure&gt;</code> para as fotos dos palestrantes.</li>
            <li><strong>Formulário Nativo:</strong> Crie um formulário de compra de ingressos que exija um e-mail válido, nome completo e uma caixa de seleção de qual dia quer participar.</li>
            <li><strong>Acessibilidade:</strong> Todos os campos devem ter <code>&lt;label for="..."&gt;</code> ligados ao <code>id</code> do input correspondente.</li>
          </ul>

          <CodeBlockRunner
            height={600}
            initialCode={`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Congresso Tech 2025 - Inscrições Abertas">
  <title>Evento Tech 2025</title>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #f9f9f9; color: #333; margin: 0; }
    .container { max-width: 800px; margin: auto; padding: 20px; background: white; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
  </style>
</head>
<body>

  <div class="container">
    <header style="text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 15px;">
      <h1 style="color: #2563eb;">Congresso Dev & Inovação 2025</h1>
      <nav>
        <a href="#sobre">Sobre o Evento</a> |
        <a href="#palestrantes">Palestrantes</a> |
        <a href="#inscricao">Inscrição</a>
      </nav>
    </header>

    <main>
      <section id="sobre" style="margin-top: 20px;">
        <h2>Sobre o Evento</h2>
        <p>O maior evento de desenvolvimento da América Latina. Junte-se a nós no dia <time datetime="2025-10-15">15 de Outubro</time>.</p>
      </section>

      <section id="palestrantes" style="margin-top: 20px;">
        <h2>Destaque da Edição</h2>
        <article style="display: flex; align-items: center; gap: 15px; background: #f1f5f9; padding: 15px; border-radius: 8px;">
          <figure style="margin: 0;">
            <img src="https://via.placeholder.com/100" alt="Foto do Palestrante XYZ" style="border-radius: 50%;">
          </figure>
          <div>
            <h3 style="margin: 0;">Dr. Alan Turing Silva</h3>
            <p style="margin: 5px 0;">Palestra: "O Futuro da Inteligência Artificial no Front-end".</p>
          </div>
        </article>
      </section>

      <section id="inscricao" style="margin-top: 30px;">
        <h2>Garanta sua Vaga</h2>
        <form style="background: #e2e8f0; padding: 20px; border-radius: 8px;">
          <label for="nomeInscrito">Nome no Crachá:</label><br>
          <input type="text" id="nomeInscrito" required style="width: 100%; margin-bottom: 10px;"><br>

          <label for="emailInscrito">E-mail Profissional:</label><br>
          <input type="email" id="emailInscrito" required style="width: 100%; margin-bottom: 10px;"><br>

          <label>Nível de Experiência:</label><br>
          <select style="width: 100%; margin-bottom: 15px;">
            <option value="junior">Estudante / Júnior</option>
            <option value="pleno">Pleno</option>
            <option value="senior">Sênior / Especialista</option>
          </select>

          <button type="submit" style="background: #16a34a; color: white; padding: 10px 20px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
            Confirmar Inscrição
          </button>
        </form>
      </section>
    </main>

    <footer style="margin-top: 40px; text-align: center; color: #64748b; font-size: 0.9em;">
      <p>&copy; 2025 Evento Tech - CNPJ: 00.000.000/0001-00</p>
    </footer>
  </div>

</body>
</html>`}
          />
        </div>

        {/* CONCLUSÃO */}
        <div className="border-t-2 border-blue-200 pt-8 mt-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">8. Conclusão Final do Módulo HTML</h2>
          <p>
            Parabéns! Se você completou até aqui, seu HTML deixou de ser amador e atingiu o padrão que grandes 
            empresas exigem: <strong>semântico, acessível, bem validado e preparado para SEO</strong>.
          </p>
          <p className="mt-3 font-semibold text-lg text-blue-600">
            Na próxima aula, daremos adeus às páginas "preto no branco" e entraremos com os dois pés no mundo fascinante do CSS, aprendendo seletores, cores, tipografia e os poderosos Flexbox e CSS Grid!
          </p>
        </div>

      </section>
    </LayoutAula>
  );
}