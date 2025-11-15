import Link from "next/link"
import { LiHeaderProps } from "../lib/interface"

export const LiHeader = ({ text, href }: LiHeaderProps) => {
    return (
        <Link href={href}>
            <li className="text-[#0D194F] font-medium text-[17px] cursor-pointer">{text}</li>
        </Link>
    )
}