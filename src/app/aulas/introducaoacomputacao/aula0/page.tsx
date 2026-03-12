"use client";

import LayoutAula from "@/src/components/layoutAula";

export default function Aula0() {
  return (
    <LayoutAula titulo="Aula 01 — Apresentação da Disciplina e Introdução à Computação">
      <section className="space-y-14 text-gray-800 leading-relaxed">

        {/* 1. APRESENTAÇÃO DA DISCIPLINA */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">1. Apresentação da Disciplina</h2>
          <p>
            Sejam todos bem-vindos à disciplina de <strong>Introdução à Computação</strong>.
            Esta disciplina tem como objetivo apresentar os fundamentos da computação, fornecendo uma base conceitual 
            que permitirá ao estudante compreender como os computadores funcionam e como as tecnologias da informação 
            estão presentes em praticamente todos os setores da sociedade contemporânea.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r">
            <p className="text-sm text-blue-900">
              <strong>Informações Gerais:</strong> A disciplina possui carga horária total de <strong>72 horas</strong>, 
              sendo ofertada ao longo de um semestre letivo, e está vinculada ao Departamento FACET.
            </p>
          </div>
          <p className="mt-4">
            Durante o semestre, abordaremos temas fundamentais que servem como base para diversas áreas da computação, 
            proporcionando uma visão ampla e estruturada para que vocês compreendam não apenas os aspectos técnicos, 
            mas também o papel transformador da computação na sociedade.
          </p>
        </div>

        {/* 2. OBJETIVOS */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">2. Objetivos da Disciplina</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold text-xl text-blue-800 border-b pb-2 mb-3">Objetivo Geral</h3>
              <p className="text-sm text-gray-700">
                Proporcionar uma compreensão fundamental sobre o funcionamento dos computadores, abordando seus 
                principais componentes de hardware e software, bem como os princípios que sustentam as Tecnologias 
                da Informação (TI). Busca-se também contextualizar a aplicação dessas tecnologias preparando o estudante 
                para disciplinas mais avançadas.
              </p>
            </div>

            <div className="bg-gray-50 p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold text-xl text-blue-800 border-b pb-2 mb-3">Objetivos Específicos</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                <li><strong>Visão geral:</strong> Estrutura dos cursos (Ciência da Computação, Sistemas de Informação, etc.), áreas de atuação e mercado.</li>
                <li><strong>Organização:</strong> Níveis de abstração, lógica digital, sistemas operacionais e linguagens.</li>
                <li><strong>Evolução:</strong> Dispositivos históricos, gerações de computadores e impacto social.</li>
                <li><strong>Fundamentos:</strong> Base conceitual sólida para a graduação.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 e 4. EMENTA E ORGANIZAÇÃO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">3. Ementa e Organização das Aulas</h2>
          <p>
            O conteúdo está dividido em unidades de conhecimento progressivas. Abaixo, os principais tópicos da nossa jornada:
          </p>

          <div className="bg-blue-900 text-white p-6 rounded-xl shadow-md mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <strong className="text-blue-300 block mb-2 border-b border-blue-700 pb-1">🎓 Formação e Profissão</strong>
                <ul className="space-y-1 text-blue-100">
                  <li>• Panorama da área</li>
                  <li>• Perfil profissional e Ética</li>
                  <li>• Mercado de trabalho</li>
                </ul>
              </div>
              <div>
                <strong className="text-blue-300 block mb-2 border-b border-blue-700 pb-1">🕰️ História e Evolução</strong>
                <ul className="space-y-1 text-blue-100">
                  <li>• Primeiros dispositivos</li>
                  <li>• Gerações de computadores</li>
                  <li>• Evolução tecnológica</li>
                </ul>
              </div>
              <div>
                <strong className="text-blue-300 block mb-2 border-b border-blue-700 pb-1">💻 Fundamentos</strong>
                <ul className="space-y-1 text-blue-100">
                  <li>• Hardware e Software</li>
                  <li>• Estrutura básica</li>
                  <li>• Sistemas computacionais</li>
                </ul>
              </div>
              <div className="mt-2">
                <strong className="text-blue-300 block mb-2 border-b border-blue-700 pb-1">🔢 Sistemas de Numeração</strong>
                <ul className="space-y-1 text-blue-100">
                  <li>• Decimal e Binário</li>
                  <li>• Octal e Hexadecimal</li>
                  <li>• Conversão entre bases</li>
                </ul>
              </div>
              <div className="mt-2">
                <strong className="text-blue-300 block mb-2 border-b border-blue-700 pb-1">🌐 Redes de Computadores</strong>
                <ul className="space-y-1 text-blue-100">
                  <li>• Conceitos e Tipos de redes</li>
                  <li>• Funcionamento da internet</li>
                  <li>• Protocolos de comunicação</li>
                </ul>
              </div>
              <div className="mt-2">
                <strong className="text-blue-300 block mb-2 border-b border-blue-700 pb-1">🚀 Tecnologias Emergentes</strong>
                <ul className="space-y-1 text-blue-100">
                  <li>• Computação em nuvem & IoT</li>
                  <li>• Inteligência Artificial</li>
                  <li>• Big Data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 5 e 6. METODOLOGIA E RECURSOS */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">4. Metodologia e Recursos</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mt-4">
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Como vamos aprender?</h3>
              <p className="text-gray-700 mb-3">
                Teremos aulas teóricas interativas, acompanhadas de exercícios e atividades práticas. 
                Todo o material de apoio, slides, atividades e avisos serão centralizados no <strong>Google Sala de Aula (Classroom)</strong>.
              </p>
            </div>
            <div className="flex-1 bg-gray-100 p-5 rounded-lg border">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Recursos Utilizados</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Quadro branco e Projetor multimídia</li>
                <li>Textos acadêmicos e Livros da bibliografia</li>
                <li>Google Sala de Aula</li>
                <li>Seu material de anotação (caderno, caneta, etc.)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 7. AVALIAÇÃO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">5. Sistema de Avaliação</h2>
          <p className="mb-4">
            Nosso processo de avaliação será contínuo e dividido nos seguintes instrumentos:
          </p>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
            <li className="bg-white border rounded shadow-sm p-3"><strong>A1</strong><br/><span className="text-sm text-gray-600">1ª Avaliação Escrita</span></li>
            <li className="bg-white border rounded shadow-sm p-3"><strong>A2</strong><br/><span className="text-sm text-gray-600">2ª Avaliação Escrita</span></li>
            <li className="bg-white border rounded shadow-sm p-3"><strong>AT</strong><br/><span className="text-sm text-gray-600">Média de Atividades</span></li>
            <li className="bg-white border rounded shadow-sm p-3"><strong>EF</strong><br/><span className="text-sm text-gray-600">Exame Final</span></li>
          </ul>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h4 className="font-bold text-yellow-800 mb-2">Cálculo da Média (MA):</h4>
            <div className="bg-white p-3 font-mono text-center rounded border text-lg font-bold text-gray-800 shadow-inner">
              MA = (0,35 × A1) + (0,35 × A2) + (0,30 × AT)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded border border-green-200">
              <h4 className="font-bold text-green-800">✅ Critérios de Aprovação</h4>
              <p className="text-sm text-green-900 mt-1">Média Final (MA) ≥ 6,0 <strong>E</strong> Frequência ≥ 75%.</p>
              <p className="text-xs text-green-800 mt-2"><em>Nota entre 4,0 e 5,9: Direito ao Exame Final.</em></p>
            </div>
            <div className="bg-red-50 p-4 rounded border border-red-200">
              <h4 className="font-bold text-red-800">❌ Critérios de Reprovação</h4>
              <p className="text-sm text-red-900 mt-1">Média Final &lt; 6,0 (após Exame) <strong>OU</strong> Frequência &lt; 75%.</p>
            </div>
          </div>
        </div>

        {/* 8. BIBLIOGRAFIA */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">6. Bibliografia Principal</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>Raul Fernando Weber</strong> — Arquitetura de Computadores</li>
            <li><strong>Marcial Porto Fernandez</strong> — Introdução à Computação</li>
            <li><strong>Manuel Castells</strong> — Sociedade em Rede</li>
            <li><strong>Peter Norton</strong> — Introdução à Informática</li>
          </ul>
        </div>

        {/* 9. A IMPORTÂNCIA DA COMPUTAÇÃO */}
        <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg mt-10">
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            7. Por que estudar Computação?
          </h2>
          <p className="mb-4 text-lg">
            A computação está presente em praticamente todos os aspectos da vida moderna. Ferramentas essenciais 
            para a resolução de problemas complexos e para o avanço científico e tecnológico dependem do que vamos estudar aqui.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold">📡 Comunicação</span>
            <span className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold">📚 Educação</span>
            <span className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold">🏥 Saúde</span>
            <span className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold">🚗 Transporte</span>
            <span className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold">🔬 Ciência</span>
            <span className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold">📈 Economia</span>
            <span className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold">🏛️ Governo</span>
            <span className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold">🎮 Entretenimento</span>
          </div>
        </div>

        {/* 10. CONCLUSÃO */}
        <div className="border-t-2 border-blue-200 pt-8 mt-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Considerações Finais</h2>
          <p>
            Nesta primeira aula, estabelecemos as bases e as regras do nosso semestre. Nas próximas aulas, começaremos 
            a explorar com mais profundidade os temas da disciplina, iniciando pela formação profissional na área da 
            computação e pelo perfil do egresso dos cursos de TI.
          </p>
          <p className="mt-4 font-semibold text-lg text-blue-600 text-center">
            Prontos para começar? Nos vemos na próxima aula!
          </p>
        </div>

      </section>
    </LayoutAula>
  );
}