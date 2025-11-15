"use client"

import Image from "next/image"
import { CardDepoimento } from "./CardDepoimento"
import { CardDepoimentoProps, CardNossoTimeProps } from "../lib/interface"
import { useEffect, useRef, useState } from "react"
import { CardNossoTime } from "./CardNossoTime"

const nossoTime: CardNossoTimeProps[] = [
    {
        src: "/img/engenheira.png",
        alt: "Foto de uma engenheira",
        title: "Eng. Ana Lúcia",
        subTitle: "Diretora Técnica"
    },
    {
        src: "/img/pedreiro.png",
        alt: "Foto de um pedreiro verificando a obra",
        title: "Carlos Eduardo",
        subTitle: "Gerente de Obras"
    },
    {
        src: "/img/gerente.png",
        alt: "Foto de um Gerente de obras",
        title: "Roberto Mendes",
        subTitle: "Gerente de Projetos e Pós-Venda"
    },
    {
        src: "/img/arquiteta.jpg",
        alt: "Foto de uma arquiteta",
        title: "Cláudia Vaz",
        subTitle: "Coordenadora de Projetos e Vendas"
    },
    {
        src: "/img/administrador.jpg",
        alt: "Foto de um administrador",
        title: "Mário Fernandes",
        subTitle: "Diretor Financeiro e Administrativo"
    }
]

export const SlideNossoTime = () => {

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
        <div className="flex flex-col mb-12 items-center">
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
                        className="flex md:pt-20 pt-10 items-stretch lg:gap-[20px] gap-5 overflow-x-auto scrollbar-hide pb-6 md:px-4 px-4 scroll-smooth no-scrollbar snap-x snap-mandatory">
                        {nossoTime.map((item, index) => (
                            <div key={index} className="snap-start shrink-0 w-[calc(100vw-48px)] md:w-auto">
                                <CardNossoTime {...item} />
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