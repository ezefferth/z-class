"use client";

import CodeBlock from "@/src/components/codeBlock";
import CodeBlockRunner from "@/src/components/codeEditorRunner";
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

          <h3 className="text-xl font-semibold mt-4">Exemplo: Artigo Completo (Tipografia)</h3>
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
    O Google valoriza o primeiro!
  </p>

  <p>
    Da mesma forma, usamos o <em>itálico para ênfase na fala</em> (como quando você quer que o leitor preste atenção), 
    diferente da tag <i>&lt;i&gt;, usada para termos técnicos ou estrangeiros</i> (ex: <i>Software</i>).
  </p>

  <h3>Preços e Atualizações (H3)</h3>
  <p>
    No lançamento, o curso custava <del>R$ 500,00</del> (texto removido), 
    mas hoje ele sai por <mark>apenas R$ 0,00</mark> (texto destacado/mark)!
  </p>

  <h4>A Ciência por trás (H4)</h4>
  <p>
    O HTML permite escrever fórmulas químicas como a da água: H<sub>2</sub>O (Subscrito).<br>
    E também fórmulas matemáticas famosas: E = mc<sup>2</sup> (Sobrescrito).
  </p>

  <h5>Detalhes finais (H5)</h5>
  <h6>Notas de rodapé (H6)</h6>
  
  <p>
    <u>Evite usar sublinhado (u)</u> em textos que não são links, pois confunde o usuário.
  </p>

  <hr style="margin: 20px 0;">

  <p style="text-align: center;">
    <small>
      &copy; 2025 - A tag &lt;small&gt; é usada para textos legais, direitos autorais e letras miúdas.
    </small>
  </p>

