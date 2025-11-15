import { CardDepoimento } from "./CardDepoimento"
import { SlideDepoimento } from "./SlideDepoimento"

export const Depoimentos = () => {
    return (
        <div>
            <section className="max-w-6xl m-auto mt-[73px]">
                <div className="px-6 lg:px-0">
                    <div className="flex lg:items-center md:flex-row md:items-center lg:flex-row flex-col gap-4">
                        <div className="bg-[#E97527] w-[41px] h-[6px]"></div>
                        <h4 className="text-[#0D194F] font-medium lg:text-[20px]">Depoimentos</h4>
                    </div>
                    <div className="lg:w-[710px] pt-[20px]">
                        <h1 className="text-[#0D194F] font-semibold lg:text-[40px] md:text-[32px] text-[23px]">A Confiança Construída por <span className="text-[#E97527]">Nossos Clientes.</span></h1>
                    </div>
                    <p className="text-[#0D194F] font-medium italic lg:text-[18px] pt-[20px]">“A confiança da Prisma, validada por quem já construiu o futuro conosco.”</p>
                </div>
            </section>
            <div className="ml-4 lg:ml-0 md:ml-0 items-start block lg:items-center lg:flex lg:justify-center">
                <SlideDepoimento />
            </div>
        </div>
    )
}