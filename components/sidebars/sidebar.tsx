"use client";
import {
  FaBuilding,
  FaTicketAlt,
} from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { NavigationLink } from "@/components/shared/navigation-link";
import Link from "next/link";
import { MdOutlineSettings, MdOutlineShoppingCartCheckout } from "react-icons/md";
// import Collapsible from "react-collapsible";
import { useAtom } from "jotai";
import { expandSideBar } from "@/components/headers/app-header";
import Image from "next/image";
import { useSession } from "next-auth/react";

// function CollapsibleTrigger({
//   name,
//   icon,
//   isOpened,
// }: {
//   name: string;
//   icon: React.ReactNode;
//   isOpened: boolean
// }) {
//   return (
//     <div className="flex items-center justify-between cursor-pointer ">
//       <span className="flex items-center justify-between gap-4">
//         {icon}
//         {name}
//       </span>
//       {isOpened ? (
//         <MdKeyboardArrowDown className="w-4 h-4" />
//       ) : (
//         <MdKeyboardArrowRight className="w-4 h-4" />
//       )}
//     </div>
//   );
// }

// function SubLink({ path, label }: { path: string; label: string }) {
//   const isActive = false;
//   return (
//     <Link
//       href={path || "/"}
//       className={
//         isActive
//           ? `flex items-center space-x-3 py-2 px-2 bg-[#D84F00]/10 text-[#D84F00] w-full text-xs  transition-all ease-in-out mt-0.5`
//           : "flex items-center space-x-3 py-2 px-2 hover:bg-gray-50 w-full text-gray-500 transition-all ease-in-out text-xs"
//       }
//     >
//       {" "}
//       {label}{" "}
//     </Link>
//   );
// }

const Sidebar = () => {
  const [isExpand, setExpand] = useAtom(expandSideBar);
  const { data: session, status } = useSession();

  return (
    <div
      className={`${
        isExpand ? "md:w-[18%] w-[4/4]" : "md:w-[5%] w-[0%]"
      } min-h-[100vh] bg-white shadow`}
      onClick={() => setExpand((curr) => !curr)}
    >
      <nav
        className={`overflow-x-hidden overflow-y-auto h-full py-3 text-sm text-gray-600 `}
      >
        <ul className="flex flex-col items-center">
          <li className={`${isExpand ? "py-4 px-6" : "my-6"} w-full`}>
            <Link href="/dashboard">
              <Image src="/logo.png" alt="737 logo" height={500} width={500} />
            </Link>
          </li>

          <div className="md:w-64 sm:w-screen">
            <NavigationLink
              path="/dashboard"
              icon={<FaBuilding className="w-4 h-4" />}
              name={"Dashboard"}
            />

            {/* <NavigationLink
              path="/services"
              icon={<FaToolbox className="w-4 h-4" />}
              name={"Services"}
            /> */}

            <NavigationLink
              path="/transactions"
              icon={<FaMoneyBillTransfer className="w-4 h-4" />}
              name={"Transactions"}
            />

            <NavigationLink
              path="/checkout-transactions"
              icon={<MdOutlineShoppingCartCheckout className="w-4 h-4" />}
              name={"Checkout Transactions"}
            />

            <NavigationLink
              path="/transaction-issues"
              icon={<FaTicketAlt className="w-4 h-4" />}
              name={"Transaction Issues"}
            />

            {session?.roles.includes("super_user") && (
              <NavigationLink
                path="/settings"
                icon={<MdOutlineSettings className="w-4 h-4" />}
                name={"System Settings"}
              />
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
