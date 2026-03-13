'use client'

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export function Accordion({ title, children }: Readonly<{ title: string; children: React.ReactNode }>){
    const [isExpand, setIsExpand] = useState(true);
    return (
        <div className="mb-4 p-4 bg-white">
            <div>

            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-orange-500 border-b border-orange-200  gap-3" onClick={() => setIsExpand((curr) => !curr)}>
                <span>{title}</span>
                {isExpand? <MdKeyboardArrowDown/>: <MdKeyboardArrowRight/>}
            </button>
            {
                isExpand && <div id="accordion-flush-body-1" className="">
                    <div className="py-5 border-gray-200 ">
                        {children}
                    </div>
                </div>
            }
            </div>    
        </div>
    )
}