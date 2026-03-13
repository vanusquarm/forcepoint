'use client'
import {BsFillCaretDownFill} from "react-icons/bs";

import {atomWithStorage} from "jotai/utils";

export const expandSideBar = atomWithStorage('s', false)

const SubHeader = ({ PageTitle, children }: { PageTitle: string; children: React.ReactNode }) => {
  return (
    <div className="bg-white h-16 w-full flex-1 flex justify-between items-start py-3 px-10 shadow">
      <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
        {PageTitle}
      </p>
      
      {children}
      
    </div>
  );
};

export default SubHeader;