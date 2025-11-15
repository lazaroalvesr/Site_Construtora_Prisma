import Image from "next/image"

export const QuemSomos = () => {
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
                <div className="lg:px-0 px-4 lg:my-[73px] my-[50px] flex lg:items-center md:items-start lg:flex-row flex-col">
                    <div>
                        <div className="flex lg:items-center md:flex-row md:items-center lg:flex-row flex-col gap-4">
                            <div className="bg-[#E97527] w-[41px] h-[6px]"></div>
                            <h4 className="text-[#0D194F] font-medium lg:text-[20px]">Quem Somos</h4>
                        </div>
                        <div className="lg:w-[710px] pt-[20px]">
                            <h1 className="text-[#0D194F] font-semibold lg:text-[40px] md:text-[32px] text-[23px]">Da Fundação ao Acabamento, <span className="text-[#E97527]">com Qualidade.</span></h1>
                        </div>
                        <p className="text-[#0D194F] font-medium italic lg:text-[18px] pt-[20px]">“Cada obra é única,  nosso compromisso é o mesmo”</p>
                        <div className="mt-[20px]">
                            <Image
                                src="/img/membros_equipe.png"
                                alt="Foto Membros da equipe de construção comemorando."
                                width={879}
                                height={458}
                                className="lg:w-[676px] lg:h-[339px]"
                            />
                        </div>
                    </div>
                    <div className="bg-[#0D194F] flex justify-center  border-[#E97527] border-2 mt-4 lg:w-[480px] lg:h-[578px] md:h-[400px] h-[490px] rounded-[20px]">
                        <div className="mt-[40px] flex flex-col lg:items-start lg:w-[358px]">
                            <h4 className="text-[#E97527] font-bold pl-6 lg:pl-0 lg:text-[23px]">Nossa Cultura de Excelência.</h4>
                            <div className="lg:px-0 px-6">
                                <div className=" mt-[20px] flex flex-col gap-2">
                                    <h5 className="text-[#F3F3F3] font-bold">Compromisso com o Cliente: </h5>
                                    <p className="lg:text-[17px] text-[14px] font-light text-gray-300">Foco em transparência e comunicação ágil em todas as etapas.</p>
                                </div>
                                <div className=" mt-[20px] flex flex-col gap-2">
                                    <h5 className="text-[#F3F3F3] font-bold">Rigor Técnico: </h5>
                                    <p className="lg:text-[17px] text-[14px] font-light text-gray-300">Equipe certificada e processos que garantem durabilidade e segurança..</p>
                                </div>
                                <div className=" mt-[20px] flex flex-col gap-2">
                                    <h5 className="text-[#F3F3F3] font-bold">Visão de Futuro: </h5>
                                    <p className="lg:text-[17px] text-[14px] font-light text-gray-300">Uso de novas tecnologias e soluções sustentáveis em nossos projetos.</p>
                                </div>
                                <div className=" mt-[20px] flex flex-col gap-2">
                                    <h5 className="text-[#F3F3F3] font-bold">Paixão pela Construção: </h5>
                                    <p className="lg:text-[17px] text-[14px] font-light text-gray-300">Nossa equipe é o alicerce para transformar o seu projeto em realidade.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src="/icons/regua-icon.png"
                alt="Icone de uma régua"
                width={1200}
                height={20}
                className="w-full rotate-180"
            />
        </section>
    )
}