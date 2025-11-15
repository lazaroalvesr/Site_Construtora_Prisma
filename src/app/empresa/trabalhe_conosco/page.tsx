import { ValueIcon } from '@/app/lib/util';
import React from 'react';

export default function TrabalheConosco() {

    return (
        <section className="pb-12">
            <div>
                <img
                    src="/icons/regua-icon.png"
                    alt="Faixa decorativa"
                    width={1200}
                    height={20}
                    className="w-full h-auto"
                />
            </div>

            <div className="max-w-6xl m-auto pt-[53px]">
                <div className="px-6 lg:px-0">
                    <div className="flex lg:items-center md:flex-row md:items-center lg:flex-row flex-col gap-4">
                        <div className="bg-[#E97527] w-[41px] h-[6px]"></div>
                        <h1 className="text-[#0D194F] font-semibold text-3xl lg:text-4xl">
                            Carreira: Construa Seu Futuro Conosco
                        </h1>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-8 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-[#0D194F] font-semibold text-2xl mb-4">
                            Por Que Trabalhar na Prisma?
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Buscamos talentos apaixonados por excelência e inovação no setor de construção civil. Oferecemos um ambiente de trabalho desafiador e colaborativo, onde você terá a oportunidade de participar de projetos de grande impacto, do planejamento à entrega final.
                        </p>
                        <p className="text-gray-700 leading-relaxed italic border-l-4 border-[#E97527] pl-4">
                            Valorizamos a qualificação técnica, a integridade e o desenvolvimento contínuo. Sua carreira é um projeto que levamos a sério.
                        </p>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="/img/cultura_trabalho.jpg"
                            alt="Foto do time em obra ou em reunião"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-16">
                    <h2 className="text-[#0D194F] font-semibold text-3xl mb-8 text-center">
                        O Que Oferecemos
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <ValueIcon>📈</ValueIcon>
                            <h3 className="text-xl font-semibold mt-2 text-[#0D194F]">Plano de Carreira</h3>
                            <p className="text-sm text-gray-600 mt-2">Oportunidades reais de crescimento e desenvolvimento profissional contínuo.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <ValueIcon>📚</ValueIcon>
                            <h3 className="text-xl font-semibold mt-2 text-[#0D194F]">Treinamento</h3>
                            <p className="text-sm text-gray-600 mt-2">Acesso a cursos e certificações nas últimas tecnologias de construção e BIM.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <ValueIcon>🩺</ValueIcon>
                            <h3 className="text-xl font-semibold mt-2 text-[#0D194F]">Benefícios</h3>
                            <p className="text-sm text-gray-600 mt-2">Pacote completo de benefícios, incluindo plano de saúde e auxílio-alimentação.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <ValueIcon>🌟</ValueIcon>
                            <h3 className="text-xl font-semibold mt-2 text-[#0D194F]">Inovação</h3>
                            <p className="text-sm text-gray-600 mt-2">Trabalhe com ferramentas modernas e projetos que ditam tendências do mercado.</p>
                        </div>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-16 text-center bg-[#0D194F] p-10 rounded-lg">
                    <h2 className="text-white text-3xl font-bold mb-3">
                        Envie Seu Currículo!
                    </h2>
                    <p className="text-blue-200 mb-6">
                        Mesmo que sua área não esteja listada abaixo, seu talento pode ser o que estamos procurando.
                    </p>

                    <div className="bg-white p-6 rounded-lg mb-6 shadow-md max-w-lg mx-auto">
                        <p className="font-semibold text-[#0D194F] mb-3">Vagas Abertas:</p>
                        <span className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full m-1">Engenheiro Civil Sênior</span>
                        <span className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full m-1">Arquiteto de Projetos Comerciais</span>
                        <span className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full m-1">Estágio em Gerenciamento</span>
                    </div>

                    <a
                        href="mailto:curriculos@suaconstrutora.com.br"
                        className="inline-block bg-[#E97527] text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300 shadow-xl"
                    >
                        Candidatar-se por E-mail
                    </a>
                </div>

            </div>
        </section>
    );
}