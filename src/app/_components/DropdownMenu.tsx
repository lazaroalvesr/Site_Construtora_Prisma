"use client"

import React, { useState } from "react";
import { DropdownMenuProps } from "../lib/interface";
import { ChevronDown } from 'lucide-react';

interface DropdownMenuWithControlProps extends DropdownMenuProps {
    isOpen?: boolean;
    onToggle?: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuWithControlProps> = ({
    mainTitle,
    subItems,
    isOpen: externalIsOpen,
    onToggle
}) => {
    const [hoverOpen, setHoverOpen] = useState(false);


    const toggleDropdown = () => {
        if (onToggle) {
            onToggle();
        }
    };


    return (
        <li
            className="relative"
            onMouseEnter={() => setHoverOpen(true)}
            onMouseLeave={() => setHoverOpen(false)}>
            <div
                className="text-[#0D194F] flex items-center gap-2 font-medium text-[17px] cursor-pointer transition duration-300 hover:text-blue-600 lg:py-2"
                onClick={toggleDropdown}>
                {mainTitle}
                <span
                    className={`transition-transform duration-300 ${externalIsOpen || hoverOpen ? 'rotate-180' : 'rotate-0'
                        }`}>
                    <ChevronDown className="w-4 h-4" />
                </span>
            </div>

            <ul
                className={`
                    hidden lg:block
                    ${hoverOpen ? 'lg:block' : 'lg:hidden'}
                    absolute 
                    min-w-[250px] 
                    bg-white 
                    shadow-xl 
                    -mt-2
                    rounded-md 
                    border border-gray-100 
                    z-50 
                    top-[calc(100%+8px)]
                    left-1/2
                    -translate-x-1/2
                    py-2
                `}>
                {subItems.map((item) => (
                    <li key={item.title} className="hover:bg-gray-50">
                        <a
                            href={item.href}
                            className="block px-4 py-3 text-gray-700 text-[15px] transition duration-200 whitespace-nowrap">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>

            <ul
                className={`
                    lg:hidden
                    overflow-hidden
                    transition-all duration-300 ease-in-out
                                        ${externalIsOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                {subItems.map((item) => (
                    <li key={item.title} className="hover:bg-gray-50 rounded-md">

                        <a
                            href={item.href}
                            className="block px-4 py-2 text-gray-600 text-[15px] transition duration-200 hover:bg-gray-200 rounded-sm">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </li>
    )
}