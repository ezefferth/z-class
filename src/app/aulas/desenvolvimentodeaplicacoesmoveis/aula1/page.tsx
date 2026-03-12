"use client";

import dynamic from "next/dynamic";
import LayoutAula from "@/src/components/layoutAula";

// Importação dinâmica do editor interativo
const CodeBlockRunner = dynamic(
  () => import('@/src/components/codeEditorRunner'),
  { ssr: false, loading: () => <p className="text-gray-500 italic">Carregando editor interativo...</p> }
);

export default function Aula1RevisaoWeb() {
  return (
    <LayoutAula titulo="Aula 1 – Revisão de HTML, CSS e Layout Responsivo">
      <section className="space-y-16 text-gray-800 leading-relaxed text-lg">

        {/* ==========================================
            1. INTRODUÇÃO
        ========================================== */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-100 pb-2">
            1. Por que revisar HTML e CSS antes do React?
          </h2>
          <p className="mb-4">
            Antes de avançarmos para o desenvolvimento de aplicações modernas utilizando React e, 
            posteriormente, React Native, é fundamental revisarmos os fundamentos da construção de páginas web.
          </p>
          <p className="mb-4">
            O React é uma biblioteca poderosa, mas <strong>não substitui o conhecimento estrutural e visual</strong>. 
            Na prática, o React funciona como uma camada de abstração que gera estruturas dinamicamente 
            e aplica estilos de maneira organizada (usando JSX e StyleSheet).
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 rounded-r-lg shadow-sm">
            <h4 className="font-bold text-indigo-900 mb-2">💡 Fato de Mercado:</h4>
            <p className="text-indigo-800 text-base">
              Grande parte dos problemas que os desenvolvedores juniores encontram ao usar frameworks 
              modernos não estão relacionados ao framework em si, mas sim a lacunas nos fundamentos 
              básicos da web (especialmente em layout, alinhamento e responsividade).
            </p>
          </div>
        </div>

        {/* ==========================================
            2. ESTRUTURA BÁSICA E SEMÂNTICA
        ========================================== */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-100 pb-2">
            2. Estrutura Básica e Semântica do HTML
          </h2>
          <p className="mb-4">
            HTML (<em>HyperText Markup Language</em>) é uma linguagem de marcação utilizada para estruturar conteúdo. 
            Uma evolução crucial da web foi a introdução dos <strong>elementos semânticos</strong> 
            (<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>), 
            que descrevem o significado do conteúdo para navegadores e leitores de tela.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Exemplo 2.1: A Estrutura Semântica</h3>
          <p className="text-base text-gray-600 mb-3">
            Neste exemplo, veja como dividimos a página logicamente. Essa mesma lógica de divisão será usada quando formos criar os "Componentes" no React.
          </p>
          <CodeBlockRunner
            height={400}
            initialCode={`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <style>
    body { font-family: sans-serif; margin: 0; padding: 20px; background: #f4f4f5; }
    header, nav, main, footer { background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; border: 1px solid #ddd; }
    nav a { margin-right: 15px; color: #4f46e5; text-decoration: none; font-weight: bold; }
  </style>
</head>
<body>

  <header>
      <h1>Portal de Tecnologia</h1>
  </header>

  <nav>
      <a href="#">Início</a>
      <a href="#">Mobile</a>
      <a href="#">Contato</a>
  </nav>

  <main>
    <section>
        <article>
            <h2>React Native domina o mercado</h2>
            <p>O desenvolvimento multiplataforma tem crescido exponencialmente, permitindo criar apps iOS e Android com o mesmo código.</p>
        </article>
    </section>
  </main>

  <footer>
      <p>&copy; 2025 Aula de Mobile</p>
  </footer>

</body>
</html>`}
          />

          <h3 className="text-xl font-bold text-gray-800 mt-10 mb-3">Exemplo 2.2: Formulários e Inputs Modernos</h3>
          <p className="text-base text-gray-600 mb-3">
            Em aplicativos mobile, a interação principal ocorre via formulários (Login, Cadastros). O HTML5 possui validações nativas e tipos de teclado específicos (ex: <code>type="email"</code> abre o teclado com o "@" no celular).
          </p>
          <CodeBlockRunner
            height={350}
            initialCode={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #e0e7ff; }
    .form-container { background: white; padding: 20px; border-radius: 12px; max-width: 300px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    input, button { width: 100%; padding: 10px; margin-top: 5px; margin-bottom: 15px; border-radius: 6px; border: 1px solid #ccc; box-sizing: border-box; }
    button { background: #4f46e5; color: white; border: none; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>

  <div class="form-container">
    <h3>Acesse sua Conta</h3>
    <form>
      <label for="email">E-mail Corporativo</label>
      <input type="email" id="email" placeholder="nome@empresa.com" required>

      <label for="senha">Senha</label>
      <input type="password" id="senha" placeholder="Mínimo 6 caracteres" minlength="6" required>

      <button type="submit">Entrar no App</button>
    </form>
  </div>

</body>
</html>`}
          />
        </div>

        {/* ==========================================
            3. INTRODUÇÃO AO CSS E BOX MODEL
        ========================================== */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-100 pb-2">
            3. CSS e o Modelo de Caixa (Box Model)
          </h2>
          <p className="mb-4">
            Enquanto o HTML estrutura, o <strong>CSS (Cascading Style Sheets)</strong> define a aparência. 
            O conceito absoluto para estilizar qualquer coisa na web ou no mobile é: <strong>todo elemento é uma caixa retangular</strong>.
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-3 mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <li><strong>Content (Conteúdo):</strong> O texto ou imagem (controlado por <code>width</code> e <code>height</code>).</li>
            <li><strong>Padding (Enchimento):</strong> Espaço <em>interno</em>, entre o conteúdo e a borda. Impede que o texto cole na borda.</li>
            <li><strong>Border (Borda):</strong> A linha que envolve o elemento.</li>
            <li><strong>Margin (Margem):</strong> Espaço <em>externo</em>, que afasta as caixas umas das outras.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Exemplo 3.1: Dissecando o Box Model</h3>
          <p className="text-base text-gray-600 mb-3">Altere os valores de margin e padding no código para ver como a caixa se comporta e "empurra" o texto vizinho.</p>
          <CodeBlockRunner
            height={300}
            initialCode={`<!DOCTYPE html>
<html>
<head>
<style>
  .caixa {
    background-color: #818cf8;
    color: white;
    font-family: sans-serif;
    
    /* Box Model em ação: */
    width: 250px;
    padding: 20px;
    border: 5px solid #312e81;
    margin: 30px;
  }
</style>
</head>
<body style="background: #e0e7ff; margin: 0; padding: 20px;">

  <div class="caixa">
    Sou a caixa 1! Altere meu margin, padding e border no CSS.
  </div>
  
  <div style="background: white; padding: 10px; font-family: sans-serif;">
    Sou um texto abaixo da caixa. Fui empurrado pela 'margin' da caixa de cima.
  </div>

</body>
</html>`}
          />

          <h3 className="text-xl font-bold text-gray-800 mt-10 mb-3">Exemplo 3.2: Estilização Avançada (UI Mobile)</h3>
          <p className="text-base text-gray-600 mb-3">
            Em aplicativos, raramente usamos caixas quadradas e duras. Usamos <code>border-radius</code> (bordas arredondadas) e <code>box-shadow</code> (sombras) para dar sensação de profundidade e botões clicáveis.
          </p>
          <CodeBlockRunner
            height={320}
            initialCode={`<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #f3f4f6; display: flex; justify-content: center; padding: 40px; font-family: sans-serif; }
  
  .card-perfil {
    background: white;
    width: 280px;
    padding: 25px;
    border-radius: 20px; /* Deixa os cantos bem arredondados */
    box-shadow: 0 10px 25px rgba(0,0,0,0.1); /* Sombra suave embaixo */
    text-align: center;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%; /* Faz a imagem ficar perfeitamente redonda */
    object-fit: cover;
    margin-bottom: 15px;
    border: 3px solid #4f46e5;
  }

  .btn-seguir {
    background: #4f46e5; color: white; padding: 10px 20px;
    border: none; border-radius: 30px; /* Botão formato pílula */
    font-weight: bold; cursor: pointer; margin-top: 10px;
    box-shadow: 0 4px 6px rgba(79, 70, 229, 0.3);
  }
</style>
</head>
<body>

  <div class="card-perfil">
    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200" alt="Avatar" class="avatar">
    <h2 style="margin: 0; font-size: 20px;">Carlos Silva</h2>
    <p style="color: #6b7280; font-size: 14px;">Mobile Developer</p>
    <button class="btn-seguir">Seguir Perfil</button>
  </div>

</body>
</html>`}
          />
        </div>

        {/* ==========================================
            4. LAYOUT MODERNO: FLEXBOX
        ========================================== */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-100 pb-2">
            4. O Poder do Flexbox
          </h2>
          <p className="mb-4">
            No desenvolvimento Mobile, alinhar botões, ícones e textos lado a lado de forma precisa é obrigatório. O <strong>Flexbox</strong> (Flexível Box) resolve isso de forma elegante, declarando as regras no contêiner "Pai".
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-6 text-gray-700">
            <li><code>display: flex</code>: Ativa o poder do flexbox no elemento.</li>
            <li><code>justify-content</code>: Alinha os elementos no eixo principal (geralmente horizontal. Ex: <code>space-between</code>, <code>center</code>).</li>
            <li><code>align-items</code>: Alinha os elementos no eixo cruzado (geralmente vertical. Ex: <code>center</code> para centralizar perfeitamente ao meio).</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Exemplo 4.1: Alinhamentos Básicos</h3>
          <p className="text-base text-gray-600 mb-3">Brinque com os valores de <code>justify-content</code> no código (tente mudar de <em>center</em> para <em>space-between</em> ou <em>space-evenly</em>).</p>
          <CodeBlockRunner
            height={300}
            initialCode={`<!DOCTYPE html>
<html>
<head>
<style>
  .container {
    display: flex;
    justify-content: center; /* 🔴 ALTERE ESTE VALOR */
    align-items: center;     /* 🔴 ALTERE ESTE VALOR (ex: flex-start, flex-end) */
    
    height: 150px;
    background-color: #312e81;
    border-radius: 8px;
    padding: 10px;
  }

  .item {
    background-color: #c7d2fe; color: #312e81;
    padding: 15px; margin: 5px; font-weight: bold;
    border-radius: 4px; font-family: sans-serif;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>`}
          />

          <h3 className="text-xl font-bold text-gray-800 mt-10 mb-3">Exemplo 4.2: Criando um App Header (Navbar)</h3>
          <p className="text-base text-gray-600 mb-3">
            Este é um caso de uso real extremo no React Native. Como criar aquele cabeçalho de app com um botão de voltar na esquerda, título no centro e um ícone na direita? O segredo é o <code>space-between</code>.
          </p>
          <CodeBlockRunner
            height={300}
            initialCode={`<!DOCTYPE html>
<html>
<head>
<style>
  .app-header {
    background: #4f46e5;
    color: white;
    padding: 15px 20px;
    font-family: sans-serif;
    
    /* Ativando Flexbox */
    display: flex;
    justify-content: space-between; /* Empurra um para cada canto */
    align-items: center; /* Centraliza verticalmente */
    
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .icone {
    background: rgba(255,255,255,0.2);
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
  }

  h1 { margin: 0; font-size: 18px; }
</style>
</head>
<body style="background: #e0e7ff; margin: 0;">

  <div class="app-header">
    <div class="icone">⬅ Voltar</div>
    <h1>Configurações</h1>
    <div class="icone">⚙️</div>
  </div>

</body>
</html>`}
          />
        </div>

        {/* ==========================================
            5. RESPONSIVIDADE E MEDIA QUERIES
        ========================================== */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-100 pb-2">
            5. Responsividade e Media Queries
          </h2>
          <p className="mb-4">
            A web moderna é fluida. Seu layout não pode quebrar ao ser aberto em um celular. 
            Fazemos essa adaptação de telas utilizando unidades relativas (<code>%</code>) e as famosas <strong>Media Queries</strong>, que aplicam regras de CSS condicionais dependendo do tamanho da tela.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Exemplo 5.1: Grid Responsivo com Flex-Wrap</h3>
          <p className="text-base text-gray-600 mb-3">
            Diminua a largura do simulador abaixo! Quando a tela passa de 600px, o <code>flex-direction</code> muda e os cartões, que estavam lado a lado, passam a empilhar um embaixo do outro perfeitamente.
          </p>

          <CodeBlockRunner
            height={480}
            initialCode={`<!DOCTYPE html>
<html>
<head>
<style>
  .grid-responsivo {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    font-family: sans-serif;
  }

  .cartao {
    background: white;
    border-left: 5px solid #4f46e5;
    padding: 25px;
    flex: 1; /* Faz todas as caixas terem a mesma largura */
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }

  /* 🔥 MEDIA QUERY: Regras exclusivas para telas menores que 600px */
  @media (max-width: 600px) {
    .grid-responsivo {
      flex-direction: column; /* Transforma a linha em coluna */
    }
  }
</style>
</head>
<body style="background: #f8fafc; padding: 20px; margin: 0;">

  <h3 style="font-family: sans-serif; text-align: center; color: #333;">
    Redimensione a largura desta tela! 👉
  </h3>

  <div class="grid-responsivo">
    <div class="cartao">
      <strong>Plano Basic</strong><br><small>R$ 19/mês</small>
    </div>
    <div class="cartao">
      <strong>Plano Pro</strong><br><small>R$ 49/mês</small>
    </div>
    <div class="cartao">
      <strong>Plano Ultra</strong><br><small>R$ 99/mês</small>
    </div>
  </div>

</body>
</html>`}
          />
        </div>

        {/* ==========================================
            6. A CONEXÃO COM O REACT
        ========================================== */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-100 pb-2">
            6. A Conexão com o React
          </h2>
          <p className="mb-4">
            O React utiliza uma sintaxe chamada <strong>JSX</strong>, que permite escrever a interface de forma muito semelhante ao HTML 
            diretamente dentro do JavaScript. Se você entendeu as estruturas e as classes CSS acima, o React fará todo sentido:
          </p>
          
          <div className="bg-gray-900 text-gray-100 p-5 rounded-xl font-mono text-sm overflow-x-auto shadow-md border-l-4 border-indigo-500">
            <pre>
{`// Exemplo de um Componente Funcional no React:

export default function App() {
  return (
    <div className="container-responsivo">
      <header className="app-header">
        <h1>Olá, Mundo Mobile!</h1>
      </header>
      
      <main>
        <p>A estrutura HTML vive aqui dentro do retorno da função.</p>
      </main>
    </div>
  );
}`}
            </pre>
          </div>
        </div>

        {/* ==========================================
            ATIVIDADE FINAL
        ========================================== */}
        <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-xl mt-10">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">
            🎯 Desafio Prático: O Seu Primeiro "Mini-App"
          </h2>

          <p className="mb-4 text-lg">
            Sua missão é criar a estrutura visual de um pequeno aplicativo de tarefas utilizando apenas HTML e CSS.
          </p>

          <p className="mb-2 text-indigo-200 font-bold">Requisitos do Layout:</p>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-sm text-indigo-100">
            <li>Crie um <code>&lt;header&gt;</code> que utilize Flexbox para alinhar um título e um botão "+".</li>
            <li>A <code>&lt;main&gt;</code> deve conter pelo menos 3 cartões simulando tarefas.</li>
            <li>Use margens e paddings adequados para não deixar os textos colados nas bordas.</li>
            <li><strong>Bônus:</strong> Utilize uma <em>Media Query</em> para que a cor de fundo do App mude em telas menores que 600px.</li>
          </ul>

          <CodeBlockRunner
            height={600}
            initialCode={`<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  /* Reset básico */
  body { margin: 0; font-family: Arial, sans-serif; background: #e2e8f0; }
  
  /* CRIE SEUS ESTILOS AQUI */
  .app-header {
    background: #1e1b4b;
    color: white;
    padding: 20px;
    
    /* 1. Ative o Flexbox e separe o texto do botão aqui */
    
  }

  .lista-tarefas {
    padding: 20px;
    /* 2. Crie um flexbox em coluna com um "gap" (espaçamento) entre as tarefas */
    
  }

  .tarefa-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #10b981; /* Borda verde de sucesso */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  /* 3. Crie a Media Query para alterar estilos em telas pequenas */


</style>
</head>
<body>

  <header class="app-header">
    <h2 style="margin: 0;">Minhas Tarefas</h2>
    </header>

  <main class="lista-tarefas">
    <div class="tarefa-card">
      <h3 style="margin: 0 0 5px 0;">Estudar React</h3>
      <small style="color: gray;">Hoje às 14:00</small>
    </div>
    
    <div class="tarefa-card">
      <h3 style="margin: 0 0 5px 0;">Revisar Flexbox</h3>
      <small style="color: gray;">Hoje às 16:00</small>
    </div>
  </main>

</body>
</html>`}
          />
        </div>

      </section>
    </LayoutAula>
  );
}