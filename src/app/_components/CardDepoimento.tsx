import Image from "next/image"
import { CardDepoimentoProps } from "../lib/interface"

export const CardDepoimento = ({ alt, src, subTitle, text, title }: CardDepoimentoProps) => {
    return (
        <div className="w-[360px] flex-shrink-0 h-[383px] bg-white border border-[#C6C6C6] rounded-[20px]">
            <div className="p-8">
                <p className="text-[18px] h-[220px] lg:h-[230px]">{text}</p>
            </div>
            <div className="border-t-4 border-[#F3F3F3]">
                <div className="ml-6 mt-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#F3F3F3] w-[48px] h-[48px] rounded-full flex items-center justify-center">
                            <Image
                                src={src}
                                alt={alt}
                                width={30}
                                height={21}
                            />
                        </div>
                        <div>
                            <h4 className="text-[#1E1E1E] font-semibold text-[18px]">{title}</h4>
                            <p className="text-[#1E1E1E] font-normal text-[12px]">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}