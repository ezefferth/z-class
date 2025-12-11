"use client";

import CodeBlock from "@/src/components/codeBlock";
import LayoutAula from "@/src/components/layoutAula";

export default function Aula1() {
  return (
    <LayoutAula titulo="Aula 1 – História da Internet, WWW, Hipertexto e Introdução ao HTML">
      <section className="space-y-10">
        {/* INTRODUÇÃO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
          <p>
            A Internet, como conhecemos hoje, é resultado de décadas de evolução
            tecnológica, científica e social. Embora atualmente ela seja
            indispensável para comunicação, entretenimento, negócios e educação,
            sua origem remonta a um contexto militar e de pesquisa durante a
            Guerra Fria.
          </p>

          <p className="mt-3">
            Nesta aula, você conhecerá as principais fases da evolução da
            Internet, entenderá o nascimento da World Wide Web (WWW) e iniciará
            seu aprendizado em <strong>HTML</strong>, a linguagem base para
            construção de páginas web.
          </p>
        </div>

        {/* ORIGENS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            2. Origens da Internet (1950–1969)
          </h2>

          <p>
            Durante a Guerra Fria, os Estados Unidos buscavam criar um sistema
            de comunicação capaz de sobreviver a possíveis ataques, incluindo a
            destruição de centrais. Essa necessidade motivou pesquisas em redes
            descentralizadas que poderiam continuar funcionando mesmo com falhas
            em parte de sua estrutura.
          </p>

          <ul className="list-disc ml-6 mt-3">
            <li>
              <strong>1958:</strong> criação da ARPA (Advanced Research Projects
              Agency).
            </li>
            <li>
              <strong>1962:</strong> Paul Baran propõe o conceito de redes
              distribuídas.
            </li>
            <li>
              <strong>1969:</strong> surge a <strong>ARPANET</strong>,
              conectando quatro universidades nos EUA.
            </li>
          </ul>
        </div>

        {/* ARPANET */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            3. ARPANET e o Primeiro Teste
          </h2>

          <p>
            A ARPANET foi a primeira rede operacional de grande escala baseada
            em
            <strong>comutação de pacotes</strong>. Em 29 de outubro de 1969, foi
            enviada a primeira mensagem da história da Internet: “LO”, tentativa
            de enviar a palavra “LOGIN”. O sistema caiu após as duas primeiras
            letras – mas o marco histórico estava feito.
          </p>
        </div>

        {/* TCP/IP */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            4. O Desenvolvimento do TCP/IP (1970–1983)
          </h2>
          <p>
            Enquanto novas redes surgiam, era necessário criar uma maneira de
            permitir comunicação entre elas. Vinton Cerf e Robert Kahn
            desenvolveram o protocolo TCP/IP, que se tornou o padrão universal
            da Internet.
          </p>

          <ul className="list-disc ml-6 mt-3">
            <li>
              <strong>1973:</strong> início do desenvolvimento do TCP/IP
            </li>
            <li>
              <strong>1983:</strong> ARPANET adota TCP/IP oficialmente – marco
              do nascimento da Internet moderna
            </li>
          </ul>
        </div>

        {/* DNS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">5. O Surgimento do DNS</h2>

          <p>
            Antes do DNS, os computadores eram identificados apenas por seus
            endereços IP. Com a expansão da rede, isso tornou-se inviável. O DNS
            (Domain Name System) foi criado para permitir a associação de nomes
            fáceis de lembrar, como <strong>google.com</strong>, a endereços IP.
          </p>
        </div>

        {/* WWW */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            6. A Criação da World Wide Web (1990)
          </h2>

          <p>
            A Web (WWW) não é a mesma coisa que a Internet: ela é um{" "}
            <strong>serviço</strong>
            que funciona sobre a Internet. Quem a criou foi Tim Berners-Lee, no
            CERN, propondo uma maneira de conectar informações usando
            hipertexto.
          </p>

          <ul className="list-disc ml-6 mt-3">
            <li>
              Criação do <strong>HTML</strong>, <strong>HTTP</strong> e{" "}
              <strong>URL</strong>
            </li>
            <li>Primeiro navegador web</li>
            <li>
              Primeira página da web:{" "}
              <a className="text-blue-500 hover:text-blue-600 transition-all"
               href="http://info.cern.ch" target="_blank">
                http://info.cern.ch
              </a>
            </li>
          </ul>
        </div>

        {/* REVOLUÇÃO COMERCIAL */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            7. A Expansão Comercial da Internet (1994–1999)
          </h2>

          <p>
            Nos anos 1990, a Internet migra do ambiente acadêmico para o uso
            comercial. Empresas gigantes começam online: Yahoo, Amazon, eBay e
            posteriormente Google.
          </p>
        </div>

        {/* WEB 2.0 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            8. Era das Redes Sociais e Web 2.0
          </h2>

          <p>
            A partir dos anos 2000, surge a Web 2.0, caracterizada pela
            participação ativa do usuário: redes sociais, blogs, wikis e
            plataformas colaborativas.
          </p>
        </div>

        {/* HIPERTEXTO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">9. O que é Hipertexto?</h2>

          <p>
            Hipertexto é a estrutura que permite conectar conteúdos através de
            links. Diferente de um texto linear, ele cria caminhos múltiplos e
            dinâmicos, sendo a base da navegação moderna na Web.
          </p>
        </div>

        {/* WEB E HIPERTEXTO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            10. O Papel do Hipertexto na Web
          </h2>

          <p>
            Os navegadores interpretam documentos escritos em HTML para criar
            uma rede de documentos interligados. Cada link permite a navegação
            entre conteúdos de forma não linear.
          </p>
        </div>

        {/* HTML */}
        <div>
          <h2 className="text-2xl font-bold mb-4">11. O que é HTML?</h2>

          <p>
            HTML (HyperText Markup Language) é a linguagem de marcação usada
            para estruturar páginas web. Diferente de linguagens de programação,
            o HTML não executa lógica: ele define a organização e semântica do
            conteúdo.
          </p>
        </div>

        {/* ESTRUTURA HTML */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            12. Estrutura Básica de uma Página HTML
          </h2>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Minha Página</title>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
    <p>Esta é a minha primeira página HTML.</p>
  </body>
</html>`}
          />

          <h3 className="text-xl font-semibold mt-6">Explicação</h3>

          <ul className="list-disc ml-6">
            <li>
              <code>&lt;!DOCTYPE html&gt;</code>: indica o uso do HTML5
            </li>
            <li>
              <code>&lt;html&gt;</code>: elemento raiz da página
            </li>
            <li>
              <code>&lt;head&gt;</code>: metadados e configurações
            </li>
            <li>
              <code>&lt;title&gt;</code>: nome da aba do navegador
            </li>
            <li>
              <code>&lt;body&gt;</code>: todo o conteúdo visível da página
            </li>
          </ul>
        </div>

        {/* TITULOS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            13. Tags de Título (Cabeçalhos)
          </h2>

          <p>
            O HTML possui seis níveis de título: <code>&lt;h1&gt;</code> até
            <code>&lt;h6&gt;</code>, onde <code>h1</code> é o mais importante.
          </p>

          <CodeBlock
            language="html"
            code={`<h1>Título principal</h1>
<h2>Seção</h2>
<h3>Subseção</h3>`}
          />
        </div>

        {/* COMENTÁRIOS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">14. Comentários em HTML</h2>

          <p>
            Comentários documentam o código e ajudam na manutenção. Eles não são
            exibidos no navegador.
          </p>

          <CodeBlock language="html" code={`<!-- Isto é um comentário -->`} />
        </div>

        {/* LISTAS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">15. Listas</h2>

          <p>
            A criação de listas é essencial para organizar conteúdo. Uma lista
            não ordenada utiliza <code>&lt;ul&gt;</code> e{" "}
            <code>&lt;li&gt;</code>.
          </p>

          <CodeBlock
            language="html"
            code={`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}
          />
        </div>

        {/* EXERCÍCIO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">16. Exercício Prático</h2>

          <ol className="list-decimal ml-6">
            <li>Abra o VS Code ou editor de texto.</li>
            <li>
              Crie o arquivo <strong>index.html</strong>.
            </li>
            <li>Digite a estrutura básica do HTML.</li>
            <li>
              Inclua:
              <ul className="list-disc ml-6 mt-2">
                <li>Título: “Minha Primeira Página”</li>
                <li>Cabeçalho (h1): “Bem-vindo ao meu site!”</li>
                <li>Parágrafo explicando por que você está aprendendo HTML</li>
                <li>Uma lista com 3 coisas que você gosta de fazer</li>
              </ul>
            </li>
            <li>Abra o arquivo no navegador.</li>
          </ol>
        </div>

        {/* CONCLUSÃO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">17. Conclusão</h2>

          <p>
            Nesta aula, entendemos como a Internet evoluiu desde sua criação
            militar até se tornar a maior infraestrutura de comunicação do
            planeta. Também aprendemos os conceitos de hipertexto, WWW e demos
            os primeiros passos com HTML, a base do desenvolvimento web.
          </p>

          <p className="mt-3">
            Na próxima aula, avançaremos para estruturação de conteúdo em HTML e
            começaremos a trabalhar com elementos essenciais para construção de
            páginas reais.
          </p>
        </div>

        {/* REFERÊNCIAS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">18. Para Saber Mais</h2>

          <ul className="list-disc ml-6">
            <li>
              <a
                className="text-blue-600 underline"
                href="https://info.cern.ch"
              >
                Primeira página da Web
              </a>
            </li>
            <li>
              <a
                className="text-blue-600 underline"
                href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              >
                MDN – Documentação HTML
              </a>
            </li>
            <li>
              <a
                className="text-blue-600 underline"
                href="https://webfoundation.org/about/vision/history-of-the-web/"
              >
                História da Web – WebFoundation
              </a>
            </li>
          </ul>
        </div>
      </section>
    </LayoutAula>
  );
}
