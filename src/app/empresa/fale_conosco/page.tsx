import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function FaleConosco() {

    const companyAddress = "Rua Exemplo, 123 - Bairro Centro, Cidade - UF";
    const companyCep = "00000-000";

    const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.2169339433003!2d-47.16982482504605!3d-22.891622937328627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b96373cec327%3A0x5f1796a19a56b030!2sArruda%20Bombas%20Hidr%C3%A1ulicas!5e1!3m2!1spt-BR!2sbr!4v1763141186287!5m2!1spt-BR!2sbr";

    return (
        <section className="pb-20">
            <div>
                <Image
                    src="/icons/regua-icon.png"
                    alt="Ícone de uma régua"
                    width={1200}
                    height={20}
                    className="w-full"
                    priority
                />
            </div>

            <div className="max-w-6xl m-auto pt-16">
                <div className="px-6 lg:px-0">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="bg-[#E97527] w-[41px] h-[6px]"></div>
                        <h1 className="text-[#0D194F] font-semibold text-3xl lg:text-4xl">
                            Fale Conosco
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                        <div className="lg:col-span-1 lg:w-[380px] space-y-8 p-6 bg-gray-50 rounded-xl shadow-inner">
                            <h2 className="text-[#0D194F] font-bold text-2xl border-b pb-2 border-gray-200">
                                Contatos Diretos
                            </h2>

                            <div className="flex items-start gap-4">
                                <span className="p-3 bg-white rounded-full text-[#E97527] shadow-md flex-shrink-0">
                                    <Phone color="#E97527" />
                                </span>
                                <div>
                                    <p className="text-lg font-semibold text-[#0D194F]">Ligue para nós</p>
                                    <p className="text-gray-600">
                                        <a href="tel:+5511999999999" className="hover:text-[#E97527] transition duration-200">(11) 99999-9999</a> (WhatsApp)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="p-3 bg-white rounded-full text-[#E97527] shadow-md flex-shrink-0">
                                    <Mail color="#E97527" />
                                </span>
                                <div>
                                    <p className="text-lg font-semibold text-[#0D194F]">Envie um E-mail</p>
                                    <p className="text-gray-600">
                                        <a href="mailto:contato@suaempresa.com.br" className="hover:text-[#E97527] transition duration-200">prismaconstrutora@email.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="p-3 bg-white rounded-full text-[#E97527] shadow-md flex-shrink-0">
                                    <MapPin color="#E97527" />
                                </span>
                                <div>
                                    <p className="text-lg font-semibold text-[#0D194F]">Endereço</p>
                                    <p className="text-gray-600">
                                        Rua Exemplo, 123 - Bairro Centro, Cidade - UF
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="lg:col-span-2 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-[#0D194F] font-bold text-2xl mb-6">
                                Preencha o Formulário
                            </h2>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        placeholder="Seu Nome *"
                                        aria-label="Seu Nome"
                                        className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E97527] transition duration-200 shadow-sm"
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Seu E-mail *"
                                        aria-label="Seu E-mail"
                                        className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E97527] transition duration-200 shadow-sm"
                                        required
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="Assunto (Orçamento, Dúvida, etc.)"
                                    aria-label="Assunto da Mensagem"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E97527] transition duration-200 shadow-sm"
                                />

                                <textarea
                                    placeholder="Sua Mensagem... *"
                                    aria-label="Conteúdo da Mensagem"
                                    rows={6}
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E97527] transition duration-200 shadow-sm resize-none"
                                    required
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-10 bg-[#E97527] text-white font-bold py-4 rounded-lg cursor-pointer transition duration-300 ease-in-out shadow-lg"
                                >
                                    Enviar Mensagem Agora
                                </button>
                                <p className="text-sm text-gray-500 pt-2">* Campos obrigatórios</p>
                            </form>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-[#0D194F] font-bold text-3xl mb-6">
                            Visualize nossa localização
                        </h2>
                        <div className="h-[400px] w-full bg-gray-200 rounded-xl overflow-hidden shadow-xl">
                            <iframe
                                src={mapEmbedSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização da Empresa no Google Maps"
                            ></iframe>
                        </div>
                        <p className="mt-2 text-gray-700">
                            {companyAddress}, CEP {companyCep}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}