"use client";

import dynamic from "next/dynamic";
import LayoutAula from "@/src/components/layoutAula";

// Importação dinâmica do editor interativo com abas separadas
const CodeBlockRunner = dynamic(
  () => import('@/src/components/codeEditorRunnerCSS'), 
  { ssr: false, loading: () => <p className="text-gray-500 italic">Carregando editor interativo...</p> }
);

export default function Aula5LayoutsAvancados() {
  return (
    <LayoutAula titulo="Aula 5 – Layouts Modernos e Responsividade: Dominando Flexbox, CSS Grid e Media Queries">
      <section className="space-y-14 text-gray-800 leading-relaxed">

        {/* INTRODUÇÃO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">1. O Próximo Nível do Web Design</h2>
          <p>
            Na aula anterior, entendemos como o CSS trata todos os elementos como caixas (Box Model) e vimos como 
            colocá-las lado a lado usando o Flexbox básico. Porém, o mundo real exige sites que se adaptem 
            a telas gigantes de monitores <i>ultrawide</i> e também a telas minúsculas de smartphones.
          </p>
          <p className="mt-3">
            Nesta aula, vamos dominar o <strong>Flexbox avançado</strong>, introduzir o poderoso <strong>CSS Grid</strong> 
            (que nos permite criar verdadeiras "malhas" de design) e aprender a técnica de ouro do front-end: 
            as <strong>Media Queries</strong> para criar sites responsivos.
          </p>
        </div>

        {/* FLEXBOX AVANÇADO (WRAP E GAP) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">2. Flexbox Avançado: Quebra de Linha e Direção</h2>
          
          <p>
            O que acontece quando temos muitos itens lado a lado e a tela acaba? O Flexbox por padrão tenta "espremer" tudo. 
            Para resolver isso, usamos a propriedade <code>flex-wrap</code>. Além disso, podemos mudar o eixo do Flexbox 
            de linha para coluna com o <code>flex-direction</code>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-6">
            <div className="bg-blue-50 p-5 border rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-blue-800 border-b border-blue-200 pb-2 mb-3">flex-wrap</h3>
              <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700">
                <li><code>nowrap</code>: (Padrão) Espreme os itens na mesma linha.</li>
                <li><code>wrap</code>: Joga os itens que não couberem para a linha de baixo.</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-5 border rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-blue-800 border-b border-blue-200 pb-2 mb-3">flex-direction</h3>
              <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700">
                <li><code>row</code>: (Padrão) Da esquerda para a direita.</li>
                <li><code>column</code>: De cima para baixo (ótimo para alinhar menus no celular).</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Laboratório: Galeria Flexível</h3>
          <p className="text-sm text-gray-600 mb-4">Veja como o <code>flex-wrap: wrap</code> salva nosso layout de quebrar.</p>
          
          <CodeBlockRunner
            height={380}
            initialHtml={`<div class="galeria">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
</div>`}
            initialCss={`.galeria {
  display: flex;
  flex-wrap: wrap; /* Tente apagar esta linha! */
  gap: 15px;       /* Cria espaço entre as linhas e colunas magicamente */
  padding: 20px;
  background: #f1f5f9;
  border-radius: 8px;
}

.card {
  background: #3b82f6;
  color: white;
  padding: 30px;
  font-weight: bold;
  font-family: sans-serif;
  flex-grow: 1; /* Faz os cards crescerem para preencher o buraco vazio */
  min-width: 150px;
  text-align: center;
  border-radius: 6px;
}`}
          />
        </div>

        {/* CSS GRID: O REI DO LAYOUT */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">3. CSS Grid: O Sistema 2D Perfeito</h2>
          
          <p>
            Se o Flexbox é rei em alinhar itens em uma <strong>única direção</strong> (linha OU coluna), o <strong>CSS Grid</strong> 
            foi feito para layouts complexos em <strong>duas dimensões</strong> (linhas E colunas simultaneamente).
          </p>
          <p className="mt-2 mb-4">
            Com o Grid, nós desenhamos uma "tabela invisível" e dizemos em quais "células" nossos elementos devem ficar. 
            A unidade mágica do Grid é o <code>fr</code> (fração), que divide o espaço livre de forma inteligente.
          </p>

          <CodeBlockRunner
            height={400}
            initialHtml={`<div class="grade-produtos">
  <div class="item">Produto A</div>
  <div class="item">Produto B</div>
  <div class="item">Produto C</div>
  <div class="item destaque">Produto D (Destaque)</div>
  <div class="item">Produto E</div>
  <div class="item">Produto F</div>
</div>`}
            initialCss={`.grade-produtos {
  display: grid;
  /* Cria 3 colunas de tamanhos iguais (1 fração cada) */
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  padding: 20px;
  background: #1e293b;
}

.item {
  background: #10b981;
  color: white;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
  border-radius: 4px;
}

/* Podemos fazer um item ocupar mais de uma coluna! */
.destaque {
  background: #f59e0b;
  grid-column: span 2; /* Ocupa o espaço de 2 colunas */
}`}
          />
        </div>

        {/* DESIGN RESPONSIVO E MEDIA QUERIES */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">4. A Arte da Responsividade: Media Queries</h2>
          
          <p>
            Um site acessado no computador não pode ter a mesma aparência quando acessado no celular, senão o texto ficará ilegível. 
            É aqui que entram as <strong>Media Queries</strong> (Consultas de Mídia).
          </p>
          <p className="mt-2 mb-4">
            Elas funcionam como <code>"if / else"</code> (condicionais) no CSS: <i>"Se a tela for menor que 768 pixels, mude a cor para vermelho e coloque a fonte menor".</i>
          </p>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h4 className="font-bold text-yellow-800">Conceito: Mobile First (Celular Primeiro)</h4>
            <p className="text-sm">
              Na indústria moderna, costumamos escrever o CSS base pensando no celular primeiro. Depois, usamos Media Queries como <code>@media (min-width: 768px)</code> para adicionar colunas e complexidade quando a tela for maior (Tablet/Desktop).
            </p>
          </div>

          <CodeBlockRunner
            height={450}
            initialHtml={`<div class="container-responsivo">
  <div class="caixa">Eu me adapto à tela!</div>
</div>

<p style="font-family: sans-serif; text-align: center; margin-top: 20px;">
  👇 <strong>DICA:</strong> Minimize e expanda a largura do seu navegador para ver a cor e o tamanho do texto mudarem!
</p>`}
            initialCss={`/* Estilo BASE (Pensado para o Celular) */
.caixa {
  background-color: #ef4444; /* Vermelho no celular */
  color: white;
  padding: 30px;
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.4s ease; /* Animação suave na troca */
}

/* Estilo para Telas Maiores (Tablets e Desktops) */
/* "Se a largura mínima for 600px, aplique o código abaixo:" */
@media (min-width: 600px) {
  .caixa {
    background-color: #3b82f6; /* Muda para Azul no PC */
    font-size: 24px;           /* Aumenta a fonte */
    padding: 60px;             /* Aumenta o espaço */
  }
}`}
          />
        </div>

        {/* JUNTANDO TUDO: O HOLY GRAIL LAYOUT */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">5. Juntando Tudo: O "Holy Grail Layout"</h2>
          <p>
            O "Santo Graal" do web design é um layout clássico: Um cabeçalho no topo, um rodapé embaixo, 
            e o meio dividido em 3 colunas (Menu Lateral, Conteúdo Principal, e Anúncios/Links extras). 
            Vamos construir isso com <strong>CSS Grid</strong> e deixá-lo responsivo para celular!
          </p>

          <CodeBlockRunner
            height={550}
            initialHtml={`<div class="layout-santo-graal">
  <header class="cabecalho">Cabeçalho (Header)</header>
  
  <nav class="menu-lateral">Menu<br>Lateral</nav>
  <main class="conteudo">Conteúdo Principal (Artigos, Vídeos, etc)</main>
  <aside class="anuncios">Anúncios / Dicas</aside>
  
  <footer class="rodape">Rodapé (Footer) &copy; 2025</footer>
</div>`}
            initialCss={`/* O container principal usa Grid */
.layout-santo-graal {
  display: grid;
  gap: 10px;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  
  /* BASE MOBILE: 1 única coluna empilhada! */
  grid-template-columns: 1fr; 
}

/* Cores e Paddings básicos */
.layout-santo-graal > * { padding: 20px; border-radius: 5px; color: white; }
.cabecalho { background: #1e293b; }
.menu-lateral { background: #3b82f6; }
.conteudo { background: #10b981; min-height: 150px; display: flex; align-items: center; justify-content: center; }
.anuncios { background: #8b5cf6; }
.rodape { background: #1e293b; }

/* MEDIA QUERY PARA TELAS GRANDES (PC) */
@media (min-width: 768px) {
  .layout-santo-graal {
    /* Muda para 3 colunas: O menu tem 200px, o meio preenche o resto(1fr), os anuncios 200px */
    grid-template-columns: 200px 1fr 200px;
  }
  
  /* O cabeçalho e rodapé devem atravessar as 3 colunas de ponta a ponta */
  .cabecalho, .rodape {
    grid-column: span 3;
  }
}`}
          />
        </div>

        {/* ATIVIDADE FINAL (1 HORA) */}
        <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg mt-10">
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            6. Desafio Prático (1 Hora): O Dashboard Responsivo
          </h2>
          <p className="mb-4 text-lg text-gray-300">
            Chegou a hora de provar que você domina layout! Sua missão é construir o visual de um 
            <strong>Dashboard de Loja Virtual</strong>.
          </p>

          <p className="mb-2 text-green-300 font-bold">Requisitos do Desafio:</p>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-sm text-gray-300">
            <li>O container <code>.painel-estatisticas</code> deve ser um <strong>CSS Grid</strong>.</li>
            <li>No celular (padrão), os cartões devem ficar em <strong>1 coluna</strong> (empilhados).</li>
            <li>Use uma <strong>Media Query</strong> (<code>min-width: 768px</code>) para transformar a grade em <strong>3 colunas iguais</strong> (<code>repeat(3, 1fr)</code>) em telas maiores.</li>
            <li>Dentro de CADA cartão (<code>.card-info</code>), use <strong>Flexbox</strong> para alinhar o título na esquerda e o ícone/número na direita (<i>Dica: justify-content: space-between</i>).</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-400 mb-2">Editor (Resolva aqui):</h3>
          <CodeBlockRunner
            height={600}
            initialHtml={`<div class="dashboard-container">
  <h1 class="titulo-dash">Resumo de Vendas</h1>

  <div class="painel-estatisticas">
    
    <div class="card-info vendas">
      <div>
        <h3>Vendas Hoje</h3>
        <h2>R$ 4.500</h2>
      </div>
      <div class="icone">🛒</div>
    </div>

    <div class="card-info clientes">
      <div>
        <h3>Novos Clientes</h3>
        <h2>+124</h2>
      </div>
      <div class="icone">👥</div>
    </div>

    <div class="card-info visitas">
      <div>
        <h3>Visitas no Site</h3>
        <h2>8.902</h2>
      </div>
      <div class="icone">🌐</div>
    </div>

  </div>
</div>`}
            initialCss={`body {
  background: #f1f5f9;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0; padding: 20px;
}

.titulo-dash {
  color: #334155; margin-bottom: 20px;
}

/* 1. Estilize os Cartões aqui */
.card-info {
  padding: 20px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  
  /* Seu código: Aplique Flexbox aqui para separar o texto do ícone */
  
}

.card-info h3 { margin: 0 0 5px 0; font-size: 14px; opacity: 0.8; }
.card-info h2 { margin: 0; font-size: 28px; }
.icone { font-size: 40px; opacity: 0.5; }

/* Cores de fundo dos cartões */
.vendas { background: #3b82f6; }
.clientes { background: #10b981; }
.visitas { background: #8b5cf6; }

/* 2. Configure a Grade Mobile (Padrão) */
.painel-estatisticas {
  /* Seu código: Defina como grid e adicione um gap de 20px */
  
}

/* 3. Media Query para Desktop */
/* Seu código: Crie um @media para telas maiores que 768px 
   e mude o .painel-estatisticas para 3 colunas (repeat(3, 1fr)) */
`}
          />
        </div>

        {/* CONCLUSÃO */}
        <div className="border-t-2 border-blue-200 pt-8 mt-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">7. Conclusão</h2>
          <p>
            Incrível! Se você compreendeu a aula de hoje, você não é mais um "brincalhão" de HTML. Você acaba de 
            adquirir as habilidades para replicar o layout visual de praticamente 90% dos sites modernos da internet.
            Saber quando usar Flexbox (alinhamentos diretos e botões) e quando usar Grid (estruturas de página) é 
            o que separa os novatos dos profissionais.
          </p>
          <p className="mt-3 font-semibold text-lg text-blue-600">
            Na nossa próxima aventura, deixaremos as coisas estáticas para trás. Entraremos no maravilhoso (e às vezes assustador) mundo do <strong>JavaScript</strong>, dando vida, lógica e interatividade às nossas páginas web!
          </p>
        </div>

      </section>
    </LayoutAula>
  );
}