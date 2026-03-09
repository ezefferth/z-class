"use client";

import dynamic from 'next/dynamic';
import LayoutAula from "@/src/components/layoutAula";

// Importando dinamicamente o editor interativo
const CodeBlockRunner = dynamic(
  () => import("@/src/components/codeEditorRunner"), 
  { ssr: false, loading: () => <p className="text-gray-500 italic">Carregando editor interativo...</p> }
);

export default function Aula1HistoriaEHTML() {
  return (
    <LayoutAula titulo="Aula 1 – A História da Internet, a Criação da Web e Introdução ao HTML">
      <section className="space-y-14 text-gray-800 leading-relaxed">

        {/* INTRODUÇÃO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">1. A Maior Rede da Humanidade</h2>
          <p>
            A Internet, como conhecemos hoje, não foi inventada da noite para o dia por uma única pessoa. 
            Ela é o resultado de décadas de evolução tecnológica, científica e colaboração social. 
            Embora hoje seja indispensável para comunicação, entretenimento, negócios e educação, 
            sua origem remonta a um cenário de tensão militar e pesquisa estratégica durante a Guerra Fria.
          </p>
          <p className="mt-3">
            Nesta aula inaugural, faremos uma viagem no tempo para entender como computadores do tamanho de salas 
            passaram a se comunicar globalmente. Em seguida, daremos nossos primeiros passos práticos na linguagem 
            que construiu a Web: o <strong>HTML</strong>.
          </p>
        </div>

        {/* ORIGENS E ARPANET */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            2. Guerra Fria e o Nascimento da ARPANET (1950–1969)
          </h2>
          
          <p>
            Na década de 1950, o mundo vivia o auge da Guerra Fria. Os Estados Unidos temiam que um ataque soviético 
            pudesse destruir seus sistemas de comunicação centralizados. Eles precisavam de uma rede <strong>descentralizada</strong>: 
            se uma cidade inteira sumisse do mapa, os dados deveriam encontrar outro caminho para chegar ao destino.
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li><strong>1958:</strong> Criação da ARPA (Advanced Research Projects Agency) pelo Departamento de Defesa dos EUA.</li>
            <li><strong>1962:</strong> Paul Baran propõe o conceito revolucionário de "comutação de pacotes" (quebrar a informação em pedaços pequenos que viajam de forma independente).</li>
            <li><strong>1969:</strong> Nasce a <strong>ARPANET</strong>, conectando os computadores de quatro universidades americanas.</li>
          </ul>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mt-6 shadow-sm">
            <h4 className="font-bold text-yellow-800 mb-2">A Primeira Mensagem (O "LO" Histórico)</h4>
            <p className="text-sm">
              Em 29 de outubro de 1969, o pesquisador Charley Kline tentou enviar a palavra <strong>"LOGIN"</strong> de um 
              computador na UCLA para o Instituto de Pesquisa de Stanford. O sistema transmitiu as letras "L" e "O"... e então travou completamente. 
              A primeira mensagem da história da internet foi, acidentalmente, <em>"LO"</em>.
            </p>
          </div>
        </div>

        {/* PROTOCOLOS (TCP/IP e DNS) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            3. A Linguagem das Máquinas: TCP/IP e DNS
          </h2>
          <p>
            Nos anos 70, várias pequenas redes começaram a surgir, mas elas não falavam a mesma "língua". Era como 
            tentar ligar um rádio em uma linha de telefone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-5 border rounded-lg">
              <h3 className="font-bold text-lg text-gray-700 border-b pb-2 mb-3">TCP/IP (1983)</h3>
              <p className="text-sm">
                Vinton Cerf e Robert Kahn desenvolveram o protocolo <strong>TCP/IP</strong>. Ele se tornou o padrão universal, 
                permitindo que redes diferentes finalmente se conectassem. O dia 1º de janeiro de 1983, quando a ARPANET adotou esse protocolo, 
                é considerado o <strong>"dia do nascimento da Internet moderna"</strong>.
              </p>
            </div>
            <div className="bg-gray-50 p-5 border rounded-lg">
              <h3 className="font-bold text-lg text-gray-700 border-b pb-2 mb-3">O Sistema DNS</h3>
              <p className="text-sm">
                No início, para acessar um computador, você precisava decorar seu <strong>Endereço IP</strong> (ex: <code>142.250.190.46</code>). 
                Para facilitar a vida humana, inventaram o <strong>DNS (Domain Name System)</strong>, uma gigantesca "lista telefônica" 
                que traduz nomes (como <em>google.com</em>) para esses números complicados.
              </p>
            </div>
          </div>
        </div>

        {/* A INVENÇÃO DA WWW */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            4. O Nascimento da "Teia" (WWW e Hipertexto)
          </h2>
          
          
          <div className="bg-blue-800 text-white p-6 rounded-lg mb-6 shadow-md">
            <h3 className="text-2xl font-bold mb-2">Atenção: Internet ≠ Web!</h3>
            <p className="text-blue-100">
              A <strong>Internet</strong> é a infraestrutura física (cabos submarinos, roteadores, satélites). <br/>
              A <strong>Web (World Wide Web)</strong> é um serviço de visualização de documentos que roda <em>por cima</em> da Internet, assim como o E-mail ou o WhatsApp.
            </p>
          </div>

          <p>
            Em 1989, no laboratório de física CERN, na Suíça, <strong>Tim Berners-Lee</strong> enfrentava um problema: os cientistas 
            não conseguiam compartilhar documentos de pesquisa facilmente. Ele propôs um sistema baseado em <strong>Hipertexto</strong> — documentos interligados por links que você pode clicar para pular de um para o outro (uma ideia nada linear para a época).
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Ele inventou o <strong>HTML</strong> (a linguagem para escrever as páginas).</li>
            <li>Ele inventou o <strong>HTTP</strong> (o protocolo para transferir as páginas).</li>
            <li>Ele criou a <strong>primeira página web do mundo</strong>, que falava sobre o próprio projeto WWW.</li>
          </ul>
        </div>

        {/* EVOLUÇÃO (WEB 1, 2, 3) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            5. A Evolução: Da Web 1.0 à Era Social
          </h2>
          <ul className="space-y-4 mt-4">
            <li className="bg-gray-50 p-4 border-l-4 border-gray-400 rounded">
              <strong className="text-lg text-gray-700">A Web 1.0 (1990 - 2000): A Web de Leitura</strong><br/>
              Era uma biblioteca estática. As empresas publicavam conteúdos, e os usuários apenas consumiam. Surgem gigantes como Amazon, eBay e Yahoo.
            </li>
            <li className="bg-blue-50 p-4 border-l-4 border-blue-400 rounded">
              <strong className="text-lg text-blue-800">A Web 2.0 (2004 - 2010s): A Web Social (Leitura e Escrita)</strong><br/>
              O usuário passa a ser o criador de conteúdo. Surgem os blogs, a Wikipédia, o YouTube, o Orkut e o Facebook. A Web se torna interativa.
            </li>
          </ul>
        </div>

        {/* INTRODUÇÃO AO HTML (PRÁTICA) */}
        <div className="border-t-2 border-dashed border-gray-300 pt-10">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            6. Mão na Massa: O que é HTML?
          </h2>
          
          <p>
            O <strong>HTML (HyperText Markup Language)</strong> não é uma linguagem de programação, pois não toma decisões matemáticas. 
            É uma <strong>linguagem de marcação</strong>. Ela serve para "etiquetar" (marcar) conteúdos para que o navegador 
            saiba o que é um título, o que é um parágrafo e o que é uma imagem.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Estrutura Básica Obrigatória</h3>
          <p className="text-sm text-gray-600 mb-4">
            Todo documento HTML precisa de um esqueleto básico. O <code>&lt;head&gt;</code> guarda os metadados (invisíveis), 
            e o <code>&lt;body&gt;</code> guarda tudo que aparece na tela do usuário. Veja o exemplo abaixo renderizado:
          </p>

          <CodeBlockRunner
            height={300}
            initialCode={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Minha Primeira Página</title>
  </head>
  <body style="font-family: sans-serif; padding: 20px;">
    
    <h1 style="color: darkblue;">Olá, Mundo!</h1>
    
    <p>
      Esta é minha <strong>primeira página HTML</strong> rodando direto no navegador.
    </p>
    
  </body>
</html>`}
          />
        </div>

        {/* ELEMENTOS BÁSICOS (TÍTULOS E LISTAS) */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            7. Primeiros Componentes: Títulos e Listas
          </h2>
          <p>
            O HTML utiliza um sistema de <strong>hierarquia</strong> para títulos (do h1 ao h6) e tags específicas para organizar texto em listas.
          </p>

          <CodeBlockRunner
            height={400}
            initialCode={`<div style="font-family: Arial; padding: 20px;">
  
  <h1>Título Principal (H1 - Use apenas um por página)</h1>
  <h2>Seção Secundária (H2)</h2>
  <h3>Subseção (H3)</h3>

  <hr>

  <h2>Linguagens que vamos aprender:</h2>
  <ul>
    <li>HTML (Estrutura)</li>
    <li>CSS (Aparência visual)</li>
    <li>JavaScript (Comportamento e lógica)</li>
  </ul>

</div>`}
          />
        </div>

        {/* EXERCÍCIO PRÁTICO OFFLINE */}
        <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg mt-10">
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            8. Desafio Offline: Seu Primeiro Arquivo `.html`
          </h2>
          <p className="mb-4 text-lg text-gray-300">
            Hora de sair deste simulador e ir para o ambiente real do desenvolvedor!
          </p>

          <ol className="list-decimal ml-6 space-y-4 text-gray-200">
            <li>Abra o <strong>VS Code</strong> (ou o Bloco de Notas).</li>
            <li>Crie um arquivo chamado <code className="bg-gray-700 px-2 py-1 rounded text-green-300">index.html</code>.</li>
            <li>Digite a estrutura base que aprendemos <em>(Dica: no VS Code, digite <code>!</code> e pressione Enter)</em>.</li>
            <li>
              No <code>&lt;body&gt;</code>, adicione:
              <ul className="list-disc ml-6 mt-2 text-sm text-gray-400">
                <li>Um cabeçalho principal (<code>h1</code>) com o texto: "Meu Portfólio".</li>
                <li>Um parágrafo (<code>p</code>) falando um pouco sobre você.</li>
                <li>Uma lista não-ordenada (<code>ul</code> e <code>li</code>) com seus 3 hobbies favoritos.</li>
              </ul>
            </li>
            <li>Salve o arquivo e dê dois cliques nele. Ele abrirá no seu navegador Chrome/Edge!</li>
          </ol>
        </div>

        {/* CONCLUSÃO E LINKS ÚTEIS */}
        <div className="border-t-2 border-blue-200 pt-8 mt-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">9. Conclusão e Referências</h2>
          <p>
            Nesta aula, compreendemos que a Web é fruto de uma incrível evolução militar e científica. 
            Mais importante, você escreveu suas primeiras linhas de HTML. Na <strong>Aula 2</strong>, aprofundaremos 
            nessas tags para construir artigos semânticos completos e organizar dados complexos com tabelas e mídia.
          </p>

          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-3">Para Saber Mais (Leituras Recomendadas):</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>
                <a className="text-blue-600 hover:text-blue-800 underline transition-all font-semibold" href="https://info.cern.ch" target="_blank" rel="noopener noreferrer">
                  Visite a Primeira Página da Web (1991)
                </a>
              </li>
              <li>
                <a className="text-blue-600 hover:text-blue-800 underline transition-all font-semibold" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                  MDN Web Docs – Documentação Oficial do HTML
                </a>
              </li>
              <li>
                <a className="text-blue-600 hover:text-blue-800 underline transition-all font-semibold" href="https://webfoundation.org/about/vision/history-of-the-web/" target="_blank" rel="noopener noreferrer">
                  História Oficial da Web – WebFoundation
                </a>
              </li>
            </ul>
          </div>
        </div>

      </section>
    </LayoutAula>
  );
}