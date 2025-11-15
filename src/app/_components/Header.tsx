"use client"

import Image from "next/image"
import { SubHeader } from "./SubHeader"
import { DropdownMenu } from "./DropdownMenu"
import { LiHeader } from "./LiHeader";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
    const [active, setActive] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    const projetos = [
        { title: "Projetos Residenciais", href: "/galeria/projeto_residenciais" },
        { title: "Projetos Sob Medida", href: "/galeria/projeto_sob_medida" },
        { title: "Obras Públicas e Infraestrutura", href: "/galeria/obras_publicas" },
    ];

    const servicos = [
        { title: "Gerenciamento de Obras", href: "/servicos/gerenciamento_de_obras" },
        { title: "Construção Comercial", href: "/servicos/construcao_comercial" },
        { title: "Reforma e Ampliação", href: "/servicos/reforma_ampliacao" },
    ];

    const empresa = [
        { title: "Quem Somos", href: "/empresa/quem_somos" },
        { title: "Nossa Equipe", href: "/#nossotime" },
        { title: "Trabalhe Conosco", href: "/empresa/trabalhe_conosco" },
        { title: "Fale Conosco", href: "/empresa/fale_conosco" },
    ];

    useEffect(() => {
        const handleTouchOutside = (event: MouseEvent | TouchEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest('button[aria-label="Botão Menu Mobile"]')
            ) {
                setActive(false)
            }
        }

        if (active) {
            const isTouchDevice = "ontouchstart" in window
            if (isTouchDevice) {
                document.addEventListener("touchstart", handleTouchOutside)
            } else {
                document.addEventListener("mousedown", handleTouchOutside)
            }
        }

        return () => {
            document.removeEventListener("touchstart", handleTouchOutside)
            document.removeEventListener("mousedown", handleTouchOutside)
        }
    }, [active])


    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [active])

    const handleDropdownToggle = (dropdownName: string) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
    }

    return (
        <div>
            <SubHeader />
            <header className="border-b border-[#C6C6C6] w-full h-[90px] flex">
                <div className="max-w-6xl m-auto flex justify-between w-full items-center px-4">
                    <Link href="/">
                        <div className="flex lg:gap-4 gap-2 items-center">
                            <Image
                                src="/img/Logo_empresa.png"
                                alt="Logo da Prisma Construtora"
                                width={90}
                                height={90}
                            />
                            <p className="text-[#0D194F] font-medium lg:text-[27px] text-lg">
                                PRISMA CONSTRUTORA
                            </p>
                        </div>
                    </Link>

                    <nav
                        ref={menuRef}
                        className={`lg:static lg:shadow-none lg:bg-transparent lg:w-auto lg:h-auto
                        fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl z-50 
                        transform transition-transform duration-300 ease-out
                        ${active ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}>
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 lg:hidden">
                            <h2 className="text-xl font-semibold text-[#0D194F]">Menu</h2>
                            <button
                                onClick={() => setActive(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        <ul className={`flex gap-4 
                            flex-col pt-4 px-4 space-y-2 lg:items-center lg:flex-row lg:space-y-0 lg:pt-0 lg:px-0`}>
                            <div className="lg:contents p-3 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none transition-colors">
                                <DropdownMenu
                                    mainTitle="Projetos"
                                    subItems={projetos}
                                    isOpen={openDropdown === 'Projetos'}
                                    onToggle={() => handleDropdownToggle('Projetos')} />
                            </div>
                            <div className="lg:contents p-3 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none transition-colors">
                                <DropdownMenu
                                    mainTitle="Serviços"
                                    subItems={servicos}
                                    isOpen={openDropdown === 'servicos'}
                                    onToggle={() => handleDropdownToggle('servicos')}
                                />
                            </div>
                            <div className="lg:contents p-3 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none transition-colors">
                                <DropdownMenu
                                    mainTitle="Empresa"
                                    subItems={empresa}
                                    isOpen={openDropdown === 'Empresa'}
                                    onToggle={() => handleDropdownToggle('Empresa')}
                                />
                            </div>
                            <div className="lg:contents p-3 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none transition-colors">
                                <LiHeader text="Blog" href="/blog" />
                            </div>
                        </ul>

                        <div className="absolute bottom-6 left-6 right-6 lg:hidden space-y-3">
                            <button className="w-full bg-[#E97527] text-white px-4 py-3 rounded-[50px] font-medium hover:bg-[#d66620] transition-colors">
                                Solicite um Orçamento
                            </button>

                            <div className="bg-gradient-to-r from-[#0D194F] to-[#1a2d6b] rounded-xl p-4 text-white">
                                <p className="text-sm font-medium">Prisma Construtora</p>
                                <p className="text-xs opacity-90">Construindo sonhos com qualidade</p>
                            </div>
                        </div>
                    </nav>

                    <button className="hidden lg:block bg-[#E97527] text-gray-50 px-4 py-3 rounded-[50px] cursor-pointer hover:bg-[#d66620] transition-colors">
                        Solicite um Orçamento
                    </button>

                    <button
                        onClick={() => setActive(!active)}
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Menu className="w-6 h-6 text-[#0D194F]" />
                    </button>
                </div>

                {active && (
                    <div
                        className="fixed inset-0 bg-black/10 bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setActive(false)}
                    />
                )}
            </header>
        </div>
    )
}