"use client";

import { School, Work, MenuBook, Code } from "@mui/icons-material";
import perfil from '../../public/perfil.jpeg'
export default function Home() {
  return (
    <div className="space-y-10 text-gray-800">

      {/* ==========================================
          HERO SECTION (Boas-vindas)
      ========================================== */}
      <section className="bg-linear-to-r from-blue-700 to-blue-900 text-white p-8 md:p-12 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bem-vindo ao Portal de Aulas
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
          Este é o seu ambiente virtual de aprendizagem. Aqui você encontrará todo o material
          de apoio, discussões e roteiros das nossas disciplinas. Selecione uma aula no
          menu lateral para começar sua jornada!
        </p>
      </section>

      {/* ==========================================
          SOBRE O PROFESSOR (Seu Lattes)
      ========================================== */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
          👨‍🏫 Conheça seu Professor
        </h2>

        <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-8 items-start">

          {/* Espaço para sua foto (Opcional) */}
          <div className="w-32 h-32 shrink-0 bg-gray-100 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-400 overflow-hidden">
            {/* Para colocar sua foto, troque a div acima por: 
                <img src="/sua-foto.jpg" alt="Sua Foto" className="w-full h-full object-cover" /> 
            */}
            <img src={perfil.src} alt="Sua Foto" className="w-full h-full object-cover" />
            {/* <span className="text-sm text-center px-2">Sua Foto<br />(Opcional)</span> */}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-800">
              {/* Prof. Me. [Seu Nome Aqui] */}
              Prof. Ezéfferth Chlysman
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Mestrando em Computação Aplicada pela Universidade Federal de Mato Grosso do Sul (UFMS),
              possuo graduação em Engenharia de Computação pela Universidade Federal de Mato Grosso (UFMT),
              além de pós-graduação em Governança de TI e MBA em Engenharia de Software.
            </p>

            {/* Badges de Experiência */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
                <Work className="text-blue-600 mt-1" fontSize="small" />
                <div>
                  <h4 className="font-bold text-blue-900 text-sm">Atuação Profissional</h4>
                  <p className="text-xs text-blue-800 mt-1">Analista de TI na Prefeitura Municipal de Dourados e vasta experiência em Ciência da Computação.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <School className="text-emerald-600 mt-1" fontSize="small" />
                <div>
                  <h4 className="font-bold text-emerald-900 text-sm">Docência Acadêmica</h4>
                  <p className="text-xs text-emerald-800 mt-1">Professor de Ensino Superior na UNIGRAN. Ex-professor substituto na UFMT e Faculdade Invest (Cuiabá).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          GUIA RÁPIDO (Instruções)
      ========================================== */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
          🚀 Como utilizar este portal?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
            <MenuBook className="text-4xl text-purple-500 mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">1. Escolha a Disciplina</h3>
            <p className="text-sm text-gray-600">Abra o menu lateral (☰) e expanda a disciplina que você está cursando neste semestre.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
            <Code className="text-4xl text-blue-500 mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">2. Acesse os Conteúdos</h3>
            <p className="text-sm text-gray-600">Navegue pelas aulas. O material é denso, então leia com atenção e participe das discussões propostas.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:-translate-y-1 transition-transform">
            <School className="text-4xl text-emerald-500 mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">3. Interaja na Aula</h3>
            <p className="text-sm text-gray-600">O conteúdo digital serve como apoio. Anote suas dúvidas e traga-as para os debates presenciais!</p>
          </div>
        </div>
      </section>

    </div>
  );
}