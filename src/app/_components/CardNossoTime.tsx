import Image from "next/image"
import { CardNossoTimeProps } from "../lib/interface"

export const CardNossoTime = ({ alt, src, subTitle, title }: CardNossoTimeProps) => {
    return (
        <div className="relative">
            <Image
                src={src}
                alt={alt}
                width={200}
                height={470}
                className="w-[380px] h-[470px] object-cover rounded-2xl"
            />
            <div className="bg-[#0D194F] text-gray-50 lg:w-[334px] w-[300px] text-center flex items-center justify-center flex-col h-[92px] absolute bottom-3 left-5 rounded-lg">
                <h5 className="text-gray-50 font-semibold text-[18px]">{title}</h5>
                <h6 className="text-gray-50 font-normal text-[14px]">{subTitle}</h6>
            </div>
        </div>
    )
}