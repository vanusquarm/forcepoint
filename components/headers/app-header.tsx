"use client";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useState } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import LogoutModal from "@/components/modals/logout-modal";
import { useRouter } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { useSession, signOut } from "next-auth/react";

export const expandSideBar = atomWithStorage("s", false);

const AppHeader = () => {
  const { data: session, status } = useSession(); 
  const [showDropdown, setShowDropdown] = useState(false);
  const [isShowingLogoutModal, setIsShowingLogoutModal] = useState(false);
  const navigate = useRouter();
  const [_, setIsExpand] = useAtom(expandSideBar);

  const showLogoutModal = () => {
    setIsShowingLogoutModal(true);
    setShowDropdown(false);
  }; 

  // const signOut = () => {
  //   localStorage.clear();
  //   setIsShowingLogoutModal(false);
  //   navigate.push("/login");
  // };

  return (
    <div className="bg-image h-16 w-full flex-1 text-white flex justify-between items-start py-3 px-10 shadow">
      <button className="w-6 h-6" onClick={() => setIsExpand((p) => !p)}>
        <BiMenu className="w-6 h-6" />
      </button>
      <div className="relative">
        <button
          className="flex items-center space-x-2"
          onClick={() => setShowDropdown((p) => !p)}
        >
          <span className="font-extrabold mr-5">{getCurrentDate()}</span>
          <span>Hi</span>
          <BsFillCaretDownFill className="w-3 h-3" />
        </button>

        {showDropdown && (
          <>
            <div className="p-4 w-52 bg-white rounded border flex flex-col text-slate-800 absolute -left-36 top-10 shadow-lg z-30">
              <span className="text-xs text-start uppercase pb-1 border-b border-b-gray-100">
                {" "}
                Welcome,
                <span className="font-medium">
                  {" "}
                  {session?.user?.email}{" "}
                </span>{" "}
              </span>
              <button
                type={"button"}
                className="flex items-center space-x-2 pt-4 text-sm text-red-600 hover:scale-105 transition-all"
                onClick={showLogoutModal}
              >
                <RiLogoutCircleRLine className="font-semibold" />
                <span className="font-medium"> Logout </span>
              </button>
            </div>
            <button
              className="fixed z-20 inset-0"
              type={"button"}
              onClick={() => {
                setShowDropdown((p) => !p);
              }}
            ></button>
          </>
        )}
      </div>
      {isShowingLogoutModal && (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-40">
          <LogoutModal
            confirm={() => {
              keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
            }}
            cancel={() => setIsShowingLogoutModal(false)}
          />
        </div>
      )}
    </div>
  );
};

export default AppHeader;

async function keycloakSessionLogOut() {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
    localStorage.clear();
  } catch (err) {
    console.error(err);
  }
}

const getCurrentDate = () => {
  // Create a new Date object
  const currentDate: Date = new Date();

  // Retrieve the current date components
  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  const day: number = currentDate.getDate();

  // Format the date as a string
  const formattedDate: string = `${String(day).padStart(2, "0")}-${String(
    month
  ).padStart(2, "0")}-${year}`;

  return formattedDate; // Outputs the current date in YYYY-MM-DD format
}