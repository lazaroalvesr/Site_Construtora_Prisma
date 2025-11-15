"use client"

import { ArrowUp, MapPin, Minus, Phone, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, Key, useEffect, useState } from "react"
import { LiFooter } from "./LiFooter"
import ChatBot from "./chatbot"

export const Footer = () => {
    const [anoAtual, setAnoAtual] = useState("")
    const [openSection, setOpenSection] = useState({
        projetos: false,
        servicos: false,
        empresa: false,
        politicas: false,
    });

    useEffect(() => {
        const data = new Date();
        setAnoAtual(data.getFullYear().toString())
    }, [])

    const toggleSection = (sectionName: 'projetos' | 'servicos' | 'empresa' | 'politicas') => {
        setOpenSection(prev => ({
            ...prev,
            [sectionName]: !prev[sectionName]
        }));
    };

    const renderSection = (title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, sectionKey: 'projetos' | 'servicos' | 'empresa' | 'politicas', links: any[]) => (
        <div className="lg:w-[185px] pt-4 lg:pt-0 border-b md:border-b-0 border-[#DFDFDF]">

            <button
                className="flex justify-between items-center w-full focus:outline-none py-2 lg:py-0 md:cursor-default"
                onClick={() => toggleSection(sectionKey)}
            >
                <h4 className="text-[#170C0C] text-nowrap font-medium text-[17px]">{title}</h4>

                <span className="md:hidden transform transition-transform duration-300">
                    {openSection[sectionKey] ? <Minus /> : <Plus />}
                </span>
            </button>

            <div
                className={`transition-all duration-300 ease-in-out // Adiciona a transição ao grid
                        ${openSection[sectionKey] ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'} // Alterna entre altura 1fr e 0fr
                        md:grid-rows-[1fr] // Garante que esteja sempre aberto no desktop
            `}
            >
                <ul
                    className="overflow-hidden pt-3 flex flex-col gap-2 text-[16px] text-[#626262]" // O overflow-hidden vai para aqui dentro
                >
                    {links.map((link: { href: string; text: string }, index: Key | null | undefined) => (
                        <LiFooter key={index} href={link.href} text={link.text} />
                    ))}
                </ul>
            </div>
        </div>
    );

    const projetosLinks = [
        { href: "/galeria/projeto_residenciais", text: "Casas residenciais" },
        { href: "/galeria/projeto_sob_medida", text: "Projeto sob Medida" },
        { href: "/galeria/obras_publicas", text: "Obras públicas e Infraestrutura" },
    ];

    const servicosLinks = [
        { href: "/servicos/gerenciamento_de_obras", text: "Gerenciamento de Obras" },
        { href: "/servicos/reforma_ampliacao", text: "Reforma e Ampliação" },
        { href: "/servicos/construcao_comercial", text: "Construção comercial" },
    ];

    const empresaLinks = [
        { href: "/empresa/quem_somos", text: "Quem Somos" },
        { href: "/#nossotime", text: "Nossa Equipe" },
        { href: "/empresa/trabalhe_conosco", text: "Carreira/Trabalhe Conosco" },
        { href: "/empresa/fale_conosco", text: "Fale conosco" },
    ];

    const politicasLinks = [
        { href: "/politica_e_privacidade", text: "Politica de Privacidade" },
        { href: "/termos_de_uso", text: "Termos de Uso" },
    ];


    return (
        <footer className="lg:mt-[90px] mt-[64px] md:mt-[70px] border-t border-[#DFDFDF] relative px-5 lg:px-0 md:px-7 " id="contato">
            <div className="max-w-6xl m-auto lg:mt-[50px] mt-[25px]">
                <div className="flex gap-4 justify-between lg:flex-row lg:w-full md:flex-row flex-wrap flex-col border-b border-[#DFDFDF] pb-5">

                    <div className="lg:w-[230px] md:w-[250px] flex flex-col">
                        <div className="flex lg:gap-4 gap-2 flex-col">
                            <Image
                                src="/img/Logo_empresa.png"
                                alt="Logo da Prisma Construtora"
                                width={90}
                                height={90}
                            />
                            <p className="text-[#0D194F] font-medium lg:text-[20px] text-lg">
                                PRISMA CONSTRUTORA
                            </p>
                        </div>
                        <p className="text-[#848484] text-[14px] font-medium lg:w-[245px] md:w-fit mt-2">
                            A Prisma Construtora é referência em execução de projetos residenciais, comerciais e públicos. Garantia de prazo e qualidade.
                        </p>
                    </div>

                    {renderSection("Projetos", "projetos", projetosLinks)}

                    {renderSection("Serviços", "servicos", servicosLinks)}

                    {renderSection("Empresa", "empresa", empresaLinks)}

                    {renderSection("Políticas & Segurança", "politicas", politicasLinks)}

                    <div className="pt-3 flex flex-col gap-4">
                        <div className="space-y-2 md:w-[400px] mb-6 p-4 bg-white rounded-lg border border-[#DFDFDF]">
                            <div className="flex items-center gap-2 text-gray-700">
                                <MapPin className="w-4 h-4 text-[#E97527]" />
                                <span className="text-sm font-medium">Rua Professora Maria Izelva, 110 - Centro</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <span className="text-sm ml-6">Pedra Azul - MG, 39970-000</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 pb-3">
                                <Phone className="w-4 h-4 text-[#E97527]" />
                                <Link
                                    href="tel:+9999-9999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium hover:underline">(33) 9999-9999</Link>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Image
                                    src="/icons/whatsapp.png"
                                    alt="Icone Whatsapp"
                                    width={18}
                                    height={18}
                                />
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://api.whatsapp.com/send?phone=99999999&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20internet%20dispon%C3%ADveis."
                                    className="text-sm font-medium hover:underline">99999999</Link>
                            </div>
                        </div>
                        <div className="flex gap-4 -mt-4">
                            <Link
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[45px] h-[45px] rounded-full bg-[#E97527] items-center flex justify-center">
                                <Image
                                    src="/icons/facebook.png"
                                    alt="Icone Facebook"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[45px] h-[45px] rounded-full bg-[#E97527] items-center flex justify-center">
                                <Image
                                    src="/icons/instagram.svg"
                                    alt="Icone Instagram"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </div>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        aria-label="Voltar ao topo"
                        className="bg-white absolute lg:right-48 right-8 bottom-[140px] md:bottom-56 lg:bottom-56 rounded-md w-12 h-12 border border-[#DFDFDF] flex items-center justify-center cursor-pointer">
                        <ArrowUp size={24} />
                    </button>
                </div>

                <div className="py-4 flex lg:justify-between lg:flex-row md:flex-row md:text-start md:justify-between flex-col text-center items-start justify-center ">
                    <p className=" text-[13px] text-[#5B5B5B]">© {anoAtual} Prisma Construtora - Todos direitos reservados.</p>
                    <div className="lg:text-end text-start">
                        <p className="text-[13px] text-[#5B5B5B]">CNPJ 37.482.361/0001-21</p>
                        <Link
                            href="https://www.lazaroalvesr.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-[13px] text-[#5B5B5B]">
                            Desenvolvido por <span className="font-medium">Lázaro Alves R</span>
                        </Link>
                    </div>
                </div>
            </div>
            <ChatBot />
        </footer>
    )
}