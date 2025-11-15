"use client"

import Image from "next/image"
import { CardDepoimento } from "./CardDepoimento"
import { CardDepoimentoProps } from "../lib/interface"
import { useEffect, useRef, useState } from "react"

const depoimentos: CardDepoimentoProps[] = [
    {
        text: "Contratar a Prisma foi sinônimo de zero estresse. Minha casa foi entregue no prazo exato, o acabamento superou as expectativas, e a comunicação foi totalmente transparente. Recomendo de olhos fechados!",
        src: "/icons/user.png",
        alt: "Icone capacete de obra",
        title: "João Carlos Abreu",
        subTitle: "Proprietário, Condomínio Morada Nobre"
    },
    {
        text: "O projeto era ambicioso e exigia muita coordenação. A Prisma demonstrou rigor total na engenharia e na execução. A obra foi concluída no prazo contratual e o resultado final foi de altíssima qualidade.",
        src: "/icons/capacete-obra.png",
        alt: "Icone capacete de obra",
        title: "Eng. Ricardo Mendes",
        subTitle: "Gerente de Projetos, Rede Supermercados X"
    },
    {
        text: "A Prisma Construtora demonstrou um rigor técnico exemplar em todas as etapas da licitação e execução da obra. O comprometimento com a transparência e a segurança validou nossa escolha. Um parceiro de confiança.",
        src: "/icons/prancheta.png",
        alt: "Icone capacete de obra",
        title: "Eng. Roberto Silva",
        subTitle: "Secretário de Obras, Prefeitura de São Paulo"
    },
    {
        text: "A Prisma Construtora transformou o projeto no prazo e com um padrão de qualidade superior ao esperado. A comunicação clara e a gestão de imprevistos foram cruciais. Profissionalismo de ponta a ponta.",
        src: "/icons/prancheta.png",
        alt: "Icone capacete de obra",
        title: "Dra. Ana Paula Costa",
        subTitle: "Diretora de Planejamento e Infraestrutura, Grupo Varejo Max"
    }
]

export const SlideDepoimento = () => {

    const scrollRef = useRef<HTMLDivElement | null>(null)

    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const updateScrollButtons = () => {
        const el = scrollRef.current
        if (!el) return

        setCanScrollLeft(el.scrollLeft > 0)
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5)
    }

    const getScrollAmount = () => {
        if (typeof window !== 'undefined') {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                return window.innerWidth - 32;
            }
            return 400;
        }
        return 400;
    }

    const scroll = (direction: "left" | "right") => {
        const el = scrollRef.current
        if (!el) return

        const scrollAmount = getScrollAmount();
        const newScrollPosition =
            direction === "left"
                ? el.scrollLeft - scrollAmount
                : el.scrollLeft + scrollAmount

        el.scrollTo({ left: newScrollPosition, behavior: "smooth" })
        setTimeout(updateScrollButtons, 300)
    }

    useEffect(() => {
        updateScrollButtons()
        const el = scrollRef.current
        if (!el) return

        el.addEventListener("scroll", updateScrollButtons)
        window.addEventListener("resize", updateScrollButtons)
        return () => {
            el.removeEventListener("scroll", updateScrollButtons)
            window.removeEventListener("resize", updateScrollButtons)
        }
    }, [])

    return (
        <div className="flex flex-col items-center px-2">
            <div className="flex items-center w-full">
                <button
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    className={`hidden md:flex bg-[#E97527] lg:w-[57px] lg:h-[54px] md:w-[50px] md:h-[50px] rounded-[15px] justify-center items-center transition-opacity ${canScrollLeft ? "opacity-100 cursor-pointer" : "opacity-30 cursor-not-allowed"
                        }`}
                    aria-label="Scroll para esquerda">
                    <Image
                        src="/icons/arrow.svg"
                        alt="Seta para a esquerda"
                        width={24}
                        height={24}
                        className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px]"
                    />
                </button>

                <div className="lg:max-w-[1190px] lg:mx-4 md:mx-3 w-full -mt-6 lg:-mt-12 overflow-hidden">
                    <div
                        ref={scrollRef}
                        className="flex md:pt-20 pt-10 items-stretch lg:gap-[20px] gap-5 overflow-x-auto  scrollbar-hide pb-6 md:px-4 px-4 scroll-smooth no-scrollbar snap-x snap-mandatory">
                        {depoimentos.map((item, index) => (
                            <div key={index} className="snap-start shrink-0 w-[calc(100vw-48px)] md:w-auto">
                                <CardDepoimento {...item} />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className={`hidden md:flex bg-[#E97527] md:mr-2 lg:w-[57px] lg:h-[54px] md:w-[50px] md:h-[50px] rounded-[15px] justify-center items-center transition-opacity ${canScrollRight ? "opacity-100 cursor-pointer" : "opacity-30 cursor-not-allowed"
                        }`}
                    aria-label="Scroll para direita">
                    <Image
                        src="/icons/arrow.svg"
                        alt="Seta para a direita"
                        width={24}
                        height={24}
                        className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] rotate-180"
                    />
                </button>
            </div>

            <div className="flex md:hidden gap-4 mt-4">
                <button
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    className={`bg-[#E97527] w-[50px] h-[50px] rounded-[15px] flex justify-center items-center transition-opacity ${canScrollLeft ? "opacity-100 cursor-pointer" : "opacity-30 cursor-not-allowed"
                        }`}
                    aria-label="Scroll para esquerda">
                    <Image
                        src="/icons/arrow.svg"
                        alt="Seta para a esquerda"
                        width={20}
                        height={20}
                    />
                </button>

                <button
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className={`bg-[#E97527] w-[50px] h-[50px] rounded-[15px] flex justify-center items-center transition-opacity ${canScrollRight ? "opacity-100 cursor-pointer" : "opacity-30 cursor-not-allowed"
                        }`}
                    aria-label="Scroll para direita">
                    <Image
                        src="/icons/arrow.svg"
                        alt="Seta para a direita"
                        width={20}
                        height={20}
                        className="rotate-180"
                    />
                </button>
            </div>
        </div>
    )
}