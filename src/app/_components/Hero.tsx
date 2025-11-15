import Image from "next/image"
import { CardInfoHero } from "./CardInfoHero"

export const Hero = () => {
    return (
        <section>
            <Image
                src="/icons/regua-icon.png"
                alt="Icone de uma régua"
                width={1200}
                height={20}
                className="w-full"
            />
            <div className="max-w-6xl m-auto">
                <div className="mt-[50px] lg:px-0 px-4">
                    <div className="flex lg:items-center md:flex-row md:items-center lg:flex-row flex-col gap-4">
                        <div className="bg-[#E97527] w-[41px] h-[6px]"></div>
                        <h4 className="text-[#0D194F] font-medium lg:text-[20px]">Construindo o futuro com solidez e inovação.</h4>
                    </div>
                    <div className="lg:w-[683px] pt-[20px]">
                        <h1 className="text-[#0D194F] font-semibold lg:text-[40px] md:text-[32px] text-[28px]">Do Planejamento à Entrega, o seu <span className="text-[#E97527]">Resultado é a nossa Prioridade.</span></h1>
                    </div>
                    <div className="lg:mt-[40px] mt-[20px] flex lg:items-center lg:flex-row flex-col justify-center lg:gap-12 gap-8">
                        <div>
                            <Image
                                src="/img/trabalhadores.png"
                                alt="Foto trabalhadores analisando uma planta de uma construção."
                                width={879}
                                height={458}
                                className="lg:w-[879px] lg:h-[458px]"
                            />
                        </div>
                        <CardInfoHero />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#0D194F] lg:h-[211px] h-[120px] md:h-[230px] lg:-mt-40 md:-mt-40 -mt-20"></div>
        </section>
    )
}