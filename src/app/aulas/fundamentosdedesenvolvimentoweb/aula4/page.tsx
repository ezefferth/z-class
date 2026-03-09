"use client";

import dynamic from "next/dynamic";
import LayoutAula from "@/src/components/layoutAula";
import CodeBlockRunnerCSS from "@/src/components/codeEditorRunnerCSS";

// Importação dinâmica do editor interativo
const CodeBlockRunner = dynamic(
  () => import('@/src/components/codeEditorRunner'),
  { ssr: false, loading: () => <p className="text-gray-500 italic">Carregando editor interativo...</p> }
);

export default function Aula4IntroducaoCSS() {
  return (
    <LayoutAula titulo="Aula 4 – O Despertar do CSS: Estruturação, Box Model e Primeiros Estilos">
      <section className="space-y-14 text-gray-800 leading-relaxed">

        {/* INTRODUÇÃO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">1. O Elo entre HTML e CSS</h2>
          <p>
            Até agora, construímos o "esqueleto" das nossas páginas com HTML. Mas um esqueleto, por mais
            bem estruturado que seja, não é visualmente atraente. É aqui que entra o <strong>CSS (Cascading Style Sheets)</strong>,
            a "pele e as roupas" do nosso site.
          </p>
          <p className="mt-3">
            Porém, <strong>o CSS não faz milagres se o HTML estiver uma bagunça</strong>. Antes de colorir
            e alinhar as coisas, precisamos aprender a <em>agrupar</em> e <em>nomear</em> nossos elementos.
            É impossível pintar uma parede específica da casa se você não sabe qual é o nome dela ou onde ela começa e termina.
          </p>
        </div>

        {/* ESTRUTURANDO PARA O CSS (DIV, SPAN, CLASSES, IDS) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">2. Preparando o Terreno: Divisões, Classes e IDs</h2>

          <p>
            Para que o CSS saiba exatamente quem ele deve estilizar, usamos contêineres e identificadores no HTML.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-5 border rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-700 border-b pb-2 mb-3">Agrupadores Naturais</h3>
              <ul className="list-disc ml-6 space-y-2 text-sm">
                <li><code>&lt;div&gt;</code>: O contêiner genérico de <strong>bloco</strong>. Usado para agrupar seções inteiras (como um cartão de produto ou uma barra lateral).</li>
                <li><code>&lt;span&gt;</code>: O contêiner genérico de <strong>linha</strong>. Usado para selecionar uma pequena parte do texto dentro de um parágrafo (ex: mudar a cor de uma única palavra).</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-5 border rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-700 border-b pb-2 mb-3">Identificadores Alvo</h3>
              <ul className="list-disc ml-6 space-y-2 text-sm">
                <li><code>class="..."</code>: Pode ser usada repetidas vezes. Ex: Vários botões podem ter a classe <code>btn-azul</code>.</li>
                <li><code>id="..."</code>: É <strong>único</strong> na página. Serve para identificar um elemento muito específico. Ex: <code>id="cabecalho-principal"</code>.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-2">Exemplo Prático: Um HTML pronto para o CSS</h3>
          <CodeBlockRunner
            height={300}
            initialCode={`<div id="perfil-usuario" class="cartao">
  <div class="foto-container">
    <img src="https://via.placeholder.com/100" alt="Foto">
  </div>
  <div class="info-container">
    <h2 class="nome">Maria Silva</h2>
    <p class="profissao">Desenvolvedora <span class="destaque">Front-end</span></p>
  </div>
</div>`}
          />
        </div>

        {/* O UNIVERSO DO CSS (A LISTA GIGANTE) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">3. O Arsenal do CSS: O que é possível fazer?</h2>
          <p>
            O CSS possui centenas de propriedades. Você não vai decorar todas hoje, mas precisa saber do que a linguagem é capaz.
            Abaixo está um vislumbre do vasto universo do CSS:
          </p>

          <div className="bg-blue-900 text-white p-6 rounded-xl shadow-md mt-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-mono">
              <div>
                <strong className="text-blue-300 block mb-2">🎨 Cores e Fundos</strong>
                color<br />background-color<br />background-image<br />opacity<br />box-shadow
              </div>
              <div>
                <strong className="text-blue-300 block mb-2">📝 Tipografia</strong>
                font-family<br />font-size<br />font-weight<br />text-align<br />line-height<br />text-decoration
              </div>
              <div>
                <strong className="text-blue-300 block mb-2">📦 Espaçamento (Box)</strong>
                margin<br />padding<br />border<br />width<br />height<br />border-radius
              </div>
              <div className="mt-4">
                <strong className="text-blue-300 block mb-2">📐 Layout Moderno</strong>
                display: flex<br />display: grid<br />justify-content<br />align-items<br />gap
              </div>
              <div className="mt-4">
                <strong className="text-blue-300 block mb-2">📍 Posicionamento</strong>
                position<br />top / left<br />z-index<br />float (antigo)
              </div>
              <div className="mt-4">
                <strong className="text-blue-300 block mb-2">✨ Efeitos/Animações</strong>
                transition<br />transform<br />@keyframes<br />hover / focus
              </div>
            </div>
          </div>
          <p className="mt-4 font-semibold text-gray-700 text-center">
            Nesta aula, focaremos nos pilares essenciais: Cores, Tipografia, Espaçamentos (Box Model) e uma introdução ao Layout (Flexbox).
          </p>
        </div>

        {/* SINTAXE DO CSS */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">4. A Sintaxe do CSS: Como conversamos com o navegador?</h2>
          <p>
            A regra do CSS é simples. Você precisa de um <strong>Seletor</strong> (para dizer <em>quem</em> vai mudar) e um bloco de <strong>Declarações</strong> (para dizer <em>o que</em> vai mudar).
          </p>

          <div className="bg-gray-100 p-4 font-mono text-center rounded border mt-4 text-lg">
            <span className="text-red-600 font-bold">seletor</span> {'{'} <br />
            &nbsp;&nbsp;<span className="text-blue-600">propriedade</span>: <span className="text-green-600">valor</span>;<br />
            {'}'}
          </div>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li><strong>Seletor de Tag:</strong> <code>h1 {'{ ... }'}</code> (Afeta todos os H1 da página).</li>
            <li><strong>Seletor de Classe:</strong> <code>.minha-classe {'{ ... }'}</code> (Usa o ponto antes. Afeta quem tiver essa classe).</li>
            <li><strong>Seletor de ID:</strong> <code>#meu-id {'{ ... }'}</code> (Usa a hashtag antes. Afeta apenas o elemento único com este ID).</li>
          </ul>
        </div>

        {/* O BOX MODEL (O MAIS IMPORTANTE) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">5. O Coração do CSS: O Box Model (Modelo de Caixa)</h2>

          <p>
            Se você entender isso, você entende 50% do CSS. Para o navegador, <strong>todo elemento HTML é uma caixa retangular</strong>.
            Essas caixas possuem camadas, de dentro para fora:
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-3">
            <li><strong>Conteúdo (Content):</strong> É o texto ou a imagem em si. Controlado por <code>width</code> (largura) e <code>height</code> (altura).</li>
            <li><strong>Enchimento (Padding):</strong> É o espaço <em>interno</em>, entre o conteúdo e a borda. Pense nisso como a espuma de proteção dentro de uma caixa de correio.</li>
            <li><strong>Borda (Border):</strong> A linha que envolve o conteúdo e o padding.</li>
            <li><strong>Margem (Margin):</strong> O espaço <em>externo</em>. Empurra os outros elementos para longe. É a distância entre duas caixas.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Laboratório: Brincando com o Box Model</h3>
          <p className="text-sm text-gray-600 mb-2">Altere os valores de <code>margin</code>, <code>padding</code> e <code>border</code> no código CSS abaixo e veja a mágica acontecer!</p>
          <CodeBlockRunner
            height={350}
            initialCode={`<!DOCTYPE html>
<html>
<head>
<style>
  .caixa-azul {
    background-color: #3b82f6; /* Cor de fundo */
    color: white;              /* Cor do texto */
    
    /* Box Model em ação: */
    width: 200px;
    padding: 20px;             /* Espaço interno */
    border: 5px solid #1e3a8a; /* Borda visível */
    margin: 30px;              /* Espaço externo (empurra a caixa vermelha) */
  }

  .caixa-vermelha {
    background-color: #ef4444;
    color: white;
    padding: 10px;
  }
</style>
</head>
<body style="background: #f3f4f6; font-family: sans-serif;">

  <div class="caixa-azul">
    Sou a caixa azul! Observe meu espaçamento interno (padding) e minha borda.
  </div>

  <div class="caixa-vermelha">
    Sou a caixa vermelha. Fui empurrada pela margem da caixa azul.
  </div>

</body>
</html>`}
          />
        </div>

        {/* TIPOGRAFIA E CORES */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">6. Beleza e Leitura: Cores e Tipografia</h2>
          <p>
            Agora que sabemos empurrar caixas, vamos deixá-las bonitas. O CSS permite usar cores com nomes em inglês (<code>red</code>, <code>blue</code>),
            códigos Hexadecimais (<code>#FF0000</code>) ou RGB (<code>rgb(255, 0, 0)</code>).
          </p>

          <CodeBlockRunner
            height={350}
            initialCode={`<!DOCTYPE html>
<html>
<head>
<style>
  .artigo {
    background-color: #ffffff;
    border-radius: 10px; /* Arredonda as pontas da borda! */
    padding: 30px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Sombra legal */
    max-width: 500px;
  }

  .titulo {
    color: #8b5cf6; /* Roxo */
    font-family: 'Arial', sans-serif;
    font-size: 32px; /* Tamanho da fonte */
    text-align: center; /* Alinhamento */
    text-transform: uppercase; /* Deixa tudo maiúsculo */
    letter-spacing: 2px; /* Espaço entre letras */
  }

  .texto {
    color: #4b5563; /* Cinza escuro */
    font-size: 18px;
    line-height: 1.6; /* Altura da linha (espaçamento entre linhas) */
  }
</style>
</head>
<body style="background: #e5e7eb; display: flex; justify-content: center; padding: 40px;">

  <div class="artigo">
    <h1 class="titulo">Tipografia</h1>
    <p class="texto">
      A leitura de um texto melhora drasticamente quando utilizamos um bom 
      <strong>line-height</strong> e espaçamentos adequados. Nunca subestime 
      o poder de uma boa fonte!
    </p>
  </div>

</body>
</html>`}
          />
        </div>

        {/* INTRODUÇÃO AO FLEXBOX (EXPANDIDO) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">7. O Básico de Layout: A Mágica do Flexbox</h2>
          <p>
            Antes do Flexbox, centralizar itens ou colocá-los lado a lado exigia gambiarras. Hoje, o <code>display: flex</code> resolve tudo.
            Ele trabalha com o conceito de <strong>Container Pai</strong> e <strong>Itens Filhos</strong>.
          </p>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mt-4 mb-6">
            <h4 className="font-bold text-yellow-800">A Regra de Ouro do Flexbox:</h4>
            <p className="text-sm">
              Você <strong>NUNCA</strong> aplica as regras principais do Flexbox nas caixinhas soltas (os filhos).
              Você aplica no <strong>PAI</strong> (a <code>div</code> que envolve as caixinhas). O Pai dita as regras, e os filhos obedeccem.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mt-8 mb-2">7.1. O Eixo Horizontal: <code>justify-content</code></h3>
          <p className="mb-4 text-gray-700">Controla o alinhamento no eixo principal (geralmente da esquerda para a direita).</p>

          <ul className="list-disc ml-6 space-y-2 mb-4 text-sm font-mono text-blue-800">
            <li><strong>flex-start:</strong> Cola tudo no início (Padrão).</li>
            <li><strong>center:</strong> Centraliza todos os itens no meio.</li>
            <li><strong>flex-end:</strong> Joga tudo para o final da linha.</li>
            <li><strong>space-between:</strong> O 1º cola na esquerda, o último na direita, o espaço sobra no meio.</li>
            <li><strong>space-around:</strong> Espaço igual ao redor de cada item.</li>
            <li><strong>space-evenly:</strong> Espaçamento perfeitamente igual entre todos.</li>
          </ul>

          <CodeBlockRunner
            height={550}
            initialCode={`<!DOCTYPE html>
<html>
<head>
<style>
  .pai {
    display: flex;
    background: #1f2937;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 8px;
    
    /* 🔴 TROQUE O VALOR ABAIXO PARA TESTAR OS OUTROS (center, flex-end, space-evenly) */
    justify-content: space-between; 
  }

  .filho {
    background: #3b82f6; color: white; padding: 15px 30px;
    font-weight: bold; border-radius: 4px; font-family: sans-serif;
  }
</style>
</head>
<body style="background: #f3f4f6; padding: 20px;">

  <h3 style="font-family: sans-serif;">Brinque com o justify-content no código CSS:</h3>
  
  <div class="pai">
    <div class="filho">Item A</div>
    <div class="filho">Item B</div>
    <div class="filho">Item C</div>
  </div>

</body>
</html>`}
          />

          <h3 className="text-xl font-bold text-gray-800 mt-10 mb-2">7.2. O Eixo Vertical: <code>align-items</code></h3>
          <p className="mb-4 text-gray-700">
            Controla o alinhamento no eixo cruzado (geralmente de cima para baixo). Para ver isso funcionar,
            o elemento "Pai" precisa ter uma altura (height) maior que os filhos.
          </p>

          <ul className="list-disc ml-6 space-y-2 mb-4 text-sm font-mono text-purple-800">
            <li><strong>stretch:</strong> Estica os filhos para preencher a altura toda (Padrão).</li>
            <li><strong>center:</strong> Centraliza verticalmente.</li>
            <li><strong>flex-start:</strong> Alinha no topo.</li>
            <li><strong>flex-end:</strong> Alinha no fundo.</li>
          </ul>

          <CodeBlockRunner
            height={550}
            initialCode={`<!DOCTYPE html>
<html>
<head>
<style>
  .pai-alto {
    display: flex;
    height: 180px; /* Demos altura para ver o movimento vertical */
    background: #4c1d95;
    padding: 10px;
    border-radius: 8px;
    
    /* Justifica no centro horizontal e... */
    justify-content: center; 

    /* 🔴 TROQUE O VALOR ABAIXO (stretch, flex-start, flex-end) */
    align-items: center; 
  }

  .filho {
    background: #a78bfa; color: #3b0764; padding: 20px;
    margin: 5px; font-weight: bold; font-family: sans-serif;
  }
</style>
</head>
<body style="background: #f3f4f6; padding: 20px;">

  <h3 style="font-family: sans-serif;">Alinhamento Perfeito (Centro absoluto)!</h3>
  
  <div class="pai-alto">
    <div class="filho">Bloco 1</div>
    <div class="filho">Bloco 2</div>
    <div class="filho">Bloco 3</div>
  </div>

</body>
</html>`}
          />
        </div>

        {/* ATIVIDADE FINAL (1 HORA) */}
        <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg mt-10">
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            8. Desafio Prático Avançado: Cartão de Perfil Profissional
          </h2>

          <p className="mb-4 text-lg">
            Agora você deverá criar um <strong>Cartão de Perfil moderno</strong> utilizando
            HTML e CSS. Esta atividade reúne praticamente tudo que aprendemos até aqui:
            <strong> Box Model, tipografia, alinhamento e Flexbox.</strong>
          </p>

          <p className="mb-4">
            O objetivo é transformar um HTML simples em um cartão visualmente agradável,
            semelhante aos perfis encontrados em redes sociais ou portfólios profissionais.
          </p>

          <p className="mb-2 text-green-300 font-bold">Requisitos da Atividade:</p>

          <ul className="list-disc ml-6 space-y-2 mb-8 text-sm text-gray-300">
            <li>
              Centralize o cartão utilizando <code>margin: 0 auto</code>.
            </li>

            <li>
              Utilize <strong>Box Model</strong> para adicionar
              <code> padding</code>, <code>border-radius</code> e
              <code> box-shadow</code> no cartão.
            </li>

            <li>
              Transforme a foto em um círculo utilizando
              <code> border-radius: 50%</code>.
            </li>

            <li>
              A seção de estatísticas deve usar <strong>Flexbox</strong> com
              <code> display: flex</code> e
              <code> justify-content: space-around</code>.
            </li>

            <li>
              O botão deve possuir:
              <code> padding</code>, <code>background-color</code>,
              <code> border-radius</code> e <code>cursor: pointer</code>.
            </li>

          </ul>

          <p className="mb-6 text-yellow-300 font-semibold">
            🔎 Desafio Extra (Opcional):
            Adicione uma <strong>animação suave</strong> utilizando
            <code> transition</code> no botão e na imagem de perfil.
          </p>

          <CodeBlockRunner
            height={650}
            initialCode={`<!DOCTYPE html>
<html>
<head>
<style>

body {
  background-color: #cbd5e1;
  font-family: Arial, sans-serif;
  padding: 50px;
}

/* 1. Cartão principal */
.cartao-perfil {

  /* Defina largura máxima */

  /* Centralize na tela */

  /* Cor de fundo */

  /* Padding */

  /* Bordas arredondadas */

  /* Sombra */
}

/* 2. Imagem de perfil */
.foto {

  width: 120px;
  height: 120px;

  /* Tornar imagem circular */

  /* Evitar distorção */

  /* Centralizar imagem */

  /* Espaçamento inferior */

  /* Transição suave */


  /* aumentar levemente o tamanho */

}

/* Área de textos */
.textos {

  /* alinhar texto ao centro */

}

/* 3. Estatísticas */
.estatisticas {

  margin-top: 20px;

  /* Ativar Flexbox */

  /* Distribuir elementos */

  /* Alinhar verticalmente */

  border-top: 1px solid #eee;

  padding-top: 15px;

}

/* 4. Botão */
.btn-seguir {

  /* Cor de fundo */

  /* Cor do texto */

  /* Padding */

  /* Remover borda */

  /* Bordas arredondadas */

  /* Cursor pointer */

  /* Transição */

}

  /* Alterar cor */

}

  /* aumentar sombra */

}

</style>
</head>

<body>

<div class="cartao-perfil">

  <div style="text-align:center;">
    <img class="foto"
    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200"
    alt="Avatar">
  </div>

  <div class="textos">
    <h2>João Desenvolvedor</h2>
    <p style="color: gray;">Especialista Front-end</p>

    <button class="btn-seguir">
      Seguir Perfil
    </button>
  </div>

  <div class="estatisticas">

    <div>
      <strong>150</strong>
      <br>
      <small>Projetos</small>
    </div>

    <div>
      <strong>12K</strong>
      <br>
      <small>Seguidores</small>
    </div>

    <div>
      <strong>3K</strong>
      <br>
      <small>Likes</small>
    </div>

  </div>

</div>

</body>
</html>`}
          />
        </div>

        {/* CONCLUSÃO */}
        <div className="border-t-2 border-blue-200 pt-8 mt-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">9. O Fim do Começo</h2>

          <p>
            Até aqui, você aprendeu os fundamentos que sustentam praticamente todo o desenvolvimento visual na web.
            Entender o <strong>Box Model</strong> permite controlar com precisão os espaçamentos entre os elementos,
            enquanto o <strong>Flexbox</strong> resolve um dos maiores desafios do front-end: alinhar e organizar
            conteúdos dentro da página.
          </p>

          <p className="mt-3">
            Com esses conceitos, você já consegue estruturar interfaces muito mais organizadas e profissionais.
            Porém, o CSS ainda possui um universo enorme de possibilidades que vão muito além de cores e espaçamentos.
          </p>

          <p className="mt-3 font-semibold text-lg text-blue-600">
            Na próxima aula vamos aprofundar o CSS explorando seletores mais poderosos, pseudo-classes como
            <code className="mx-1">:hover</code>, <code className="mx-1">:focus</code>,
            seletores de filhos (<code className="mx-1">child selectors</code>), além de efeitos visuais e
            interações que tornam as interfaces muito mais dinâmicas e profissionais.
          </p>
        </div>

      </section>
    </LayoutAula>
  );
}