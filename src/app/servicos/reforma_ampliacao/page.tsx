import { CheckCheck } from "lucide-react";
import Image from "next/image";

export default function ReformaAmpliacao() {
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
                            Reforma e Ampliação: Transformando e Valorizando Seu Espaço
                        </h1>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-4">
                    <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                        Seja para renovar um ambiente ou expandir sua área útil, oferecemos soluções completas e personalizadas. Gerenciamos sua obra para garantir **prazos curtos, orçamento controlado e o mínimo de transtorno**.
                    </p>
                </div>

                <div className="px-6 lg:px-0 mt-12 grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
                        <h2 className="text-[#0D194F] font-semibold text-2xl mb-4 flex items-center">
                            <CheckCheck className="w-6 h-6 text-[#E97527] mr-3" />
                            Reformas Residenciais
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Transforme sua casa ou apartamento sem estresse. Entregamos o projeto dos seus sonhos, focando na personalização e no conforto da sua família.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <span className="text-[#E97527] mr-2">•</span> Cozinhas e Banheiros Modernos
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#E97527] mr-2">•</span> Ampliação de Salas e Áreas Gourmet
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#E97527] mr-2">•</span> Otimização de Layout e Fluidez
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
                        <h2 className="text-[#0D194F] font-semibold text-2xl mb-4 flex items-center">
                            <CheckCheck className="w-6 h-6 text-[#E97527] mr-3" />
                            Reformas Comerciais e Lojas
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Reformas rápidas e eficientes para minimizar o tempo de inatividade do seu negócio, garantindo que o espaço atraia e retenha clientes.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <span className="text-[#E97527] mr-2">•</span> Atualização de Fachadas e Vitrines
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#E97527] mr-2">•</span> Readequação de Layouts para Novos Negócios
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#E97527] mr-2">•</span> Instalações Elétricas e Hidráulicas Robustas
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-16 text-center">
                    <h2 className="text-[#0D194F] font-semibold text-3xl mb-8">
                        Veja o Poder da Transformação
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="/img/antes_cozinha.jpg"
                                alt="Foto do projeto antes da reforma"
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/15 bg-opacity-40 flex items-center justify-center">
                                <span className="text-white text-2xl font-bold p-2 bg-[#E97527] rounded-lg">ANTES</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-90">
                                <p className="text-[#0D194F] font-semibold text-sm">Cozinha Residencial</p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="/img/cozinha_reformada.jpg"
                                alt="Foto do projeto depois da reforma"
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/15 bg-opacity-40 flex items-center justify-center">
                                <span className="text-white text-2xl font-bold p-2 bg-[#E97527] rounded-lg">DEPOIS</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-90">
                                <p className="text-[#0D194F] font-semibold text-sm">Cozinha Residencial</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center bg-gray-100 p-6 rounded-lg shadow-inner">
                            <h3 className="text-[#0D194F] font-semibold text-xl mb-3">
                                Mais Transformações
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Inspire-se com nossa galeria completa de reformas.
                            </p>
                            <a
                                href="/galeria/projeto_residenciais"
                                className="inline-block bg-[#E97527] text-white text-md font-semibold py-2 px-6 rounded-full  transition duration-300"
                            >
                                Ver Portfólio
                            </a>
                        </div>
                    </div>
                </div>

                <div className="px-6 lg:px-0 mt-16 text-center bg-[#0d194f] p-10 rounded-lg">
                    <h2 className="text-white text-3xl font-bold mb-3">
                        Pronto para Renovar ou Ampliar?
                    </h2>
                    <p className="text-orange-100 mb-6">
                        Fale com nossa equipe e garanta sua obra dentro do prazo e orçamento.
                    </p>
                    <a
                        href="/empresa/fale_conosco"
                        className="inline-block bg-[#E97527] text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300"
                    >
                        Solicitar Orçamento de Reforma
                    </a>
                </div>

            </div>
        </section>
    )
}