</div>`}
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

          <h3 className="text-xl font-semibold mt-4">Exemplo: Estrutura Completa HTML5</h3>
          <CodeBlockRunner
            height={600}
            initialCode={`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Minha Página Semântica</title>

  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; display: flex; flex-direction: column; min-height: 100vh; }
    header { background: #2c3e50; color: white; padding: 20px; text-align: center; }
    nav { background: #34495e; padding: 10px; text-align: center; }
    nav a { color: white; text-decoration: none; margin: 0 15px; font-weight: bold; }
    .container { display: flex; flex: 1; } /* Coloca Main e Aside lado a lado */
    main { flex: 3; padding: 20px; background: #f4f6f7; }
    aside { flex: 1; padding: 20px; background: #e0e0e0; border-left: 4px solid #bdc3c7; }
    article { background: white; padding: 15px; margin-bottom: 15px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    footer { background: #2c3e50; color: white; text-align: center; padding: 15px; margin-top: auto; }
    h2 { color: #2980b9; }
  </style>
</head>

<body>

  <header>
    <h1>Portal de Tecnologia</h1>
  </header>

  <nav>
    <a>Home</a>
    <a>Notícias</a>
    <a>Contato</a>
  </nav>

  <div class="container">
    
    <main>
      <section>
        <h2>Últimas Notícias</h2>
        
        <article>
          <h3>O que é HTML Semântico?</h3>
          <p>É o uso de tags que dão significado ao conteúdo, como <strong>header</strong> e <strong>footer</strong>, ajudando o Google a entender seu site.</p>
        </article>

        <article>
          <h3>A importância da tag &lt;meta&gt;</h3>
          <p>Ela define configurações cruciais, como a codificação de caracteres e adaptação para telas de celular.</p>
        </article>
      </section>
    </main>

    <aside>
      <h3>Sobre o Autor</h3>
      <p>Desenvolvedor apaixonado por ensinar web.</p>
      <hr>
      <h3>Links Rápidos</h3>
      <ul>
        <li>Tutorial CSS</li>
        <li>Tutorial JS</li>
      </ul>
    </aside>

  </div>

  <footer>
    <p>&copy; 2025 - Todos os direitos reservados.</p>
  </footer>

</body>
</html>`}
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

          <h3 className="text-xl font-semibold mt-4">Exemplo 4: Tipos de Listas</h3>
          <CodeBlockRunner
            height={500}
            initialCode={`<div style="background: white; color: #333; padding: 20px; font-family: Arial, sans-serif;">

  <h3 style="color: #d35400;">🛒 Lista de Mercado</h3>
  <ul>
    <li>Arroz</li>
    <li>Feijão</li>
    <li>Batata</li>
    <li>Café</li>
  </ul>

  <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ccc;">

  <h3 style="color: #2980b9;">🏆 Pódio da Corrida</h3>
  <ol>
    <li>Medalha de Ouro: João</li>
    <li>Medalha de Prata: Maria</li>
    <li>Medalha de Bronze: Pedro</li>
  </ol>

  <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ccc;">

  <h3 style="color: #27ae60;">📖 Pequeno Glossário</h3>
  <dl>
    
    <dt style="font-weight: bold;">Front-end</dt>
    <dd style="margin-left: 20px; margin-bottom: 10px; color: #555;">
      Parte visual do site com a qual o usuário interage.
    </dd>

    <dt style="font-weight: bold;">Back-end</dt>
    <dd style="margin-left: 20px; margin-bottom: 10px; color: #555;">
      Parte do servidor, banco de dados e lógica que o usuário não vê.
    </dd>

  </dl>

</div>`}
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

          <h3 className="text-xl font-semibold mt-4">Exemplo 1: Link (Hyperlink)</h3>
          <CodeBlockRunner
            height={150}
            initialCode={`<div style="background: white; padding: 20px; font-family: sans-serif;">
  
  <p>Clique no botão abaixo para pesquisar:</p>
  
  <a href="https://www.google.com" target="_blank" 
     style="background: #4285f4; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px;">
     Ir para o Google
  </a>

</div>`}
          />

          <h3 className="text-xl font-semibold mt-4">Exemplo 2: Imagem Simples</h3>
          <CodeBlockRunner
            height={300}
            initialCode={`<div style="background: white; padding: 20px;">
  
  <img 
    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400" 
    alt="Panquecas deliciosas com mel"
    style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"
  />

</div>`}
          />


          <h3 className="text-xl font-semibold mt-4">Exemplo 3 e 4: Figura com Legenda</h3>
          <CodeBlockRunner
            height={350}
            initialCode={`<div style="background: white; padding: 20px; font-family: sans-serif;">
  
  <figure style="border: 1px solid #ccc; display: inline-block; padding: 10px; background: #f9f9f9;">
    
    <img 
      src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300" 
      alt="Fatia de Pizza"
    />
    
    <figcaption style="text-align: center; color: #555; margin-top: 8px; font-style: italic;">
      Fig. 1: Pizza de pepperoni artesanal.
    </figcaption>
    
  </figure>

</div>`}
          />

          <h3 className="text-xl font-semibold mt-4">Exemplo 5: Player de Áudio</h3>
          <CodeBlockRunner
            height={200}
            initialCode={`<div style="background: white; padding: 20px; font-family: sans-serif;">
  
  <p>Ouça este efeito sonoro:</p>
  
  <audio controls>
    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
    Seu navegador não suporta o elemento de áudio.
  </audio>

</div>`}
          />


          <h3 className="text-xl font-semibold mt-4">Exemplo 6: Player de Vídeo</h3>
          <CodeBlockRunner
            height={400}
            initialCode={`<div style="background: white; padding: 20px; text-align: center;">
  
  <video width="100%" height="auto" controls poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217">
    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    Seu navegador não suporta vídeos.
  </video>

</div>`}
          />

          <h3 className="text-xl font-semibold mt-4">Exemplo 7: Iframe (YouTube/Mapas)</h3>
          <CodeBlockRunner
            height={400}
            initialCode={`<div style="background: white; padding: 20px; font-family: sans-serif;">
  
  <h3>Vídeo incorporado do YouTube:</h3>
  
  <iframe 
    width="100%" 
    height="315" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ScZ_2e9uB" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>

</div>`}
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

          <h3 className="text-xl font-semibold mt-4">Exemplo 7: Formulário de Contato Completo</h3>
          <CodeBlockRunner
            height={500}
            initialCode={`<div style="background-color: white; color: #333; padding: 20px; font-family: Arial, sans-serif;">

  <form>
    
    <fieldset style="border: 2px solid #4CAF50; padding: 15px; border-radius: 5px;">
      
      <legend style="background: #4CAF50; color: white; padding: 5px 10px; border-radius: 4px;">
        Entre em Contato
      </legend>

      <div style="margin-bottom: 15px;">
        <label for="nome" style="display: block; font-weight: bold;">Nome Completo:</label>
        <input type="text" id="nome" placeholder="Digite seu nome..." style="width: 95%; padding: 8px;">
      </div>

      <div style="margin-bottom: 15px;">
        <label for="motivo" style="display: block; font-weight: bold;">Motivo do contato:</label>
        <select id="motivo" style="width: 98%; padding: 8px;">
          <option value="duvida">Tenho uma dúvida</option>
          <option value="elogio">Quero fazer um elogio</option>
          <option value="reclamacao">Reclamação</option>
        </select>
      </div>

      <div style="margin-bottom: 15px;">
        <label for="msg" style="display: block; font-weight: bold;">Sua Mensagem:</label>
        <textarea id="msg" rows="4" style="width: 95%; padding: 8px;" placeholder="Escreva aqui..."></textarea>
      </div>

      <button type="submit" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px; border-radius: 4px;">
        Enviar Mensagem
      </button>

    </fieldset>
  </form>

</div>`}
          />

        </div>

        {/* ATIVIDADE */}
<div className="p-6">
          <h2 className="text-2xl font-bold mb-4">8. Atividade Prática: O Site do Restaurante</h2>
          <p className="mb-4">
            Agora vamos elevar o nível. Você foi contratado para criar a estrutura da página inicial 
            de um restaurante. O cliente exigiu que o site tenha <strong>navegação, cardápio, uma receita destaque e formulário de reserva</strong>.
          </p>
          
          <p className="mb-4">
            <strong>Requisitos Obrigatórios:</strong>
          </p>

          <ul className="list-disc ml-6 space-y-2 mb-6 text-sm">
            <li><strong>Menu de Navegação:</strong> Links internos que levam para as seções da página (ex: <code>href="#cardapio"</code>).</li>
            <li><strong>Seção Cardápio:</strong> Use listas de definição (<code>dl</code>) ou listas aninhadas para categorias e pratos.</li>
            <li><strong>Receita do Chef:</strong> Uma seção completa com Ingredientes (<code>ul</code>) e Modo de Preparo (<code>ol</code>).</li>
            <li><strong>Tabela de Horários:</strong> Uma tabela mostrando os horários de funcionamento da semana.</li>
            <li><strong>Formulário de Reserva:</strong> Deve pedir Nome, E-mail, Data (<code>type="date"</code>), Quantidade de Pessoas (<code>type="number"</code>) e Observações.</li>
            <li><strong>Rodapé:</strong> Endereço e direitos autorais.</li>
          </ul>

          <CodeBlockRunner
            height={600}
            initialCode={`<div style="background: white; color: black; padding: 15px; font-family: sans-serif;">

  <header>
    <h1>Restaurante Sabor & Código</h1>
    <nav>
      <a>Início</a> |
      <a>Cardápio</a> |
      <a>Receita do Mês</a> |
      <a>Reservas</a>
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

    <section id="receita">
      <h2>Aprenda nossa Receita Secreta</h2>
      </section>

    <hr>

    <section>
      <h2>Horários de Funcionamento</h2>
      </section>

    <hr>

    <section id="reservas">
      <h2>Faça sua Reserva</h2>
      <form>
        <fieldset>
          <legend>Dados da Reserva</legend>
          
          </fieldset>
      </form>
    </section>

  </main>

  <hr>

  <footer>
    <p>Rua da Web, 404 - Internet City</p>
    <p>&copy; 2025 Restaurante Sabor & Código</p>
  </footer>

</div>`}
          />
        </div>

        {/* CONCLUSÃO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">9. Conclusão</h2>
          <p>
            Nesta aula, focamos puramente nas tags e no significado delas (semântica).
            Você deve ter notado que, sem CSS, as páginas parecem documentos simples do Word.
          </p>
          <p className="mt-3">
            Na <strong>Aula 2</strong>, entraremos no mundo do <strong>CSS</strong>.
            Lá aprenderemos a pegar essa estrutura que criamos hoje e transformar em layouts
            coloridos, organizados e profissionais.
          </p>
        </div>
      </section>
    </LayoutAula>
  );
}
