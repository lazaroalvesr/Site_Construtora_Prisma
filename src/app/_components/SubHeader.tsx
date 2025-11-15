import Image from "next/image"
import Link from "next/link"

export const SubHeader = () => {
    return (
        <div className="w-full lg:h-[55px] py-4 lg:py-0 flex bg-[#0D194F]">
            <div className="max-w-6xl m-auto items-center px-3 lg:px-0 justify-between w-full flex gap-4">
                <div className="flex lg:items-center lg:gap-12 gap-3 lg:flex-row flex-col md:flex-row">
                    <Link
                        href="tel:+55999999999"
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="flex gap-3 lg:items-center pl-3">
                            <Image
                                src="/icons/phone.svg"
                                alt="Icone Telefone"
                                width={18}
                                height={18}
                            />
                            <p className="font-medium  text-sm text-gray-50">(33) 9 88654827</p>
                        </div>
                    </Link>
                    <Link
                        href="mailto:contato@prismaconstrutora.com.br"
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="flex gap-3 ml-3 lg:items-center">
                            <Image
                                src="/icons/email.svg"
                                alt="Icone Email"
                                width={18}
                                height={18}
                            />
                            <p className="font-medium text-sm text-gray-50">prismaconstrutora@email.com</p>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="">
                        <div className="bg-[#E97527] w-[33px] items-center justify-center flex h-[33px] rounded-full">
                            <Image
                                src="/icons/facebook.png"
                                alt="Icone Facebook"
                                width={20}
                                height={20}
                            />
                        </div>
                    </Link>
                    <Link href="">
                        <div className="bg-[#E97527] w-[33px] items-center justify-center flex h-[33px] rounded-full">
                            <Image
                                src="/icons/instagram.svg"
                                alt="Icone Instagram"
                                width={20}
                                height={20}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}