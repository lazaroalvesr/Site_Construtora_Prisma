'use client';

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectDetailDataProps } from "@/app/lib/interface";

interface ProjectDetailClientProps {
    project: ProjectDetailDataProps;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {

    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const fullImageList = project.images || [];
    const mainImage = fullImageList[0];

    const nextImage = () => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((selectedImageIndex + 1) % fullImageList.length);
    };

    const prevImage = () => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((selectedImageIndex - 1 + fullImageList.length) % fullImageList.length);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") setSelectedImageIndex(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImageIndex]);


    return (
        <article className="max-w-6xl m-auto py-16 px-6 lg:px-0">

            <header className="mb-12">
                <div className="flex lg:items-center md:flex-row md:items-center lg:flex-row flex-col gap-4">
                    <div className="bg-[#E97527] w-[41px] h-[6px]"></div>
                    <h1 className="text-[#0D194F] font-semibold text-3xl lg:text-4xl">
                        Projeto: {project.text}
                    </h1>
                </div>
            </header>

            {fullImageList.length > 0 && (
                <div
                    className="mb-12 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                    onClick={() => setSelectedImageIndex(0)}
                >
                    <Image
                        src={mainImage.src}
                        alt={mainImage.alt}
                        width={1200}
                        height={600}
                        className="w-full object-cover h-[50vh]"
                        priority
                    />
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-[#0D194F] font-bold text-3xl mb-4">O Desafio do Cliente</h2>
                        <p
                            className="text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: project.challengeDescription || "Descrição do desafio pendente." }}
                        />
                    </section>
                </div>

                <aside className="lg:col-span-1 p-6 bg-gray-50 rounded-xl shadow-lg h-fit">
                    <h3 className="text-[#0D194F] font-extrabold text-2xl mb-6">Fatos Rápidos</h3>
                    <div className="space-y-2">
                        <p className="text-gray-700"><strong>Área:</strong> {project.tamanhoDaObra ? project.tamanhoDaObra : "N/A"}</p>
                        <p className="text-gray-700"><strong>Conclusão:</strong> {project.anoDaConstrucao ? project.anoDaConstrucao : "N/A"}</p>
                        <p className="text-gray-700"><strong>Duração:</strong> {project.tempoConclusaoDaObra ? project.tempoConclusaoDaObra : "N/A"}</p>
                    </div>
                </aside>
            </div>

            {fullImageList.length > 1 && (
                <section className="mt-20">
                    <h2 className="text-[#0D194F] font-bold text-3xl mb-8">Galeria Completa</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {fullImageList.slice(1).map((image, index) => {
                            const realIndex = index + 1;
                            return (
                                <div
                                    key={index}
                                    className="relative aspect-video overflow-hidden rounded-lg shadow-xl cursor-pointer"
                                    onClick={() => setSelectedImageIndex(realIndex)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            <footer className="mt-16">
                <Link
                    href={`/galeria/${project.section}`}
                    className="text-[#0D194F] font-semibold hover:text-[#E97527] transition duration-200 text-lg">
                    ← Voltar para a galeria
                </Link>
            </footer>

            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100]"
                    onClick={() => setSelectedImageIndex(null)}
                >
                    <button
                        className="absolute top-8 cursor-pointer right-10 text-white p-3 bg-gray-600/70 rounded-full hover:bg-gray-600 z-[101]"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndex(null);
                        }}
                    >
                        <X size={24} />
                    </button>

                    <div className="relative flex items-center justify-center flex-col max-w-[90%] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={fullImageList[selectedImageIndex].src}
                            alt={fullImageList[selectedImageIndex].alt}
                            width={1000}
                            height={800}
                            className="max-w-[90%] max-h-[80vh] object-contain rounded-lg"
                        />
                        <p className="text-white mt-4 text-center text-lg">
                            {fullImageList[selectedImageIndex].alt}
                        </p>
                    </div>

                    {fullImageList.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute cursor-pointer left-8 text-white p-3 bg-black/40 rounded-full hover:bg-black/60 z-[101]"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute cursor-pointer right-8 text-white p-3 bg-black/40 rounded-full hover:bg-black/60 z-[101]"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </>
                    )}
                </div>
            )}
        </article>
    );
}