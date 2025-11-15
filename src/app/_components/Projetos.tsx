import { CardProjetoProps } from "../lib/interface"
import { CardProjetos } from "./CardProjetos"

const projetos: CardProjetoProps[] = [
    { src: "/img/foto_casa_padrao.png", alt: "Foto de uma casa de Alto Padrão", title: "Projetos Residenciais", subTitle: "Acabamento premium e design exclusivo para o seu estilo de vida.", href: "/galeria/projeto_residenciais" },
    { src: "/img/engenheiro.png", alt: "Foto de um cara analisando o andamento da obra", title: "Projetos Sob Medida", subTitle: "Nossa engenharia ao seu lado do conceito à execução..", href: "/galeria/projeto_sob_medida" },
    { src: "/img/obra.png", alt: "Foto de uma obra", title: "Obras Públicas e Infraestrutura", subTitle: "Rigor e transparência em projetos de desenvolvimento urbano.", href: "/galeria/obras_publicas" },
]

export const Projetos = () => {

    return (
        <section className="max-w-6xl m-auto my-[73px]">
            <div className="px-6 lg:px-0">
                <div className="flex lg:items-center md:flex-row md:items-center lg:flex-row flex-col gap-4">
                    <div className="bg-[#E97527] w-[41px] h-[6px]"></div>
                    <h4 className="text-[#0D194F] font-medium lg:text-[20px]">Projetos</h4>
                </div>
                <div className="lg:w-[778px] pt-[20px]">
                    <h1 className="text-[#0D194F] font-semibold lg:text-[40px] md:text-[32px] text-[23px]">Conheça a solidez e a excelência que <span className="text-[#E97527]">aplicamos em cada m² construído.</span></h1>
                </div>
                <p className="text-[#0D194F] font-medium italic lg:text-[18px] pt-[20px]">“Nossa expertise técnica é a garantia de que o seu projeto não terá surpresas.”</p>
                <div className="mt-[28px] grid lg:grid-cols-3 gap-12 md:grid-cols-2">
                    {projetos.map((item, index) => (
                        <CardProjetos key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}