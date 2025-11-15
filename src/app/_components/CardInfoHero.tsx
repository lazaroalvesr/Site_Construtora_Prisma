import Image from "next/image"

export const CardInfoHero = () => {
    return (
        <div className="bg-[#0D194F] lg:flex hidden justify-center border-[#E97527] border-2 w-[277px] h-[458px] rounded-[20px]">
            <div className="flex flex-col items-center pt-8 gap-8">
                <div>
                    <div className="flex items-center gap-3">
                        <Image
                            src="/icons/predio.png"
                            alt="Icone de uma régua"
                            width={28}
                            height={28}
                            className="w-[28px] h-[28px]"
                        />
                        <h5 className="font-medium text-[25px] text-[#F3F3F3]">640+</h5>
                    </div>
                    <h4 className="text-[18px] font-light text-[#F3F3F3]">Projetos concluidos</h4>
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <Image
                            src="/icons/trofeu.png"
                            alt="Icone Troféu"
                            width={28}
                            height={28}
                            className="w-[28px] h-[28px]"
                        />
                        <h5 className="font-medium text-[25px] text-[#F3F3F3]">25+</h5>
                    </div>
                    <h4 className="text-[18px] font-light text-[#F3F3F3]">Anos de Experiência</h4>
                </div>
                <div className="w-[180px]">
                    <div className="flex items-center gap-3 w-full">
                        <Image
                            src="/icons/aperto-mao.png"
                            alt="Icone aperto de mão"
                            width={28}
                            height={28}
                            className="w-[28px] h-[28px]"
                        />
                        <h5 className="font-medium text-[25px] text-[#F3F3F3]">340+</h5>
                    </div>
                    <h4 className="text-[18px] font-light text-[#F3F3F3]">Clientes felizes</h4>
                </div>
                <button className="w-52 bg-[#E97527] mt-8 text-[15px] text-white px-2 py-3 rounded-[50px] font-medium hover:bg-[#d66620] transition-colors cursor-pointer">
                    Solicite um Orçamento
                </button>
            </div>
        </div>
    )
}