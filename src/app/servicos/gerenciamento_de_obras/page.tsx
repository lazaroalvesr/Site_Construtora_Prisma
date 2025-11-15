import Image from "next/image";

export default function GerenciamentoDeObras() {
    return (
        <section className="pb-12">
            <div>
                <Image
                    src="/icons/regua-icon.png"
                    alt="Ícone de uma régua"
                    width={1200}
                    height={20}
                    className="w-full"
                />
            </div>

            <div className="max-w-6xl m-auto pt-[53px]">
                <div className="px-6 lg:px-0">
                    <div className="flex lg:items-center md:flex-row md:items-center lg:flex-row flex-col gap-4">
                        <div className="bg-[#E97527] w-[41px] h-[6px]"></div>
                        <h1 className="text-[#0D194F] font-semibold text-3xl lg:text-4xl">
                            Gerenciamento de Obras: Controle Total e Transparência
                        </h1>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-4">
                    <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                        Assuma o controle total do seu projeto. Nossa gestão de obras garante a execução dentro do cronograma, com otimização de custos e a tranquilidade de que sua obra está nas mãos de especialistas.
                    </p>
                </div>

                <div className="px-6 lg:px-0 mt-12 grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-[#0D194F] font-semibold text-2xl mb-4">
                            Por Que Escolher Nosso Gerenciamento?
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-[#E97527] mr-3 text-xl leading-none">•</span>
                                <div>
                                    <strong className="font-medium">Otimização de Custos:</strong> Negociação com fornecedores e controle rigoroso de insumos para evitar desperdícios e estourar o orçamento.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#E97527] mr-3 text-xl leading-none">•</span>
                                <div>
                                    <strong className="font-medium">Foco no Prazo:</strong> Cronogramas detalhados e acompanhamento diário para garantir a entrega da obra na data combinada.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#E97527] mr-3 text-xl leading-none">•</span>
                                <div>
                                    <strong className="font-medium">Qualidade Assegurada:</strong> Fiscalização constante dos serviços e materiais, garantindo o mais alto padrão de qualidade e conformidade técnica.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#E97527] mr-3 text-xl leading-none">•</span>
                                <div>
                                    <strong className="font-medium">Menos Preocupação:</strong> Lidamos com a burocracia, contratação de mão de obra e gestão de riscos, permitindo que você se concentre no seu negócio.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                        <h3 className="text-[#0D194F] font-semibold text-xl mb-3">
                            Estudo de Caso em Destaque
                        </h3>
                        <p className="text-gray-700 mb-4">
                            <strong>Projeto X:</strong> Gerenciamos a construção de um Centro de Distribuição Refrigerado de 15.000m² e conseguimos uma economia de 12% no custo final e a entrega 30 dias antes do previsto.
                        </p>
                        <Image
                            src="/img/obras_publicas/obras_publicas_6.jpg"
                            alt="Foto de um projeto sendo gerenciado por profissionais"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-md object-cover"
                        />
                        <a href="/galeria/centro-distribuicao-refrigerado" className="mt-3 inline-block text-[#E97527] hover:underline">
                            Ver detalhes do Projeto →
                        </a>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-16">
                    <h2 className="text-[#0D194F] font-semibold text-3xl mb-8 text-center">
                        Nosso Processo em 4 Etapas
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
                            <span className="text-4xl font-bold text-[#E97527]">1</span>
                            <h3 className="text-lg font-semibold mt-2 text-[#0D194F]">Planejamento</h3>
                            <p className="text-sm text-gray-600 mt-2">Definimos escopo, cronograma, orçamento detalhado e a matriz de riscos.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
                            <span className="text-4xl font-bold text-[#E97527]">2</span>
                            <h3 className="text-lg font-semibold mt-2 text-[#0D194F]">Execução e Logística</h3>
                            <p className="text-sm text-gray-600 mt-2">Coordenação de equipes, gestão de compras e garantia de qualidade no canteiro.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
                            <span className="text-4xl font-bold text-[#E97527]">3</span>
                            <h3 className="text-lg font-semibold mt-2 text-[#0D194F]">Monitoramento e Controle</h3>
                            <p className="text-sm text-gray-600 mt-2">Relatórios de progresso transparentes e reuniões de alinhamento constante.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
                            <span className="text-4xl font-bold text-[#E97527]">4</span>
                            <h3 className="text-lg font-semibold mt-2 text-[#0D194F]">Entrega Final</h3>
                            <p className="text-sm text-gray-600 mt-2">Vistoria final, entrega de documentação técnica e suporte pós-obra.</p>
                        </div>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-16 text-center bg-[#0d194f] p-10 rounded-lg">
                    <h2 className="text-white text-3xl font-bold mb-3">
                        Garanta a Eficiência da Sua Próxima Obra.
                    </h2>
                    <p className="text-blue-200 mb-6">
                        Evite imprevistos e custos adicionais. Fale com nossos gerentes.
                    </p>
                    <a
                        href="/empresa/fale_conosco"
                        className="inline-block bg-[#E97527] text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300"
                    >
                        Solicitar Orçamento Agora
                    </a>
                </div>

            </div>
        </section>
    )
}