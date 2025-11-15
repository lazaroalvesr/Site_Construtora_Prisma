"use client"

import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import { SectionPageProjetosProps } from "../lib/interface"

export const SectionPageProjetos = ({ imgProjetos }: SectionPageProjetosProps) => {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 6
    const totalPages = Math.ceil(imgProjetos.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentItems = imgProjetos.slice(startIndex, startIndex + itemsPerPage)

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const nextImage = () => {
        if (selectedIndex === null) return
        setSelectedIndex((selectedIndex + 1) % imgProjetos.length)
    }

    const prevImage = () => {
        if (selectedIndex === null) return
        setSelectedIndex((selectedIndex - 1 + imgProjetos.length) % imgProjetos.length)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return
            if (e.key === "ArrowRight") nextImage()
            if (e.key === "ArrowLeft") prevImage()
            if (e.key === "Escape") setSelectedIndex(null)
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedIndex])

    return (
        <section>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 px-4 lg:px-0 items-center justify-center gap-y-6 gap-x-12 pt-12">
                {currentItems.map((item, index) => {

                    const hasSlug = 'slug' in item && item.slug;
                    const itemIndex = startIndex + index;

                    const content = (
                        <>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={380}
                                height={322}
                                className="lg:w-[380px] lg:h-[322px] md:h-[322px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {hasSlug ? (
                                    <span className="text-white font-semibold text-lg border-b border-white hover:border-[#E97527] transition-colors duration-300">
                                        Ver Estudo de Caso
                                    </span>
                                ) : (
                                    <Plus size={50} color="white" />
                                )}
                            </div>
                        </>
                    );

                    if (hasSlug) {
                        return (
                            <Link
                                key={index}
                                href={`/galeria/${item.slug}`}
                                className="relative cursor-pointer group overflow-hidden rounded-xl"
                            >
                                {content}
                            </Link>
                        );
                    } else {
                        return (
                            <div
                                key={index}
                                className="relative cursor-pointer group overflow-hidden rounded-xl"
                                onClick={() => setSelectedIndex(itemIndex)}
                            >
                                {content}
                            </div>
                        );
                    }
                })}
            </div>

            <div className="flex items-center justify-center m-auto gap-4 mt-12">
                <button
                    className="cursor-pointer bg-gray-600 text-white px-5 py-2 border rounded-md disabled:opacity-50"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>

                <div className="flex justify-center items-center gap-3">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded-md text-lg cursor-pointer font-medium transition-all duration-300 ${currentPage === page
                                ? "bg-[#e97527] text-white shadow-lg"
                                : "bg-gray-200 hover:bg-gray-300"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    className="cursor-pointer bg-gray-600 text-white px-5 py-2 border rounded-md disabled:opacity-50"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Próxima
                </button>
            </div>

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50"
                    onClick={() => setSelectedIndex(null)}
                >
                    <button
                        className="absolute top-8 right-10 text-white text-4xl font-light cursor-pointer bg-gray-600 p-2 rounded-full"
                        onClick={(e) => {
                            e.stopPropagation()
                            setSelectedIndex(null)
                        }}
                    >
                        <X />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            prevImage()
                        }}
                        className="absolute left-8 text-white p-3 bg-black/40 rounded-full hover:bg-black/60 cursor-pointer"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <Image
                        src={imgProjetos[selectedIndex].src}
                        alt={imgProjetos[selectedIndex].alt}
                        width={1000}
                        height={800}
                        className="max-w-[90%] max-h-[80vh] object-contain rounded-lg"
                    />

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            nextImage()
                        }}
                        className="absolute right-8 text-white p-3 bg-black/40 rounded-full hover:bg-black/60 cursor-pointer"
                    >
                        <ChevronRight size={32} />
                    </button>

                    <p className="text-white mt-6 text-lg text-center max-w-[80%]">
                        {imgProjetos[selectedIndex].text}
                    </p>
                </div>
            )}
        </section>
    )
}