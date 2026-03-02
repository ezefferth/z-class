"use client";

import LayoutAula from "@/src/components/layoutAula";
import dynamic from "next/dynamic";
const CodeBlockRunner = dynamic(
  () => import('@/src/components/codeEditorRunner'),
  { ssr: false }
)
export default function Page() {
  return (
    <LayoutAula titulo="Aula 3 – HTML Profissional: Estrutura Real, Semântica Avançada e Formulários Completos">
      <section className="space-y-10">

        {/* INTRODUÇÃO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>

          <p>
            Nesta aula vamos elevar o nível do HTML. Não estudaremos apenas tags,
            mas sim como estruturar documentos profissionais, aplicar semântica
            correta, melhorar acessibilidade e construir formulários robustos.
          </p>

          <p className="mt-3">
            O objetivo é preparar seu código para padrões reais de mercado,
            deixando-o organizado, compreensível e preparado para receber CSS na próxima aula.
          </p>
        </div>

        {/* ESTRUTURA PROFISSIONAL */}
        <div>
          <h2 className="text-2xl font-bold mb-4">2. Estrutura Profissional de Documento</h2>

          <p>
            Um documento HTML profissional precisa de organização adequada no
            <code>head</code> e estrutura semântica correta no <code>body</code>.
          </p>

          <CodeBlockRunner
            height={650}
            initialCode={`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="description" content="Portal de tecnologia e inovação">
  <meta name="keywords" content="HTML, CSS, Programação, Web">
  <meta name="author" content="Professor">

  <title>Portal Tech</title>

  <link rel="icon" href="favicon.ico">

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

  <main>
    <article>
      <h2>Título da Notícia</h2>
      <p>Conteúdo estruturado corretamente.</p>
    </article>
  </main>

  <footer>
    <p>&copy; 2025 Portal Tech</p>
  </footer>

</body>
</html>`}
          />
        </div>

        {/* SEMÂNTICA AVANÇADA */}
        <div>
          <h2 className="text-2xl font-bold mb-4">3. Semântica Avançada</h2>

          <p>
            Tags semânticas melhoram SEO, acessibilidade e organização do código.
          </p>

          <CodeBlockRunner
            height={550}
            initialCode={`<article>

  <h2>História da Computação</h2>

  <p>
    Em <time datetime="1946-02-14">14 de Fevereiro de 1946</time>,
    surgiu o <abbr title="Electronic Numerical Integrator and Computer">ENIAC</abbr>.
  </p>

  <figure>
    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400"
         alt="Placa eletrônica antiga">
    <figcaption>Fig. 1: Primeiros circuitos eletrônicos.</figcaption>
  </figure>

  <blockquote cite="https://developer.mozilla.org">
    HTML é a base estrutural da Web.
  </blockquote>

  <details>
    <summary>Leia mais</summary>
    <p>O ENIAC foi um dos primeiros computadores eletrônicos de grande escala.</p>
  </details>

  <p>Pressione <kbd>Ctrl</kbd> + <kbd>S</kbd> para salvar.</p>

</article>`}
          />
        </div>

        {/* ACESSIBILIDADE */}
        <div>
          <h2 className="text-2xl font-bold mb-4">4. Acessibilidade no HTML</h2>

          <p>
            Um HTML profissional deve ser acessível para todos os usuários,
            inclusive aqueles que utilizam leitores de tela.
          </p>

          <CodeBlockRunner
            height={400}
            initialCode={`<form>

  <label for="email">E-mail:</label>
  <input 
    type="email" 
    id="email" 
    required 
    aria-label="Digite seu e-mail"
  >

  <br><br>

  <img 
    src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=300"
    alt="Pessoa utilizando notebook em ambiente de trabalho"
  >

</form>`}
          />
        </div>

        {/* FORMULÁRIOS COMPLETOS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">5. Formulários Profissionais</h2>

          <p>
            O HTML5 trouxe validação nativa e novos tipos de input.
          </p>

          <CodeBlockRunner
            height={750}
            initialCode={`<form>

  <fieldset>
    <legend>Cadastro de Usuário</legend>

    <label for="nome">Nome:</label>
    <input type="text" id="nome" required minlength="3">
    <br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" required>
    <br><br>

    <label for="senha">Senha:</label>
    <input type="password" id="senha" minlength="6" required>
    <br><br>

    <label for="idade">Idade:</label>
    <input type="number" id="idade" min="18" max="120">
    <br><br>

    <label for="data">Data de Nascimento:</label>
    <input type="date" id="data">
    <br><br>

    <label>Gênero:</label>
    <input type="radio" name="genero"> Masculino
    <input type="radio" name="genero"> Feminino
    <br><br>

    <label>Interesses:</label>
    <input type="checkbox"> Programação
    <input type="checkbox"> Design
    <input type="checkbox"> Banco de Dados
    <br><br>

    <label for="cor">Cor Favorita:</label>
    <input type="color" id="cor">
    <br><br>

    <label for="arquivo">Envie um arquivo:</label>
    <input type="file" id="arquivo">
    <br><br>

    <button type="submit">Cadastrar</button>

  </fieldset>

</form>`}
          />
        </div>

        {/* MINI PROJETO GUIADO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">6. Mini Projeto Guiado</h2>

          <p>
            Vamos estruturar um perfil profissional completo.
          </p>

          <CodeBlockRunner
            height={650}
            initialCode={`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Perfil Profissional</title>
</head>
<body>

  <header>
    <h1>João da Silva</h1>
  </header>

  <main>

    <section>
      <h2>Sobre</h2>
      <p>Desenvolvedor web focado em front-end.</p>
    </section>

    <section>
      <h2>Formação</h2>
      <ul>
        <li>Engenharia de Software</li>
      </ul>
    </section>

    <section>
      <h2>Contato</h2>
      <form>
        <label>Email:</label>
        <input type="email" required>
        <button type="submit">Enviar</button>
      </form>
    </section>

  </main>

  <footer>
    <p>&copy; 2025 João da Silva</p>
  </footer>

</body>
</html>`}
          />
        </div>

        {/* ATIVIDADE FINAL GRANDE */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            7. Atividade Prática – Sistema de Evento Acadêmico
          </h2>

          <p className="mb-4">
            Desenvolva uma página completa para um evento de tecnologia.
          </p>

          <ul className="list-disc ml-6 space-y-2 mb-6 text-sm">
            <li>Estrutura completa com header, nav, main e footer</li>
            <li>Seção “Sobre o Evento”</li>
            <li>Lista de palestrantes com imagem e descrição</li>
            <li>Tabela de horários</li>
            <li>Formulário de inscrição completo</li>
            <li>Uso de pelo menos 5 tags semânticas avançadas</li>
            <li>Validação HTML5</li>
            <li>Uso correto de labels e alt</li>
          </ul>

          <CodeBlockRunner
            height={750}
            initialCode={`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Evento Tech 2025</title>
</head>
<body>

  <header>
    <h1>Evento Tech 2025</h1>
    <nav>
      <a href="#sobre">Sobre</a> |
      <a href="#palestrantes">Palestrantes</a> |
      <a href="#inscricao">Inscrição</a>
    </nav>
  </header>

  <main>

    <section id="sobre">
      <h2>Sobre o Evento</h2>
    </section>

    <section id="palestrantes">
      <h2>Palestrantes</h2>
    </section>

    <section id="inscricao">
      <h2>Formulário de Inscrição</h2>
      <form>
        <fieldset>
          <legend>Dados do Participante</legend>
        </fieldset>
      </form>
    </section>

  </main>

  <footer>
    <p>&copy; 2025 Evento Tech</p>
  </footer>

</body>
</html>`}
          />
        </div>

        {/* CONCLUSÃO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">8. Conclusão</h2>

          <p>
            Agora seu HTML está estruturado em nível profissional.
            Na próxima aula entraremos no CSS para transformar
            essa estrutura em layouts modernos e responsivos.
          </p>
        </div>

      </section>
    </LayoutAula>
  );
}