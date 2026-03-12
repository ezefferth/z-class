"use client";

import LayoutAula from "@/src/components/layoutAula";

export default function Aula1ConteudoSolid() {
  return (
    <LayoutAula titulo="Aula 01 — A Importância, o Panorama e os Cursos da Computação">
      <section className="space-y-16 text-gray-800 leading-relaxed text-lg">

        {/* ==========================================
            TÓPICO 1: A IMPORTÂNCIA DA COMPUTAÇÃO
        ========================================== */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">
            1. Importância da Computação na Sociedade
          </h2>
          
          <div className="space-y-5 text-gray-700">
            <p>
              A computação tornou-se uma das áreas mais influentes da sociedade contemporânea. Nas últimas décadas, 
              o desenvolvimento de tecnologias digitais transformou profundamente a maneira como as pessoas trabalham, 
              se comunicam, aprendem e organizam a vida social.
            </p>
            <p>
              Quando observamos o cotidiano atual, percebemos que praticamente todas as atividades humanas estão de 
              alguma forma relacionadas à computação. Desde tarefas simples, como enviar mensagens pelo celular ou 
              acessar redes sociais, até atividades extremamente complexas, como simulações científicas, diagnósticos 
              médicos auxiliados por inteligência artificial ou controle de sistemas aeroespaciais, dependem de 
              sistemas computacionais.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-2">A Sociedade da Informação</h3>
              <p className="text-blue-800">
                Essa presença crescente da computação está associada ao que muitos autores chamam de <strong>sociedade da informação</strong>. 
                O sociólogo <strong>Manuel Castells</strong> descreve esse fenômeno como um novo modelo de organização social baseado no 
                fluxo contínuo de informação e no uso intensivo de tecnologias digitais para produzir, processar e distribuir conhecimento.
              </p>
            </div>

            <p>
              Nesse contexto, a informação passa a ser um recurso fundamental para o funcionamento da sociedade. 
              Empresas, governos, universidades e organizações utilizam sistemas computacionais para coletar dados, 
              analisá-los e tomar decisões estratégicas. A computação, portanto, não é apenas um campo técnico 
              voltado para a construção de máquinas e programas. Ela também representa uma <strong>infraestrutura essencial</strong> que 
              sustenta grande parte das atividades econômicas, científicas e culturais do mundo moderno.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-blue-700 mt-10 mb-4">Computação e Transformação Social</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Ao longo da história, diferentes tecnologias provocaram grandes transformações sociais. A invenção da 
              imprensa, por exemplo, permitiu a disseminação do conhecimento em larga escala. A revolução industrial 
              modificou profundamente os sistemas de produção e a organização do trabalho. De maneira semelhante, a 
              computação pode ser entendida como <strong>uma das principais forças transformadoras da sociedade contemporânea</strong>.
            </p>
            <p>
              A digitalização da informação possibilitou que dados antes registrados em papel ou outros suportes físicos 
              passassem a ser armazenados e processados eletronicamente. Isso permitiu um aumento significativo na 
              velocidade de comunicação e na capacidade de processamento de informações. Hoje, milhões de transações 
              financeiras ocorrem a cada segundo em sistemas computacionais distribuídos pelo mundo. Sistemas de 
              navegação por satélite auxiliam na mobilidade urbana. Plataformas digitais conectam pessoas em diferentes 
              países em tempo real.
            </p>
            <p>
              A computação também possibilitou o surgimento de novas formas de organização econômica. Empresas de 
              tecnologia tornaram-se algumas das organizações mais influentes do mundo, baseando seus modelos de negócio 
              em plataformas digitais, análise de dados e desenvolvimento de software. Esse cenário mostra que compreender 
              os fundamentos da computação é essencial para entender o funcionamento da sociedade atual.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-blue-700 mt-10 mb-6">A Computação no Cotidiano</h3>
          <p className="mb-6 text-gray-700">
            Uma forma interessante de compreender a importância da computação é observar como ela está presente em 
            diferentes aspectos da vida cotidiana:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm">
              <span className="text-3xl mb-3 block">📱</span>
              <h4 className="font-bold text-gray-800 mb-2">Comunicação</h4>
              <p className="text-sm text-gray-600">Permite o funcionamento de redes sociais, aplicativos de mensagens, plataformas de videoconferência e serviços de streaming.</p>
            </div>
            <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm">
              <span className="text-3xl mb-3 block">🏥</span>
              <h4 className="font-bold text-gray-800 mb-2">Saúde</h4>
              <p className="text-sm text-gray-600">Armazenamento de prontuários eletrônicos, análise de exames médicos, modelagem de estruturas biológicas e desenvolvimento de medicamentos.</p>
            </div>
            <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm">
              <span className="text-3xl mb-3 block">📚</span>
              <h4 className="font-bold text-gray-800 mb-2">Educação</h4>
              <p className="text-sm text-gray-600">Ambientes virtuais de aprendizagem, bibliotecas digitais e plataformas de ensino remoto ampliaram o acesso ao conhecimento.</p>
            </div>
            <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm">
              <span className="text-3xl mb-3 block">🏭</span>
              <h4 className="font-bold text-gray-800 mb-2">Indústria</h4>
              <p className="text-sm text-gray-600">Tecnologias como automação, robótica e sistemas de controle computacional transformaram os processos de produção.</p>
            </div>
            <div className="bg-white p-5 border border-gray-200 rounded-lg shadow-sm lg:col-span-2">
              <span className="text-3xl mb-3 block">🔬</span>
              <h4 className="font-bold text-gray-800 mb-2">Ciência</h4>
              <p className="text-sm text-gray-600">Supercomputadores realizam simulações complexas utilizadas em áreas como climatologia, física, biologia e engenharia. Essa diversidade mostra que a computação é uma área altamente interdisciplinar.</p>
            </div>
          </div>

          {/* PERGUNTA PARA REFLEXÃO */}
          <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-500 shadow-sm mt-8">
            <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
              <span className="mr-3">🛑</span> Pergunta para Reflexão
            </h3>
            <p className="text-xl font-medium text-red-800 mb-6 italic">
              "Se todos os sistemas computacionais do mundo parassem de funcionar por um dia, quais atividades da sociedade seriam mais afetadas?"
            </p>
            <p className="text-gray-700 mb-3 font-semibold">Essa pergunta nos permite discutir temas urgentes como:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Dependência tecnológica;</li>
              <li>Infraestrutura digital;</li>
              <li>Impacto econômico da tecnologia;</li>
              <li>Vulnerabilidade de sistemas informacionais.</li>
            </ul>
          </div>
        </div>

        {/* ==========================================
            TÓPICO 2: PANORAMA DA ÁREA
        ========================================== */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-emerald-800 border-b-2 border-emerald-200 pb-2">
            2. Panorama da Área de Computação
          </h2>
          
          <div className="space-y-4 text-gray-700 mb-8">
            <p>
              A computação é uma área extremamente ampla, que envolve o estudo de diferentes aspectos relacionados 
              ao processamento automático da informação. De maneira geral, podemos compreender a computação como 
              o <strong>campo do conhecimento que estuda métodos, técnicas e tecnologias utilizadas para representar, processar, 
              armazenar e transmitir informações por meio de sistemas computacionais</strong>.
            </p>
            <p>
              Esse campo inclui desde fundamentos teóricos, como algoritmos e estruturas de dados, até áreas altamente 
              aplicadas, como desenvolvimento de software, inteligência artificial e sistemas distribuídos. 
              A área de computação é tradicionalmente organizada em diferentes subáreas, cada uma focada em aspectos 
              específicos da tecnologia computacional.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-emerald-700 mb-6">Principais Áreas da Computação</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h4 className="font-bold text-lg text-emerald-900 mb-2">💻 Arquitetura de Computadores</h4>
              <p className="text-sm text-gray-700 mb-2">Estuda a estrutura interna dos computadores, buscando compreender como são projetados e como executam instruções. Inclui:</p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                <li>Processadores e Memória;</li>
                <li>Dispositivos de entrada e saída;</li>
                <li>Organização do hardware.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h4 className="font-bold text-lg text-emerald-900 mb-2">⚙️ Engenharia de Software</h4>
              <p className="text-sm text-gray-700 mb-2">Foca no desenvolvimento sistemático de programas e sistemas. É responsável pela criação de aplicações utilizadas em diversas plataformas. Inclui:</p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                <li>Análise de requisitos e Projeto de software;</li>
                <li>Testes e Manutenção de sistemas.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h4 className="font-bold text-lg text-emerald-900 mb-2">📊 Ciência de Dados</h4>
              <p className="text-sm text-gray-700 mb-2">Tornou-se extremamente relevante com o crescimento do volume de dados. Relaciona-se com a coleta, organização e análise de grandes volumes de informações. Inclui:</p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                <li>Mineração de dados e Aprendizado de máquina (Machine Learning);</li>
                <li>Análise estatística e Inteligência artificial.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h4 className="font-bold text-lg text-emerald-900 mb-2">🌐 Redes de Computadores</h4>
              <p className="text-sm text-gray-700 mb-2">Estuda os sistemas que permitem a comunicação entre dispositivos computacionais. Inclui:</p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                <li>Protocolos de comunicação e Internet;</li>
                <li>Redes locais, distribuídas e Segurança em redes.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h4 className="font-bold text-lg text-emerald-900 mb-2">🎛️ Sistemas Operacionais</h4>
              <p className="text-sm text-gray-700 mb-2">Investiga os programas responsáveis por gerenciar os recursos do computador. Eles controlam:</p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                <li>Memória e Processador;</li>
                <li>Armazenamento e Dispositivos de E/S.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h4 className="font-bold text-lg text-emerald-900 mb-2">🧠 Inteligência Artificial</h4>
              <p className="text-sm text-gray-700 mb-2">Busca desenvolver sistemas capazes de executar tarefas que normalmente exigiriam inteligência humana. Entre as aplicações estão:</p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                <li>Reconhecimento de imagens e Processamento de linguagem natural;</li>
                <li>Sistemas de recomendação e Veículos autônomos.</li>
              </ul>
            </div>
          </div>

          {/* DISCUSSÃO EM SALA */}
          <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 mt-8">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">🗣️ Discussão em Sala</h3>
            <ul className="space-y-2 text-gray-800 font-medium">
              <li>1. Quais dessas áreas da computação vocês já ouviram falar antes?</li>
              <li>2. Alguma dessas áreas desperta mais interesse em vocês? Por quê?</li>
            </ul>
          </div>
        </div>

        {/* ==========================================
            TÓPICO 3: ESTRUTURA DOS CURSOS
        ========================================== */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-purple-800 border-b-2 border-purple-200 pb-2">
            3. Estrutura dos Cursos da Área de Computação
          </h2>
          
          <p className="mb-8 text-gray-700">
            No ensino superior, a computação é representada por diversos cursos que possuem enfoques diferentes, 
            embora compartilhem uma base comum de conhecimentos. Esses cursos possuem objetivos e abordagens distintas, 
            mas todos buscam formar profissionais capazes de compreender e desenvolver tecnologias computacionais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* Ciência da Computação */}
            <div className="bg-white border-t-4 border-purple-600 rounded-b-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-purple-800 mb-3">Ciência da Computação</h3>
              <p className="text-gray-700 mb-4">
                É um curso com <strong>forte base teórica e científica</strong>. Seu foco principal é o estudo dos fundamentos 
                da computação. Busca formar profissionais capazes de desenvolver novas tecnologias, métodos e soluções computacionais.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                <strong>Principais temas:</strong> Algoritmos, Estruturas de dados, Teoria da computação, Inteligência artificial, Computação gráfica e Sistemas distribuídos.
              </div>
            </div>

            {/* Sistemas de Informação */}
            <div className="bg-white border-t-4 border-orange-500 rounded-b-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-orange-700 mb-3">Sistemas de Informação</h3>
              <p className="text-gray-700 mb-4">
                Possui uma abordagem mais voltada para a <strong>aplicação da tecnologia nas organizações</strong>. 
                Prepara profissionais para atuar na integração entre tecnologia e gestão.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                <strong>Principais temas:</strong> Gestão de sistemas de informação, Análise de processos organizacionais, Desenvolvimento de sistemas corporativos e Governança de TI.
              </div>
            </div>

            {/* Engenharia de Software */}
            <div className="bg-white border-t-4 border-rose-600 rounded-b-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-rose-800 mb-3">Engenharia de Software</h3>
              <p className="text-gray-700 mb-4">
                Concentra-se no <strong>desenvolvimento estruturado</strong> de sistemas computacionais. O objetivo é 
                formar profissionais capazes de projetar e manter sistemas complexos com qualidade.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                <strong>Principais temas:</strong> Modelagem de software, Arquitetura de sistemas, Qualidade de software e Metodologias de desenvolvimento.
              </div>
            </div>

            {/* Engenharia da Computação */}
            <div className="bg-white border-t-4 border-blue-600 rounded-b-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Engenharia da Computação</h3>
              <p className="text-gray-700 mb-4">
                Combina conhecimentos de <strong>computação e engenharia eletrônica</strong>. Prepara profissionais para trabalhar 
                com o desenvolvimento de dispositivos computacionais e sistemas físicos.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                <strong>Principais temas:</strong> Circuitos digitais, Sistemas embarcados, Microprocessadores e Hardware e software integrados.
              </div>
            </div>
          </div>

          {/* REFLEXÃO ÉTICA */}
          <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg mt-8">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">Reflexão sobre o papel do profissional</h3>
            <p className="mb-4 text-gray-300">
              Os profissionais da área de computação desempenham um papel cada vez mais relevante na sociedade. Eles são responsáveis por:
              desenvolver sistemas que suportam serviços essenciais, garantir segurança de dados, criar novas tecnologias e inovar em diferentes setores da economia.
            </p>
            <p className="text-xl font-bold text-white mb-6">Diante disso: Qual deve ser a responsabilidade ética dos profissionais de tecnologia?</p>
            
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="font-bold text-purple-200 mb-3">Perguntas para debate em plenária:</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-200">
                <li>A tecnologia melhora automaticamente a qualidade de vida das pessoas?</li>
                <li>Existem riscos associados ao uso excessivo de tecnologias digitais?</li>
                <li>Quem deve ser responsável pelos impactos sociais das tecnologias?</li>
                <li>Como a computação pode contribuir para resolver problemas sociais?</li>
                <li>De que forma a tecnologia pode influenciar a economia de um país?</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
            ATIVIDADE DE FECHAMENTO E ENCERRAMENTO
        ========================================== */}
        <div className="border-t-2 border-gray-200 pt-10 mt-12">
          
          {/* ATIVIDADE DE INTERAÇÃO */}
          <div className="bg-linear-to-r from-green-700 to-green-900 text-white p-8 rounded-2xl shadow-xl mb-10">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="mr-3">🤝</span> Atividade de Interação (Trabalho em Grupo)
            </h2>
            <p className="mb-6 text-green-100 text-lg">
              Vamos dividir a turma em pequenos grupos. Cada grupo deve discutir as questões abaixo. 
              Ao final do tempo estipulado, cada grupo apresentará suas conclusões para a turma.
            </p>
            <div className="bg-white text-gray-900 p-6 rounded-xl shadow-inner">
              <ol className="list-decimal ml-6 space-y-4 font-semibold text-lg">
                <li>Qual foi a tecnologia computacional que mais impactou a sociedade nos últimos anos?</li>
                <li>Quais problemas sociais podem ser resolvidos com tecnologia?</li>
                <li>Quais riscos podem surgir com o avanço da computação?</li>
              </ol>
            </div>
          </div>

          {/* ENCERRAMENTO */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Encerramento da Aula</h2>
            <p className="text-gray-700 mb-4">
              A computação é uma área dinâmica, interdisciplinar e em constante evolução. Seu impacto na sociedade 
              vai muito além da tecnologia em si, influenciando profundamente a forma como as pessoas vivem, trabalham 
              e se relacionam.
            </p>
            <p className="text-gray-700 mb-6">
              Ao longo desta disciplina, exploraremos os fundamentos que sustentam essa área, buscando compreender 
              não apenas como os sistemas computacionais funcionam, mas também como eles moldam o mundo contemporâneo.
            </p>
            <p className="text-xl font-bold text-blue-700 bg-blue-50 p-4 rounded-lg inline-block">
              Nas próximas aulas iniciaremos uma jornada pela história da computação, analisando como as primeiras 
              ideias e dispositivos de cálculo evoluíram até os computadores modernos. Até lá!
            </p>
          </div>

        </div>

      </section>
    </LayoutAula>
  );
}