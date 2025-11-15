import { ValueIcon } from '@/app/lib/util';
import React, { ReactNode } from 'react';

export default function QuemSomos() {

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
                            Quem Somos: Construindo o Futuro com Integridade
                        </h1>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-8 grid md:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 className="text-[#0D194F] font-semibold text-2xl mb-4">
                            Nossa Missão e Trajetória
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            A Prisma, estabelecida em 1988, surgiu com o propósito de redefinir os padrões de excelência e confiabilidade no setor de construção civil. Desde o início, nosso foco tem sido ir além da simples edificação, construindo parcerias sólidas e entregando projetos que superam as expectativas.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Ao longo de nossa consolidada trajetória, acumulamos um portfólio diversificado, com mais de 300+ projetos de sucesso em complexos comerciais, instalações industriais e empreendimentos residenciais de alto padrão. Essa vasta experiência nos permite antecipar desafios e aplicar soluções inovadoras, garantindo a máxima eficiência do seu investimento.
                        </p>
                        <p className="text-gray-700 leading-relaxed italic border-l-4 border-[#E97527] pl-4">
                            **Nossa Missão:** Transformar a visão dos nossos clientes em realidade tangível. Fazemos isso garantindo segurança estrutural, aplicando inovação técnica de ponta e mantendo o máximo de transparência em todas as fases da obra e gerenciamento de projetos.
                        </p>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Acreditamos que cada obra é um legado. Por isso, nossa equipe de engenheiros e arquitetos altamente qualificados trabalha com um planejamento meticuloso, desde a concepção inicial até a entrega da chave, assegurando que o resultado final reflita durabilidade e excelência.
                        </p>
                    </div>


                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img
                            src="/img/sede_prisma.jpg"
                            alt="Foto da equipe ou sede da construtora"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-16">
                    <h2 className="text-[#0D194F] font-semibold text-3xl mb-8 text-center">
                        O Que Nos Move: Nossos Valores
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <ValueIcon>🛠️</ValueIcon>
                            <h3 className="text-xl font-semibold mt-2 text-[#0D194F]">Excelência Técnica</h3>
                            <p className="text-sm text-gray-600 mt-2">Padrão de qualidade rigoroso, utilizando as melhores práticas de engenharia e materiais certificados.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <ValueIcon>🤝</ValueIcon>
                            <h3 className="text-xl font-semibold mt-2 text-[#0D194F]">Transparência Total</h3>
                            <p className="text-sm text-gray-600 mt-2">Comunicação clara e aberta sobre custos, prazos e andamento da obra, do início ao fim.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <ValueIcon>♻️</ValueIcon>
                            <h3 className="text-xl font-semibold mt-2 text-[#0D194F]">Responsabilidade</h3>
                            <p className="text-sm text-gray-600 mt-2">Compromisso com o meio ambiente e total conformidade com todas as normas e regulamentações.</p>
                        </div>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-16 text-center bg-[#0D194F] p-10 rounded-lg">
                    <h2 className="text-white text-3xl font-bold mb-3">
                        Pronto para Confiar no seu Próximo Projeto?
                    </h2>
                    <p className="text-blue-200 mb-6">
                        Conheça de perto nossa equipe e tire todas as suas dúvidas sobre a metodologia de trabalho.
                    </p>
                    <a
                        href="/contato"
                        className="inline-block bg-[#E97527] text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300 shadow-xl"
                    >
                        Fale com um Especialista
                    </a>
                </div>

            </div>
        </section>
    )
}