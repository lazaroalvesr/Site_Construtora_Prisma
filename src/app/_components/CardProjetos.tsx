import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CardProjetoProps } from "../lib/interface"

export const CardProjetos = ({ alt, href, src, subTitle, title }: CardProjetoProps) => {
    return (
        <div className="lg:w-[380px] lg:h-[470px] relative overflow-hidden">

            <Image
                src={src}
                alt={alt}
                width={380}
                height={380}
                className="w-full h-auto object-cover 
                           [clip-path:polygon(0_30%,30%_0,100%_0,100%_100%,0_100%)] 
                           relative z-10"
            />

            <div className="flex flex-col pl-[20px] pt-[28px] pr-[20px] bg-white lg:pb-24 pb-8 [clip-path:polygon(0_0,100%_0,100%_40%,70%_100%,0_100%)]">
                <h5 className="font-medium text-[20px]  w-full text-nowrap">{title}</h5>
                <span className="font-light lg:text-[18px] pt-[12px] text-base">{subTitle}</span>

                <Link
                    href={href}
                    className="flex items-center gap-3 text-[#E97527] font-medium pt-[32px] text-[20px] group transition duration-300"                >
                    Ver detalhes

                    <MoveRight
                        color="#E97527"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
            </div>
            <div className="bg-[#0D194F] lg:w-[310px] w-[240px] md:w-[255px] h-[5px] bottom-0 absolute"></div>
            <div className="bg-[#0D194F] lg:w-[126px] w-[163px] h-[5px] lg:bottom-12 bottom-15 -right-7 lg:-right-7 absolute md:rotate-z-132 md:-right-7 md:w-[180px] rotate-z-130 lg:rotate-z-125"></div>
        </div>
    )
}