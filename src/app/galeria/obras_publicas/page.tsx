import { SectionPageProjetos } from "@/app/_components/SectionPageProjetos";
import ObrasPublicasProjects from "@/app/data/obrasPublicasProjects";
import Image from "next/image";

export default function ProjetosObrasPulicas() {
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
                            Obras Públicas e Infraestrutura
                        </h1>
                    </div>
                </div>

                <SectionPageProjetos imgProjetos={ObrasPublicasProjects} />
            </div>
        </section>
    )
}