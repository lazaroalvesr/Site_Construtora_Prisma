import Link from "next/link"
import { LiFooterProps } from "../lib/interface";

export const LiFooter = ({ text, href = "" }: LiFooterProps) => {
    const commonClasses = "text-[16px] text-[#626262] hover:text-[#E97527] transition-all duration-300 ease-in-out cursor-pointer";

    return (
        <Link href={href} className={commonClasses}>
            {text}
        </Link>
    );
};
