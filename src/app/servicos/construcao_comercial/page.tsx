import { CheckCheck } from 'lucide-react';
import React from 'react';

export default function ConstrucaoComercial() {

    return (
        <section className="pb-12">
            <div>
                <img
                    src="/icons/regua-icon.png"
                    alt="Ícone de uma régua"
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
                            Construção Comercial Otimizada: Seu Negócio no Prazo Certo
                        </h1>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-4">
                    <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                        Somos especialistas em transformar projetos em espaços comerciais de sucesso. Entregamos seu empreendimento (loja, escritório ou indústria) com foco total em **funcionalidade, conformidade legal e prazo de inauguração**.
                    </p>
                </div>

                <div className="px-6 lg:px-0 mt-12 grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-[#0D194F] font-semibold text-2xl mb-4">
                            Projetos Finalizados: Nosso Portfólio Fala Por Nós
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <CheckCheck className="w-5 h-5 text-[#E97527] mr-2 mt-1" />
                                <div>
                                    <strong className="font-medium">Varejo e Lojas:</strong> Construímos ambientes que maximizam a experiência do cliente e o fluxo de vendas.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCheck className="w-5 h-5 text-[#E97527] mr-2 mt-1" />
                                <div>
                                    <strong className="font-medium">Escritórios Corporativos:</strong> Design inteligente e layouts flexíveis, promovendo a produtividade da sua equipe.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCheck className="w-5 h-5 text-[#E97527] mr-2 mt-1" />
                                <div>
                                    <strong className="font-medium">Instalações Industriais:</strong> Estruturas robustas e seguras, projetadas para atender às normas técnicas e logísticas mais rigorosas.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCheck className="w-5 h-5 text-[#E97527] mr-2 mt-1" />
                                <div>
                                    <strong className="font-medium">Clínicas e Saúde:</strong> Conformidade sanitária e espaços que priorizam o conforto do paciente e a eficiência do corpo médico.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 shadow-inner">
                        <h3 className="text-[#0D194F] font-semibold text-xl mb-3">
                            Depoimento em Destaque
                        </h3>
                        <blockquote className="italic text-gray-600 mb-4 border-l-4 border-[#E97527] pl-4">
                            "A [Nome da Construtora] foi essencial para abrirmos nossa loja no prazo. O foco no planejamento comercial e a agilidade na execução nos salvaram de prejuízos. Profissionais que realmente entendem de negócio."
                        </blockquote>
                        <p className="font-medium text-[#0D194F]">- Ana Lúcia, Proprietária de Rede de Franquias</p>
                        <a href="/contato" className="mt-3 inline-block text-[#E97527] hover:underline text-sm">
                            Fale com um de nossos especialistas em negócios →
                        </a>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-16">
                    <h2 className="text-[#0D194F] font-semibold text-3xl mb-8 text-center">
                        Etapas da Construção Comercial com Foco em Receita
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
                            <span className="text-4xl font-bold text-[#0D194F]">1</span>
                            <h3 className="text-lg font-semibold mt-2 text-[#0D194F]">Viabilidade Técnica</h3>
                            <p className="text-sm text-gray-600 mt-2">Estudo de regulamentações locais e definição de escopo para máxima funcionalidade.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
                            <span className="text-4xl font-bold text-[#E97527]">2</span>
                            <h3 className="text-lg font-semibold mt-2 text-[#0D194F]">Licenças e Conformidade</h3>
                            <p className="text-sm text-gray-600 mt-2">Gerenciamento completo de alvarás, Habite-se e normas de segurança e acessibilidade.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
                            <span className="text-4xl font-bold text-[#0D194F]">3</span>
                            <h3 className="text-lg font-semibold mt-2 text-[#0D194F]">Execução Otimizada</h3>
                            <p className="text-sm text-gray-600 mt-2">Construção ágil, com controle de qualidade e gestão de equipe focada no cronograma de inauguração.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
                            <span className="text-4xl font-bold text-[#E97527]">4</span>
                            <h3 className="text-lg font-semibold mt-2 text-[#0D194F]">Chave na Mão</h3>
                            <p className="text-sm text-gray-600 mt-2">Entrega final do imóvel pronto para uso, com toda a documentação legalizada.</p>
                        </div>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-16 text-center bg-[#0D194F] p-10 rounded-lg">
                    <h2 className="text-white text-3xl font-bold mb-3">
                        Seu Próximo Empreendimento Começa Aqui.
                    </h2>
                    <p className="text-blue-200 mb-6">
                        Evite atrasos e construa com quem entende a dinâmica do mercado comercial.
                    </p>
                    <a
                        href="/empresa/fale_conosco"
                        className="inline-block bg-[#E97527] text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300 shadow-xl"
                    >
                        Solicitar Orçamento sem Compromisso
                    </a>
                </div>

            </div>
        </section>
    )
}